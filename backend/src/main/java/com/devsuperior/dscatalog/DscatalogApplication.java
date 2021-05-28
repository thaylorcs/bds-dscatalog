package com.devsuperior.dscatalog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.devsuperior.dscatalog.services.S3Service;

@SpringBootApplication
public class DscatalogApplication {

	@Autowired
	private S3Service s3Service;
	
	public static void main(String[] args) {
		SpringApplication.run(DscatalogApplication.class, args);
	}
}
