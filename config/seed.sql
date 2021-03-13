INSERT INTO appointments (title, startDate, endDate, description, member, rRule, createdAt, updatedAt) VALUES ("Take Pills", new Date(2021, 03, 09, 00:00:00), new Date(2021, 03, 09, 01:00:00), "Take all 5 pills", "", 'FREQ=DAILY;COUNT=3', CURDATE(), CURDATE());


INSERT INTO users (firstName, lastName, email, password, helper, createdAt, updatedAt) VALUES ("tubby", "bordelon", "tubby@gmail.com", "meow", true, CURDATE(), CURDATE());