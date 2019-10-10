package com.mentor.user;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class UserPojo {
    @Id
    private String userName;
    private String password;
//    private String courseStatus;
//    private String feesStatus;
    private Boolean isBlocked=true;

    public UserPojo(){}

    public UserPojo(String userName, String password, Boolean isBlocked) {
        this.userName = userName;
        this.password = password;
        this.isBlocked = isBlocked;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getBlocked() {
        return isBlocked;
    }

    public void setBlocked(Boolean blocked) {
        isBlocked = blocked;
    }
}
