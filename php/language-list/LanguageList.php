<?php


function language_list(string ...$languages): array
{
    return $languages;
}

function add_to_language_list(array $languageLists, string $languageAdd): array
{
    $languageLists[] = $languageAdd;

    return $languageLists;
}

function prune_language_list(array $languageLists): array
{
    array_splice($languageLists, 0, 1);
    return $languageLists;
}

function current_language(array $languageLists): string
{
    return $languageLists[0];
}

function language_list_length(array $languageLists): int
{
    return count($languageLists);
}
