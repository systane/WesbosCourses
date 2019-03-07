package br.com.spring_batch.entities;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * This entity represents the Account table.
 */
@Data
@Entity
public class Account {
    @Id
    private Long account_id;
    private String username;
    private String password;
    private String email;
}
