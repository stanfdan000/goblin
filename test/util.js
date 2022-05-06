export function renderGoblin(goblinData) {
    const goblinsEl = document.createElement('div');
    const name = document.createElement('p');
    const hpEL = document.createElement('p');

    goblinsEl.classList.add('goblin');

    name.textContent = goblinData.name;
    hpEL.id = `goblin-hp-${goblinData.id}`;
    hpEL.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;
    if (goblinData.hp < 0) {
        goblinsEl.classList.add('dead');
    }
    goblinsEl.append(name, hpEL);
    return goblinsEl;
}