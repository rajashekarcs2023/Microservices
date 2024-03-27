provider "openstack" {
    user_name  = ""
    tenant_name = ""
    password  = ""
    auth_url  = ""
}

resource "openstack_compute_keypair_v2" "terraform" {
  name       = "keypair"
  public_key = "${file("~/.ssh/id_rsa")}"
}


resource "openstack_compute_secgroup_v2" "terraform" {
  name        = "security-group"
  description = "Security group for all the components in an airavata env"

  rule {
    from_port   = 22
    to_port     = 22
    ip_protocol = "tcp"
    cidr        = "0.0.0.0/0"
  }

  rule {
    from_port   = 8080
    to_port     = 8080
    ip_protocol = "tcp"
    cidr        = "0.0.0.0/0"
  }

  rule {
    from_port   = -1
    to_port     = -1
    ip_protocol = "icmp"
    cidr        = "0.0.0.0/0"
  }


#Zookeeper
  rule {
    from_port   = 2181
    to_port     = 2181
    ip_protocol = "tcp"
    cidr        = "0.0.0.0/0"
  }

#RabbitMQ
  rule {
    from_port   = 15672
    to_port     = 15672
    ip_protocol = "tcp"
    cidr        = "0.0.0.0/0"
  }


#api-server
  rule {
    from_port   = 8950
    to_port     = 8950
    ip_protocol = "tcp"
    cidr        = "0.0.0.0/0"
  }


  rule {
    from_port   = 8960
    to_port     = 8960
    ip_protocol = "tcp"
    cidr        = "0.0.0.0/0"
  }

}

resource "openstack_compute_floatingip_v2" "terraform" {
  pool       = "public"
}


#to create the resources for the openstack provider
resource "openstack_compute_instance_v2" "terraform" {
  name            = "instance"
  image_id      = "9b3a67a2-2c0e-4d6d-af64-90d66e6312e1"
  flavor_name     = "m1.medium"
  key_pair        = "${openstack_compute_keypair_v2.terraform.name}"
  security_groups = ["${openstack_compute_secgroup_v2.terraform.name}"]
  floating_ip     = "${openstack_compute_floatingip_v2.terraform.address}"


}
