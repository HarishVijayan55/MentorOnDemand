package com.mentor.course;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class CoursePojo {
    @Id

    private String courseName;
    private Integer courseId;
    private Boolean isBlocked;

    public CoursePojo(){}
    public CoursePojo(Integer courseId, String courseName, Boolean isBlocked) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.isBlocked = isBlocked;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Boolean getBlocked() {
        return isBlocked;
    }

    public void setBlocked(Boolean blocked) {
        isBlocked = blocked;
    }
}
