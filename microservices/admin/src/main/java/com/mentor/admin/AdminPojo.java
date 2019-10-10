package com.mentor.admin;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class AdminPojo {
    @Id

    private String email;
    private String name;
    private String password;
    private String userfees;
    private Integer username;
    private String usertechnology;
    private String mentorName;
    private Integer courseId;
    public AdminPojo(){}

    public AdminPojo(String email, String name, String password, String userfees, Integer username, String usertechnology, String mentorName, Integer courseId) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.userfees = userfees;
        this.username = username;
        this.usertechnology = usertechnology;
        this.mentorName = mentorName;
        this.courseId = courseId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserfees() {
        return userfees;
    }

    public void setUserfees(String userfees) {
        this.userfees = userfees;
    }

    public Integer getUsername() {
        return username;
    }

    public void setUsername(Integer username) {
        this.username = username;
    }

    public String getUsertechnology() {
        return usertechnology;
    }

    public void setUsertechnology(String usertechnology) {
        this.usertechnology = usertechnology;
    }

    public String getMentorName() {
        return mentorName;
    }

    public void setMentorName(String mentorName) {
        this.mentorName = mentorName;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }
}
