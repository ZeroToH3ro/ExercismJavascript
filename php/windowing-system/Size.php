<?php
class Size
{
    public $height;
    public $width;

    public function __construct($newWidth, $newHeight) {
        $this->height = $newWidth;
        $this->width = $newHeight;
    }
}
