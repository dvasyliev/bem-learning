'use strict';

$(document).ready(function () {
    $('.product-cart').each(function () {
        var $chooseMaterialButton = $(this).find('.product-cart__choose-material-button'),
            $materialsList = $(this).find('.product-cart__materials-list'),
            $material = $materialsList.find('.product-cart__material'),

            chooseMaterialButtonNameClass = 'product-cart__choose-material-name',
            chooseMaterialButtonImageClass = 'product-cart__choose-material-image',
            materialNameClass = 'product-cart__material-name',
            materialImageClass = 'product-cart__material-image',
            materialsOpenedClass = 'js-product-cart__materials-list--opened';

        $(this).on('click', $chooseMaterialButton, function () {
            $materialsList.toggleClass(materialsOpenedClass).slideToggle();
        });

        $material.each(function () {
            $(this).on('click', function () {
                var name = $(this).find('.' + materialNameClass).text(),
                    image = $(this).find('.' + materialImageClass).attr('src');

                console.log(name, image);

                $chooseMaterialButton.find('.' + chooseMaterialButtonNameClass).text(name);
                $chooseMaterialButton.find('.' + chooseMaterialButtonImageClass).attr('src', image);
            });
        });
    });
})