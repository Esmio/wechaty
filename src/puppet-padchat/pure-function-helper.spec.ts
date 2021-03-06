#!/usr/bin/env ts-node

// tslint:disable:no-shadowed-variable
import * as test  from 'blue-tape'

import {
  PadchatPureFunctionHelper as pfHelper,
}                                         from './pure-function-helper'

test('isRoomId()', async t => {
  const ROOM_ID     = 'xxx@chatroom'
  const NOT_ROOM_ID = 'xxxxxxx'

  t.ok(pfHelper.isRoomId(ROOM_ID), 'should return true for ROOM_ID')
  t.notOk(pfHelper.isRoomId(NOT_ROOM_ID), 'should return false for ROOM_ID')
})

test('isContactId()', async t => {
  const CONTACT_ID     = 'sxxfdsa'
  const NOT_CONTACT_ID = 'fdsafasd@chatroom'

  t.ok(pfHelper.isContactId(CONTACT_ID), 'should return true for CONTACT_ID')
  t.notOk(pfHelper.isContactId(NOT_CONTACT_ID), 'should return false for CONTACT_ID')
})

test('isOfficialContactId()', async t => {
  const OFFICIAL_CONTACT_ID     = 'gh_sxxfdsa'
  const NOT_OFFICIAL_CONTACT_ID = 'fdsafasd@chatroom'

  t.ok(pfHelper.isContactOfficialId(OFFICIAL_CONTACT_ID), 'should return true for OFFICIAL_CONTACT_ID')
  t.notOk(pfHelper.isContactOfficialId(NOT_OFFICIAL_CONTACT_ID), 'should return false for NOT_OFFICIAL_CONTACT_ID')
})
