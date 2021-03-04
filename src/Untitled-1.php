<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}
$this->setFrameMode(true);
global $APPLICATION;

if ($arResult['USE_FLYING_BASKET'] == "Y" && !CSite::InDir($arParams['PATH_TO_BASKET'])) {
	require_once($_SERVER['DOCUMENT_ROOT'].SITE_DIR.'include/flying_cart.php');
};
require_once($_SERVER['DOCUMENT_ROOT'].SITE_DIR.'include/leftmenu.php');
?>
	<header class="header3">
		<div class="row grey first_header_line_wrapper">
			<div class="container_16">
				<div class="grid_16 alpha omega first_header_line">
					<div class="mobile_menu_icon hidden_lg" onclick="mobileMenuOpen();"><i class="fa fa-bars" aria-hidden="true"></i></div>
					<? $APPLICATION->IncludeComponent('firstbit:user', '', array(
						"PATH_TO_PERSONAL" => $arParams['PATH_TO_PERSONAL'],
						"PATH_TO_LOGIN" => $arParams['PATH_TO_LOGIN'],
						"PATH_TO_REGISTER" => $arParams['PATH_TO_REGISTER'],
						"PATH_TO_LOGOUT" => $arParams['PATH_TO_LOGOUT'],
					), $component, array('HIDE_ICONS' => 'Y')); ?>
				</div>
				<div class="clear"></div>

			</div>
		</div>
		<div class="row second_header_line_wrapper">
			<div class="container_16">
				<div class="grid_16 alpha omega second_header_line">
				<div class="search_wrapper2">
					<div class="search_form">
						<?$APPLICATION->IncludeComponent(
							"bitrix:search.title",
							".default",
							array(
								"NUM_CATEGORIES" => "1",
								"TOP_COUNT" => "5",
								"CHECK_DATES" => "Y",
								"SHOW_OTHERS" => "N",
								"PAGE" => $arParams["PATH_TO_SEARCH"],
								"CATEGORY_0" => array(
									0 => "main",
									1 => "iblock_firstbit_beautyshop_catalog",
									2 => "iblock_firstbit_beautyshop_news",
									3 => "iblock_firstbit_beautyshop_services",
								),
								"SHOW_INPUT" => "Y",
								"INPUT_ID" => "title-search-input",
								"CONTAINER_ID" => "search",
								"PRICE_CODE" => array(
									0 => "BASE",
								),
								"SHOW_PREVIEW" => "Y",
								"PREVIEW_WIDTH" => "50",
								"PREVIEW_HEIGHT" => "50",
								"CONVERT_CURRENCY" => "Y",
								"COMPONENT_TEMPLATE" => ".default",
								"ORDER" => "rank",
								"USE_LANGUAGE_GUESS" => "N",
								"PRICE_VAT_INCLUDE" => "Y",
								"PREVIEW_TRUNCATE_LEN" => "",
								"CURRENCY_ID" => "RUB",
								"CATEGORY_0_main" => array(
								),
								"CATEGORY_0_iblock_firstbit_beautyshop_news" => array(
									0 => $arParams["NEWS_IBLOCK_ID"],
								),
								"CATEGORY_0_iblock_firstbit_beautyshop_services" => array(
									0 => $arParams["SERVICES_IBLOCK_ID"],
								),
								"CATEGORY_0_TITLE" => "",
								"CATEGORY_0_iblock_firstbit_beautyshop_catalog" => array(
									0 => $arParams["BRANDS_IBLOCK_ID"],
									1 => $arParams["CATALOG_IBLOCK_ID"],
									2 => $arParams["OFFERS_IBLOCK_ID"],
								)
							),
							false
						);?>
					</div>
				</div>
					<div class="catalog_wrapper">
						<a class="cat_wr" href="/catalog">Каталог</a>
						<div class="basket_wrapper">
						<?$APPLICATION->IncludeComponent("bitrix:sale.basket.basket.line","header_basket",Array(
								"HIDE_ON_BASKET_PAGES" => "Y",
								"PATH_TO_BASKET" => $arParams['PATH_TO_BASKET'],
								"SHOW_EMPTY_VALUES" => "Y",
								"SHOW_NUM_PRODUCTS" => "Y",
								"SHOW_PRICE" => "Y",
								"SHOW_PRODUCTS" => "Y",
								"SHOW_SUMMARY" => "Y",
								"SHOW_TOTAL_PRICE" => "Y"
							)
						);?>
					</div>
					</div>
					<div class="phone_wrapper">
						<? if ($arResult['SITE_PHONE']) { ?>
							<div class="phone">
								<a href="tel:<?=$arResult['~SITE_PHONE']?>" class="not_underline"><?=$arResult['SITE_PHONE']?></a>
							</div>
						<? } ?>
						<? if ($arResult['SITE_EMAIL']) { ?>
							<div class="email">
								<a href="mailto:<?=$arResult['~SITE_EMAIL']?>"><?=$arResult['SITE_EMAIL']?></a>
							</div>
							<div>
								<a href="javascript:void(0);" class="btn_round btn_square btn_color" onclick="modalCallback(this);return false;" title="<?=GetMessage('BIT_CALLBACK_LINK')?>"><?=GetMessage('BIT_CALLBACK_LINK')?></a>
							</div>
						<? } ?>
					</div>
					<div class="logo_wrapper">
						<a href="<?=SITE_DIR?>" class="not_underline"><img src="<?=$arResult['LOGO']['SRC']?>"></a>
					</div>
					<!-- <div class="call_back show_lg">
						<a href="javascript:void(0);" class="btn_round btn_square btn_color" onclick="modalCallback(this);return false;" title="<?=GetMessage('BIT_CALLBACK_LINK')?>"><?=GetMessage('BIT_CALLBACK_LINK')?></a>
					</div> -->
					<div class="right_side">
						<? $APPLICATION->IncludeComponent('firstbit:wishlist',
							'',
							array(
								'PATH_TO_WISHLIST' => $arParams['PATH_TO_WISHLIST']
							),
							$component,
							array('HIDE_ICONS' => 'Y')); ?>
						<?$APPLICATION->IncludeComponent("bitrix:sale.basket.basket.line","header_basket",Array(
								"HIDE_ON_BASKET_PAGES" => "Y",
								"PATH_TO_BASKET" => $arParams['PATH_TO_BASKET'],
								"SHOW_EMPTY_VALUES" => "Y",
								"SHOW_NUM_PRODUCTS" => "Y",
								"SHOW_PRICE" => "Y",
								"SHOW_PRODUCTS" => "Y",
								"SHOW_SUMMARY" => "Y",
								"SHOW_TOTAL_PRICE" => "Y"
							)
						);?>

					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>

		<div class="row third_header_line_wrapper <?=($arResult['USE_FLYING_MENU'] == 'Y' ? 'flying_menu' : '')?>">
			<div class="container_16">
				<div class="grid_16 alpha omega third_header_line show_lg">
					<? $APPLICATION->IncludeComponent("bitrix:menu", "top_middle_" . $arResult['MENU_MIDDLE_TYPE'], Array(
						"ALLOW_MULTI_SELECT" => "N",
						'ITEMS_SHOW' => $arResult['MIDDLE_MENU_ITEMS'],
						'MENU_LIMIT' => $arResult['MIDDLE_MENU_LIMIT'],
						"CHILD_MENU_TYPE" => "top_middle_submenu",
						"COMPONENT_TEMPLATE" => ".default",
						"DELAY" => "N",
						"MAX_LEVEL" => "2",
						'HEADER_RESULT' => $arResult,
						"MENU_CACHE_GET_VARS" => array(""),
						"MENU_CACHE_TIME" => "3600",
						"MENU_CACHE_TYPE" => "A",
						"MENU_CACHE_USE_GROUPS" => "Y",
						"ROOT_MENU_TYPE" => "top_middle",
						"USE_EXT" => "Y",
						"PATH_TO_BRANDS" => $arParams['PATH_TO_BRANDS'],
					), $component);
					?>
					<div class="search_wrapper">
						<div class="search_form">
							<?$APPLICATION->IncludeComponent(
	"bitrix:search.title", 
	".default", 
	array(
		"NUM_CATEGORIES" => "1",
		"TOP_COUNT" => "5",
		"CHECK_DATES" => "Y",
		"SHOW_OTHERS" => "N",
		"PAGE" => $arParams["PATH_TO_SEARCH"],
		"CATEGORY_0" => array(
			0 => "main",
			1 => "iblock_firstbit_beautyshop_catalog",
			2 => "iblock_firstbit_beautyshop_news",
			3 => "iblock_firstbit_beautyshop_services",
		),
		"SHOW_INPUT" => "Y",
		"INPUT_ID" => "title-search-input",
		"CONTAINER_ID" => "search",
		"PRICE_CODE" => array(
			0 => "Сайт",
		),
		"SHOW_PREVIEW" => "Y",
		"PREVIEW_WIDTH" => "50",
		"PREVIEW_HEIGHT" => "50",
		"CONVERT_CURRENCY" => "Y",
		"COMPONENT_TEMPLATE" => ".default",
		"ORDER" => "rank",
		"USE_LANGUAGE_GUESS" => "N",
		"PRICE_VAT_INCLUDE" => "Y",
		"PREVIEW_TRUNCATE_LEN" => "",
		"CURRENCY_ID" => "RUB",
		"CATEGORY_0_main" => array(
		),
		"CATEGORY_0_iblock_firstbit_beautyshop_news" => array(
		),
		"CATEGORY_0_iblock_firstbit_beautyshop_services" => array(
		),
		"CATEGORY_0_TITLE" => "",
		"CATEGORY_0_iblock_firstbit_beautyshop_catalog" => array(
		)
	),
	false
);?>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</header>