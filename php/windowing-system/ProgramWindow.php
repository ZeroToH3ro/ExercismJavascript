<?php

class ProgramWindow
{
    public $x;
    public $y;
    public $width;
    public $height;

    public function __construct()
    {
        $this->x = 0;
        $this->y = 0;
        $this->width = 800;
        $this->height = 600;
    }

    public function resize(Size $sizeInstance)
    {
        $this->width = $sizeInstance->width;
        $this->height = $sizeInstance->height;
    }

    public function move(Position $positionInstance)
    {
        $this->x = $positionInstance->x;
        $this->y = $positionInstance->y;
    }
}
