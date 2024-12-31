DROP INDEX `garment_style_season_idx` ON `closet-book_garment`;--> statement-breakpoint
DROP INDEX `garment_weather_season_idx` ON `closet-book_garment`;--> statement-breakpoint
ALTER TABLE `closet-book_garment` ADD `style_seasons` json NOT NULL;--> statement-breakpoint
ALTER TABLE `closet-book_garment` ADD `weather_seasons` json NOT NULL;--> statement-breakpoint
ALTER TABLE `closet-book_garment` DROP COLUMN `style_season`;--> statement-breakpoint
ALTER TABLE `closet-book_garment` DROP COLUMN `weather_season`;