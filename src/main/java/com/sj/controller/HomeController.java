package com.sj.controller;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.Calendar;
import java.util.Locale;
import java.util.UUID;

import net.sf.jazzlib.*;
import org.apache.commons.compress.archivers.zip.*;

import javax.annotation.Resource;
import javax.inject.Inject;

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

import com.sj.dao.FileDAO;
import com.sj.model.FileVO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Inject private FileDAO dao;
	static int key = 0;
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {

		return "home";
	}

	@ResponseBody
	@RequestMapping(value = "/uploadForm", method = RequestMethod.POST)
	public FileVO uploadForm(@RequestPart("file") MultipartFile file, Model model) throws Exception
	{
		FileVO vo = new FileVO();
		Calendar cal = Calendar.getInstance();
		
		vo.setFile_id(cal.get(cal.YEAR) + "-" + (cal.get(cal.MONTH)+1) + "-"
				+ cal.get(cal.DATE) + " " + cal.get(cal.HOUR_OF_DAY) + ":" + cal.get(cal.MINUTE) + cal.get(cal.SECOND) + cal.get(cal.MILLISECOND));
		vo.setFile_id(String.valueOf(key++));
		vo.setUser_id("admin");	
		
		UUID uid = UUID.randomUUID();
		String internal_file_name = uid.toString() + "_"+ file.getOriginalFilename();

		InputStream is = file.getInputStream();
		byte[] buffer = new byte[1024 * 8];
		FileOutputStream fos = new FileOutputStream(new File("C:\\Users\\uploadtest", file.getOriginalFilename()));

		while(true)
		{
			int count = is.read(buffer);
			if(count == -1)
				break;
			fos.write(buffer, 0, count);
		}
	
		vo.setFile_name(file.getOriginalFilename());
		vo.setInternal_file_name(internal_file_name);		
		vo.setFile_size(file.getSize());
		vo.setFile_type(file.getContentType());
		vo.setFile_register_time(cal.get(cal.YEAR) + "-" + (cal.get(cal.MONTH)+1) + "-"
				+ cal.get(cal.DATE) + " " + cal.get(cal.HOUR_OF_DAY) + ":"
				+ cal.get(cal.MINUTE) + ":" + cal.get(cal.SECOND) + "." + cal.get(cal.MILLISECOND));
		vo.setFile_modified_time(cal.get(cal.YEAR) + "-" + (cal.get(cal.MONTH)+1) + "-"
				+ cal.get(cal.DATE) + " " + cal.get(cal.HOUR_OF_DAY) + ":"
				+ cal.get(cal.MINUTE) + ":" + cal.get(cal.SECOND) + "." + cal.get(cal.MILLISECOND));
		
		System.out.println(dao.getTime());    
		is.close();
		fos.close();
	
		dao.insertFile(vo);
		return vo;
	}
/*
	private String uploadFile(String originalName, byte[] fileData) throws Exception
	{
		UUID uid = UUID.randomUUID();
		String savedName = uid.toString() + "_"+ originalName;
		File target = new File("C:\\Users\\a", savedName);
		FileCopyUtils.copy(fileData, target);
		// jazzlib
        ZipInputStream in = new ZipInputStream(new FileInputStream(target));
        ZipEntry entry = null;
        while((entry = in.getNextEntry()) != null)
            System.out.println(entry.getName());
        // apache-commons-compress
      	ZipArchiveInputStream zis;
      	ZipArchiveEntry entry; 	
      	zis = new ZipArchiveInputStream(new FileInputStream(target), "UTF-8", false);
      	while ( (entry = zis.getNextZipEntry()) != null )
      			System.out.println(entry.getName());
      	zis.close();
      	
		return savedName;
	}*/
}
