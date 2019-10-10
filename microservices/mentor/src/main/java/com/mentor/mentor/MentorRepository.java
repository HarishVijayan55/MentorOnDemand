package com.mentor.mentor;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface MentorRepository extends CrudRepository<MentorPojo,String> {

    @Query(value = "select * from mentor_pojo m where m.mentor_name = ?1",nativeQuery = true)
    MentorPojo getMentor(String mentorName);
}
