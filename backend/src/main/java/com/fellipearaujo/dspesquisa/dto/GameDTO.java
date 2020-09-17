package com.fellipearaujo.dspesquisa.dto;

import java.io.Serializable;

import com.fellipearaujo.dspesquisa.entities.Game;
import com.fellipearaujo.dspesquisa.entities.enums.Platform;

public class GameDTO implements Serializable {
	private static final long serialVersionUID = 1l;

	private Long id;
	private String title;
	private Platform platform;
	
	public GameDTO() {
	}
	
	public GameDTO(Game entity) {
		id = entity.getId();
		title = entity.getTitle();
		platform = entity.getPlatform();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Platform getPlataform() {
		return platform;
	}

	public void setPlataform(Platform plataform) {
		this.platform = plataform;
	}
	
	
}
