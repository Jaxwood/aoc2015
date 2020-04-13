// tslint:disable interface-name
import * as _ from 'lodash';

interface Fight {
  boss: Player;
  player: Player;
  effects: Effect[];
}

interface Effect {
  id: number;
  duration: number;
}

interface Player {
  name: string;
  hp: number;
  mana: number;
  spend: number;
  dmg: number;
  armor: number;
}

interface Spell {
  id: number;
  name: string;
  cost: number;
  mana: number;
  heal: number;
  dmg: number;
  armor: number;
  effect: number;
  cast: (fight: Fight, spell: Spell) => void;
  clear: (fight: Fight) => void;
  tick: (fight: Fight, spell: Spell) => void;
}

const spells: Spell[] = [
  {
    armor: 0,
    cast: (fight, spell) => {
      fight.boss.hp -= spell.dmg;
      fight.player.mana -= spell.cost;
      fight.player.spend += spell.cost;
    },
    clear: _.identity,
    cost: 53,
    dmg: 4,
    effect: 0,
    heal: 0,
    id: 0,
    mana: 0,
    name: 'magic missile',
    tick: _.identity,
  },
  {
    armor: 0,
    cast: (fight, spell) => {
      fight.boss.hp -= spell.dmg;
      fight.player.mana -= spell.cost;
      fight.player.spend += spell.cost;
      fight.player.hp += spell.heal;
    },
    clear: _.identity,
    cost: 73,
    dmg: 2,
    effect: 0,
    heal: 2,
    id: 1,
    mana: 0,
    name: 'drain',
    tick: _.identity,
  },
  {
    armor: 7,
    cast: (fight, spell) => {
      fight.player.mana -= spell.cost;
      fight.player.spend += spell.cost;
    },
    clear: (fight) => {
      fight.player.armor = 0;
    },
    cost: 113,
    dmg: 0,
    effect: 6,
    heal: 0,
    id: 2,
    mana: 0,
    name: 'shield',
    tick: (fight, spell) => {
      fight.player.armor = spell.armor;
    },
  },
  {
    armor: 0,
    cast: (fight, spell) => {
      fight.player.mana -= spell.cost;
      fight.player.spend += spell.cost;
    },
    clear: _.identity,
    cost: 173,
    dmg: 3,
    effect: 6,
    heal: 0,
    id: 3,
    mana: 0,
    name: 'poison',
    tick: (fight, spell) => {
      fight.boss.hp -= spell.dmg;
    },
  },
  {
    armor: 0,
    cast: (fight, spell) => {
      fight.player.mana -= spell.cost;
      fight.player.spend += spell.cost;
    },
    clear: _.identity,
    cost: 229,
    dmg: 0,
    effect: 5,
    heal: 0,
    id: 4,
    mana: 101,
    name: 'recharge',
    tick: (fight, spell) => {
      fight.player.mana += spell.mana;
    },
  },
];

function tick(fight: Fight): void {
  const afterEffects: Effect[] = [];
  for (const effect of fight.effects) {
    const spell = spells.find((s) => s.id === effect.id);
    if (spell) {
      spell.tick(fight, spell);
      effect.duration -= 1;
      if (effect.duration === 0) {
        spell.clear(fight);
      } else {
        afterEffects.push({ duration: effect.duration, id: effect.id });
      }
    }
  }
  fight.effects = afterEffects;
}

function cast(fight: Fight, spell: Spell): void {
  if (spell.effect > 0) {
    fight.effects.push({ id: spell.id, duration: spell.effect });
  }
  spell.cast(fight, spell);
}

export function attack(fight: Fight): void {
  const hp =
    fight.boss.dmg - fight.player.armor <= 0
      ? 1
      : fight.boss.dmg - fight.player.armor;
  fight.player.hp -= hp;
}

export function cooldown(fight: Fight, spell: Spell): boolean {
  return fight.effects.some((e) => e.id === spell.id);
}

function isDead(players: Player[]): boolean {
  return players.some((p) => p.hp <= 0);
}

function oom(fight: Fight, spell: Spell): boolean {
  return spell.cost > fight.player.mana;
}

export function day22a(boss: Player, action: (fight: Fight) => void) {
  const player: Player = {
    armor: 0,
    dmg: 0,
    hp: 50,
    mana: 500,
    name: 'player',
    spend: 0,
  };
  const fights: Fight[] = [{ boss, player, effects: [] }];
  let best: number = Infinity;
  while (fights.length > 0) {
    const fight = fights.pop();
    if (!fight) {
      throw new Error('could not find more fights');
    }
    if (fight.player.spend > best) {
      continue;
    }
    for (const spell of spells) {
      const copy = _.cloneDeep(fight);
      action(copy);
      tick(copy);
      if (cooldown(copy, spell)) {
        continue;
      }
      if (oom(copy, spell)) {
        continue;
      }
      cast(copy, spell);
      tick(copy);
      attack(copy);
      if (!isDead([copy.boss, copy.player])) {
        fights.push(copy);
      }
      if (isDead([copy.boss]) && copy.player.spend < best) {
        best = copy.player.spend;
      }
    }
  }
  return best;
}
