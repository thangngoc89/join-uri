import test from 'ava'
import joinUri from './index.js'

test('should join 2 uri parts', (t) => (
  t.is(
    joinUri('some', 'thing'),
    'some/thing'
  )
))

test('should join multiple uri parts', (t) => (
  t.is(
    joinUri('some', 'thing', 'else'),
    'some/thing/else'
  )
))

test('should handle surrounding slashes', (t) => (
  t.is(
    joinUri('/', 'some', 'thing', 'else', '//'),
    '/some/thing/else/'
  )
))

test('should handle duplicate slashes', (t) => (
  t.is(
    joinUri('some/', '/thing/', '/else'),
    'some/thing/else'
  )
))
