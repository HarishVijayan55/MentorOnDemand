package com.mentor.mentor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MentorPojo {
    @Id
    private String mentorName;
    private String password;
    private String knownCourse;
    private String experience;
    private String courseTaken;
    private Boolean isBlocked;
    private Integer totalFee;
    public MentorPojo(){}
    public MentorPojo(String mentorName, String password, String knownCourse, String experience, String courseTaken, Boolean isBlocked, Integer totalFee) {
        this.mentorName = mentorName;
        this.password = password;
        this.knownCourse = knownCourse;
        this.experience = experience;
        this.courseTaken = courseTaken;
        this.isBlocked = isBlocked;
        this.totalFee = totalFee;
    }

    public String getMentorName() {
        return mentorName;
    }

    public void setMentorName(String mentorName) {
        this.mentorName = mentorName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getKnownCourse() {
        return knownCourse;
    }

    public void setKnownCourse(String knownCourse) {
        this.knownCourse = knownCourse;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getCourseTaken() {
        return courseTaken;
    }

    public void setCourseTaken(String courseTaken) {
        this.courseTaken = courseTaken;
    }

    public Boolean getBlocked() {
        return isBlocked;
    }

    public void setBlocked(Boolean blocked) {
        isBlocked = blocked;
    }

    public Integer getTotalFee() {
        return totalFee;
    }

    public void setTotalFee(Integer totalFee) {
        this.totalFee = totalFee;
    }
}
