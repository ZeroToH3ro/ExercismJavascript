<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return trim($name)[0];
    }

    public function initial(string $name): string
    {
        return strtoupper($name[0]) . ".";
    }

    public function initials(string $name): string
    {
        $names = explode(" ", $name);
        $result = "";
        foreach ($names as $element) {
            $result .= strtoupper($element[0]) . ". ";
        }

        return trim($result);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $initials_a = $this->initials($sweetheart_a);
        $initials_b = $this->initials($sweetheart_b);

        return <<<EXPECTED_HEART
        ******       ******
      **      **   **      **
    **         ** **         **
   **            *            **
   **                         **
   **     $initials_a  +  $initials_b     **
    **                       **
      **                   **
        **               **
          **           **
            **       **
              **   **
                ***
                 *
   EXPECTED_HEART;
    }
}
