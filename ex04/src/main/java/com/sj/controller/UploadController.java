package com.sj.controller;

import java.io.File;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class UploadController {

	private static final Logger logger = 
			LoggerFactory.getLogger(UploadController.class);
	@Resource(name = "uploadPath")
	private String uploadPath;
	
	@RequestMapping(value = "/uploadForm")
	public void uploadForm(MultipartFile file, Model model) throws Exception
	{
		logger.info("test...");
	//	logger.info("original file name : " + file.getOriginalFilename());
	//	logger.info("file size : " + file.getSize());
	//	logger.info("content type : " + file.getContentType());
	//	String newName = uploadFile(file.getOriginalFilename(), file.getBytes());
	//	model.addAttribute("newName", newName);
	}
	
	private String uploadFile(String originalName, byte[] fileData) throws Exception
	{
		UUID uid = UUID.randomUUID();
		String newName = uid.toString() + "_" + originalName;
		File target = new File(uploadPath, newName);
		FileCopyUtils.copy(fileData, target);
		return newName;
	}
}
