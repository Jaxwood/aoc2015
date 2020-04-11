import * as _ from 'lodash';

export class Player {
  private readonly default: number;

  constructor(private hp: number, private armor: number, private dmg: number) {
    this.default = hp;
  }

  public heal(): void {
    this.hp = this.default;
  }

  public equip(equipment: Equipment): void {
    this.dmg = equipment.dmg;
    this.armor = equipment.armor;
  }

  public hitBy(other: Player): boolean {
    const dmg = other.dmg - this.armor;
    this.hp -= dmg <= 0 ? 1 : dmg;

    return this.hp > 0;
  }
}

// tslint:disable-next-line: interface-name
export interface Equipment {
  name: string;
  cost: number;
  dmg: number;
  armor: number;
}

const weapons: Equipment[] = [
  { name: 'dagger', cost: 8, dmg: 4, armor: 0 },
  { name: 'shortsword', cost: 10, dmg: 5, armor: 0 },
  { name: 'warhammer', cost: 25, dmg: 6, armor: 0 },
  { name: 'longsword', cost: 40, dmg: 7, armor: 0 },
  { name: 'greataxe', cost: 74, dmg: 8, armor: 0 },
];

const armors: Equipment[] = [
  { name: 'cloth', cost: 0, dmg: 0, armor: 0 },
  { name: 'leather', cost: 13, dmg: 0, armor: 1 },
  { name: 'chainmail', cost: 31, dmg: 0, armor: 2 },
  { name: 'splintmail', cost: 53, dmg: 0, armor: 3 },
  { name: 'bandedmail', cost: 75, dmg: 0, armor: 4 },
  { name: 'platemail', cost: 102, dmg: 0, armor: 5 },
];

const misc: Equipment[] = [
  { name: 'ring', cost: 0, dmg: 0, armor: 0 },
  { name: 'ring', cost: 0, dmg: 0, armor: 0 },
  { name: 'dmg +1', cost: 25, dmg: 1, armor: 0 },
  { name: 'dmg +2', cost: 50, dmg: 2, armor: 0 },
  { name: 'dmg +3', cost: 100, dmg: 3, armor: 0 },
  { name: 'def +1', cost: 20, dmg: 0, armor: 1 },
  { name: 'def +2', cost: 40, dmg: 0, armor: 2 },
  { name: 'def +3', cost: 80, dmg: 0, armor: 3 },
];

const defaultEquipment = { name: '', dmg: 0, armor: 0, cost: 0 };

function combine(equipment: Equipment[]): Equipment {
  return equipment.reduce(({ name, cost, dmg, armor }, n) => {
    return {
      armor: armor + n.armor,
      cost: cost + n.cost,
      dmg: dmg + n.dmg,
      name: name + n.name,
    };
  }, defaultEquipment);
}

function allEquipments(): Equipment[] {
  const sets: Equipment[] = [];
  for (const weapon of weapons) {
    for (const armor of armors) {
      for (let i = 0; i < misc.length; i++) {
        for (let j = i + 1; j < misc.length; j++) {
          sets.push(combine([weapon, armor, misc[i], misc[j]]));
        }
      }
    }
  }
  return sets;
}

function fight(
  player: Player,
  boss: Player,
  predicate: (b: boolean, p: boolean) => boolean
): boolean {
  let alive = true;
  while (alive) {
    const bossAlive = boss.hitBy(player);
    const playerAlive = player.hitBy(boss);
    if (predicate(bossAlive, playerAlive)) {
      return true;
    }
    alive = bossAlive && playerAlive;
  }
  return false;
}

export function day21a(boss: Player): number {
  const player: Player = new Player(100, 0, 0);
  const sets = allEquipments();
  const results: Equipment[] = [];
  for (const equipment of sets) {
    player.equip(equipment);
    player.heal();
    boss.heal();
    if (fight(player, boss, (b, p) => !b)) {
      results.push(equipment);
    }
  }
  return _.minBy(results, (eq) => eq.cost)?.cost || 0;
}

export function day21b(boss: Player): number {
  const player: Player = new Player(100, 0, 0);
  const sets = allEquipments();
  const results: Equipment[] = [];
  for (const equipment of sets) {
    player.equip(equipment);
    player.heal();
    boss.heal();
    if (fight(player, boss, (b, p) => !p)) {
      results.push(equipment);
    }
  }
  return _.maxBy(results, (eq) => eq.cost)?.cost || 0;
}
