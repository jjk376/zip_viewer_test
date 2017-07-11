package com.sj.controller;

import java.io.File;
import java.util.Calendar;
import java.util.Locale;
import java.util.UUID;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sj.model.FileVO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {

		return "home";
	}
/*
	@RequestMapping(value = "/uploadForm", method = RequestMethod.POST)
	public String uploadForm(@RequestPart("file") MultipartFile file, Model model) throws Exception
	{
		model.addAttribute("fileName", file.getOriginalFilename());
		model.addAttribute("fileSize", file.getSize());
		model.addAttribute("fileType", file.getContentType());
	//		String savedName = uploadFile(file.getOriginalFilename(), file.getBytes());
		return "uploadForm";
	}
	*/
	@ResponseBody
	@RequestMapping(value = "/uploadForm", method = RequestMethod.POST)
	public FileVO uploadForm(@RequestPart("file") MultipartFile file, Model model) throws Exception
	{
		FileVO vo = new FileVO();
		Calendar cal = Calendar.getInstance();
		
		vo.setFileId("");
	
		vo.setFileName(uploadFile(file.getOriginalFilename(), file.getBytes()));
		vo.setOriginalFileName(file.getOriginalFilename());		
		vo.setFileSize(file.getSize());
		vo.setFileType(file.getContentType());
		vo.setFileRegisterDate(cal.get(cal.YEAR) + "-" + (cal.get(cal.MONTH)+1) + "-"
				+ cal.get(cal.DATE) + " " + cal.get(cal.HOUR_OF_DAY) + ":" + cal.get(cal.MINUTE));
		vo.setFileModifiedDate(cal.get(cal.YEAR) + "-" + (cal.get(cal.MONTH)+1) + "-"
				+ cal.get(cal.DATE) + " " + cal.get(cal.HOUR_OF_DAY) + ":" + cal.get(cal.MINUTE));
		//vo.setDirectoryId();
		//vo.setUserId();	
		return vo;
	}

	private String uploadFile(String originalName, byte[] fileData) throws Exception
	{
		UUID uid = UUID.randomUUID();
		String savedName = uid.toString() + "_"+ originalName;
		File target = new File("C:\\Users\\a", savedName);
		FileCopyUtils.copy(fileData, target);
		return savedName;
	}
}
