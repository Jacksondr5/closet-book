DROP INDEX `garment_style_season_idx` ON `closet-book_garment`;--> statement-breakpoint
DROP INDEX `garment_weather_season_idx` ON `closet-book_garment`;--> statement-breakpoint
ALTER TABLE `closet-book_garment` ADD `style_season` enum('spring','summer','fall','winter') NOT NULL;--> statement-breakpoint
ALTER TABLE `closet-book_garment` ADD `weather_season` enum('spring','summer','fall','winter') NOT NULL;--> statement-breakpoint
CREATE INDEX `garment_style_season_idx` ON `closet-book_garment` (`style_season`);--> statement-breakpoint
CREATE INDEX `garment_weather_season_idx` ON `closet-book_garment` (`weather_season`);--> statement-breakpoint
ALTER TABLE `closet-book_garment` DROP COLUMN `season`;