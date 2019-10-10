package com.mentor.course;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CourseRepository extends CrudRepository<CoursePojo,Integer> {
    @Query(value = "select * from course_pojo c where c.course_name = ?1",nativeQuery = true)
    CoursePojo getCourse(String courseName);
}
