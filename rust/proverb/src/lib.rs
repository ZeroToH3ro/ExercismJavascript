pub fn build_proverb(list: &[&str]) -> String {
    let mut proverb: String = list
        .windows(2)
        .map(|word| format!("For want of a {} the {} was lost.\n", word[0], word[1]))
        .collect();

    if !list.is_empty() {
        proverb.push_str(&format!("And all for the want of a {}.", list[0]));
    }

    proverb
}
