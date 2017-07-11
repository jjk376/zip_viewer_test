package com.sj.model;

import java.util.Date;

public class FileVO {

	private String fileId;
	private String fileName;
	private String originalFileName;
	private long fileSize;
	private String fileType;
	private String fileRegisterDate;
	private String fileModifiedDate;
	private int directoryId;
	private int userId;
	
	public String getFileId() {
		return fileId;
	}
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getOriginalFileName() {
		return originalFileName;
	}
	public void setOriginalFileName(String originalFileName) {
		this.originalFileName = originalFileName;
	}
	public long getFileSize() {
		return fileSize;
	}
	public void setFileSize(long fileSize) {
		this.fileSize = fileSize;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public String getFileRegisterDate() {
		return fileRegisterDate;
	}
	public void setFileRegisterDate(String fileRegisterDate) {
		this.fileRegisterDate = fileRegisterDate;
	}
	public String getFileModifiedDate() {
		return fileModifiedDate;
	}
	public void setFileModifiedDate(String fileModifiedDate) {
		this.fileModifiedDate = fileModifiedDate;
	}
	public int getDirectoryId() {
		return directoryId;
	}
	public void setDirectoryId(int directoryId) {
		this.directoryId = directoryId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	
}
