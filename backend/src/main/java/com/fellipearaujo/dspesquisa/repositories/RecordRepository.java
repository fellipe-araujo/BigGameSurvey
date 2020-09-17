package com.fellipearaujo.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fellipearaujo.dspesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
