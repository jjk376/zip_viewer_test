package com.sj.dao;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.sj.model.FileVO;

@Repository
public class FileDAOImpl implements FileDAO{

	@Inject
	private SqlSession sqlSession;
	
	private static final String namespace = "com.sj.mapper.FileMapper";
	
	@Override
	public String getTime()
	{
		return sqlSession.selectOne(namespace+".getTime");
	}
	
	@Override
	public void insertFile(FileVO vo)
	{
		sqlSession.insert(namespace+".insertFile", vo);
	}
}
