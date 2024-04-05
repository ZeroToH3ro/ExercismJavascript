use std::collections::HashSet;

pub fn anagrams_for<'a>(word: &str, possible_anagrams: &[&'a str]) -> HashSet<&'a str> {
    let nword = normalize(word);
    let mut nword_sorted = nword.clone();
    nword_sorted.sort_unstable();

    possible_anagrams
        .iter()
        .filter(|anagram| is_agram(&nword, &normalize(anagram), &nword_sorted))
        .copied()
        .collect()
}

fn is_agram(nword: &[char], anagram: &[char], nword_sorted: &[char]) -> bool {
    let mut result = false;
    if nword.len() == anagram.len() && nword.ne(anagram) {
        let mut list_anagram = anagram.to_owned();
        list_anagram.sort_unstable();
        result = nword_sorted.eq(&list_anagram);
    }

    result
}

fn normalize(word: &str) -> Vec<char> {
    word.to_lowercase().chars().collect()
}
