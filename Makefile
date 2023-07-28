SHELL=/bin/bash
RED=\033[0;31m
GREEN=\033[0;32m
BG_GREY=\033[48;5;237m
NC=\033[0m # No Color

include project.env
export $(shell sed 's/=.*//' project.env)

envFileLoc = "$(PWD)/configs/envs/local.env"
envFileProd = "$(PWD)/configs/envs/production.loc.env"

.PHONY: help

help:
	@echo OleksiiHonchar.com automation commands:
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(firstword $(MAKEFILE_LIST)) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

check-project-env-vars:
	@bash ./devops/local/scripts/check-project-env-vars.sh


clean-dist:  ## Cleaning ./dist folder
	@printf "${RED}Cleaning ./dist folder:${NC}"
	@rm -rf ./dist
	@printf "${RED}DONE${NC}\n"
.PHONY: clean-dist

build: clean-dist check-project-env-vars ## Build production version
	@printf "${BG_GREY}[build] Start${NC}\n"
	@source $(envFileProd)
	@npx env-cmd -f $(envFileProd) node --no-warnings --experimental-specifier-resolution=node \
		--loader ./scripts/ts-esm-loader-with-tsconfig-paths.js ./configs/webpack-wrapper.ts\
		--config ./configs/webpack.config.ts \
		--mode production \
		--env BUILD_ANALYZE=$(BUILD_ANALYZE)

	@printf "${BG_GREY}[build] Done${NC}\n"

build-analyze: check-project-env-vars ## Build prod and analyze bundle content
	$(MAKE) build BUILD_ANALYZE=true

build-loc: clean-dist check-project-env-vars ## Build local version
	@printf "${BG_GREY}[build-loc] Start${NC}\n"
	@source $(envFileLoc)
	@npx env-cmd -f $(envFileLoc) node --no-warnings --experimental-specifier-resolution=node \
		--loader ./scripts/ts-esm-loader-with-tsconfig-paths.js ./configs/webpack-wrapper.ts\
		--config ./configs/webpack.config.ts \
		--mode development \
		--env BUILD_ANALYZE=$(BUILD_ANALYZE)
	@printf "${BG_GREY}[build-loc] DONE${NC}\n"

build-loc-analyze: check-project-env-vars ## Build local and analyze bundle content
	$(MAKE) build-loc BUILD_ANALYZE=true

launch-loc-server: check-project-env-vars ## Launches local Webpack dev-server
	@printf "${BG_GREY}[launch-loc-server] Start${NC}\n"
	@source ${envFileLoc}
	@npx env-cmd -f $(envFileLoc) node --no-warnings --experimental-specifier-resolution=node \
		--loader ./scripts/ts-esm-loader-with-tsconfig-paths.js ./configs/webpack-wrapper.ts\
		--mode development --launch-server \
		--stats normal \
		--env BUILD_ANALYZE=false

	@printf "${BG_GREY}[launch-loc-server] DONE${NC}\n"

launch-prod-server: check-project-env-vars ## Launches local Webpack dev-server
	@printf "${BG_GREY}[launch-prod-server] Start${NC}\n"
	@source ${envFileProd}
	@npx env-cmd -f $(envFileProd) node --no-warnings --experimental-specifier-resolution=node \
		--loader ./scripts/ts-esm-loader-with-tsconfig-paths.js ./configs/webpack-wrapper.ts\
		--mode production --launch-server \
		--stats normal \
		--env BUILD_ANALYZE=false

	@printf "${BG_GREY}[launch-loc-server] DONE${NC}\n"



watch-loc: check-project-env-vars ## No dev server - only file watch and rebuild
	@source ${envFileLoc}
	@npx env-cmd -f ${envFileLoc} node --no-warnings --experimental-specifier-resolution=node \
		--loader ./scripts/ts-esm-loader-with-tsconfig-paths.js ./configs/webpack-wrapper.ts \
		--config ./configs/webpack.config.ts \
		--mode development \
		--watch --progress \
		--env BUILD_ANALYZE=false \

