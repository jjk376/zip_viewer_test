package com.sj.model;

public class FileVO {

	private long file_id;
	private String user_id;
	private String file_name;
	private long file_size;
	private String file_type;
	private String file_register_time;
	
	public long getFile_id() {
		return file_id;
	}
	public void setFile_id(long file_id) {
		this.file_id = file_id;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getFile_name() {
		return file_name;
	}
	public void setFile_name(String file_name) {
		this.file_name = file_name;
	}
	public long getFile_size() {
		return file_size;
	}
	public void setFile_size(long file_size) {
		this.file_size = file_size;
	}
	public String getFile_type() {
		return file_type;
	}
	public void setFile_type(String file_type) {
		this.file_type = file_type;
	}
	public String getFile_register_time() {
		return file_register_time;
	}
	public void setFile_register_time(String file_register_time) {
		this.file_register_time = file_register_time;
	}
}
