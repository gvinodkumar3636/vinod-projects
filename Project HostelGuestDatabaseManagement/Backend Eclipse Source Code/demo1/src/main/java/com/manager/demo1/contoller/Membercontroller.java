package com.manager.demo1.contoller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manager.demo1.exception.ResourceNotFoundException;
import com.manager.demo1.repository.Memberrepository;

import com.manager.demo1.modal.Member;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class Membercontroller {
	@Autowired
	private Memberrepository Memberrepository;

	// get all Members
	@GetMapping("/Guestlist")
	public List<Member> getguest() {
		return Memberrepository.findAll();
	}

	// we are creating a student posting details
	@PostMapping("/Guestlist")
	public Member createguest(@RequestBody Member member) {
		System.out.println("this data is being posted");
		return Memberrepository.save(member);
	}

	@DeleteMapping("Guestlist/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteguest(@PathVariable Long id) {
		Member member = Memberrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Guest not exist with id :" + id));

		Memberrepository.delete(member);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// get website by id rest api
	@GetMapping("/Guestlist/{id}")
	public ResponseEntity<Member> getguestById(@PathVariable Long id) {
		Member member = Memberrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Guest not exist with id :" + id));
		return ResponseEntity.ok(member);
	}

	// // update website rest api

	@PutMapping("/Guestlist/{id}")
	public ResponseEntity<Member> updateguest(@PathVariable Long id, @RequestBody Member guestdetails) {

		Member guest = Memberrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Guest not exist with id :" + id));

		guest.setUsername(guestdetails.getUsername());
		guest.setEmail(guestdetails.getEmail());
		guest.setPhone(guestdetails.getPhone());
		guest.setFullname(guestdetails.getFullname());

		Member updateguest = Memberrepository.save(guest);
		return ResponseEntity.ok(updateguest);
	}

}
