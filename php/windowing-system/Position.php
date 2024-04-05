<?php
class Position
{
    public $x;
    public $y;

    public function __construct($newY, $newX)
    {
        $this->x = $newX;
        $this->y = $newY;
    }
}
