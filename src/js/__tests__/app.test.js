import Character from '../app';
import Daemon from '../daemon';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';
import Magician from '../magician';

test('check levelUp if health = 0', () => {
  const user = new Character('Alex', 'Bowman', 0, 3);
  expect(() => {
    user.levelUp();
  }).toThrow();
});

test('1 check levelUp if health > 0', () => {
  const received = new Daemon('Snoopy', 'Daemon', 30, 2);
  received.levelUp();
  expect(received).toEqual({
    attack: 12,
    defence: 48,
    health: 100,
    level: 3,
    name: 'Snoopy',
    type: 'Daemon',
  });
});

test('2 check levelUp if health > 0', () => {
  const received = new Swordsman('Snoopy', 'Swordsman', 30, 2);
  received.levelUp();
  expect(received).toEqual({
    attack: 48,
    defence: 12,
    health: 100,
    level: 3,
    name: 'Snoopy',
    type: 'Swordsman',
  });
});

test('3 check levelUp if health > 0', () => {
  const received = new Undead('Snoopy', 'Undead', 25, 1);
  received.levelUp();
  expect(received).toEqual({
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: 'Snoopy',
    type: 'Undead',
  });
});

test('4 check levelUp if health > 0', () => {
  const received = new Zombie('Snoopy', 'Zombie', 25, 1);
  received.levelUp();
  expect(received).toEqual({
    attack: 48,
    defence: 12,
    health: 100,
    level: 2,
    name: 'Snoopy',
    type: 'Zombie',
  });
});

test('5 check levelUp if health > 0', () => {
  const received = new Bowman('Snoopy', 'Bowman', 50, 4);
  received.levelUp();
  expect(received).toEqual({
    attack: 30,
    defence: 30,
    health: 100,
    level: 5,
    name: 'Snoopy',
    type: 'Bowman',
  });
});

test('6 check levelUp if health > 0', () => {
  const received = new Magician('Snoopy', 'Magician', 50, 4);
  received.levelUp();
  expect(received).toEqual({
    attack: 12,
    defence: 48,
    health: 100,
    level: 5,
    name: 'Snoopy',
    type: 'Magician',
  });
});

test('check damage 1', () => {
  const received = new Bowman('Snoopy', 'Bowman', 100, 1);
  received.damage(50);
  expect(received).toEqual({
    attack: 25,
    defence: 25,
    health: 62.5,
    level: 1,
    name: 'Snoopy',
    type: 'Bowman',
  });
});
test('check damage 2', () => {
  const received = new Zombie('Snoopy', 'Zombie', 100, 1);
  received.damage(80);
  expect(received).toEqual({
    attack: 40,
    defence: 10,
    health: 28,
    level: 1,
    name: 'Snoopy',
    type: 'Zombie',
  });
});

test('check damage 3', () => {
  const received = new Swordsman('Snoopy', 'Swordsman', 100, 1);
  received.damage(70);
  expect(received).toEqual({
    attack: 40,
    defence: 10,
    health: 37,
    level: 1,
    name: 'Snoopy',
    type: 'Swordsman',
  });
});

test('check damage 4', () => {
  const received = new Magician('Snoopy', 'Magician', 0, 1);
  received.damage(60);
  expect(received).toEqual({
    attack: 10,
    defence: 40,
    health: 0,
    level: 1,
    name: 'Snoopy',
    type: 'Magician',
  });
});
