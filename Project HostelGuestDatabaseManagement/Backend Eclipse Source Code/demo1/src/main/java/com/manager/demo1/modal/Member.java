package com.manager.demo1.modal;

import jakarta.persistence.*;



@Entity
// we are creating table 
@Table(name = "ListOfGuests")
public class Member {
	
//  we are a cerating  colonms of table 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "fullname")
    private String fullname;

    @Column(name = "username")
    private String username;
    
    
    
    @Column(name ="phone")
    private long phone;
    
    
    
    
    @Column(name= "email")
    private String email;
    
    
    
    
    
    public Member() {
    	
    }
    
    public Member(String fullname,String username,long phone,String email) {
    	 super();
    	 
    	 
    	  this.fullname=fullname;
          this.phone=phone;
          this.username=username;
          this.email=email;
          
    }

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	
          
          
          
          
    	 
     
	
	
	

}
