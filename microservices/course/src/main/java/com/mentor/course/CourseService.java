package com.mentor.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CourseService {
    @Autowired
    private CourseRepository cr;

    public void setCourseDetails(CoursePojo coursePojo){
        cr.save(coursePojo);
    }
    public ArrayList<CoursePojo> getCourseList(){
        ArrayList<CoursePojo> courseList = new ArrayList<CoursePojo>();
        cr.findAll().forEach(courseList::add);
        return courseList;
    }
    public CoursePojo getCourse(String courseName) {return cr.getCourse(courseName);}

}
