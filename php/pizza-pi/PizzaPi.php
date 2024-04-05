<?php

class PizzaPi
{
    public function calculateDoughRequirement(int $pizza, int $persons)
    {
        return $pizza * (($persons * 20) + 200);
    }

    public function calculateSauceRequirement(int $pizza, int $sauce)
    {
        return $pizza * 125 / $sauce;
    }

    public function calculateCheeseCubeCoverage(int $cheesecube, float $thick, int $diameter)
    {
        return floor(pow($cheesecube, 3) / ($thick * pi() * $diameter));
    }

    public function calculateLeftOverSlices(int $pizza, int $friends)
    {
        return ($pizza * 8) % $friends;
    }
}
