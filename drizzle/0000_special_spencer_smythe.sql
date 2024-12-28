CREATE TABLE `closet-book_entries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`outfit_id` int,
	`date` date NOT NULL,
	CONSTRAINT `closet-book_entries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `closet-book_garment` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`garment_type` enum('suit','jacket','trousers','tie','pocket_square','shirt','shoe') NOT NULL,
	`color` varchar(7) NOT NULL,
	`quantity` int NOT NULL,
	`season` enum('spring','summer','fall','winter') NOT NULL,
	CONSTRAINT `closet-book_garment_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `closet-book_outfit` (
	`id` int AUTO_INCREMENT NOT NULL,
	`jacket_id` int,
	`trousers_id` int,
	`shirt_id` int,
	`tie_id` int,
	`pocket_square_id` int,
	`shoe_id` int,
	CONSTRAINT `closet-book_outfit_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `closet-book_entries` ADD CONSTRAINT `closet-book_entries_outfit_id_closet-book_outfit_id_fk` FOREIGN KEY (`outfit_id`) REFERENCES `closet-book_outfit`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `closet-book_outfit` ADD CONSTRAINT `closet-book_outfit_jacket_id_closet-book_garment_id_fk` FOREIGN KEY (`jacket_id`) REFERENCES `closet-book_garment`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `closet-book_outfit` ADD CONSTRAINT `closet-book_outfit_trousers_id_closet-book_garment_id_fk` FOREIGN KEY (`trousers_id`) REFERENCES `closet-book_garment`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `closet-book_outfit` ADD CONSTRAINT `closet-book_outfit_shirt_id_closet-book_garment_id_fk` FOREIGN KEY (`shirt_id`) REFERENCES `closet-book_garment`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `closet-book_outfit` ADD CONSTRAINT `closet-book_outfit_tie_id_closet-book_garment_id_fk` FOREIGN KEY (`tie_id`) REFERENCES `closet-book_garment`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `closet-book_outfit` ADD CONSTRAINT `closet-book_outfit_pocket_square_id_closet-book_garment_id_fk` FOREIGN KEY (`pocket_square_id`) REFERENCES `closet-book_garment`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `closet-book_outfit` ADD CONSTRAINT `closet-book_outfit_shoe_id_closet-book_garment_id_fk` FOREIGN KEY (`shoe_id`) REFERENCES `closet-book_garment`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `outfit_id_idx` ON `closet-book_entries` (`outfit_id`);--> statement-breakpoint
CREATE INDEX `date_idx` ON `closet-book_entries` (`date`);--> statement-breakpoint
CREATE INDEX `garment_type_idx` ON `closet-book_garment` (`garment_type`);--> statement-breakpoint
CREATE INDEX `garment_style_season_idx` ON `closet-book_garment` (`season`);--> statement-breakpoint
CREATE INDEX `garment_weather_season_idx` ON `closet-book_garment` (`season`);