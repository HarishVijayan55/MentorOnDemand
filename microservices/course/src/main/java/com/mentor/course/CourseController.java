package com.mentor.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(value = "http://localhost:4200")
public class CourseController {
    @Autowired
    private CourseService courseService;
    @RequestMapping("/course")

    public ArrayList<CoursePojo> getList(){
        return courseService.getCourseList();
    }

    @RequestMapping("getCourse/{courseName}")
    public CoursePojo getCourse(@PathVariable String courseName){ return courseService.getCourse(courseName);}

    @RequestMapping(method = RequestMethod.POST,value="/course")
    public void addCourse(@RequestBody CoursePojo s){
        courseService.setCourseDetails(s);
    }
}
