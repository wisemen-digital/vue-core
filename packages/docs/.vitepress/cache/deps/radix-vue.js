import "./chunk-UM7RCC42.js";
import {
  Comment,
  Fragment,
  Teleport,
  camelize,
  cloneVNode,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  customRef,
  defineComponent,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  guardReactiveProps,
  h,
  inject,
  isRef,
  markRaw,
  mergeDefaults,
  mergeProps,
  nextTick,
  normalizeProps,
  normalizeStyle,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onScopeDispose,
  onUnmounted,
  onUpdated,
  openBlock,
  provide,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowReadonly,
  shallowRef,
  toDisplayString,
  toHandlerKey,
  toHandlers,
  toRaw,
  toRef,
  toRefs,
  triggerRef,
  unref,
  useSlots,
  vModelSelect,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-ZQ3ESIZP.js";

// ../../node_modules/.pnpm/@swc+helpers@0.5.6/node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// ../../node_modules/.pnpm/@swc+helpers@0.5.6/node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// ../../node_modules/.pnpm/@internationalized+date@3.5.2/node_modules/@internationalized/date/dist/import.mjs
function $2b4dce13dd5a17fa$export$842a2cf37af977e1(amount, numerator) {
  return amount - numerator * Math.floor(amount / numerator);
}
var $3b62074eb05584b2$var$EPOCH = 1721426;
function $3b62074eb05584b2$export$f297eb839006d339(era, year, month, day) {
  year = $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year);
  let y1 = year - 1;
  let monthOffset = -2;
  if (month <= 2)
    monthOffset = 0;
  else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year))
    monthOffset = -1;
  return $3b62074eb05584b2$var$EPOCH - 1 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $3b62074eb05584b2$export$553d7fa8e3805fc0(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $3b62074eb05584b2$export$c36e0ecb2d4fa69d(era, year) {
  return era === "BC" ? 1 - year : year;
}
function $3b62074eb05584b2$export$4475b7e617eb123c(year) {
  let era = "AD";
  if (year <= 0) {
    era = "BC";
    year = 1 - year;
  }
  return [
    era,
    year
  ];
}
var $3b62074eb05584b2$var$daysInMonth = {
  standard: [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ],
  leapyear: [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
};
var $3b62074eb05584b2$export$80ee6245ec4f29ec = class {
  fromJulianDay(jd2) {
    let jd0 = jd2;
    let depoch = jd0 - $3b62074eb05584b2$var$EPOCH;
    let quadricent = Math.floor(depoch / 146097);
    let dqc = (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(depoch, 146097);
    let cent = Math.floor(dqc / 36524);
    let dcent = (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(dqc, 36524);
    let quad = Math.floor(dcent / 1461);
    let dquad = (0, $2b4dce13dd5a17fa$export$842a2cf37af977e1)(dcent, 1461);
    let yindex = Math.floor(dquad / 365);
    let extendedYear = quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0);
    let [era, year] = $3b62074eb05584b2$export$4475b7e617eb123c(extendedYear);
    let yearDay = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, 1, 1);
    let leapAdj = 2;
    if (jd0 < $3b62074eb05584b2$export$f297eb839006d339(era, year, 3, 1))
      leapAdj = 0;
    else if ($3b62074eb05584b2$export$553d7fa8e3805fc0(year))
      leapAdj = 1;
    let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
    let day = jd0 - $3b62074eb05584b2$export$f297eb839006d339(era, year, month, 1) + 1;
    return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(era, year, month, day);
  }
  toJulianDay(date) {
    return $3b62074eb05584b2$export$f297eb839006d339(date.era, date.year, date.month, date.day);
  }
  getDaysInMonth(date) {
    return $3b62074eb05584b2$var$daysInMonth[$3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? "leapyear" : "standard"][date.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(date) {
    return 12;
  }
  getDaysInYear(date) {
    return $3b62074eb05584b2$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(date) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(date) {
    return date.era === "BC";
  }
  balanceDate(date) {
    if (date.year <= 0) {
      date.era = date.era === "BC" ? "AD" : "BC";
      date.year = 1 - date.year;
    }
  }
  constructor() {
    this.identifier = "gregory";
  }
};
var $2fe286d2fb449abb$export$7a5acbd77d414bd9 = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};
function $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2, b2) {
  b2 = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(b2, a2.calendar);
  return a2.era === b2.era && a2.year === b2.year && a2.month === b2.month && a2.day === b2.day;
}
function $14e0f24ef4ac5c92$export$a18c89cbd24170ff(a2, b2) {
  b2 = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(b2, a2.calendar);
  a2 = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a2);
  b2 = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b2);
  return a2.era === b2.era && a2.year === b2.year && a2.month === b2.month;
}
function $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(a2, b2) {
  return a2.calendar.identifier === b2.calendar.identifier && a2.era === b2.era && a2.year === b2.year && a2.month === b2.month && a2.day === b2.day;
}
function $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(a2, b2) {
  a2 = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a2);
  b2 = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b2);
  return a2.calendar.identifier === b2.calendar.identifier && a2.era === b2.era && a2.year === b2.year && a2.month === b2.month;
}
function $14e0f24ef4ac5c92$export$629b0a497aa65267(date, timeZone) {
  return $14e0f24ef4ac5c92$export$ea39ec197993aef0(date, $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone));
}
function $14e0f24ef4ac5c92$export$2061056d06d7cdf7(date, locale) {
  let julian = date.calendar.toJulianDay(date);
  let dayOfWeek = Math.ceil(julian + 1 - $14e0f24ef4ac5c92$var$getWeekStart(locale)) % 7;
  if (dayOfWeek < 0)
    dayOfWeek += 7;
  return dayOfWeek;
}
function $14e0f24ef4ac5c92$export$461939dd4422153(timeZone) {
  return (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(Date.now(), timeZone);
}
function $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3(timeZone) {
  return (0, $11d87f3f76e88657$export$93522d1a439f3617)($14e0f24ef4ac5c92$export$461939dd4422153(timeZone));
}
function $14e0f24ef4ac5c92$export$68781ddf31c0090f(a2, b2) {
  return a2.calendar.toJulianDay(a2) - b2.calendar.toJulianDay(b2);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6(a2, b2) {
  return $14e0f24ef4ac5c92$var$timeToMs(a2) - $14e0f24ef4ac5c92$var$timeToMs(b2);
}
function $14e0f24ef4ac5c92$var$timeToMs(a2) {
  return a2.hour * 36e5 + a2.minute * 6e4 + a2.second * 1e3 + a2.millisecond;
}
var $14e0f24ef4ac5c92$var$localTimeZone = null;
function $14e0f24ef4ac5c92$export$aa8b41735afcabd2() {
  if ($14e0f24ef4ac5c92$var$localTimeZone == null)
    $14e0f24ef4ac5c92$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  return $14e0f24ef4ac5c92$var$localTimeZone;
}
function $14e0f24ef4ac5c92$export$a5a3b454ada2268e(date) {
  return date.subtract({
    days: date.day - 1
  });
}
function $14e0f24ef4ac5c92$export$a2258d9c4118825c(date) {
  return date.add({
    days: date.calendar.getDaysInMonth(date) - date.day
  });
}
var $14e0f24ef4ac5c92$var$cachedRegions = /* @__PURE__ */ new Map();
function $14e0f24ef4ac5c92$var$getRegion(locale) {
  if (Intl.Locale) {
    let region = $14e0f24ef4ac5c92$var$cachedRegions.get(locale);
    if (!region) {
      region = new Intl.Locale(locale).maximize().region;
      if (region)
        $14e0f24ef4ac5c92$var$cachedRegions.set(locale, region);
    }
    return region;
  }
  let part = locale.split("-")[1];
  return part === "u" ? void 0 : part;
}
function $14e0f24ef4ac5c92$var$getWeekStart(locale) {
  let region = $14e0f24ef4ac5c92$var$getRegion(locale);
  return region ? (0, $2fe286d2fb449abb$export$7a5acbd77d414bd9)[region] || 0 : 0;
}
function $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) {
  date = $11d87f3f76e88657$export$b4a036af3fc0b032(date, new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
  let year = (0, $3b62074eb05584b2$export$c36e0ecb2d4fa69d)(date.era, date.year);
  return $11d87f3f76e88657$var$epochFromParts(year, date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
  let date = /* @__PURE__ */ new Date();
  date.setUTCHours(hour, minute, second, millisecond);
  date.setUTCFullYear(year, month - 1, day);
  return date.getTime();
}
function $11d87f3f76e88657$export$59c99f3515d3493f(ms2, timeZone) {
  if (timeZone === "UTC")
    return 0;
  if (ms2 > 0 && timeZone === (0, $14e0f24ef4ac5c92$export$aa8b41735afcabd2)())
    return new Date(ms2).getTimezoneOffset() * -6e4;
  let { year, month, day, hour, minute, second } = $11d87f3f76e88657$var$getTimeZoneParts(ms2, timeZone);
  let utc = $11d87f3f76e88657$var$epochFromParts(year, month, day, hour, minute, second, 0);
  return utc - Math.floor(ms2 / 1e3) * 1e3;
}
var $11d87f3f76e88657$var$formattersByTimeZone = /* @__PURE__ */ new Map();
function $11d87f3f76e88657$var$getTimeZoneParts(ms2, timeZone) {
  let formatter = $11d87f3f76e88657$var$formattersByTimeZone.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour12: false,
      era: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    $11d87f3f76e88657$var$formattersByTimeZone.set(timeZone, formatter);
  }
  let parts = formatter.formatToParts(new Date(ms2));
  let namedParts = {};
  for (let part of parts)
    if (part.type !== "literal")
      namedParts[part.type] = part.value;
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: namedParts.era === "BC" || namedParts.era === "B" ? -namedParts.year + 1 : +namedParts.year,
    month: +namedParts.month,
    day: +namedParts.day,
    hour: namedParts.hour === "24" ? 0 : +namedParts.hour,
    minute: +namedParts.minute,
    second: +namedParts.second
  };
}
var $11d87f3f76e88657$var$DAYMILLIS = 864e5;
function $11d87f3f76e88657$export$136f38efe7caf549(date, timeZone) {
  let ms2 = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date);
  let earlier = ms2 - $11d87f3f76e88657$export$59c99f3515d3493f(ms2 - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let later = ms2 - $11d87f3f76e88657$export$59c99f3515d3493f(ms2 + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  return $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later);
}
function $11d87f3f76e88657$var$getValidWallTimes(date, timeZone, earlier, later) {
  let found = earlier === later ? [
    earlier
  ] : [
    earlier,
    later
  ];
  return found.filter((absolute) => $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute));
}
function $11d87f3f76e88657$var$isValidWallTime(date, timeZone, absolute) {
  let parts = $11d87f3f76e88657$var$getTimeZoneParts(absolute, timeZone);
  return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation = "compatible") {
  let dateTime = $11d87f3f76e88657$export$b21e0b124e224484(date);
  if (timeZone === "UTC")
    return $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
  if (timeZone === (0, $14e0f24ef4ac5c92$export$aa8b41735afcabd2)() && disambiguation === "compatible") {
    dateTime = $11d87f3f76e88657$export$b4a036af3fc0b032(dateTime, new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
    let date2 = /* @__PURE__ */ new Date();
    let year = (0, $3b62074eb05584b2$export$c36e0ecb2d4fa69d)(dateTime.era, dateTime.year);
    date2.setFullYear(year, dateTime.month - 1, dateTime.day);
    date2.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
    return date2.getTime();
  }
  let ms2 = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(dateTime);
  let offsetBefore = $11d87f3f76e88657$export$59c99f3515d3493f(ms2 - $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let offsetAfter = $11d87f3f76e88657$export$59c99f3515d3493f(ms2 + $11d87f3f76e88657$var$DAYMILLIS, timeZone);
  let valid = $11d87f3f76e88657$var$getValidWallTimes(dateTime, timeZone, ms2 - offsetBefore, ms2 - offsetAfter);
  if (valid.length === 1)
    return valid[0];
  if (valid.length > 1)
    switch (disambiguation) {
      case "compatible":
      case "earlier":
        return valid[0];
      case "later":
        return valid[valid.length - 1];
      case "reject":
        throw new RangeError("Multiple possible absolute times found");
    }
  switch (disambiguation) {
    case "earlier":
      return Math.min(ms2 - offsetBefore, ms2 - offsetAfter);
    case "compatible":
    case "later":
      return Math.max(ms2 - offsetBefore, ms2 - offsetAfter);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function $11d87f3f76e88657$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = "compatible") {
  return new Date($11d87f3f76e88657$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $11d87f3f76e88657$export$1b96692a1ba042ac(ms2, timeZone) {
  let offset2 = $11d87f3f76e88657$export$59c99f3515d3493f(ms2, timeZone);
  let date = new Date(ms2 + offset2);
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let hour = date.getUTCHours();
  let minute = date.getUTCMinutes();
  let second = date.getUTCSeconds();
  let millisecond = date.getUTCMilliseconds();
  return new (0, $35ea8db9cb2ccb90$export$d3b7288e7994edea)(year, month, day, timeZone, offset2, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$93522d1a439f3617(dateTime) {
  return new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)(dateTime.calendar, dateTime.era, dateTime.year, dateTime.month, dateTime.day);
}
function $11d87f3f76e88657$export$b21e0b124e224484(date, time) {
  let hour = 0, minute = 0, second = 0, millisecond = 0;
  if ("timeZone" in date)
    ({ hour, minute, second, millisecond } = date);
  else if ("hour" in date && !time)
    return date;
  if (time)
    ({ hour, minute, second, millisecond } = time);
  return new (0, $35ea8db9cb2ccb90$export$ca871e8dbb80966f)(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $11d87f3f76e88657$export$b4a036af3fc0b032(date, calendar) {
  if (date.calendar.identifier === calendar.identifier)
    return date;
  let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
  let copy = date.copy();
  copy.calendar = calendar;
  copy.era = calendarDate.era;
  copy.year = calendarDate.year;
  copy.month = calendarDate.month;
  copy.day = calendarDate.day;
  (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(copy);
  return copy;
}
function $11d87f3f76e88657$export$84c95a83c799e074(date, timeZone, disambiguation) {
  if (date instanceof (0, $35ea8db9cb2ccb90$export$d3b7288e7994edea)) {
    if (date.timeZone === timeZone)
      return date;
    return $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone);
  }
  let ms2 = $11d87f3f76e88657$export$5107c82f94518f5c(date, timeZone, disambiguation);
  return $11d87f3f76e88657$export$1b96692a1ba042ac(ms2, timeZone);
}
function $11d87f3f76e88657$export$83aac07b4c37b25(date) {
  let ms2 = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
  return new Date(ms2);
}
function $11d87f3f76e88657$export$538b00033cc11c75(date, timeZone) {
  let ms2 = $11d87f3f76e88657$export$bd4fb2bc8bb06fb(date) - date.offset;
  return $11d87f3f76e88657$export$b4a036af3fc0b032($11d87f3f76e88657$export$1b96692a1ba042ac(ms2, timeZone), date.calendar);
}
var $735220c2d4774dd3$var$ONE_HOUR = 36e5;
function $735220c2d4774dd3$export$e16d8520af44a096(date, duration) {
  let mutableDate = date.copy();
  let days = "hour" in mutableDate ? $735220c2d4774dd3$var$addTimeFields(mutableDate, duration) : 0;
  $735220c2d4774dd3$var$addYears(mutableDate, duration.years || 0);
  if (mutableDate.calendar.balanceYearMonth)
    mutableDate.calendar.balanceYearMonth(mutableDate, date);
  mutableDate.month += duration.months || 0;
  $735220c2d4774dd3$var$balanceYearMonth(mutableDate);
  $735220c2d4774dd3$var$constrainMonthDay(mutableDate);
  mutableDate.day += (duration.weeks || 0) * 7;
  mutableDate.day += duration.days || 0;
  mutableDate.day += days;
  $735220c2d4774dd3$var$balanceDay(mutableDate);
  if (mutableDate.calendar.balanceDate)
    mutableDate.calendar.balanceDate(mutableDate);
  if (mutableDate.year < 1) {
    mutableDate.year = 1;
    mutableDate.month = 1;
    mutableDate.day = 1;
  }
  let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
  if (mutableDate.year > maxYear) {
    var _mutableDate_calendar_isInverseEra, _mutableDate_calendar;
    let isInverseEra = (_mutableDate_calendar_isInverseEra = (_mutableDate_calendar = mutableDate.calendar).isInverseEra) === null || _mutableDate_calendar_isInverseEra === void 0 ? void 0 : _mutableDate_calendar_isInverseEra.call(_mutableDate_calendar, mutableDate);
    mutableDate.year = maxYear;
    mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
    mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
  }
  if (mutableDate.month < 1) {
    mutableDate.month = 1;
    mutableDate.day = 1;
  }
  let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
  if (mutableDate.month > maxMonth) {
    mutableDate.month = maxMonth;
    mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
  }
  mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
  return mutableDate;
}
function $735220c2d4774dd3$var$addYears(date, years) {
  var _date_calendar_isInverseEra, _date_calendar;
  if ((_date_calendar_isInverseEra = (_date_calendar = date.calendar).isInverseEra) === null || _date_calendar_isInverseEra === void 0 ? void 0 : _date_calendar_isInverseEra.call(_date_calendar, date))
    years = -years;
  date.year += years;
}
function $735220c2d4774dd3$var$balanceYearMonth(date) {
  while (date.month < 1) {
    $735220c2d4774dd3$var$addYears(date, -1);
    date.month += date.calendar.getMonthsInYear(date);
  }
  let monthsInYear = 0;
  while (date.month > (monthsInYear = date.calendar.getMonthsInYear(date))) {
    date.month -= monthsInYear;
    $735220c2d4774dd3$var$addYears(date, 1);
  }
}
function $735220c2d4774dd3$var$balanceDay(date) {
  while (date.day < 1) {
    date.month--;
    $735220c2d4774dd3$var$balanceYearMonth(date);
    date.day += date.calendar.getDaysInMonth(date);
  }
  while (date.day > date.calendar.getDaysInMonth(date)) {
    date.day -= date.calendar.getDaysInMonth(date);
    date.month++;
    $735220c2d4774dd3$var$balanceYearMonth(date);
  }
}
function $735220c2d4774dd3$var$constrainMonthDay(date) {
  date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
  date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $735220c2d4774dd3$export$c4e2ecac49351ef2(date) {
  if (date.calendar.constrainDate)
    date.calendar.constrainDate(date);
  date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
  $735220c2d4774dd3$var$constrainMonthDay(date);
}
function $735220c2d4774dd3$export$3e2544e88a25bff8(duration) {
  let inverseDuration = {};
  for (let key in duration)
    if (typeof duration[key] === "number")
      inverseDuration[key] = -duration[key];
  return inverseDuration;
}
function $735220c2d4774dd3$export$4e2d2ead65e5f7e3(date, duration) {
  return $735220c2d4774dd3$export$e16d8520af44a096(date, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$adaa4cf7ef1b65be(date, fields) {
  let mutableDate = date.copy();
  if (fields.era != null)
    mutableDate.era = fields.era;
  if (fields.year != null)
    mutableDate.year = fields.year;
  if (fields.month != null)
    mutableDate.month = fields.month;
  if (fields.day != null)
    mutableDate.day = fields.day;
  $735220c2d4774dd3$export$c4e2ecac49351ef2(mutableDate);
  return mutableDate;
}
function $735220c2d4774dd3$export$e5d5e1c1822b6e56(value, fields) {
  let mutableValue = value.copy();
  if (fields.hour != null)
    mutableValue.hour = fields.hour;
  if (fields.minute != null)
    mutableValue.minute = fields.minute;
  if (fields.second != null)
    mutableValue.second = fields.second;
  if (fields.millisecond != null)
    mutableValue.millisecond = fields.millisecond;
  $735220c2d4774dd3$export$7555de1e070510cb(mutableValue);
  return mutableValue;
}
function $735220c2d4774dd3$var$balanceTime(time) {
  time.second += Math.floor(time.millisecond / 1e3);
  time.millisecond = $735220c2d4774dd3$var$nonNegativeMod(time.millisecond, 1e3);
  time.minute += Math.floor(time.second / 60);
  time.second = $735220c2d4774dd3$var$nonNegativeMod(time.second, 60);
  time.hour += Math.floor(time.minute / 60);
  time.minute = $735220c2d4774dd3$var$nonNegativeMod(time.minute, 60);
  let days = Math.floor(time.hour / 24);
  time.hour = $735220c2d4774dd3$var$nonNegativeMod(time.hour, 24);
  return days;
}
function $735220c2d4774dd3$export$7555de1e070510cb(time) {
  time.millisecond = Math.max(0, Math.min(time.millisecond, 1e3));
  time.second = Math.max(0, Math.min(time.second, 59));
  time.minute = Math.max(0, Math.min(time.minute, 59));
  time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $735220c2d4774dd3$var$nonNegativeMod(a2, b2) {
  let result = a2 % b2;
  if (result < 0)
    result += b2;
  return result;
}
function $735220c2d4774dd3$var$addTimeFields(time, duration) {
  time.hour += duration.hours || 0;
  time.minute += duration.minutes || 0;
  time.second += duration.seconds || 0;
  time.millisecond += duration.milliseconds || 0;
  return $735220c2d4774dd3$var$balanceTime(time);
}
function $735220c2d4774dd3$export$d52ced6badfb9a4c(value, field, amount, options) {
  let mutable = value.copy();
  switch (field) {
    case "era": {
      let eras = value.calendar.getEras();
      let eraIndex = eras.indexOf(value.era);
      if (eraIndex < 0)
        throw new Error("Invalid era: " + value.era);
      eraIndex = $735220c2d4774dd3$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options === null || options === void 0 ? void 0 : options.round);
      mutable.era = eras[eraIndex];
      $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
      break;
    }
    case "year":
      var _mutable_calendar_isInverseEra, _mutable_calendar;
      if ((_mutable_calendar_isInverseEra = (_mutable_calendar = mutable.calendar).isInverseEra) === null || _mutable_calendar_isInverseEra === void 0 ? void 0 : _mutable_calendar_isInverseEra.call(_mutable_calendar, mutable))
        amount = -amount;
      mutable.year = $735220c2d4774dd3$var$cycleValue(value.year, amount, -Infinity, 9999, options === null || options === void 0 ? void 0 : options.round);
      if (mutable.year === -Infinity)
        mutable.year = 1;
      if (mutable.calendar.balanceYearMonth)
        mutable.calendar.balanceYearMonth(mutable, value);
      break;
    case "month":
      mutable.month = $735220c2d4774dd3$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options === null || options === void 0 ? void 0 : options.round);
      break;
    case "day":
      mutable.day = $735220c2d4774dd3$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options === null || options === void 0 ? void 0 : options.round);
      break;
    default:
      throw new Error("Unsupported field " + field);
  }
  if (value.calendar.balanceDate)
    value.calendar.balanceDate(mutable);
  $735220c2d4774dd3$export$c4e2ecac49351ef2(mutable);
  return mutable;
}
function $735220c2d4774dd3$export$dd02b3e0007dfe28(value, field, amount, options) {
  let mutable = value.copy();
  switch (field) {
    case "hour": {
      let hours = value.hour;
      let min2 = 0;
      let max2 = 23;
      if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
        let isPM = hours >= 12;
        min2 = isPM ? 12 : 0;
        max2 = isPM ? 23 : 11;
      }
      mutable.hour = $735220c2d4774dd3$var$cycleValue(hours, amount, min2, max2, options === null || options === void 0 ? void 0 : options.round);
      break;
    }
    case "minute":
      mutable.minute = $735220c2d4774dd3$var$cycleValue(value.minute, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
      break;
    case "second":
      mutable.second = $735220c2d4774dd3$var$cycleValue(value.second, amount, 0, 59, options === null || options === void 0 ? void 0 : options.round);
      break;
    case "millisecond":
      mutable.millisecond = $735220c2d4774dd3$var$cycleValue(value.millisecond, amount, 0, 999, options === null || options === void 0 ? void 0 : options.round);
      break;
    default:
      throw new Error("Unsupported field " + field);
  }
  return mutable;
}
function $735220c2d4774dd3$var$cycleValue(value, amount, min2, max2, round2 = false) {
  if (round2) {
    value += Math.sign(amount);
    if (value < min2)
      value = max2;
    let div = Math.abs(amount);
    if (amount > 0)
      value = Math.ceil(value / div) * div;
    else
      value = Math.floor(value / div) * div;
    if (value > max2)
      value = min2;
  } else {
    value += amount;
    if (value < min2)
      value = max2 - (min2 - value - 1);
    else if (value > max2)
      value = min2 + (value - max2 - 1);
  }
  return value;
}
function $735220c2d4774dd3$export$96b1d28349274637(dateTime, duration) {
  let ms2;
  if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.weeks != null && duration.weeks !== 0 || duration.days != null && duration.days !== 0) {
    let res2 = $735220c2d4774dd3$export$e16d8520af44a096((0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime), {
      years: duration.years,
      months: duration.months,
      weeks: duration.weeks,
      days: duration.days
    });
    ms2 = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(res2, dateTime.timeZone);
  } else
    ms2 = (0, $11d87f3f76e88657$export$bd4fb2bc8bb06fb)(dateTime) - dateTime.offset;
  ms2 += duration.milliseconds || 0;
  ms2 += (duration.seconds || 0) * 1e3;
  ms2 += (duration.minutes || 0) * 6e4;
  ms2 += (duration.hours || 0) * 36e5;
  let res = (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, dateTime.timeZone);
  return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(res, dateTime.calendar);
}
function $735220c2d4774dd3$export$6814caac34ca03c7(dateTime, duration) {
  return $735220c2d4774dd3$export$96b1d28349274637(dateTime, $735220c2d4774dd3$export$3e2544e88a25bff8(duration));
}
function $735220c2d4774dd3$export$9a297d111fc86b79(dateTime, field, amount, options) {
  switch (field) {
    case "hour": {
      let min2 = 0;
      let max2 = 23;
      if ((options === null || options === void 0 ? void 0 : options.hourCycle) === 12) {
        let isPM = dateTime.hour >= 12;
        min2 = isPM ? 12 : 0;
        max2 = isPM ? 23 : 11;
      }
      let plainDateTime = (0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime);
      let minDate = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
        hour: min2
      }), new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
      let minAbsolute = [
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(minDate, dateTime.timeZone, "earlier"),
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(minDate, dateTime.timeZone, "later")
      ].filter((ms3) => (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms3, dateTime.timeZone).day === minDate.day)[0];
      let maxDate = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)($735220c2d4774dd3$export$e5d5e1c1822b6e56(plainDateTime, {
        hour: max2
      }), new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
      let maxAbsolute = [
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(maxDate, dateTime.timeZone, "earlier"),
        (0, $11d87f3f76e88657$export$5107c82f94518f5c)(maxDate, dateTime.timeZone, "later")
      ].filter((ms3) => (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms3, dateTime.timeZone).day === maxDate.day).pop();
      let ms2 = (0, $11d87f3f76e88657$export$bd4fb2bc8bb06fb)(dateTime) - dateTime.offset;
      let hours = Math.floor(ms2 / $735220c2d4774dd3$var$ONE_HOUR);
      let remainder = ms2 % $735220c2d4774dd3$var$ONE_HOUR;
      ms2 = $735220c2d4774dd3$var$cycleValue(hours, amount, Math.floor(minAbsolute / $735220c2d4774dd3$var$ONE_HOUR), Math.floor(maxAbsolute / $735220c2d4774dd3$var$ONE_HOUR), options === null || options === void 0 ? void 0 : options.round) * $735220c2d4774dd3$var$ONE_HOUR + remainder;
      return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)((0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, dateTime.timeZone), dateTime.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return $735220c2d4774dd3$export$dd02b3e0007dfe28(dateTime, field, amount, options);
    case "era":
    case "year":
    case "month":
    case "day": {
      let res = $735220c2d4774dd3$export$d52ced6badfb9a4c((0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime), field, amount, options);
      let ms2 = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(res, dateTime.timeZone);
      return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)((0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, dateTime.timeZone), dateTime.calendar);
    }
    default:
      throw new Error("Unsupported field " + field);
  }
}
function $735220c2d4774dd3$export$31b5430eb18be4f8(dateTime, fields, disambiguation) {
  let plainDateTime = (0, $11d87f3f76e88657$export$b21e0b124e224484)(dateTime);
  let res = $735220c2d4774dd3$export$e5d5e1c1822b6e56($735220c2d4774dd3$export$adaa4cf7ef1b65be(plainDateTime, fields), fields);
  if (res.compare(plainDateTime) === 0)
    return dateTime;
  let ms2 = (0, $11d87f3f76e88657$export$5107c82f94518f5c)(res, dateTime.timeZone, disambiguation);
  return (0, $11d87f3f76e88657$export$b4a036af3fc0b032)((0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, dateTime.timeZone), dateTime.calendar);
}
var $fae977aafc393c5c$var$DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
var $fae977aafc393c5c$var$DATE_TIME_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
var $fae977aafc393c5c$var$ZONED_DATE_TIME_RE = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::?(\d{2}))?)?\[(.*?)\]$/;
var $fae977aafc393c5c$var$requiredDurationTimeGroups = [
  "hours",
  "minutes",
  "seconds"
];
var $fae977aafc393c5c$var$requiredDurationGroups = [
  "years",
  "months",
  "weeks",
  "days",
  ...$fae977aafc393c5c$var$requiredDurationTimeGroups
];
function $fae977aafc393c5c$export$6b862160d295c8e(value) {
  let m2 = value.match($fae977aafc393c5c$var$DATE_RE);
  if (!m2)
    throw new Error("Invalid ISO 8601 date string: " + value);
  let date = new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)($fae977aafc393c5c$var$parseNumber(m2[1], 0, 9999), $fae977aafc393c5c$var$parseNumber(m2[2], 1, 12), 1);
  date.day = $fae977aafc393c5c$var$parseNumber(m2[3], 0, date.calendar.getDaysInMonth(date));
  return date;
}
function $fae977aafc393c5c$export$588937bcd60ade55(value) {
  let m2 = value.match($fae977aafc393c5c$var$DATE_TIME_RE);
  if (!m2)
    throw new Error("Invalid ISO 8601 date time string: " + value);
  let date = new (0, $35ea8db9cb2ccb90$export$ca871e8dbb80966f)($fae977aafc393c5c$var$parseNumber(m2[1], 1, 9999), $fae977aafc393c5c$var$parseNumber(m2[2], 1, 12), 1, m2[4] ? $fae977aafc393c5c$var$parseNumber(m2[4], 0, 23) : 0, m2[5] ? $fae977aafc393c5c$var$parseNumber(m2[5], 0, 59) : 0, m2[6] ? $fae977aafc393c5c$var$parseNumber(m2[6], 0, 59) : 0, m2[7] ? $fae977aafc393c5c$var$parseNumber(m2[7], 0, Infinity) * 1e3 : 0);
  date.day = $fae977aafc393c5c$var$parseNumber(m2[3], 0, date.calendar.getDaysInMonth(date));
  return date;
}
function $fae977aafc393c5c$export$fd7893f06e92a6a4(value, disambiguation) {
  let m2 = value.match($fae977aafc393c5c$var$ZONED_DATE_TIME_RE);
  if (!m2)
    throw new Error("Invalid ISO 8601 date time string: " + value);
  let date = new (0, $35ea8db9cb2ccb90$export$d3b7288e7994edea)($fae977aafc393c5c$var$parseNumber(m2[1], 1, 9999), $fae977aafc393c5c$var$parseNumber(m2[2], 1, 12), 1, m2[10], 0, m2[4] ? $fae977aafc393c5c$var$parseNumber(m2[4], 0, 23) : 0, m2[5] ? $fae977aafc393c5c$var$parseNumber(m2[5], 0, 59) : 0, m2[6] ? $fae977aafc393c5c$var$parseNumber(m2[6], 0, 59) : 0, m2[7] ? $fae977aafc393c5c$var$parseNumber(m2[7], 0, Infinity) * 1e3 : 0);
  date.day = $fae977aafc393c5c$var$parseNumber(m2[3], 0, date.calendar.getDaysInMonth(date));
  let plainDateTime = (0, $11d87f3f76e88657$export$b21e0b124e224484)(date);
  let ms2;
  if (m2[8]) {
    var _m_;
    date.offset = $fae977aafc393c5c$var$parseNumber(m2[8], -23, 23) * 36e5 + $fae977aafc393c5c$var$parseNumber((_m_ = m2[9]) !== null && _m_ !== void 0 ? _m_ : "0", 0, 59) * 6e4;
    ms2 = (0, $11d87f3f76e88657$export$bd4fb2bc8bb06fb)(date) - date.offset;
    let absolutes = (0, $11d87f3f76e88657$export$136f38efe7caf549)(plainDateTime, date.timeZone);
    if (!absolutes.includes(ms2))
      throw new Error(`Offset ${$fae977aafc393c5c$var$offsetToString(date.offset)} is invalid for ${$fae977aafc393c5c$export$4223de14708adc63(date)} in ${date.timeZone}`);
  } else
    ms2 = (0, $11d87f3f76e88657$export$5107c82f94518f5c)((0, $11d87f3f76e88657$export$b21e0b124e224484)(plainDateTime), date.timeZone, disambiguation);
  return (0, $11d87f3f76e88657$export$1b96692a1ba042ac)(ms2, date.timeZone);
}
function $fae977aafc393c5c$var$parseNumber(value, min2, max2) {
  let val = Number(value);
  if (val < min2 || val > max2)
    throw new RangeError(`Value out of range: ${min2} <= ${val} <= ${max2}`);
  return val;
}
function $fae977aafc393c5c$export$f59dee82248f5ad4(time) {
  return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second).padStart(2, "0")}${time.millisecond ? String(time.millisecond / 1e3).slice(1) : ""}`;
}
function $fae977aafc393c5c$export$60dfd74aa96791bd(date) {
  let gregorianDate = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(date, new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)());
  return `${String(gregorianDate.year).padStart(4, "0")}-${String(gregorianDate.month).padStart(2, "0")}-${String(gregorianDate.day).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$4223de14708adc63(date) {
  return `${$fae977aafc393c5c$export$60dfd74aa96791bd(date)}T${$fae977aafc393c5c$export$f59dee82248f5ad4(date)}`;
}
function $fae977aafc393c5c$var$offsetToString(offset2) {
  let sign = Math.sign(offset2) < 0 ? "-" : "+";
  offset2 = Math.abs(offset2);
  let offsetHours = Math.floor(offset2 / 36e5);
  let offsetMinutes = offset2 % 36e5 / 6e4;
  return `${sign}${String(offsetHours).padStart(2, "0")}:${String(offsetMinutes).padStart(2, "0")}`;
}
function $fae977aafc393c5c$export$bf79f1ebf4b18792(date) {
  return `${$fae977aafc393c5c$export$4223de14708adc63(date)}${$fae977aafc393c5c$var$offsetToString(date.offset)}[${date.timeZone}]`;
}
function $35ea8db9cb2ccb90$var$shiftArgs(args) {
  let calendar = typeof args[0] === "object" ? args.shift() : new (0, $3b62074eb05584b2$export$80ee6245ec4f29ec)();
  let era;
  if (typeof args[0] === "string")
    era = args.shift();
  else {
    let eras = calendar.getEras();
    era = eras[eras.length - 1];
  }
  let year = args.shift();
  let month = args.shift();
  let day = args.shift();
  return [
    calendar,
    era,
    year,
    month,
    day
  ];
}
var $35ea8db9cb2ccb90$var$_type = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$99faa760c7908e4f = class _$35ea8db9cb2ccb90$export$99faa760c7908e4f {
  /** Returns a copy of this date. */
  copy() {
    if (this.era)
      return new _$35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
    else
      return new _$35ea8db9cb2ccb90$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(duration) {
    return (0, $735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(duration) {
    return (0, $735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return (0, $735220c2d4774dd3$export$adaa4cf7ef1b65be)(this, fields);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    return (0, $735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(timeZone) {
    return (0, $11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return (0, $fae977aafc393c5c$export$60dfd74aa96791bd)(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b2) {
    return (0, $14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b2);
  }
  constructor(...args) {
    (0, _class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
};
var $35ea8db9cb2ccb90$var$_type2 = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$ca871e8dbb80966f = class _$35ea8db9cb2ccb90$export$ca871e8dbb80966f {
  /** Returns a copy of this date. */
  copy() {
    if (this.era)
      return new _$35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    else
      return new _$35ea8db9cb2ccb90$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(duration) {
    return (0, $735220c2d4774dd3$export$e16d8520af44a096)(this, duration);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(duration) {
    return (0, $735220c2d4774dd3$export$4e2d2ead65e5f7e3)(this, duration);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields) {
    return (0, $735220c2d4774dd3$export$adaa4cf7ef1b65be)((0, $735220c2d4774dd3$export$e5d5e1c1822b6e56)(this, fields), fields);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    switch (field) {
      case "era":
      case "year":
      case "month":
      case "day":
        return (0, $735220c2d4774dd3$export$d52ced6badfb9a4c)(this, field, amount, options);
      default:
        return (0, $735220c2d4774dd3$export$dd02b3e0007dfe28)(this, field, amount, options);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(timeZone, disambiguation) {
    return (0, $11d87f3f76e88657$export$e67a095c620b86fe)(this, timeZone, disambiguation);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return (0, $fae977aafc393c5c$export$4223de14708adc63)(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b2) {
    let res = (0, $14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b2);
    if (res === 0)
      return (0, $14e0f24ef4ac5c92$export$c19a80a9721b80f6)(this, (0, $11d87f3f76e88657$export$b21e0b124e224484)(b2));
    return res;
  }
  constructor(...args) {
    (0, _class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type2, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = args.shift() || 0;
    this.minute = args.shift() || 0;
    this.second = args.shift() || 0;
    this.millisecond = args.shift() || 0;
    (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
};
var $35ea8db9cb2ccb90$var$_type3 = /* @__PURE__ */ new WeakMap();
var $35ea8db9cb2ccb90$export$d3b7288e7994edea = class _$35ea8db9cb2ccb90$export$d3b7288e7994edea {
  /** Returns a copy of this date. */
  copy() {
    if (this.era)
      return new _$35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    else
      return new _$35ea8db9cb2ccb90$export$d3b7288e7994edea(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(duration) {
    return (0, $735220c2d4774dd3$export$96b1d28349274637)(this, duration);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(duration) {
    return (0, $735220c2d4774dd3$export$6814caac34ca03c7)(this, duration);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(fields, disambiguation) {
    return (0, $735220c2d4774dd3$export$31b5430eb18be4f8)(this, fields, disambiguation);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(field, amount, options) {
    return (0, $735220c2d4774dd3$export$9a297d111fc86b79)(this, field, amount, options);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return (0, $11d87f3f76e88657$export$83aac07b4c37b25)(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return (0, $fae977aafc393c5c$export$bf79f1ebf4b18792)(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(b2) {
    return this.toDate().getTime() - (0, $11d87f3f76e88657$export$84c95a83c799e074)(b2, this.timeZone).toDate().getTime();
  }
  constructor(...args) {
    (0, _class_private_field_init)(this, $35ea8db9cb2ccb90$var$_type3, {
      writable: true,
      value: void 0
    });
    let [calendar, era, year, month, day] = $35ea8db9cb2ccb90$var$shiftArgs(args);
    let timeZone = args.shift();
    let offset2 = args.shift();
    this.calendar = calendar;
    this.era = era;
    this.year = year;
    this.month = month;
    this.day = day;
    this.timeZone = timeZone;
    this.offset = offset2;
    this.hour = args.shift() || 0;
    this.minute = args.shift() || 0;
    this.second = args.shift() || 0;
    this.millisecond = args.shift() || 0;
    (0, $735220c2d4774dd3$export$c4e2ecac49351ef2)(this);
  }
};
var $7c5f6fbf42389787$var$HOUR_PARTS = 1080;
var $7c5f6fbf42389787$var$DAY_PARTS = 24 * $7c5f6fbf42389787$var$HOUR_PARTS;
var $7c5f6fbf42389787$var$MONTH_DAYS = 29;
var $7c5f6fbf42389787$var$MONTH_FRACT = 12 * $7c5f6fbf42389787$var$HOUR_PARTS + 793;
var $7c5f6fbf42389787$var$MONTH_PARTS = $7c5f6fbf42389787$var$MONTH_DAYS * $7c5f6fbf42389787$var$DAY_PARTS + $7c5f6fbf42389787$var$MONTH_FRACT;
var $fb18d541ea1ad717$var$formatterCache = /* @__PURE__ */ new Map();
var $fb18d541ea1ad717$export$ad991b66133851cf = class {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(value) {
    return this.formatter.format(value);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(value) {
    return this.formatter.formatToParts(value);
  }
  /** Formats a date range as a string. */
  formatRange(start, end) {
    if (typeof this.formatter.formatRange === "function")
      return this.formatter.formatRange(start, end);
    if (end < start)
      throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(start)} – ${this.formatter.format(end)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(start, end) {
    if (typeof this.formatter.formatRangeToParts === "function")
      return this.formatter.formatRangeToParts(start, end);
    if (end < start)
      throw new RangeError("End date must be >= start date");
    let startParts = this.formatter.formatToParts(start);
    let endParts = this.formatter.formatToParts(end);
    return [
      ...startParts.map((p) => ({
        ...p,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...endParts.map((p) => ({
        ...p,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let resolvedOptions = this.formatter.resolvedOptions();
    if ($fb18d541ea1ad717$var$hasBuggyResolvedHourCycle()) {
      if (!this.resolvedHourCycle)
        this.resolvedHourCycle = $fb18d541ea1ad717$var$getResolvedHourCycle(resolvedOptions.locale, this.options);
      resolvedOptions.hourCycle = this.resolvedHourCycle;
      resolvedOptions.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12";
    }
    if (resolvedOptions.calendar === "ethiopic-amete-alem")
      resolvedOptions.calendar = "ethioaa";
    return resolvedOptions;
  }
  constructor(locale, options = {}) {
    this.formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options);
    this.options = options;
  }
};
var $fb18d541ea1ad717$var$hour12Preferences = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function $fb18d541ea1ad717$var$getCachedDateFormatter(locale, options = {}) {
  if (typeof options.hour12 === "boolean" && $fb18d541ea1ad717$var$hasBuggyHour12Behavior()) {
    options = {
      ...options
    };
    let pref = $fb18d541ea1ad717$var$hour12Preferences[String(options.hour12)][locale.split("-")[0]];
    let defaultHourCycle = options.hour12 ? "h12" : "h23";
    options.hourCycle = pref !== null && pref !== void 0 ? pref : defaultHourCycle;
    delete options.hour12;
  }
  let cacheKey = locale + (options ? Object.entries(options).sort((a2, b2) => a2[0] < b2[0] ? -1 : 1).join() : "");
  if ($fb18d541ea1ad717$var$formatterCache.has(cacheKey))
    return $fb18d541ea1ad717$var$formatterCache.get(cacheKey);
  let numberFormatter = new Intl.DateTimeFormat(locale, options);
  $fb18d541ea1ad717$var$formatterCache.set(cacheKey, numberFormatter);
  return numberFormatter;
}
var $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = null;
function $fb18d541ea1ad717$var$hasBuggyHour12Behavior() {
  if ($fb18d541ea1ad717$var$_hasBuggyHour12Behavior == null)
    $fb18d541ea1ad717$var$_hasBuggyHour12Behavior = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: false
    }).format(new Date(2020, 2, 3, 0)) === "24";
  return $fb18d541ea1ad717$var$_hasBuggyHour12Behavior;
}
var $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = null;
function $fb18d541ea1ad717$var$hasBuggyResolvedHourCycle() {
  if ($fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle == null)
    $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle = new Intl.DateTimeFormat("fr", {
      hour: "numeric",
      hour12: false
    }).resolvedOptions().hourCycle === "h12";
  return $fb18d541ea1ad717$var$_hasBuggyResolvedHourCycle;
}
function $fb18d541ea1ad717$var$getResolvedHourCycle(locale, options) {
  if (!options.timeStyle && !options.hour)
    return void 0;
  locale = locale.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
  locale += (locale.includes("-u-") ? "" : "-u") + "-nu-latn";
  let formatter = $fb18d541ea1ad717$var$getCachedDateFormatter(locale, {
    ...options,
    timeZone: void 0
    // use local timezone
  });
  let min2 = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 0)).find((p) => p.type === "hour").value, 10);
  let max2 = parseInt(formatter.formatToParts(new Date(2020, 2, 3, 23)).find((p) => p.type === "hour").value, 10);
  if (min2 === 0 && max2 === 23)
    return "h23";
  if (min2 === 24 && max2 === 23)
    return "h24";
  if (min2 === 0 && max2 === 11)
    return "h11";
  if (min2 === 12 && max2 === 11)
    return "h12";
  throw new Error("Unexpected hour cycle result");
}

// ../../node_modules/.pnpm/radix-vue@1.7.3_vue@3.4.26/node_modules/radix-vue/dist/date.js
function j(t, n) {
  const e = [];
  for (let r = 0; r < t.length; r += n)
    e.push(t.slice(r, r + n));
  return e;
}
function X(t, n) {
  let e;
  return m(n) ? e = $fae977aafc393c5c$export$fd7893f06e92a6a4(t) : O(n) ? e = $fae977aafc393c5c$export$588937bcd60ade55(t) : e = $fae977aafc393c5c$export$6b862160d295c8e(t), e.calendar !== n.calendar ? $11d87f3f76e88657$export$b4a036af3fc0b032(e, n.calendar) : e;
}
function $(t, n = $14e0f24ef4ac5c92$export$aa8b41735afcabd2()) {
  return m(t) ? t.toDate() : t.toDate(n);
}
function O(t) {
  return t instanceof $35ea8db9cb2ccb90$export$ca871e8dbb80966f;
}
function m(t) {
  return t instanceof $35ea8db9cb2ccb90$export$d3b7288e7994edea;
}
function z(t) {
  return O(t) || m(t);
}
function P(t) {
  if (t instanceof Date) {
    const n = t.getFullYear(), e = t.getMonth() + 1;
    return new Date(n, e, 0).getDate();
  } else
    return t.set({ day: 100 }).day;
}
function R(t, n) {
  return t.compare(n) < 0;
}
function W(t, n) {
  return t.compare(n) > 0;
}
function q(t, n) {
  return t.compare(n) <= 0;
}
function G(t, n) {
  return t.compare(n) >= 0;
}
function V(t, n, e) {
  return G(t, n) && q(t, e);
}
function v(t, n, e) {
  return W(t, n) && R(t, e);
}
function H(t, n, e) {
  const r = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(t, e);
  return n > r ? t.subtract({ days: r + 7 - n }) : n === r ? t : t.subtract({ days: r - n });
}
function J(t, n, e) {
  const r = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(t, e), o = n === 0 ? 6 : n - 1;
  return r === o ? t : r > o ? t.add({ days: 7 - r + o }) : t.add({ days: o - r });
}
function b(t, n, e, r) {
  if (e === void 0 && r === void 0)
    return true;
  let o = t.add({ days: 1 });
  if (r != null && r(o) || e != null && e(o))
    return false;
  const s = n;
  for (; o.compare(s) < 0; )
    if (o = o.add({ days: 1 }), r != null && r(o) || e != null && e(o))
      return false;
  return true;
}
function D(t, n) {
  const e = [];
  let r = t.add({ days: 1 });
  const o = n;
  for (; r.compare(o) < 0; )
    e.push(r), r = r.add({ days: 1 });
  return e;
}
function y(t) {
  const { dateObj: n, weekStartsOn: e, fixedWeeks: r, locale: o } = t, s = P(n), a2 = Array.from({ length: s }, (M, u) => n.set({ day: u + 1 })), f = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(n), i = $14e0f24ef4ac5c92$export$a2258d9c4118825c(n), w = H(f, e, o), x = J(i, e, o), g = D(w.subtract({ days: 1 }), f), c = D(i, x.add({ days: 1 })), l = g.length + a2.length + c.length;
  if (r && l < 42) {
    const M = 42 - l;
    let u = c[c.length - 1];
    u || (u = n.add({ months: 1 }).set({ day: 1 }));
    const B = Array.from({ length: M }, (K, C) => {
      const I = C + 1;
      return u.add({ days: I });
    });
    c.push(...B);
  }
  const p = g.concat(a2, c), T2 = j(p, 7);
  return {
    value: n,
    cells: p,
    rows: T2
  };
}
function rt(t) {
  const { numberOfMonths: n, dateObj: e, ...r } = t, o = [];
  if (!n || n === 1)
    return o.push(
      y({
        ...r,
        dateObj: e
      })
    ), o;
  o.push(
    y({
      ...r,
      dateObj: e
    })
  );
  for (let s = 1; s < n; s++) {
    const a2 = e.add({ months: s });
    o.push(
      y({
        ...r,
        dateObj: a2
      })
    );
  }
  return o;
}

// ../../node_modules/.pnpm/@floating-ui+utils@0.2.1/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v2) => ({
  x: v2,
  y: v2
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr2 = ["left", "right"];
  const rl2 = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl2 : lr2;
      return isStart ? lr2 : rl2;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

// ../../node_modules/.pnpm/@floating-ui+core@1.6.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn: fn2
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn2({
      x,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y: y2
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y: y2,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y3
            } = _ref;
            return {
              x: x2,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y: y2
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y2
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y: y2,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y: y2
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// ../../node_modules/.pnpm/@floating-ui+utils@0.2.1/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// ../../node_modules/.pnpm/@floating-ui+dom@1.6.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x = ($2 ? round(rect.width) : rect.width) / width;
  let y2 = ($2 ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x,
    y: y2
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y2 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y: y2
  });
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(floating) {
  return topLayerSelectors.some((selector) => {
    try {
      return floating.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el2) => isElement(el2) && getNodeName(el2) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y2 = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y: y2,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element) || isTopLayer(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(data.floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io2 = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io2) == null || _io.disconnect();
    io2 = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io2 = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io2 = new IntersectionObserver(handleObserve, options);
    }
    io2.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// ../../node_modules/.pnpm/@floating-ui+vue@1.0.6_vue@3.4.26/node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function isComponentPublicInstance(target) {
  return target != null && typeof target === "object" && "$el" in target;
}
function unwrapElement2(target) {
  if (isComponentPublicInstance(target)) {
    const element = target.$el;
    return isNode(element) && getNodeName(element) === "#comment" ? null : element;
  }
  return target;
}
function arrow3(options) {
  return {
    name: "arrow",
    options,
    fn(args) {
      const element = unwrapElement2(unref(options.element));
      if (element == null) {
        return {};
      }
      return arrow2({
        element,
        padding: options.padding
      }).fn(args);
    }
  };
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useFloating(reference, floating, options) {
  if (options === void 0) {
    options = {};
  }
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = computed(() => {
    var _unref;
    return (_unref = unref(options.open)) != null ? _unref : true;
  });
  const middlewareOption = computed(() => unref(options.middleware));
  const placementOption = computed(() => {
    var _unref2;
    return (_unref2 = unref(options.placement)) != null ? _unref2 : "bottom";
  });
  const strategyOption = computed(() => {
    var _unref3;
    return (_unref3 = unref(options.strategy)) != null ? _unref3 : "absolute";
  });
  const transformOption = computed(() => {
    var _unref4;
    return (_unref4 = unref(options.transform)) != null ? _unref4 : true;
  });
  const referenceElement = computed(() => unwrapElement2(reference.value));
  const floatingElement = computed(() => unwrapElement2(floating.value));
  const x = ref(0);
  const y2 = ref(0);
  const strategy = ref(strategyOption.value);
  const placement = ref(placementOption.value);
  const middlewareData = shallowRef({});
  const isPositioned = ref(false);
  const floatingStyles = computed(() => {
    const initialStyles = {
      position: strategy.value,
      left: "0",
      top: "0"
    };
    if (!floatingElement.value) {
      return initialStyles;
    }
    const xVal = roundByDPR(floatingElement.value, x.value);
    const yVal = roundByDPR(floatingElement.value, y2.value);
    if (transformOption.value) {
      return {
        ...initialStyles,
        transform: "translate(" + xVal + "px, " + yVal + "px)",
        ...getDPR(floatingElement.value) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy.value,
      left: xVal + "px",
      top: yVal + "px"
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return;
    }
    computePosition2(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value
    }).then((position) => {
      x.value = position.x;
      y2.value = position.y;
      strategy.value = position.strategy;
      placement.value = position.placement;
      middlewareData.value = position.middlewareData;
      isPositioned.value = true;
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
      return;
    }
  }
  function reset() {
    if (!openOption.value) {
      isPositioned.value = false;
    }
  }
  watch([middlewareOption, placementOption, strategyOption], update, {
    flush: "sync"
  });
  watch([referenceElement, floatingElement], attach, {
    flush: "sync"
  });
  watch(openOption, reset, {
    flush: "sync"
  });
  if (getCurrentScope()) {
    onScopeDispose(cleanup);
  }
  return {
    x: shallowReadonly(x),
    y: shallowReadonly(y2),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    floatingStyles,
    update
  };
}

// ../../node_modules/.pnpm/radix-vue@1.7.3_vue@3.4.26/node_modules/radix-vue/dist/index.js
function Q(a2, t) {
  const e = typeof a2 == "string" && !t ? `${a2}Context` : t, n = Symbol(e);
  return [(r) => {
    const i = inject(n, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a2) ? `one of the following components: ${a2.join(
        ", "
      )}` : `\`${a2}\``}`
    );
  }, (r) => (provide(n, r), r)];
}
function Da(a2, t, e) {
  const n = e.originalEvent.target, l = new CustomEvent(a2, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && n.addEventListener(a2, t, { once: true }), n.dispatchEvent(l);
}
var la = typeof document < "u";
function lr(a2, t) {
  if (a2.length !== t.length)
    return false;
  for (let e = 0; e < a2.length; e++)
    if (a2[e] !== t[e])
      return false;
  return true;
}
function Ot(a2) {
  const { defaultValue: t, defaultPlaceholder: e, granularity: n = "day" } = a2;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (e)
    return e.copy();
  const l = /* @__PURE__ */ new Date(), s = l.getFullYear(), r = l.getMonth() + 1, i = l.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(s, r, i, 0, 0, 0) : new $35ea8db9cb2ccb90$export$99faa760c7908e4f(s, r, i);
}
var sr = [
  "ach",
  "af",
  "am",
  "an",
  "ar",
  "ast",
  "az",
  "be",
  "bg",
  "bn",
  "br",
  "bs",
  "ca",
  "cak",
  "ckb",
  "cs",
  "cy",
  "da",
  "de",
  "dsb",
  "el",
  "en",
  "eo",
  "es",
  "et",
  "eu",
  "fa",
  "ff",
  "fi",
  "fr",
  "fy",
  "ga",
  "gd",
  "gl",
  "he",
  "hr",
  "hsb",
  "hu",
  "ia",
  "id",
  "it",
  "ja",
  "ka",
  "kk",
  "kn",
  "ko",
  "lb",
  "lo",
  "lt",
  "lv",
  "meh",
  "ml",
  "ms",
  "nl",
  "nn",
  "no",
  "oc",
  "pl",
  "pt",
  "rm",
  "ro",
  "ru",
  "sc",
  "scn",
  "sk",
  "sl",
  "sr",
  "sv",
  "szl",
  "tg",
  "th",
  "tr",
  "uk",
  "zh-CN",
  "zh-TW"
];
var rr = ["year", "month", "day"];
var en = {
  ach: { year: "mwaka", month: "dwe", day: "nino" },
  af: { year: "jjjj", month: "mm", day: "dd" },
  am: { year: "ዓዓዓዓ", month: "ሚሜ", day: "ቀቀ" },
  an: { year: "aaaa", month: "mm", day: "dd" },
  ar: { year: "سنة", month: "شهر", day: "يوم" },
  ast: { year: "aaaa", month: "mm", day: "dd" },
  az: { year: "iiii", month: "aa", day: "gg" },
  be: { year: "гггг", month: "мм", day: "дд" },
  bg: { year: "гггг", month: "мм", day: "дд" },
  bn: { year: "yyyy", month: "মিমি", day: "dd" },
  br: { year: "bbbb", month: "mm", day: "dd" },
  bs: { year: "gggg", month: "mm", day: "dd" },
  ca: { year: "aaaa", month: "mm", day: "dd" },
  cak: { year: "jjjj", month: "ii", day: "q'q'" },
  ckb: { year: "ساڵ", month: "مانگ", day: "ڕۆژ" },
  cs: { year: "rrrr", month: "mm", day: "dd" },
  cy: { year: "bbbb", month: "mm", day: "dd" },
  da: { year: "åååå", month: "mm", day: "dd" },
  de: { year: "jjjj", month: "mm", day: "tt" },
  dsb: { year: "llll", month: "mm", day: "źź" },
  el: { year: "εεεε", month: "μμ", day: "ηη" },
  en: { year: "yyyy", month: "mm", day: "dd" },
  eo: { year: "jjjj", month: "mm", day: "tt" },
  es: { year: "aaaa", month: "mm", day: "dd" },
  et: { year: "aaaa", month: "kk", day: "pp" },
  eu: { year: "uuuu", month: "hh", day: "ee" },
  fa: { year: "سال", month: "ماه", day: "روز" },
  ff: { year: "hhhh", month: "ll", day: "ññ" },
  fi: { year: "vvvv", month: "kk", day: "pp" },
  fr: { year: "aaaa", month: "mm", day: "jj" },
  fy: { year: "jjjj", month: "mm", day: "dd" },
  ga: { year: "bbbb", month: "mm", day: "ll" },
  gd: { year: "bbbb", month: "mm", day: "ll" },
  gl: { year: "aaaa", month: "mm", day: "dd" },
  he: { year: "שנה", month: "חודש", day: "יום" },
  hr: { year: "gggg", month: "mm", day: "dd" },
  hsb: { year: "llll", month: "mm", day: "dd" },
  hu: { year: "éééé", month: "hh", day: "nn" },
  ia: { year: "aaaa", month: "mm", day: "dd" },
  id: { year: "tttt", month: "bb", day: "hh" },
  it: { year: "aaaa", month: "mm", day: "gg" },
  ja: { year: " 年 ", month: "月", day: "日" },
  ka: { year: "წწწწ", month: "თთ", day: "რრ" },
  kk: { year: "жжжж", month: "аа", day: "кк" },
  kn: { year: "ವವವವ", month: "ಮಿಮೀ", day: "ದಿದಿ" },
  ko: { year: "연도", month: "월", day: "일" },
  lb: { year: "jjjj", month: "mm", day: "dd" },
  lo: { year: "ປປປປ", month: "ດດ", day: "ວວ" },
  lt: { year: "mmmm", month: "mm", day: "dd" },
  lv: { year: "gggg", month: "mm", day: "dd" },
  meh: { year: "aaaa", month: "mm", day: "dd" },
  ml: { year: "വർഷം", month: "മാസം", day: "തീയതി" },
  ms: { year: "tttt", month: "mm", day: "hh" },
  nl: { year: "jjjj", month: "mm", day: "dd" },
  nn: { year: "åååå", month: "mm", day: "dd" },
  no: { year: "åååå", month: "mm", day: "dd" },
  oc: { year: "aaaa", month: "mm", day: "jj" },
  pl: { year: "rrrr", month: "mm", day: "dd" },
  pt: { year: "aaaa", month: "mm", day: "dd" },
  rm: { year: "oooo", month: "mm", day: "dd" },
  ro: { year: "aaaa", month: "ll", day: "zz" },
  ru: { year: "гггг", month: "мм", day: "дд" },
  sc: { year: "aaaa", month: "mm", day: "dd" },
  scn: { year: "aaaa", month: "mm", day: "jj" },
  sk: { year: "rrrr", month: "mm", day: "dd" },
  sl: { year: "llll", month: "mm", day: "dd" },
  sr: { year: "гггг", month: "мм", day: "дд" },
  sv: { year: "åååå", month: "mm", day: "dd" },
  szl: { year: "rrrr", month: "mm", day: "dd" },
  tg: { year: "сссс", month: "мм", day: "рр" },
  th: { year: "ปปปป", month: "ดด", day: "วว" },
  tr: { year: "yyyy", month: "aa", day: "gg" },
  uk: { year: "рррр", month: "мм", day: "дд" },
  "zh-CN": { year: "年", month: "月", day: "日" },
  "zh-TW": { year: "年", month: "月", day: "日" }
};
function ir(a2) {
  if (xo(a2))
    return en[a2];
  {
    const t = pr(a2);
    return xo(t) ? en[t] : en.en;
  }
}
function tn(a2, t, e) {
  return ur(a2) ? ir(e)[a2] : cr(a2) ? t : dr(a2) ? "––" : "";
}
function xo(a2) {
  return sr.includes(a2);
}
function ur(a2) {
  return rr.includes(a2);
}
function dr(a2) {
  return a2 === "hour" || a2 === "minute" || a2 === "second";
}
function cr(a2) {
  return a2 === "era" || a2 === "dayPeriod";
}
function pr(a2) {
  return Intl.Locale ? new Intl.Locale(a2).language : a2.split("-")[0];
}
var $n = ["day", "month", "year"];
var el = ["hour", "minute", "second", "dayPeriod"];
var tl = [...$n, ...el];
function fr(a2) {
  return $n.includes(a2);
}
function al(a2) {
  return tl.includes(a2);
}
function vr(a2, t) {
  const e = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
    hourCycle: t === 24 ? "h24" : void 0,
    hour12: t === 24 ? false : void 0
  };
  return a2 === "day" && (delete e.second, delete e.hour, delete e.minute, delete e.timeZoneName), a2 === "hour" && (delete e.minute, delete e.second), a2 === "minute" && delete e.second, e;
}
function nl(a2) {
  const t = a2.querySelector("[data-selected]");
  if (t)
    return t.focus();
  const e = a2.querySelector("[data-today]");
  if (e)
    return e.focus();
  const n = a2.querySelector("[data-radix-vue-calendar-day]");
  if (n)
    return n.focus();
}
function mr(a2, t) {
  var e;
  const n = shallowRef();
  return watchEffect(() => {
    n.value = a2();
  }, {
    ...t,
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  }), readonly(n);
}
function hr(a2, t) {
  let e, n, l;
  const s = ref(true), r = () => {
    s.value = true, l();
  };
  watch(a2, r, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = customRef((c, p) => (n = c, l = p, {
    get() {
      return s.value && (e = i(), s.value = false), n(), e;
    },
    set(f) {
      u == null || u(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function dt(a2) {
  return getCurrentScope() ? (onScopeDispose(a2), true) : false;
}
function pn() {
  const a2 = /* @__PURE__ */ new Set(), t = (l) => {
    a2.delete(l);
  };
  return {
    on: (l) => {
      a2.add(l);
      const s = () => t(l);
      return dt(s), {
        off: s
      };
    },
    off: t,
    trigger: (...l) => Promise.all(Array.from(a2).map((s) => s(...l)))
  };
}
function yr(a2) {
  let t = false, e;
  const n = effectScope(true);
  return (...l) => (t || (e = n.run(() => a2(...l)), t = true), e);
}
function gr(a2) {
  let t = 0, e, n;
  const l = () => {
    t -= 1, n && t <= 0 && (n.stop(), e = void 0, n = void 0);
  };
  return (...s) => (t += 1, e || (n = effectScope(true), e = n.run(() => a2(...s))), dt(l), e);
}
function Ne(a2) {
  return typeof a2 == "function" ? a2() : unref(a2);
}
var Je = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var br = (a2) => typeof a2 < "u";
var Cr = (a2) => a2 != null;
var wr = Object.prototype.toString;
var _r = (a2) => wr.call(a2) === "[object Object]";
var So = (a2, t, e) => Math.min(e, Math.max(t, a2));
var Jt = () => {
};
var Po = xr();
function xr() {
  var a2, t;
  return Je && ((a2 = window == null ? void 0 : window.navigator) == null ? void 0 : a2.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Sr(a2, t) {
  function e(...n) {
    return new Promise((l, s) => {
      Promise.resolve(a2(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(l).catch(s);
    });
  }
  return e;
}
function Pr(a2, t = {}) {
  let e, n, l = Jt;
  const s = (i) => {
    clearTimeout(i), l(), l = Jt;
  };
  return (i) => {
    const u = Ne(a2), d = Ne(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (n && (s(n), n = null), Promise.resolve(i())) : new Promise((c, p) => {
      l = t.rejectOnCancel ? p : c, d && !n && (n = setTimeout(() => {
        e && s(e), n = null, c(i());
      }, d)), e = setTimeout(() => {
        n && s(n), n = null, c(i());
      }, u);
    });
  };
}
function ol(a2) {
  return a2 || getCurrentInstance();
}
function Er(...a2) {
  if (a2.length !== 1)
    return toRef(...a2);
  const t = a2[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: Jt }))) : ref(t);
}
function kt(a2, t = 1e4) {
  return customRef((e, n) => {
    let l = Ne(a2), s;
    const r = () => setTimeout(() => {
      l = Ne(a2), n();
    }, Ne(t));
    return dt(() => {
      clearTimeout(s);
    }), {
      get() {
        return e(), l;
      },
      set(i) {
        l = i, n(), clearTimeout(s), s = r();
      }
    };
  });
}
function Bn(a2, t = 200, e = {}) {
  return Sr(
    Pr(t, e),
    a2
  );
}
function Dr(a2, t) {
  ol(t) && onBeforeUnmount(a2, t);
}
function $r(a2, t = true, e) {
  ol() ? onMounted(a2, e) : t ? a2() : nextTick(a2);
}
function Tn(a2, t, e = {}) {
  const {
    immediate: n = true
  } = e, l = ref(false);
  let s = null;
  function r() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    l.value = false, r();
  }
  function u(...d) {
    r(), l.value = true, s = setTimeout(() => {
      l.value = false, s = null, a2(...d);
    }, Ne(t));
  }
  return n && (l.value = true, Je && u()), dt(i), {
    isPending: readonly(l),
    start: u,
    stop: i
  };
}
function Br(a2 = 1e3, t = {}) {
  const {
    controls: e = false,
    callback: n
  } = t, l = Tn(
    n ?? Jt,
    a2,
    t
  ), s = computed(() => !l.isPending.value);
  return e ? {
    ready: s,
    ...l
  } : s;
}
function Tr(a2, t, e) {
  const n = watch(a2, (...l) => (nextTick(() => n()), t(...l)), e);
  return n;
}
function Be(a2) {
  var t;
  const e = Ne(a2);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var Mt = Je ? window : void 0;
function it(...a2) {
  let t, e, n, l;
  if (typeof a2[0] == "string" || Array.isArray(a2[0]) ? ([e, n, l] = a2, t = Mt) : [t, e, n, l] = a2, !t)
    return Jt;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, f, v2) => (c.addEventListener(p, f, v2), () => c.removeEventListener(p, f, v2)), u = watch(
    () => [Be(t), Ne(l)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const f = _r(p) ? { ...p } : p;
      s.push(
        ...e.flatMap((v2) => n.map((y2) => i(c, v2, y2, f)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), r();
  };
  return dt(d), d;
}
function Ir(a2) {
  return typeof a2 == "function" ? a2 : typeof a2 == "string" ? (t) => t.key === a2 : Array.isArray(a2) ? (t) => a2.includes(t.key) : () => true;
}
function In(...a2) {
  let t, e, n = {};
  a2.length === 3 ? (t = a2[0], e = a2[1], n = a2[2]) : a2.length === 2 ? typeof a2[1] == "object" ? (t = true, e = a2[0], n = a2[1]) : (t = a2[0], e = a2[1]) : (t = true, e = a2[0]);
  const {
    target: l = Mt,
    eventName: s = "keydown",
    passive: r = false,
    dedupe: i = false
  } = n, u = Ir(t);
  return it(l, s, (c) => {
    c.repeat && Ne(i) || u(c) && e(c);
  }, r);
}
function Rr(a2 = {}) {
  var t;
  const {
    window: e = Mt,
    deep: n = true
  } = a2, l = (t = a2.document) != null ? t : e == null ? void 0 : e.document, s = () => {
    var u;
    let d = l == null ? void 0 : l.activeElement;
    if (n)
      for (; d != null && d.shadowRoot; )
        d = (u = d == null ? void 0 : d.shadowRoot) == null ? void 0 : u.activeElement;
    return d;
  }, r = ref(), i = () => {
    r.value = s();
  };
  return e && (it(e, "blur", (u) => {
    u.relatedTarget === null && i();
  }, true), it(e, "focus", i, true)), i(), r;
}
function $a() {
  const a2 = ref(false), t = getCurrentInstance();
  return t && onMounted(() => {
    a2.value = true;
  }, t), a2;
}
function ll(a2) {
  const t = $a();
  return computed(() => (t.value, !!a2()));
}
function sl(a2, t = {}) {
  const {
    immediate: e = true,
    fpsLimit: n = void 0,
    window: l = Mt
  } = t, s = ref(false), r = n ? 1e3 / n : null;
  let i = 0, u = null;
  function d(f) {
    if (!s.value || !l)
      return;
    i || (i = f);
    const v2 = f - i;
    if (r && v2 < r) {
      u = l.requestAnimationFrame(d);
      return;
    }
    i = f, a2({ delta: v2, timestamp: f }), u = l.requestAnimationFrame(d);
  }
  function c() {
    !s.value && l && (s.value = true, i = 0, u = l.requestAnimationFrame(d));
  }
  function p() {
    s.value = false, u != null && l && (l.cancelAnimationFrame(u), u = null);
  }
  return e && c(), dt(p), {
    isActive: readonly(s),
    pause: p,
    resume: c
  };
}
function Ar(a2) {
  return JSON.parse(JSON.stringify(a2));
}
function Or(a2, t, e = {}) {
  const { window: n = Mt, ...l } = e;
  let s;
  const r = ll(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = computed(() => {
    const f = Ne(a2), v2 = (Array.isArray(f) ? f : [f]).map(Be).filter(Cr);
    return new Set(v2);
  }), d = watch(
    () => u.value,
    (f) => {
      i(), r.value && n && f.size && (s = new MutationObserver(t), f.forEach((v2) => s.observe(v2, l)));
    },
    { immediate: true, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), d();
  };
  return dt(p), {
    isSupported: r,
    stop: p,
    takeRecords: c
  };
}
function kr(a2) {
  const t = getCurrentInstance(), e = hr(
    () => null,
    () => a2 ? Be(a2) : t.proxy.$el
  );
  return onUpdated(e.trigger), onMounted(e.trigger), e;
}
function Ge(a2, t, e = {}) {
  const { window: n = Mt, ...l } = e;
  let s;
  const r = ll(() => n && "ResizeObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = computed(() => Array.isArray(a2) ? a2.map((p) => Be(p)) : [Be(a2)]), d = watch(
    u,
    (p) => {
      if (i(), r.value && n) {
        s = new ResizeObserver(t);
        for (const f of p)
          f && s.observe(f, l);
      }
    },
    { immediate: true, flush: "post" }
  ), c = () => {
    i(), d();
  };
  return dt(c), {
    isSupported: r,
    stop: c
  };
}
function Mr(a2, t = {}) {
  const e = Rr(t), n = computed(() => Be(a2));
  return { focused: computed(() => n.value && e.value ? n.value.contains(e.value) : false) };
}
function Vr(a2 = kr()) {
  const t = shallowRef(), e = () => {
    const n = Be(a2);
    n && (t.value = n.parentElement);
  };
  return $r(e), watch(() => Ne(a2), e), t;
}
function Fr(a2, t) {
  const e = shallowRef(t);
  return watch(
    Er(a2),
    (n, l) => {
      e.value = l;
    },
    { flush: "sync" }
  ), readonly(e);
}
function ne(a2, t, e, n = {}) {
  var l, s, r;
  const {
    clone: i = false,
    passive: u = false,
    eventName: d,
    deep: c = false,
    defaultValue: p,
    shouldEmit: f
  } = n, v2 = getCurrentInstance(), y2 = e || (v2 == null ? void 0 : v2.emit) || ((l = v2 == null ? void 0 : v2.$emit) == null ? void 0 : l.bind(v2)) || ((r = (s = v2 == null ? void 0 : v2.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(v2 == null ? void 0 : v2.proxy));
  let m2 = d;
  t || (t = "modelValue"), m2 = m2 || `update:${t.toString()}`;
  const x = (g) => i ? typeof i == "function" ? i(g) : Ar(g) : g, P2 = () => br(a2[t]) ? x(a2[t]) : p, D2 = (g) => {
    f ? f(g) && y2(m2, g) : y2(m2, g);
  };
  if (u) {
    const g = P2(), S = ref(g);
    let E = false;
    return watch(
      () => a2[t],
      ($2) => {
        E || (E = true, S.value = x($2), nextTick(() => E = false));
      }
    ), watch(
      S,
      ($2) => {
        !E && ($2 !== a2[t] || c) && D2($2);
      },
      { deep: c }
    ), S;
  } else
    return computed({
      get() {
        return P2();
      },
      set(g) {
        D2(g);
      }
    });
}
function Ba(a2) {
  return a2 ? a2.flatMap((t) => t.type === Fragment ? Ba(t.children) : [t]) : [];
}
var Lr = ["INPUT", "TEXTAREA"];
function Vt(a2, t, e, n = {}) {
  if (!t || n.enableIgnoredElement && Lr.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: l = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = true,
    dir: u = "ltr",
    preventScroll: d = true,
    focus: c = false
  } = n, [p, f, v2, y2, m2, x] = [
    a2.key === "ArrowRight",
    a2.key === "ArrowLeft",
    a2.key === "ArrowUp",
    a2.key === "ArrowDown",
    a2.key === "Home",
    a2.key === "End"
  ], P2 = v2 || y2, D2 = p || f;
  if (!m2 && !x && (!P2 && !D2 || l === "vertical" && D2 || l === "horizontal" && P2))
    return null;
  const g = e ? Array.from(e.querySelectorAll(s)) : r;
  if (!g.length)
    return null;
  d && a2.preventDefault();
  let S = null;
  return D2 || P2 ? S = rl(g, t, {
    goForward: P2 ? y2 : u === "ltr" ? p : f,
    loop: i
  }) : m2 ? S = g.at(0) || null : x && (S = g.at(-1) || null), c && (S == null || S.focus()), S;
}
function rl(a2, t, { goForward: e, loop: n }, l = a2.length) {
  if (--l === 0)
    return null;
  const s = a2.indexOf(t), r = e ? s + 1 : s - 1;
  if (!n && (r < 0 || r >= a2.length))
    return null;
  const i = (r + a2.length) % a2.length, u = a2[i];
  return u ? u.hasAttribute("disabled") && u.getAttribute("disabled") !== "false" ? rl(
    a2,
    u,
    { goForward: e, loop: n },
    l
  ) : u : null;
}
function an(a2) {
  if (a2 === null || typeof a2 != "object")
    return false;
  const t = Object.getPrototypeOf(a2);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in a2 ? false : Symbol.toStringTag in a2 ? Object.prototype.toString.call(a2) === "[object Module]" : true;
}
function fn(a2, t, e = ".", n) {
  if (!an(t))
    return fn(a2, {}, e, n);
  const l = Object.assign({}, t);
  for (const s in a2) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = a2[s];
    r != null && (n && n(l, s, r, e) || (Array.isArray(r) && Array.isArray(l[s]) ? l[s] = [...r, ...l[s]] : an(r) && an(l[s]) ? l[s] = fn(
      r,
      l[s],
      (e ? `${e}.` : "") + s.toString(),
      n
    ) : l[s] = r));
  }
  return l;
}
function Nr(a2) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((e, n) => fn(e, n, "", a2), {})
  );
}
var zr = Nr();
var [Rn, Kr] = Q("ConfigProvider");
var yf = defineComponent({
  __name: "ConfigProvider",
  props: {
    dir: { default: "ltr" },
    scrollBody: { type: [Boolean, Object], default: true },
    useId: { type: Function, default: void 0 }
  },
  setup(a2) {
    const t = a2, { dir: e, scrollBody: n } = toRefs(t);
    return Kr({
      dir: e,
      scrollBody: n,
      useId: t.useId
    }), (l, s) => renderSlot(l.$slots, "default");
  }
});
var Hr = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var Wr = (a2 = 21) => {
  let t = "", e = a2;
  for (; e--; )
    t += Hr[Math.random() * 64 | 0];
  return t;
};
var jr = gr(() => {
  const a2 = ref(/* @__PURE__ */ new Map()), t = ref(), e = computed(() => {
    for (const r of a2.value.values())
      if (r)
        return true;
    return false;
  }), n = Rn({
    scrollBody: ref(true)
  });
  let l = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Po && (l == null || l()), t.value = void 0;
  };
  return watch(e, (r, i) => {
    var p;
    if (!Je)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (p = n.scrollBody) != null && p.value ? typeof n.scrollBody.value == "object" ? zr({
      padding: n.scrollBody.value.padding === true ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === true ? u : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = `${c.padding}px`, document.body.style.marginRight = `${c.margin}px`, document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Po && (l = it(
      document,
      "touchmove",
      (f) => {
        var v2;
        f.target === document.documentElement && (f.touches.length > 1 || (v2 = f.preventDefault) == null || v2.call(f));
      },
      { passive: false }
    )), nextTick(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: true, flush: "sync" }), a2;
});
function sa(a2) {
  const t = Wr(6), e = jr();
  e.value.set(t, a2 ?? false);
  const n = computed({
    get: () => e.value.get(t) ?? false,
    set: (l) => e.value.set(t, l)
  });
  return Dr(() => {
    e.value.delete(t);
  }), n;
}
var Ur = "data-radix-vue-collection-item";
function Re(a2, t = Ur) {
  const e = a2 ?? Symbol();
  return { createCollection: (s) => {
    const r = ref([]);
    function i() {
      const u = Be(s);
      return u ? r.value = Array.from(
        u.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return onBeforeUpdate(() => {
      r.value = [];
    }), onMounted(i), onUpdated(i), watch(() => s == null ? void 0 : s.value, i, { immediate: true }), provide(e, r), r;
  }, injectCollection: () => inject(e, ref([])) };
}
function An(a2) {
  const t = ref(a2);
  function e() {
    return t.value;
  }
  function n(m2) {
    t.value = m2;
  }
  function l(m2, x) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, x).format(m2);
  }
  function s(m2, x = true) {
    return z(m2) && x ? l($(m2), {
      dateStyle: "long",
      timeStyle: "long"
    }) : l($(m2), {
      dateStyle: "long"
    });
  }
  function r(m2, x = {}) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { month: "long", year: "numeric", ...x }).format(m2);
  }
  function i(m2, x = {}) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { month: "long", ...x }).format(m2);
  }
  function u() {
    const m2 = $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((P2) => ({ label: i($(m2.set({ month: P2 }))), value: P2 }));
  }
  function d(m2, x = {}) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { year: "numeric", ...x }).format(m2);
  }
  function c(m2, x) {
    return m(m2) ? new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, {
      ...x,
      timeZone: m2.timeZone
    }).formatToParts($(m2)) : new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, x).formatToParts($(m2));
  }
  function p(m2, x = "narrow") {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { weekday: x }).format(m2);
  }
  function f(m2) {
    var D2;
    return ((D2 = new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(m2).find((g) => g.type === "dayPeriod")) == null ? void 0 : D2.value) === "PM" ? "PM" : "AM";
  }
  const v2 = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function y2(m2, x, P2 = {}) {
    const D2 = { ...v2, ...P2 }, S = c(m2, D2).find((E) => E.type === x);
    return S ? S.value : "";
  }
  return {
    setLocale: n,
    getLocale: e,
    fullMonth: i,
    fullYear: d,
    fullMonthAndYear: r,
    toParts: c,
    custom: l,
    part: y2,
    dayPeriod: f,
    selectedDate: s,
    dayOfWeek: p,
    getMonths: u
  };
}
function be(a2) {
  const t = Rn({
    dir: ref("ltr")
  });
  return computed(() => {
    var e;
    return (a2 == null ? void 0 : a2.value) || ((e = t.dir) == null ? void 0 : e.value) || "ltr";
  });
}
function Ie(a2) {
  const t = getCurrentInstance(), e = t == null ? void 0 : t.type.emits, n = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((l) => {
    n[toHandlerKey(camelize(l))] = (...s) => a2(l, ...s);
  }), n;
}
var nn = 0;
function On() {
  watchEffect((a2) => {
    if (!Je)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Eo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Eo()
    ), nn++, a2(() => {
      nn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), nn--;
    });
  });
}
function Eo() {
  const a2 = document.createElement("span");
  return a2.setAttribute("data-radix-focus-guard", ""), a2.tabIndex = 0, a2.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", a2;
}
function ct(a2) {
  return computed(() => {
    var t;
    return Ne(a2) ? !!((t = Be(a2)) != null && t.closest("form")) : true;
  });
}
function _t(a2) {
  const t = getCurrentInstance(), e = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((l, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (l[s] = r), l;
  }, {}), n = toRef(a2);
  return computed(() => {
    const l = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      l[camelize(r)] = s[r];
    }), Object.keys({ ...e, ...l }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function _e(a2, t) {
  const e = _t(a2), n = t ? Ie(t) : {};
  return computed(() => ({
    ...e.value,
    ...n
  }));
}
function T() {
  const a2 = getCurrentInstance(), t = ref(), e = computed(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Be(t);
  }), n = Object.assign({}, a2.exposed), l = {};
  for (const r in a2.props)
    Object.defineProperty(l, r, {
      enumerable: true,
      configurable: true,
      get: () => a2.props[r]
    });
  if (Object.keys(n).length > 0)
    for (const r in n)
      Object.defineProperty(l, r, {
        enumerable: true,
        configurable: true,
        get: () => n[r]
      });
  Object.defineProperty(l, "$el", {
    enumerable: true,
    configurable: true,
    get: () => a2.vnode.el
  }), a2.exposed = l;
  function s(r) {
    t.value = r, !(r instanceof Element || !r) && (Object.defineProperty(l, "$el", {
      enumerable: true,
      configurable: true,
      get: () => r.$el
    }), a2.exposed = l);
  }
  return { forwardRef: s, currentRef: t, currentElement: e };
}
function il(a2, t) {
  const e = kt(false, 300), n = ref(null), l = pn();
  function s() {
    n.value = null, e.value = false;
  }
  function r(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = Gr(c, d.getBoundingClientRect()), f = qr(c, p), v2 = Yr(u.getBoundingClientRect()), y2 = Zr([...f, ...v2]);
    n.value = y2, e.value = true;
  }
  return watchEffect((i) => {
    if (a2.value && t.value) {
      const u = (c) => r(c, t.value), d = (c) => r(c, a2.value);
      a2.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = a2.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), watchEffect((i) => {
    if (n.value) {
      const u = (d) => {
        var y2, m2;
        if (!n.value)
          return;
        const c = d.target, p = { x: d.clientX, y: d.clientY }, f = ((y2 = a2.value) == null ? void 0 : y2.contains(c)) || ((m2 = t.value) == null ? void 0 : m2.contains(c)), v2 = !Xr(p, n.value);
        f ? s() : v2 && (s(), l.trigger());
      };
      document.addEventListener("pointermove", u), i(() => document.removeEventListener("pointermove", u));
    }
  }), {
    isPointerInTransit: e,
    onPointerExit: l.on
  };
}
function Gr(a2, t) {
  const e = Math.abs(t.top - a2.y), n = Math.abs(t.bottom - a2.y), l = Math.abs(t.right - a2.x), s = Math.abs(t.left - a2.x);
  switch (Math.min(e, n, l, s)) {
    case s:
      return "left";
    case l:
      return "right";
    case e:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function qr(a2, t, e = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: a2.x - e, y: a2.y + e },
        { x: a2.x + e, y: a2.y + e }
      );
      break;
    case "bottom":
      n.push(
        { x: a2.x - e, y: a2.y - e },
        { x: a2.x + e, y: a2.y - e }
      );
      break;
    case "left":
      n.push(
        { x: a2.x + e, y: a2.y - e },
        { x: a2.x + e, y: a2.y + e }
      );
      break;
    case "right":
      n.push(
        { x: a2.x - e, y: a2.y - e },
        { x: a2.x - e, y: a2.y + e }
      );
      break;
  }
  return n;
}
function Yr(a2) {
  const { top: t, right: e, bottom: n, left: l } = a2;
  return [
    { x: l, y: t },
    { x: e, y: t },
    { x: e, y: n },
    { x: l, y: n }
  ];
}
function Xr(a2, t) {
  const { x: e, y: n } = a2;
  let l = false;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function Zr(a2) {
  const t = a2.slice();
  return t.sort((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0), Jr(t);
}
function Jr(a2) {
  if (a2.length <= 1)
    return a2.slice();
  const t = [];
  for (let n = 0; n < a2.length; n++) {
    const l = a2[n];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], r = t[t.length - 2];
      if ((s.x - r.x) * (l.y - r.y) >= (s.y - r.y) * (l.x - r.x))
        t.pop();
      else
        break;
    }
    t.push(l);
  }
  t.pop();
  const e = [];
  for (let n = a2.length - 1; n >= 0; n--) {
    const l = a2[n];
    for (; e.length >= 2; ) {
      const s = e[e.length - 1], r = e[e.length - 2];
      if ((s.x - r.x) * (l.y - r.y) >= (s.y - r.y) * (l.x - r.x))
        e.pop();
      else
        break;
    }
    e.push(l);
  }
  return e.pop(), t.length === 1 && e.length === 1 && t[0].x === e[0].x && t[0].y === e[0].y ? t : t.concat(e);
}
var Qr = function(a2) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(a2) ? a2[0] : a2;
  return t.ownerDocument.body;
};
var $t = /* @__PURE__ */ new WeakMap();
var da = /* @__PURE__ */ new WeakMap();
var ca = {};
var on = 0;
var ul = function(a2) {
  return a2 && (a2.host || ul(a2.parentNode));
};
var ei = function(a2, t) {
  return t.map(function(e) {
    if (a2.contains(e))
      return e;
    var n = ul(e);
    return n && a2.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", a2, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
};
var ti = function(a2, t, e, n) {
  var l = ei(t, Array.isArray(a2) ? a2 : [a2]);
  ca[e] || (ca[e] = /* @__PURE__ */ new WeakMap());
  var s = ca[e], r = [], i = /* @__PURE__ */ new Set(), u = new Set(l), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  l.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else {
        var v2 = f.getAttribute(n), y2 = v2 !== null && v2 !== "false", m2 = ($t.get(f) || 0) + 1, x = (s.get(f) || 0) + 1;
        $t.set(f, m2), s.set(f, x), r.push(f), m2 === 1 && y2 && da.set(f, true), x === 1 && f.setAttribute(e, "true"), y2 || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), i.clear(), on++, function() {
    r.forEach(function(p) {
      var f = $t.get(p) - 1, v2 = s.get(p) - 1;
      $t.set(p, f), s.set(p, v2), f || (da.has(p) || p.removeAttribute(n), da.delete(p)), v2 || p.removeAttribute(e);
    }), on--, on || ($t = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), ca = {});
  };
};
var ai = function(a2, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var n = Array.from(Array.isArray(a2) ? a2 : [a2]), l = t || Qr(a2);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live]"))), ti(n, l, e, "aria-hidden")) : function() {
    return null;
  };
};
function ra(a2) {
  let t;
  watch(() => Be(a2), (e) => {
    e ? t = ai(e) : t && t();
  }), onUnmounted(() => {
    t && t();
  });
}
var ni = 0;
function me(a2, t = "radix") {
  if (a2)
    return a2;
  const { useId: e } = Rn({ useId: void 0 });
  return e && typeof e == "function" ? `${t}-${e()}` : `${t}-${++ni}`;
}
function dl(a2) {
  const t = ref(), e = computed(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.width) ?? 0;
  }), n = computed(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.height) ?? 0;
  });
  return onMounted(() => {
    const l = Be(a2);
    if (l) {
      t.value = { width: l.offsetWidth, height: l.offsetHeight };
      const s = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          u = p.inlineSize, d = p.blockSize;
        } else
          u = l.offsetWidth, d = l.offsetHeight;
        t.value = { width: u, height: d };
      });
      return s.observe(l, { box: "border-box" }), () => s.unobserve(l);
    } else
      t.value = void 0;
  }), {
    width: e,
    height: n
  };
}
function cl(a2, t) {
  const e = ref(a2);
  function n(s) {
    return t[e.value][s] ?? e.value;
  }
  return {
    state: e,
    dispatch: (s) => {
      e.value = n(s);
    }
  };
}
function Ta(a2) {
  const t = kt("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (l, s) => {
      var f, v2;
      if (!(a2 != null && a2.value) && !s)
        return;
      t.value = t.value + l;
      const r = (a2 == null ? void 0 : a2.value) ?? s, i = document.activeElement, u = ((v2 = (f = r.find((y2) => y2 === i)) == null ? void 0 : f.textContent) == null ? void 0 : v2.trim()) ?? "", d = r.map((y2) => {
        var m2;
        return ((m2 = y2.textContent) == null ? void 0 : m2.trim()) ?? "";
      }), c = pl(d, t.value, u), p = r.find(
        (y2) => {
          var m2;
          return ((m2 = y2.textContent) == null ? void 0 : m2.trim()) === c;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function kn(a2, t) {
  return a2.map((e, n) => a2[(t + n) % a2.length]);
}
function pl(a2, t, e) {
  const l = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? a2.indexOf(e) : -1;
  let r = kn(a2, Math.max(s, 0));
  l.length === 1 && (r = r.filter((d) => d !== e));
  const u = r.find(
    (d) => d.toLowerCase().startsWith(l.toLowerCase())
  );
  return u !== e ? u : void 0;
}
function gf(a2, t) {
  return {
    inheritAttrs: false,
    name: `${a2.__name ?? ""}Wrapper`,
    setup(e, n) {
      return () => {
        const l = typeof (t == null ? void 0 : t.props) == "function" ? t == null ? void 0 : t.props(n.attrs) : t == null ? void 0 : t.props, { forwardRef: s } = T(), r = mergeProps(l, n.attrs);
        return h(a2, { ...r, ref: s }, n.slots);
      };
    }
  };
}
function pt() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
var Mn = defineComponent({
  name: "PrimitiveSlot",
  inheritAttrs: false,
  setup(a2, { attrs: t, slots: e }) {
    return () => {
      var u, d;
      if (!e.default)
        return null;
      const n = Ba(e.default()), l = n.findIndex((c) => c.type !== Comment);
      if (l === -1)
        return n;
      const s = n[l];
      (u = s.props) == null || delete u.ref;
      const r = s.props ? mergeProps(t, s.props) : t;
      t.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const i = cloneVNode(s, r);
      for (const c in r)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = r[c]);
      return n.length === 1 ? i : (n[l] = i, n);
    };
  }
});
var A = defineComponent({
  name: "Primitive",
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(a2, { attrs: t, slots: e }) {
    const n = a2.asChild ? "template" : a2.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => h(n, t) : n !== "template" ? () => h(a2.as, t, { default: e.default }) : () => h(Mn, t, { default: e.default });
  }
});
function qe() {
  const a2 = ref(), t = computed(() => {
    var e, n;
    return ["#text", "#comment"].includes((e = a2.value) == null ? void 0 : e.$el.nodeName) ? (n = a2.value) == null ? void 0 : n.$el.nextElementSibling : Be(a2);
  });
  return {
    primitiveElement: a2,
    currentElement: t
  };
}
var [fl, oi] = Q("CollapsibleRoot");
var li = defineComponent({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, s = ne(n, "open", e, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = ne(n, "disabled");
    return oi({
      contentId: "",
      disabled: r,
      open: s,
      onOpenToggle: () => {
        s.value = !s.value;
      }
    }), t({ open: s }), T(), (i, u) => (openBlock(), createBlock(unref(A), {
      as: i.as,
      "as-child": n.asChild,
      "data-state": n.open ? "open" : "closed",
      "data-disabled": n.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default", { open: unref(s) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
});
var si = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = fl();
    return (n, l) => {
      var s, r;
      return openBlock(), createBlock(unref(A), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": unref(e).contentId,
        "aria-expanded": unref(e).open.value,
        "data-state": unref(e).open.value ? "open" : "closed",
        "data-disabled": (s = unref(e).disabled) != null && s.value ? "" : void 0,
        disabled: (r = unref(e).disabled) == null ? void 0 : r.value,
        onClick: unref(e).onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function ri(a2, t) {
  const e = ref({}), n = ref("none"), l = a2.value ? "mounted" : "unmounted", { state: s, dispatch: r } = cl(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  watch(
    a2,
    async (f, v2) => {
      var m2;
      const y2 = v2 !== f;
      if (await nextTick(), y2) {
        const x = n.value, P2 = pa(t.value);
        f ? r("MOUNT") : P2 === "none" || ((m2 = e.value) == null ? void 0 : m2.display) === "none" ? r("UNMOUNT") : r(v2 && x !== P2 ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: true }
  );
  const i = (f) => {
    const v2 = pa(t.value), y2 = v2.includes(
      f.animationName
    );
    f.target === t.value && y2 && r("ANIMATION_END"), f.target === t.value && v2 === "none" && r("ANIMATION_END");
  }, u = (f) => {
    f.target === t.value && (n.value = pa(t.value));
  }, d = watch(
    t,
    (f, v2) => {
      f ? (e.value = getComputedStyle(f), f.addEventListener("animationstart", u), f.addEventListener("animationcancel", i), f.addEventListener("animationend", i)) : (r("ANIMATION_END"), v2 == null || v2.removeEventListener("animationstart", u), v2 == null || v2.removeEventListener("animationcancel", i), v2 == null || v2.removeEventListener("animationend", i));
    },
    { immediate: true }
  ), c = watch(s, () => {
    const f = pa(t.value);
    n.value = s.value === "mounted" ? f : "none";
  });
  return onUnmounted(() => {
    d(), c();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function pa(a2) {
  return a2 && getComputedStyle(a2).animationName || "none";
}
var Ee = defineComponent({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: true
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(a2, { slots: t, expose: e }) {
    var d;
    const { present: n, forceMount: l } = toRefs(a2), s = ref(), { isPresent: r } = ri(n, s);
    e({ present: r });
    let i = t.default({ present: r });
    i = Ba(i || []);
    const u = getCurrentInstance();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((p) => `  - ${p}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || n.value || r.value ? h(t.default({ present: r })[0], {
      ref: (c) => {
        const p = Be(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? s.value = p.firstElementChild : s.value = p), p;
      }
    }) : null;
  }
});
var ii = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = fl();
    e.contentId || (e.contentId = me(void 0, "radix-vue-collapsible-content"));
    const n = ref(), { forwardRef: l, currentElement: s } = T(), r = ref(0), i = ref(0), u = computed(() => e.open.value), d = ref(u.value), c = ref();
    return watch(
      () => {
        var p;
        return [u.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await nextTick();
        const p = s.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const f = p.getBoundingClientRect();
        i.value = f.height, r.value = f.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (p, f) => (openBlock(), createBlock(unref(Ee), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var v2, y2;
        return [
          createVNode(unref(A), mergeProps(p.$attrs, {
            id: unref(e).contentId,
            ref: unref(l),
            "as-child": t.asChild,
            as: p.as,
            "data-state": unref(e).open.value ? "open" : "closed",
            "data-disabled": (v2 = unref(e).disabled) != null && v2.value ? "" : void 0,
            hidden: !((y2 = n.value) != null && y2.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: withCtx(() => {
              var m2;
              return [
                (m2 = n.value) != null && m2.present ? renderSlot(p.$slots, "default", { key: 0 }) : createCommentVNode("", true)
              ];
            }),
            _: 3
          }, 16, ["id", "as-child", "as", "data-state", "data-disabled", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function vl({ type: a2, defaultValue: t, modelValue: e }) {
  const n = e || t;
  if (!a2 && !e && !t)
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (e !== void 0 && t !== void 0 && typeof e != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${e}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${a2 === "single" ? "- a string" : a2 === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const l = e !== void 0 || t !== void 0;
  if (a2 && l) {
    const s = Array.isArray(e) || Array.isArray(t), r = e !== void 0 ? "modelValue" : "defaultValue", i = r === "modelValue" ? typeof e : typeof t;
    if (a2 === "single" && s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "multiple";
    if (a2 === "multiple" && !s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "single";
  }
  return l ? Array.isArray(n) ? "multiple" : "single" : a2;
}
function ui({ type: a2, defaultValue: t, modelValue: e }) {
  return a2 || vl({ type: a2, defaultValue: t, modelValue: e });
}
function di({ type: a2, defaultValue: t }) {
  return t !== void 0 ? t : a2 === "single" ? void 0 : [];
}
function ml(a2, t) {
  const e = ref(ui(a2)), n = ne(a2, "modelValue", t, {
    defaultValue: di(a2),
    passive: a2.modelValue === void 0
  });
  watch(
    () => [a2.type, a2.modelValue, a2.defaultValue],
    () => {
      const r = vl(a2);
      e.value !== r && (e.value = r);
    },
    { immediate: true }
  );
  function l(r) {
    if (e.value === "single")
      n.value = r === n.value ? void 0 : r;
    else {
      const i = n.value || [];
      if (i.includes(r)) {
        const u = i.findIndex((d) => d === r);
        i.splice(u, 1);
      } else
        i.push(r);
      n.value = i, t("update:modelValue", n.value);
    }
  }
  const s = computed(() => e.value === "single");
  return {
    modelValue: n,
    type: e,
    changeModelValue: l,
    isSingle: s
  };
}
var [Ia, ci] = Q("AccordionRoot");
var bf = defineComponent({
  __name: "AccordionRoot",
  props: {
    collapsible: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    dir: {},
    orientation: { default: "vertical" },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { dir: l, disabled: s } = toRefs(e), r = be(l), { modelValue: i, changeModelValue: u, isSingle: d } = ml(e, n), { forwardRef: c, currentElement: p } = T();
    return ci({
      disabled: s,
      direction: r,
      orientation: e.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: e.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, v2) => (openBlock(), createBlock(unref(A), {
      ref: unref(c),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default", { modelValue: unref(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var [Vn, pi] = Q("AccordionItem");
var Cf = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2, { expose: t }) {
    const e = a2, n = Ia(), l = computed(
      () => n.isSingle.value ? e.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(e.value)
    ), s = computed(() => n.disabled.value || e.disabled || n.isSingle.value && l.value && !n.collapsible), r = computed(() => s.value ? "" : void 0), i = computed(
      () => l.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: l, dataDisabled: r });
    const { currentRef: u, currentElement: d } = T();
    pi({
      open: l,
      dataState: i,
      disabled: s,
      dataDisabled: r,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: computed(() => e.value)
    });
    function c(p) {
      Vt(
        p,
        d.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: true
        }
      );
    }
    return (p, f) => (openBlock(), createBlock(unref(li), {
      "data-orientation": unref(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: l.value,
      "as-child": e.asChild,
      onKeydown: withKeys(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: withCtx(() => [
        renderSlot(p.$slots, "default", { open: l.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as-child"]));
  }
});
var wf = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Ia(), n = Vn();
    return T(), (l, s) => (openBlock(), createBlock(unref(ii), {
      role: "region",
      open: unref(n).open.value,
      hidden: !unref(n).open.value,
      "as-child": t.asChild,
      "aria-labelledby": unref(n).triggerId,
      "data-state": unref(n).dataState.value,
      "data-disabled": unref(n).dataDisabled.value,
      "data-orientation": unref(e).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
});
var _f = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(a2) {
    const t = a2, e = Ia(), n = Vn();
    return T(), (l, s) => (openBlock(), createBlock(unref(A), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": unref(e).orientation,
      "data-state": unref(n).dataState.value,
      "data-disabled": unref(n).dataDisabled.value
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
});
var xf = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Ia(), n = Vn();
    n.triggerId || (n.triggerId = me(void 0, "radix-vue-accordion-trigger"));
    function l() {
      n.disabled.value || e.changeModelValue(n.value.value);
    }
    return (s, r) => (openBlock(), createBlock(unref(si), {
      id: unref(n).triggerId,
      ref: unref(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": unref(n).disabled.value || void 0,
      "aria-expanded": unref(n).open.value || false,
      "data-disabled": unref(n).dataDisabled.value,
      "data-orientation": unref(e).orientation,
      "data-state": unref(n).dataState.value,
      disabled: unref(n).disabled.value,
      onClick: l
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
});
var [He, fi] = Q("DialogRoot");
var vi = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), s = ref(), r = ref(), { modal: i } = toRefs(e);
    return fi({
      open: l,
      modal: i,
      openModal: () => {
        l.value = true;
      },
      onOpenChange: (u) => {
        l.value = u;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: s,
      contentElement: r
    }), (u, d) => renderSlot(u.$slots, "default");
  }
});
var mi = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = He(), { forwardRef: n, currentElement: l } = T();
    return e.contentId || (e.contentId = me(void 0, "radix-vue-dialog-content")), onMounted(() => {
      e.triggerElement = l;
    }), (s, r) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      ref: unref(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": unref(e).open.value || false,
      "aria-controls": unref(e).open.value ? unref(e).contentId : void 0,
      "data-state": unref(e).open.value ? "open" : "closed",
      onClick: unref(e).onOpenToggle
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
});
var ft = defineComponent({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = $a();
    return (e, n) => unref(t) || e.forceMount ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: e.to,
      disabled: e.disabled
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to", "disabled"])) : createCommentVNode("", true);
  }
});
var Sf = defineComponent({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ft), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var hi = "dismissableLayer.pointerDownOutside";
var yi = "dismissableLayer.focusOutside";
function hl(a2, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), n = a2.querySelector(
    "[data-dismissable-layer]"
  ), l = Array.from(
    a2.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(e && n === e || l.indexOf(n) < l.indexOf(e));
}
function gi(a2, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(false), l = ref(() => {
  });
  return watchEffect((r) => {
    if (!Je)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (hl(t.value, c)) {
          n.value = false;
          return;
        }
        if (d.target && !n.value) {
          let p = function() {
            Da(
              hi,
              a2,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", l.value), l.value = p, e.addEventListener("click", l.value, {
            once: true
          })) : p();
        } else
          e.removeEventListener("click", l.value);
        n.value = false;
      }
    }, u = window.setTimeout(() => {
      e.addEventListener("pointerdown", i);
    }, 0);
    r(() => {
      window.clearTimeout(u), e.removeEventListener("pointerdown", i), e.removeEventListener("click", l.value);
    });
  }), {
    onPointerDownCapture: () => n.value = true
  };
}
function bi(a2, t) {
  var l;
  const e = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(false);
  return watchEffect((s) => {
    if (!Je)
      return;
    const r = async (i) => {
      t != null && t.value && (await nextTick(), !(!t.value || hl(t.value, i.target)) && i.target && !n.value && Da(
        yi,
        a2,
        { originalEvent: i }
      ));
    };
    e.addEventListener("focusin", r), s(() => e.removeEventListener("focusin", r));
  }), {
    onFocusCapture: () => n.value = true,
    onBlurCapture: () => n.value = false
  };
}
var Ke = reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var vt = defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = T(), r = computed(
      () => {
        var y2;
        return ((y2 = s.value) == null ? void 0 : y2.ownerDocument) ?? globalThis.document;
      }
    ), i = computed(() => Ke.layersRoot), u = computed(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = computed(() => Ke.layersWithOutsidePointerEventsDisabled.size > 0), c = computed(() => {
      const y2 = Array.from(i.value), [m2] = [...Ke.layersWithOutsidePointerEventsDisabled].slice(-1), x = y2.indexOf(m2);
      return u.value >= x;
    }), p = gi(async (y2) => {
      const m2 = [...Ke.branches].some(
        (x) => x.contains(y2.target)
      );
      !c.value || m2 || (n("pointerDownOutside", y2), n("interactOutside", y2), await nextTick(), y2.defaultPrevented || n("dismiss"));
    }, s), f = bi((y2) => {
      [...Ke.branches].some(
        (x) => x.contains(y2.target)
      ) || (n("focusOutside", y2), n("interactOutside", y2), y2.defaultPrevented || n("dismiss"));
    }, s);
    In("Escape", (y2) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", y2), y2.defaultPrevented || n("dismiss"));
    });
    let v2;
    return watchEffect((y2) => {
      s.value && (e.disableOutsidePointerEvents && (Ke.layersWithOutsidePointerEventsDisabled.size === 0 && (v2 = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Ke.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), y2(() => {
        e.disableOutsidePointerEvents && Ke.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = v2);
      }));
    }), watchEffect((y2) => {
      y2(() => {
        s.value && (i.value.delete(s.value), Ke.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (y2, m2) => (openBlock(), createBlock(unref(A), {
      ref: unref(l),
      "as-child": y2.asChild,
      as: y2.as,
      "data-dismissable-layer": "",
      style: normalizeStyle({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: unref(f).onFocusCapture,
      onBlurCapture: unref(f).onBlurCapture,
      onPointerdownCapture: unref(p).onPointerDownCapture
    }, {
      default: withCtx(() => [
        renderSlot(y2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
var Ci = defineComponent({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e, currentElement: n } = T();
    return onMounted(() => {
      Ke.branches.add(n.value);
    }), onUnmounted(() => {
      Ke.branches.delete(n.value);
    }), (l, s) => (openBlock(), createBlock(unref(A), mergeProps({ ref: unref(e) }, t), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ln = "focusScope.autoFocusOnMount";
var sn = "focusScope.autoFocusOnUnmount";
var Do = { bubbles: false, cancelable: true };
function ga(a2, { select: t = false } = {}) {
  const e = document.activeElement;
  for (const n of a2)
    if (lt(n, { select: t }), document.activeElement !== e)
      return true;
}
function wi(a2) {
  const t = Fn(a2), e = $o(t, a2), n = $o(t.reverse(), a2);
  return [e, n];
}
function Fn(a2) {
  const t = [], e = document.createTreeWalker(a2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function $o(a2, t) {
  for (const e of a2)
    if (!_i(e, { upTo: t }))
      return e;
}
function _i(a2, { upTo: t }) {
  if (getComputedStyle(a2).visibility === "hidden")
    return true;
  for (; a2; ) {
    if (t !== void 0 && a2 === t)
      return false;
    if (getComputedStyle(a2).display === "none")
      return true;
    a2 = a2.parentElement;
  }
  return false;
}
function xi(a2) {
  return a2 instanceof HTMLInputElement && "select" in a2;
}
function lt(a2, { select: t = false } = {}) {
  if (a2 && a2.focus) {
    const e = document.activeElement;
    a2.focus({ preventScroll: true }), a2 !== e && xi(a2) && t && a2.select();
  }
}
var Si = yr(() => ref([]));
function Pi() {
  const a2 = Si();
  return {
    add(t) {
      const e = a2.value[0];
      t !== e && (e == null || e.pause()), a2.value = Bo(a2.value, t), a2.value.unshift(t);
    },
    remove(t) {
      var e;
      a2.value = Bo(a2.value, t), (e = a2.value[0]) == null || e.resume();
    }
  };
}
function Bo(a2, t) {
  const e = [...a2], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function Ei(a2) {
  return a2.filter((t) => t.tagName !== "A");
}
var Ra = defineComponent({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: false },
    trapped: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { currentRef: l, currentElement: s } = T(), r = ref(null), i = Pi(), u = reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((c) => {
      if (!Je)
        return;
      const p = s.value;
      if (!e.trapped)
        return;
      function f(x) {
        if (u.paused || !p)
          return;
        const P2 = x.target;
        p.contains(P2) ? r.value = P2 : lt(r.value, { select: true });
      }
      function v2(x) {
        if (u.paused || !p)
          return;
        const P2 = x.relatedTarget;
        P2 !== null && (p.contains(P2) || lt(r.value, { select: true }));
      }
      function y2(x) {
        p.contains(r.value) || lt(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v2);
      const m2 = new MutationObserver(y2);
      p && m2.observe(p, { childList: true, subtree: true }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v2), m2.disconnect();
      });
    }), watchEffect(async (c) => {
      const p = s.value;
      if (await nextTick(), !p)
        return;
      i.add(u);
      const f = document.activeElement;
      if (!p.contains(f)) {
        const y2 = new CustomEvent(ln, Do);
        p.addEventListener(
          ln,
          (m2) => n("mountAutoFocus", m2)
        ), p.dispatchEvent(y2), y2.defaultPrevented || (ga(Ei(Fn(p)), {
          select: true
        }), document.activeElement === f && lt(p));
      }
      c(() => {
        p.removeEventListener(
          ln,
          (x) => n("mountAutoFocus", x)
        );
        const y2 = new CustomEvent(sn, Do), m2 = (x) => {
          n("unmountAutoFocus", x);
        };
        p.addEventListener(sn, m2), p.dispatchEvent(y2), setTimeout(() => {
          y2.defaultPrevented || lt(f ?? document.body, { select: true }), p.removeEventListener(sn, m2), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = document.activeElement;
      if (p && f) {
        const v2 = c.currentTarget, [y2, m2] = wi(v2);
        y2 && m2 ? !c.shiftKey && f === m2 ? (c.preventDefault(), e.loop && lt(y2, { select: true })) : c.shiftKey && f === y2 && (c.preventDefault(), e.loop && lt(m2, { select: true })) : f === v2 && c.preventDefault();
      }
    }
    return (c, p) => (openBlock(), createBlock(unref(A), {
      ref_key: "currentRef",
      ref: l,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Di = "menu.itemSelect";
var vn = ["Enter", " "];
var $i = ["ArrowDown", "PageUp", "Home"];
var yl = ["ArrowUp", "PageDown", "End"];
var Bi = [...$i, ...yl];
var Ti = {
  ltr: [...vn, "ArrowRight"],
  rtl: [...vn, "ArrowLeft"]
};
var Ii = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Ln(a2) {
  return a2 ? "open" : "closed";
}
function wa(a2) {
  return a2 === "indeterminate";
}
function Nn(a2) {
  return wa(a2) ? "indeterminate" : a2 ? "checked" : "unchecked";
}
function mn(a2) {
  const t = document.activeElement;
  for (const e of a2)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function Ri(a2, t) {
  const { x: e, y: n } = a2;
  let l = false;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function Ai(a2, t) {
  if (!t)
    return false;
  const e = { x: a2.clientX, y: a2.clientY };
  return Ri(e, t);
}
function Qt(a2) {
  return a2.pointerType === "mouse";
}
function Oi() {
  const a2 = "DialogContent", t = "DialogTitle", e = He(), n = `Warning: \`${a2}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/dialog.html#title;`, l = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${a2}.`;
  onMounted(() => {
    var i;
    document.getElementById(e.titleId) || console.warn(n);
    const r = (i = e.contentElement.value) == null ? void 0 : i.getAttribute("aria-describedby");
    e.descriptionId && r && (document.getElementById(e.descriptionId) || console.warn(l));
  });
}
var gl = defineComponent({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = He(), { forwardRef: s, currentElement: r } = T();
    return l.titleId || (l.titleId = me(void 0, "radix-vue-dialog-title")), l.descriptionId || (l.descriptionId = me(void 0, "radix-vue-dialog-description")), onMounted(() => {
      l.contentElement = r;
    }), Oi(), (i, u) => (openBlock(), createBlock(unref(Ra), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: withCtx(() => [
        createVNode(unref(vt), mergeProps({
          id: unref(l).contentId,
          ref: unref(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": unref(l).descriptionId,
          "aria-labelledby": unref(l).titleId,
          "data-state": unref(Ln)(unref(l).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => unref(l).onOpenChange(false)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => n("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => n("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => n("pointerDownOutside", d))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var ki = defineComponent({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = He(), s = Ie(n), { forwardRef: r, currentElement: i } = T();
    return ra(i), (u, d) => (openBlock(), createBlock(gl, mergeProps({ ...e, ...unref(s) }, {
      ref: unref(r),
      "trap-focus": unref(l).open.value,
      "disable-outside-pointer-events": true,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (c.preventDefault(), (p = unref(l).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, f = p.button === 0 && p.ctrlKey === true;
        (p.button === 2 || f) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      }),
      onOpenAutoFocus: d[3] || (d[3] = (c) => n("openAutoFocus", c))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
});
var Mi = defineComponent({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Ie(n);
    T();
    const s = He(), r = ref(false), i = ref(false);
    return (u, d) => (openBlock(), createBlock(gl, mergeProps({ ...e, ...unref(l) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (r.value || (p = unref(s).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = false, i.value = false;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var v2;
        c.defaultPrevented || (r.value = true, c.detail.originalEvent.type === "pointerdown" && (i.value = true));
        const p = c.target;
        ((v2 = unref(s).triggerElement.value) == null ? void 0 : v2.contains(p)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vi = defineComponent({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = He(), s = Ie(n), { forwardRef: r } = T();
    return (i, u) => (openBlock(), createBlock(unref(Ee), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        unref(l).modal.value ? (openBlock(), createBlock(ki, mergeProps({
          key: 0,
          ref: unref(r)
        }, { ...e, ...unref(s), ...i.$attrs }, {
          onOpenAutoFocus: u[0] || (u[0] = (d) => n("openAutoFocus", d))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Mi, mergeProps({
          key: 1,
          ref: unref(r)
        }, { ...e, ...unref(s), ...i.$attrs }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Fi = defineComponent({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = He();
    return sa(true), T(), (e, n) => (openBlock(), createBlock(unref(A), {
      as: e.as,
      "as-child": e.asChild,
      "data-state": unref(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
});
var Li = defineComponent({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = He(), { forwardRef: e } = T();
    return (n, l) => {
      var s;
      return (s = unref(t)) != null && s.modal.value ? (openBlock(), createBlock(unref(Ee), {
        key: 0,
        present: n.forceMount || unref(t).open.value
      }, {
        default: withCtx(() => [
          createVNode(Fi, mergeProps(n.$attrs, {
            ref: unref(e),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : createCommentVNode("", true);
    };
  }
});
var bl = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = He();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (s) => unref(e).onOpenChange(false))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
var Ni = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a2) {
    const t = a2, e = He();
    return T(), (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      id: unref(e).titleId
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var zi = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = He();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      id: unref(e).descriptionId
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var Pf = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    return T(), (s, r) => (openBlock(), createBlock(unref(vi), mergeProps(unref(l), { modal: true }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ef = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(mi), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Df = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ft), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Ki, Hi] = Q("AlertDialogContent");
var $f = defineComponent({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    T();
    const s = ref();
    return Hi({
      onCancelElementChange: (r) => {
        s.value = r;
      }
    }), (r, i) => (openBlock(), createBlock(unref(Vi), mergeProps({ ...e, ...unref(l) }, {
      role: "alertdialog",
      onPointerDownOutside: i[0] || (i[0] = withModifiers(() => {
      }, ["prevent"])),
      onInteractOutside: i[1] || (i[1] = withModifiers(() => {
      }, ["prevent"])),
      onOpenAutoFocus: i[2] || (i[2] = () => {
        nextTick(() => {
          var u;
          (u = s.value) == null || u.focus({
            preventScroll: true
          });
        });
      })
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Bf = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Li), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Tf = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Ki(), { forwardRef: n, currentElement: l } = T();
    return onMounted(() => {
      e.onCancelElementChange(l.value);
    }), (s, r) => (openBlock(), createBlock(unref(bl), mergeProps(t, { ref: unref(n) }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var If = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Ni), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Rf = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(zi), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Af = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(bl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Of = defineComponent({
  inheritAttrs: false,
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T(), n = computed(() => 1 / t.ratio * 100);
    return (l, s) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: relative; width: 100%; padding-bottom: ${n.value}%`),
      "data-radix-aspect-ratio-wrapper": ""
    }, [
      createVNode(unref(A), mergeProps({
        ref: unref(e),
        "as-child": l.asChild,
        as: l.as,
        style: { position: "absolute", inset: "0px" }
      }, l.$attrs), {
        default: withCtx(() => [
          renderSlot(l.$slots, "default", { aspect: n.value })
        ]),
        _: 3
      }, 16, ["as-child", "as"])
    ], 4));
  }
});
var [Cl, Wi] = Q("AvatarRoot");
var kf = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    return T(), Wi({
      imageLoadingStatus: ref("loading")
    }), (t, e) => (openBlock(), createBlock(unref(A), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function ji(a2) {
  const t = ref("idle"), e = ref(false), n = (l) => () => {
    e.value && (t.value = l);
  };
  return onMounted(() => {
    e.value = true, watch(a2, (l) => {
      if (!l)
        t.value = "error";
      else {
        const s = new window.Image();
        t.value = "loading", s.onload = n("loaded"), s.onerror = n("error"), s.src = l;
      }
    }, { immediate: true });
  }), onUnmounted(() => {
    e.value = false;
  }), t;
}
var Mf = defineComponent({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { src: l } = toRefs(e);
    T();
    const s = Cl(), r = ji(l);
    return watch(
      r,
      (i) => {
        n("loadingStatusChange", i), i !== "idle" && (s.imageLoadingStatus.value = i);
      },
      { immediate: true }
    ), (i, u) => withDirectives((openBlock(), createBlock(unref(A), {
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: unref(l)
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])), [
      [vShow, unref(r) === "loaded"]
    ]);
  }
});
var Vf = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = Cl();
    T();
    const n = ref(false);
    let l;
    return watch(e.imageLoadingStatus, (s) => {
      s === "loading" && (n.value = false, t.delayMs ? l = setTimeout(() => {
        n.value = true, clearTimeout(l);
      }, t.delayMs) : n.value = true);
    }, { immediate: true }), (s, r) => n.value && unref(e).imageLoadingStatus.value !== "loaded" ? (openBlock(), createBlock(unref(A), {
      key: 0,
      "as-child": s.asChild,
      as: s.as
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : createCommentVNode("", true);
  }
});
function Ui(a2) {
  function t(n) {
    return Array.isArray(a2.date.value) ? a2.date.value.some((l) => $14e0f24ef4ac5c92$export$ea39ec197993aef0(l, n)) : a2.date.value ? $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.date.value, n) : false;
  }
  const e = computed(
    () => {
      var n, l, s, r;
      if (Array.isArray(a2.date.value)) {
        if (!a2.date.value.length)
          return false;
        for (const i of a2.date.value)
          if ((n = a2.isDateDisabled) != null && n.call(a2, i) || (l = a2.isDateUnavailable) != null && l.call(a2, i))
            return true;
      } else {
        if (!a2.date.value)
          return false;
        if ((s = a2.isDateDisabled) != null && s.call(a2, a2.date.value) || (r = a2.isDateUnavailable) != null && r.call(a2, a2.date.value))
          return true;
      }
      return false;
    }
  );
  return {
    isDateSelected: t,
    isInvalid: e
  };
}
function wl(a2) {
  const t = An(a2.locale.value), e = computed(() => {
    const m2 = {
      calendar: a2.placeholder.value.calendar.identifier
    };
    return a2.placeholder.value.calendar.identifier === "gregory" && a2.placeholder.value.era === "BC" && (m2.era = "short"), m2;
  }), n = ref(rt({
    dateObj: a2.placeholder.value,
    weekStartsOn: a2.weekStartsOn.value,
    locale: a2.locale.value,
    fixedWeeks: a2.fixedWeeks.value,
    numberOfMonths: a2.numberOfMonths.value
  })), l = computed(() => n.value.map((m2) => m2.value));
  function s(m2) {
    return !l.value.some((x) => $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(m2, x));
  }
  const r = (m2 = "month") => {
    if (!a2.maxValue.value || !n.value.length)
      return false;
    if (a2.disabled.value)
      return true;
    if (m2 === "year") {
      const g = n.value[n.value.length - 1].value.add({ years: 1 }).set({ day: 1, month: 1 });
      return W(g, a2.maxValue.value);
    }
    const P2 = n.value[n.value.length - 1].value.add({ months: 1 }).set({ day: 1 });
    return W(P2, a2.maxValue.value);
  }, i = (m2 = "month") => {
    if (!a2.minValue.value || !n.value.length)
      return false;
    if (a2.disabled.value)
      return true;
    const x = n.value[0].value;
    if (m2 === "year") {
      const D2 = x.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return R(D2, a2.minValue.value);
    }
    const P2 = x.subtract({ months: 1 }).set({ day: 35 });
    return R(P2, a2.minValue.value);
  };
  function u(m2) {
    var x;
    return !!((x = a2.isDateDisabled) != null && x.call(a2, m2) || a2.disabled.value || a2.maxValue.value && W(m2, a2.maxValue.value) || a2.minValue.value && R(m2, a2.minValue.value));
  }
  const d = (m2) => {
    var x;
    return !!((x = a2.isDateUnavailable) != null && x.call(a2, m2));
  }, c = computed(() => n.value.length ? n.value[0].rows[0].map((m2) => t.dayOfWeek($(m2), a2.weekdayFormat.value)) : []), p = (m2 = "month") => {
    const x = n.value[0].value, P2 = m2 === "month" ? x.add({ months: a2.pagedNavigation.value ? a2.numberOfMonths.value : 1 }) : x.add({ years: 1 }), D2 = rt({
      dateObj: P2,
      weekStartsOn: a2.weekStartsOn.value,
      locale: a2.locale.value,
      fixedWeeks: a2.fixedWeeks.value,
      numberOfMonths: a2.numberOfMonths.value
    });
    n.value = D2, a2.placeholder.value = D2[0].value.set({ day: 1 });
  }, f = (m2 = "month") => {
    const x = n.value[0].value, P2 = m2 === "month" ? x.subtract({ months: a2.pagedNavigation.value ? a2.numberOfMonths.value : 1 }) : x.subtract({ years: 1 }), D2 = rt({
      dateObj: P2,
      weekStartsOn: a2.weekStartsOn.value,
      locale: a2.locale.value,
      fixedWeeks: a2.fixedWeeks.value,
      numberOfMonths: a2.numberOfMonths.value
    });
    n.value = D2, a2.placeholder.value = D2[0].value.set({ day: 1 });
  };
  watch(a2.placeholder, (m2) => {
    l.value.some((x) => $14e0f24ef4ac5c92$export$5a8da0c44a3afdf2(x, m2)) || (n.value = rt({
      dateObj: m2,
      weekStartsOn: a2.weekStartsOn.value,
      locale: a2.locale.value,
      fixedWeeks: a2.fixedWeeks.value,
      numberOfMonths: a2.numberOfMonths.value
    }));
  }), watch([a2.locale, a2.weekStartsOn, a2.fixedWeeks, a2.numberOfMonths], () => {
    n.value = rt({
      dateObj: a2.placeholder.value,
      weekStartsOn: a2.weekStartsOn.value,
      locale: a2.locale.value,
      fixedWeeks: a2.fixedWeeks.value,
      numberOfMonths: a2.numberOfMonths.value
    });
  });
  const v2 = computed(() => {
    if (!n.value.length)
      return "";
    if (a2.locale.value !== t.getLocale() && t.setLocale(a2.locale.value), n.value.length === 1) {
      const $2 = n.value[0].value;
      return `${t.fullMonthAndYear($($2), e.value)}`;
    }
    const m2 = $(n.value[0].value), x = $(n.value[n.value.length - 1].value), P2 = t.fullMonth(m2, e.value), D2 = t.fullMonth(x, e.value), g = t.fullYear(m2, e.value), S = t.fullYear(x, e.value);
    return g === S ? `${P2} - ${D2} ${S}` : `${P2} ${g} - ${D2} ${S}`;
  }), y2 = computed(() => `${a2.calendarLabel.value ?? "Event Date"}, ${v2.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: d,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: c,
    visibleView: l,
    isOutsideVisibleView: s,
    formatter: t,
    nextPage: p,
    prevPage: f,
    headingValue: v2,
    fullCalendarLabel: y2
  };
}
var Gi = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } };
var qi = {
  role: "heading",
  "aria-level": "2"
};
var [Ft, Yi] = Q("CalendarRoot");
var Xi = defineComponent({
  __name: "CalendarRoot",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: false },
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    pagedNavigation: { type: Boolean, default: false },
    preventDeselect: { type: Boolean, default: false },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    calendarLabel: {},
    fixedWeeks: { type: Boolean, default: false },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    numberOfMonths: { default: 1 },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    initialFocus: { type: Boolean, default: false },
    isDateDisabled: { type: Function, default: void 0 },
    isDateUnavailable: { type: Function, default: void 0 },
    dir: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: f,
      minValue: v2,
      maxValue: y2,
      numberOfMonths: m2,
      preventDeselect: x,
      isDateDisabled: P2,
      isDateUnavailable: D2,
      calendarLabel: g,
      defaultValue: S,
      dir: E
    } = toRefs(e), { primitiveElement: $2, currentElement: R2 } = qe(), M = be(E), V2 = ne(e, "modelValue", n, {
      defaultValue: S.value,
      passive: e.modelValue === void 0
    }), O2 = Ot({
      defaultPlaceholder: e.placeholder,
      defaultValue: V2.value
    }), L = ne(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? O2.copy(),
      passive: e.placeholder === void 0
    });
    function j2(ae) {
      L.value = ae.copy();
    }
    const {
      fullCalendarLabel: J2,
      headingValue: W2,
      isDateDisabled: X2,
      isDateUnavailable: N,
      isNextButtonDisabled: q2,
      isPrevButtonDisabled: F,
      weekdays: Z,
      isOutsideVisibleView: U,
      nextPage: Y,
      prevPage: te,
      formatter: de,
      grid: H2
    } = wl({
      locale: l,
      placeholder: L,
      weekStartsOn: d,
      fixedWeeks: p,
      numberOfMonths: m2,
      minValue: v2,
      maxValue: y2,
      disabled: s,
      weekdayFormat: c,
      pagedNavigation: u,
      isDateDisabled: P2.value,
      isDateUnavailable: D2.value,
      calendarLabel: g
    }), {
      isInvalid: oe,
      isDateSelected: ce
    } = Ui({
      date: V2,
      isDateDisabled: X2,
      isDateUnavailable: N
    });
    watch(V2, (ae) => {
      if (Array.isArray(ae) && ae.length) {
        const we = ae[ae.length - 1];
        we && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(L.value, we) && j2(we);
      } else
        !Array.isArray(ae) && ae && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(L.value, ae) && j2(ae);
    });
    function xe(ae) {
      if (f.value) {
        if (Array.isArray(V2.value)) {
          if (!V2.value) {
            V2.value = [ae.copy()];
            return;
          }
          if (V2.value.findIndex((De) => $14e0f24ef4ac5c92$export$ea39ec197993aef0(De, ae)) === -1)
            V2.value = [...V2.value, ae];
          else if (!x.value) {
            const De = V2.value.filter(($e) => !$14e0f24ef4ac5c92$export$ea39ec197993aef0($e, ae));
            if (!De.length) {
              L.value = ae.copy(), V2.value = void 0;
              return;
            }
            V2.value = De.map(($e) => $e.copy());
          }
        }
      } else {
        if (!V2.value) {
          V2.value = ae.copy();
          return;
        }
        !x.value && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(V2.value, ae) ? (L.value = ae.copy(), V2.value = void 0) : V2.value = ae.copy();
      }
    }
    return onMounted(() => {
      i.value && nl(R2.value);
    }), Yi({
      isDateUnavailable: N,
      dir: M,
      isDateDisabled: X2,
      locale: l,
      formatter: de,
      modelValue: V2,
      placeholder: L,
      disabled: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: f,
      numberOfMonths: m2,
      readonly: r,
      preventDeselect: x,
      fullCalendarLabel: J2,
      headingValue: W2,
      isInvalid: oe,
      isDateSelected: ce,
      isNextButtonDisabled: q2,
      isPrevButtonDisabled: F,
      isOutsideVisibleView: U,
      nextPage: Y,
      prevPage: te,
      parentElement: R2,
      onPlaceholderChange: j2,
      onDateChange: xe
    }), (ae, we) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: $2,
      as: ae.as,
      "as-child": ae.asChild,
      role: "application",
      "aria-label": unref(J2),
      "data-readonly": unref(r) ? "" : void 0,
      "data-disabled": unref(s) ? "" : void 0,
      "data-invalid": unref(oe) ? "" : void 0,
      dir: unref(M)
    }, {
      default: withCtx(() => [
        renderSlot(ae.$slots, "default", {
          date: unref(L),
          grid: unref(H2),
          weekDays: unref(Z),
          weekStartsOn: unref(d),
          locale: unref(l),
          fixedWeeks: unref(p)
        }),
        createBaseVNode("div", Gi, [
          createBaseVNode("div", qi, toDisplayString(unref(J2)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
});
var Zi = defineComponent({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ji = defineComponent({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Ft();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      "data-disabled": unref(e).disabled.value ? "" : void 0
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {
          headingValue: unref(e).headingValue.value
        }, () => [
          createTextVNode(toDisplayString(unref(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
});
var Qi = defineComponent({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a2) {
    const t = a2, e = Ft();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": unref(e).readonly ? true : void 0,
      "aria-disabled": unref(e).disabled ? true : void 0,
      "data-readonly": unref(e).readonly ? "" : void 0,
      "data-disabled": unref(e).disabled ? "" : void 0
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
});
var eu = defineComponent({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a2) {
    const t = Ft();
    return (e, n) => {
      var l, s;
      return openBlock(), createBlock(unref(A), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": unref(t).isDateSelected(e.date) ? true : void 0,
        "aria-disabled": unref(t).isDateDisabled(e.date) || ((s = (l = unref(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": unref(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
});
var tu = defineComponent({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var au = defineComponent({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Ft();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      "aria-label": "Next page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": unref(e).isNextButtonDisabled(t.step) || void 0,
      "data-disabled": unref(e).isNextButtonDisabled(t.step) || void 0,
      disabled: unref(e).isNextButtonDisabled(t.step),
      onClick: l[0] || (l[0] = (s) => unref(e).nextPage(t.step))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
});
var nu = defineComponent({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Ft();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps({ "aria-label": "Previous page" }, t, {
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": unref(e).isPrevButtonDisabled(t.step) || void 0,
      "data-disabled": unref(e).isPrevButtonDisabled(t.step) || void 0,
      disabled: unref(e).isPrevButtonDisabled(t.step),
      onClick: l[0] || (l[0] = (s) => unref(e).prevPage(t.step))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
});
var ou = defineComponent({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), mergeProps(t, { "aria-hidden": "true" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var lu = defineComponent({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var su = defineComponent({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ru = defineComponent({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = pt(), n = Ft(), { primitiveElement: l, currentElement: s } = qe(), r = computed(() => n.formatter.custom($(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = computed(() => n.isDateDisabled(t.day)), u = computed(
      () => {
        var D2;
        return (D2 = n.isDateUnavailable) == null ? void 0 : D2.call(n, t.day);
      }
    ), d = computed(() => $14e0f24ef4ac5c92$export$629b0a497aa65267(t.day, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())), c = computed(() => !$14e0f24ef4ac5c92$export$a18c89cbd24170ff(t.day, t.month)), p = computed(
      () => n.isOutsideVisibleView(t.day)
    ), f = computed(() => $14e0f24ef4ac5c92$export$ea39ec197993aef0(t.day, n.placeholder.value)), v2 = computed(() => n.isDateSelected(t.day)), y2 = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function m2(D2) {
      var g;
      n.readonly.value || n.isDateDisabled(D2) || (g = n.isDateUnavailable) != null && g.call(n, D2) || n.onDateChange(D2);
    }
    function x(D2) {
      m2(
        X(
          D2.target.getAttribute("data-value"),
          n.placeholder.value
        )
      );
    }
    function P2(D2) {
      const g = D2.target;
      D2.preventDefault(), D2.stopPropagation();
      const S = n.parentElement.value, E = S ? Array.from(S.querySelectorAll(y2)) : [];
      let R2 = E.indexOf(s.value);
      const M = 7, V2 = n.dir.value === "rtl" ? -1 : 1;
      switch (D2.code) {
        case e.ARROW_RIGHT:
          R2 += V2;
          break;
        case e.ARROW_LEFT:
          R2 -= V2;
          break;
        case e.ARROW_UP:
          R2 -= M;
          break;
        case e.ARROW_DOWN:
          R2 += M;
          break;
        case e.ENTER:
        case e.SPACE_CODE:
          m2(
            X(
              g.getAttribute("data-value"),
              n.placeholder.value
            )
          );
          return;
        default:
          return;
      }
      if (R2 >= 0 && R2 < E.length) {
        E[R2].focus();
        return;
      }
      if (R2 < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), nextTick(() => {
          const O2 = S ? Array.from(S.querySelectorAll(y2)) : [];
          O2[O2.length - Math.abs(R2)].focus();
        });
        return;
      }
      if (R2 >= E.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), nextTick(() => {
          (S ? Array.from(S.querySelectorAll(y2)) : [])[R2 - E.length].focus();
        });
      }
    }
    return (D2, g) => (openBlock(), createBlock(unref(A), mergeProps({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": c.value || i.value || u.value ? true : void 0,
      "data-selected": v2.value ? true : void 0,
      "data-value": D2.day.toString(),
      "data-disabled": i.value || c.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": d.value ? "" : void 0,
      "data-outside-view": c.value ? "" : void 0,
      "data-outside-visible-view": p.value ? "" : void 0,
      "data-focused": f.value ? "" : void 0,
      tabindex: f.value ? 0 : c.value || i.value ? void 0 : -1,
      onClick: x,
      onKeydown: [
        withKeys(P2, ["up", "down", "left", "right", "space", "enter"]),
        g[0] || (g[0] = withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: withCtx(() => [
        renderSlot(D2.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(D2.day.day.toLocaleString(unref(n).locale.value)), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function _a(a2) {
  return a2 === "indeterminate";
}
function _l(a2) {
  return _a(a2) ? "indeterminate" : a2 ? "checked" : "unchecked";
}
var iu = ["value", "checked", "name", "disabled", "required"];
var [uu, du] = Q("CheckboxRoot");
var Ff = defineComponent({
  inheritAttrs: false,
  __name: "CheckboxRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String], default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { disabled: l } = toRefs(e), s = ne(e, "checked", n, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    }), { forwardRef: r, currentElement: i } = T(), u = ct(i), d = computed(() => {
      var c;
      return e.id && i.value ? (c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return du({
      disabled: l,
      state: s
    }), (c, p) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(A), mergeProps(c.$attrs, {
        id: c.id,
        ref: unref(r),
        role: "checkbox",
        "as-child": e.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": unref(_a)(unref(s)) ? "mixed" : unref(s),
        "aria-required": false,
        "aria-label": c.$attrs["aria-label"] || d.value,
        "data-state": unref(_l)(unref(s)),
        "data-disabled": unref(l) ? "" : void 0,
        disabled: unref(l),
        onKeydown: withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (f) => s.value = unref(_a)(unref(s)) ? true : !unref(s))
      }), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      unref(u) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: c.value,
        checked: !!unref(s),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: normalizeStyle({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, iu)) : createCommentVNode("", true)
    ], 64));
  }
});
var Lf = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const { forwardRef: t } = T(), e = uu();
    return (n, l) => (openBlock(), createBlock(unref(Ee), {
      present: n.forceMount || unref(_a)(unref(e).state.value) || unref(e).state.value === true
    }, {
      default: withCtx(() => [
        createVNode(unref(A), mergeProps({
          ref: unref(t),
          "data-state": unref(_l)(unref(e).state.value),
          "data-disabled": unref(e).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var [xl, cu] = Q("PopperRoot");
var xt = defineComponent({
  __name: "PopperRoot",
  setup(a2) {
    const t = ref();
    return cu({
      anchor: t,
      onAnchorChange: (e) => t.value = e
    }), (e, n) => renderSlot(e.$slots, "default");
  }
});
var St = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e, currentElement: n } = T(), l = xl();
    return watch(n, () => {
      l.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (openBlock(), createBlock(unref(A), {
      ref: unref(e),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function pu(a2) {
  return a2 !== null;
}
function fu(a2) {
  return {
    name: "transformOrigin",
    options: a2,
    fn(t) {
      var x, P2, D2;
      const { placement: e, rects: n, middlewareData: l } = t, r = ((x = l.arrow) == null ? void 0 : x.centerOffset) !== 0, i = r ? 0 : a2.arrowWidth, u = r ? 0 : a2.arrowHeight, [d, c] = hn(e), p = { start: "0%", center: "50%", end: "100%" }[c], f = (((P2 = l.arrow) == null ? void 0 : P2.x) ?? 0) + i / 2, v2 = (((D2 = l.arrow) == null ? void 0 : D2.y) ?? 0) + u / 2;
      let y2 = "", m2 = "";
      return d === "bottom" ? (y2 = r ? p : `${f}px`, m2 = `${-u}px`) : d === "top" ? (y2 = r ? p : `${f}px`, m2 = `${n.floating.height + u}px`) : d === "right" ? (y2 = `${-u}px`, m2 = r ? p : `${v2}px`) : d === "left" && (y2 = `${n.floating.width + u}px`, m2 = r ? p : `${v2}px`), { data: { x: y2, y: m2 } };
    }
  };
}
function hn(a2) {
  const [t, e = "center"] = a2.split("-");
  return [t, e];
}
var Sl = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  updatePositionStrategy: "optimized",
  prioritizePosition: false
};
var [vu, mu] = Q("PopperContent");
var Ct = defineComponent({
  inheritAttrs: false,
  __name: "PopperContent",
  props: mergeDefaults({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Sl
  }),
  emits: ["placed"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = xl(), { forwardRef: s, currentElement: r } = T(), i = ref(), u = ref(), { width: d, height: c } = dl(u), p = computed(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), f = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), v2 = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), y2 = computed(() => ({
      padding: f.value,
      boundary: v2.value.filter(pu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v2.value.length > 0
    })), m2 = mr(() => [
      offset({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.prioritizePosition && e.avoidCollisions && flip2({
        ...y2.value
      }),
      e.avoidCollisions && shift2({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? limitShift2() : void 0,
        ...y2.value
      }),
      !e.prioritizePosition && e.avoidCollisions && flip2({
        ...y2.value
      }),
      size2({
        ...y2.value,
        apply: ({ elements: O2, rects: L, availableWidth: j2, availableHeight: J2 }) => {
          const { width: W2, height: X2 } = L.reference, N = O2.floating.style;
          Object.assign(O2.floating.style, {
            maxWidth: `${j2}px`,
            maxHeight: `${J2}px`
          }), N.setProperty(
            "--radix-popper-available-width",
            `${j2}px`
          ), N.setProperty(
            "--radix-popper-available-height",
            `${J2}px`
          ), N.setProperty(
            "--radix-popper-anchor-width",
            `${W2}px`
          ), N.setProperty(
            "--radix-popper-anchor-height",
            `${X2}px`
          );
        }
      }),
      u.value && arrow3({ element: u.value, padding: e.arrowPadding }),
      fu({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && hide2({ strategy: "referenceHidden", ...y2.value })
    ]), { floatingStyles: x, placement: P2, isPositioned: D2, middlewareData: g } = useFloating(
      l.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...O2) => autoUpdate(...O2, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: m2
      }
    ), S = computed(
      () => hn(P2.value)[0]
    ), E = computed(
      () => hn(P2.value)[1]
    );
    watchEffect(() => {
      D2.value && n("placed");
    });
    const $2 = computed(
      () => {
        var O2;
        return ((O2 = g.value.arrow) == null ? void 0 : O2.centerOffset) !== 0;
      }
    ), R2 = ref("");
    watchEffect(() => {
      r.value && (R2.value = window.getComputedStyle(r.value).zIndex);
    });
    const M = computed(() => {
      var O2;
      return ((O2 = g.value.arrow) == null ? void 0 : O2.x) ?? 0;
    }), V2 = computed(() => {
      var O2;
      return ((O2 = g.value.arrow) == null ? void 0 : O2.y) ?? 0;
    });
    return mu({
      placedSide: S,
      onArrowChange: (O2) => u.value = O2,
      arrowX: M,
      arrowY: V2,
      shouldHideArrow: $2
    }), (O2, L) => {
      var j2, J2, W2;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(x),
          transform: unref(D2) ? unref(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: R2.value,
          "--radix-popper-transform-origin": [
            (j2 = unref(g).transformOrigin) == null ? void 0 : j2.x,
            (J2 = unref(g).transformOrigin) == null ? void 0 : J2.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((W2 = unref(g).hide) == null ? void 0 : W2.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        createVNode(unref(A), mergeProps({ ref: unref(s) }, O2.$attrs, {
          "as-child": e.asChild,
          as: O2.as,
          "data-side": S.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(D2) ? void 0 : "none"
          }
        }), {
          default: withCtx(() => [
            renderSlot(O2.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
var hu = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var yu = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      width: e.width,
      height: e.height,
      viewBox: e.asChild ? void 0 : "0 0 30 10",
      preserveAspectRatio: e.asChild ? void 0 : "none"
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default", {}, () => [
          hu
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
});
var gu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var Lt = defineComponent({
  inheritAttrs: false,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const { forwardRef: t } = T(), e = vu(), n = computed(() => gu[e.placedSide.value]);
    return (l, s) => {
      var r, i, u, d;
      return openBlock(), createElementBlock("span", {
        ref: (c) => {
          unref(e).onArrowChange(c);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (r = unref(e).arrowX) != null && r.value ? `${(i = unref(e).arrowX) == null ? void 0 : i.value}px` : void 0,
          top: (u = unref(e).arrowY) != null && u.value ? `${(d = unref(e).arrowY) == null ? void 0 : d.value}px` : void 0,
          [n.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[unref(e).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[unref(e).placedSide.value],
          visibility: unref(e).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        createVNode(yu, mergeProps(l.$attrs, {
          ref: unref(t),
          style: {
            display: "block"
          },
          as: l.as,
          "as-child": l.asChild,
          width: l.width,
          height: l.height
        }), {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "width", "height"])
      ], 4);
    };
  }
});
var Nt = defineComponent({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    return T(), (t, e) => (openBlock(), createBlock(unref(A), {
      as: t.as,
      "as-child": t.asChild,
      style: normalizeStyle({
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        display: "inline-block",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      })
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "style"]));
  }
});
var zn = defineComponent({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(a2) {
    const t = a2, e = computed(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, l) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${l}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${l}]`, value: n }) : typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, l]) => ({ name: `[${t.name}][${n}]`, value: l })) : []);
    return (n, l) => (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (s) => (openBlock(), createBlock(Nt, {
      key: s.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: s.name,
      value: s.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
});
function bu(a2) {
  return a2 && a2.__esModule && Object.prototype.hasOwnProperty.call(a2, "default") ? a2.default : a2;
}
var Cu = function a(t, e) {
  if (t === e)
    return true;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor)
      return false;
    var n, l, s;
    if (Array.isArray(t)) {
      if (n = t.length, n != e.length)
        return false;
      for (l = n; l-- !== 0; )
        if (!a(t[l], e[l]))
          return false;
      return true;
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    if (s = Object.keys(t), n = s.length, n !== Object.keys(e).length)
      return false;
    for (l = n; l-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, s[l]))
        return false;
    for (l = n; l-- !== 0; ) {
      var r = s[l];
      if (!a(t[r], e[r]))
        return false;
    }
    return true;
  }
  return t !== t && e !== e;
};
var Xe = bu(Cu);
var wu = "data-radix-vue-collection-item";
var [Kn, _u] = Q("CollectionProvider");
function Aa(a2 = wu) {
  const t = ref(/* @__PURE__ */ new Map()), e = ref(), n = _u({
    collectionRef: e,
    itemMap: t,
    attrName: a2
  }), { getItems: l } = Hn(n), s = computed(() => Array.from(n.itemMap.value.values())), r = computed(() => n.itemMap.value.size);
  return { getItems: l, reactiveItems: s, itemMapSize: r };
}
var Oa = defineComponent({
  name: "CollectionSlot",
  setup(a2, { slots: t }) {
    const e = Kn(), { primitiveElement: n, currentElement: l } = qe();
    return watch(l, () => {
      e.collectionRef.value = l.value;
    }), () => h(Mn, { ref: n }, t);
  }
});
var ka = defineComponent({
  name: "CollectionItem",
  setup(a2, { slots: t, attrs: e }) {
    const n = Kn(), { primitiveElement: l, currentElement: s } = qe(), r = getCurrentInstance();
    return watchEffect((i) => {
      var u;
      if (s.value) {
        const d = markRaw(s.value);
        n.itemMap.value.set(d, { ref: s.value, ...markRaw(((u = r == null ? void 0 : r.parent) == null ? void 0 : u.props) ?? {}) }), i(() => n.itemMap.value.delete(d));
      }
    }), () => h(Mn, { ...e, [n.attrName]: "", ref: l }, t);
  }
});
function Hn(a2) {
  const t = a2 ?? Kn();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const l = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (i, u) => l.indexOf(i.ref) - l.indexOf(u.ref)
    );
  } };
}
var [Qe, xu] = Q("ComboboxRoot");
var Nf = defineComponent({
  __name: "ComboboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { multiple: l, disabled: s, dir: r } = toRefs(e), i = be(r), u = ne(e, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: e.searchTerm === void 0
    }), d = ne(e, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: e.defaultValue ?? l.value ? [] : void 0,
      passive: e.modelValue === void 0,
      deep: true
    }), c = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), p = ref();
    async function f(W2) {
      var X2, N;
      c.value = W2, await nextTick(), W2 ? (d.value && (Array.isArray(d.value) && l.value ? p.value = (X2 = g().find((q2) => {
        var F, Z;
        return ((Z = (F = q2.ref) == null ? void 0 : F.dataset) == null ? void 0 : Z.state) === "checked";
      })) == null ? void 0 : X2.value : p.value = d.value), (N = m2.value) == null || N.focus(), J2()) : (y2.value = false, M());
    }
    function v2(W2) {
      if (Array.isArray(d.value) && l.value) {
        const X2 = d.value.findIndex((N) => Xe(N, W2));
        X2 === -1 ? d.value.push(W2) : d.value.splice(X2, 1);
      } else
        d.value = W2, f(false);
    }
    const y2 = ref(false), m2 = ref(), x = ref(), { forwardRef: P2, currentElement: D2 } = T(), { getItems: g, reactiveItems: S, itemMapSize: E } = Aa("data-radix-vue-combobox-item"), $2 = ref([]);
    watch(() => E.value, () => {
      $2.value = g().map((W2) => W2.value);
    }, {
      immediate: true,
      flush: "post"
    });
    const R2 = computed(() => {
      if (y2.value) {
        if (e.filterFunction)
          return e.filterFunction($2.value, u.value);
        const W2 = $2.value.filter((X2) => typeof X2 == "string");
        if (W2.length)
          return W2.filter((X2) => {
            var N;
            return X2.toLowerCase().includes((N = u.value) == null ? void 0 : N.toLowerCase());
          });
      }
      return $2.value;
    });
    function M() {
      !l.value && d.value && !Array.isArray(d.value) ? e.displayValue ? u.value = e.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const V2 = computed(() => R2.value.findIndex((W2) => Xe(W2, p.value))), O2 = computed(() => {
      var W2;
      return (W2 = S.value.find((X2) => X2.value === p.value)) == null ? void 0 : W2.ref;
    }), L = computed(() => JSON.stringify(d.value));
    watch(L, async () => {
      await nextTick(), await nextTick(), M();
    }, { immediate: true }), watch(() => R2.value.length, async (W2) => {
      await nextTick(), await nextTick(), W2 && V2.value === -1 && (p.value = R2.value[0]);
    });
    const j2 = ct(D2);
    function J2() {
      O2.value instanceof Element && O2.value.scrollIntoView({ block: "nearest" });
    }
    return xu({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v2,
      isUserInputted: y2,
      multiple: l,
      disabled: s,
      open: c,
      onOpenChange: f,
      filteredOptions: R2,
      contentId: "",
      inputElement: m2,
      onInputElementChange: (W2) => m2.value = W2,
      onInputNavigation: async (W2) => {
        const X2 = V2.value;
        X2 === 0 && W2 === "up" || X2 === R2.value.length - 1 && W2 === "down" || (X2 === -1 && R2.value.length || W2 === "home" ? p.value = R2.value[0] : W2 === "end" ? p.value = R2.value[R2.value.length - 1] : p.value = R2.value[W2 === "up" ? X2 - 1 : X2 + 1], J2());
      },
      onInputEnter: async () => {
        var W2;
        R2.value.length && p.value && O2.value instanceof Element && ((W2 = O2.value) == null || W2.click());
      },
      selectedValue: p,
      onSelectedValueChange: (W2) => p.value = W2,
      parentElement: D2,
      contentElement: x,
      onContentElementChange: (W2) => x.value = W2
    }), (W2, X2) => (openBlock(), createBlock(unref(xt), null, {
      default: withCtx(() => [
        createVNode(unref(A), mergeProps({
          ref: unref(P2),
          style: {
            pointerEvents: unref(c) ? "auto" : void 0
          },
          as: W2.as,
          "as-child": W2.asChild,
          dir: unref(i)
        }, W2.$attrs), {
          default: withCtx(() => [
            renderSlot(W2.$slots, "default", {
              open: unref(c),
              modelValue: unref(d)
            }),
            unref(j2) && e.name ? (openBlock(), createBlock(unref(zn), {
              key: 0,
              name: e.name,
              value: unref(d)
            }, null, 8, ["name", "value"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
});
var zf = defineComponent({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, e = Qe(), { forwardRef: n, currentElement: l } = T();
    onMounted(() => {
      const d = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      d && (e.onInputElementChange(d), setTimeout(() => {
        t.autoFocus && (d == null || d.focus());
      }, 1));
    });
    const s = computed(() => t.disabled || e.disabled.value || false);
    function r(d) {
      e.open.value ? e.onInputNavigation(d.key === "ArrowUp" ? "up" : "down") : e.onOpenChange(true);
    }
    function i(d) {
      e.open.value && e.onInputNavigation(d.key === "Home" ? "home" : "end");
    }
    function u(d) {
      var c;
      e.searchTerm.value = (c = d.target) == null ? void 0 : c.value, e.open.value || e.onOpenChange(true), e.isUserInputted.value = true;
    }
    return (d, c) => (openBlock(), createBlock(unref(A), {
      ref: unref(n),
      as: d.as,
      "as-child": d.asChild,
      type: d.type,
      disabled: s.value,
      value: unref(e).searchTerm.value,
      "aria-expanded": unref(e).open.value,
      "aria-controls": unref(e).contentId,
      "aria-disabled": s.value ?? void 0,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: u,
      onKeydown: [
        withKeys(withModifiers(r, ["prevent"]), ["down", "up"]),
        withKeys(unref(e).onInputEnter, ["enter"]),
        withKeys(withModifiers(i, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "onKeydown"]));
  }
});
var Kf = defineComponent({
  __name: "ComboboxAnchor",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const { forwardRef: t } = T();
    return (e, n) => (openBlock(), createBlock(unref(St), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(A), mergeProps({
          ref: unref(t),
          "as-child": e.asChild,
          as: e.as
        }, e.$attrs), {
          default: withCtx(() => [
            renderSlot(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }));
  }
});
var Hf = defineComponent({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Qe(), n = computed(() => t.disabled || e.disabled.value || false);
    return (l, s) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      type: l.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": unref(e).open.value,
      "aria-controls": unref(e).contentId,
      "data-state": unref(e).open.value ? "open" : "closed",
      disabled: n.value,
      "data-disabled": n.value ? "" : void 0,
      "aria-disabled": n.value ?? void 0,
      onClick: s[0] || (s[0] = (r) => unref(e).onOpenChange(!unref(e).open.value))
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
});
var Wf = defineComponent({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Qe();
    function n() {
      var l;
      e.searchTerm.value = "", (l = e.inputElement.value) == null || l.focus();
    }
    return (l, s) => (openBlock(), createBlock(unref(A), mergeProps({
      type: l.as === "button" ? "button" : void 0
    }, t, {
      tabindex: "-1",
      onClick: n
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
var [Pl, Su] = Q("ComboboxGroup");
var jf = defineComponent({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { currentRef: e, currentElement: n } = T(), l = me(void 0, "radix-vue-combobox-group"), s = Qe(), r = ref(false);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!u.length;
    }
    return Or(n, () => {
      i();
    }, { childList: true }), watch(() => s.searchTerm.value, () => {
      nextTick(() => {
        i();
      });
    }, { immediate: true }), Su({
      id: l
    }), (u, d) => withDirectives((openBlock(), createBlock(unref(A), mergeProps(t, {
      ref_key: "currentRef",
      ref: e,
      role: "group",
      "aria-labelledby": unref(l)
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [vShow, r.value]
    ]);
  }
});
var Uf = defineComponent({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Pl({ id: "" });
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var [Pu, Eu] = Q("ComboboxContent");
var Du = defineComponent({
  __name: "ComboboxContentImpl",
  props: {
    position: { default: "inline" },
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: true },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { position: l } = toRefs(e), s = Qe();
    sa(e.bodyLock);
    const { forwardRef: r, currentElement: i } = T();
    ra(i);
    const u = computed(() => e.position === "popper" ? e : {}), d = _t(u.value);
    function c(f) {
      s.onSelectedValueChange("");
    }
    onMounted(() => {
      s.onContentElementChange(i.value);
    });
    const p = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return Eu({ position: l }), (f, v2) => (openBlock(), createBlock(unref(Oa), null, {
      default: withCtx(() => [
        f.dismissable ? (openBlock(), createBlock(unref(vt), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: v2[0] || (v2[0] = (y2) => unref(s).onOpenChange(false)),
          onFocusOutside: v2[1] || (v2[1] = (y2) => {
            var m2;
            (m2 = unref(s).parentElement.value) != null && m2.contains(y2.target) && y2.preventDefault(), n("focusOutside", y2);
          }),
          onInteractOutside: v2[2] || (v2[2] = (y2) => n("interactOutside", y2)),
          onEscapeKeyDown: v2[3] || (v2[3] = (y2) => n("escapeKeyDown", y2)),
          onPointerDownOutside: v2[4] || (v2[4] = (y2) => {
            var m2;
            (m2 = unref(s).parentElement.value) != null && m2.contains(y2.target) && y2.preventDefault(), n("pointerDownOutside", y2);
          })
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(l) === "popper" ? unref(Ct) : unref(A)), mergeProps({ ...f.$attrs, ...unref(d) }, {
              id: unref(s).contentId,
              ref: unref(r),
              role: "listbox",
              "data-state": unref(s).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...unref(l) === "popper" ? p : {}
              },
              onPointerleave: c
            }), {
              default: withCtx(() => [
                renderSlot(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (openBlock(), createBlock(resolveDynamicComponent(unref(l) === "popper" ? unref(Ct) : unref(A)), mergeProps({ key: 1 }, { ...f.$attrs, ...u.value }, {
          id: unref(s).contentId,
          ref: unref(r),
          role: "listbox",
          "data-state": unref(s).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...unref(l) === "popper" ? p : {}
          },
          onPointerleave: c
        }), {
          default: withCtx(() => [
            renderSlot(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
});
var Gf = defineComponent({
  __name: "ComboboxContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t), { forwardRef: s } = T(), r = Qe();
    return r.contentId || (r.contentId = me(void 0, "radix-vue-combobox-content")), (i, u) => (openBlock(), createBlock(unref(Ee), {
      present: i.forceMount || unref(r).open.value
    }, {
      default: withCtx(() => [
        createVNode(Du, mergeProps({ ...unref(l), ...i.$attrs }, { ref: unref(s) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var qf = defineComponent({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Qe(), n = computed(() => e.filteredOptions.value.length === 0);
    return (l, s) => n.value ? (openBlock(), createBlock(unref(A), normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", {}, () => [
          createTextVNode("No options")
        ])
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Yf = defineComponent({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T();
    return (n, l) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(A), mergeProps({ ...n.$attrs, ...t }, {
        ref: unref(e),
        "data-radix-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        }
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      createVNode(unref(A), {
        as: "style",
        nonce: n.nonce
      }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
var [$u, Bu] = Q("ComboboxItem");
var Tu = "combobox.select";
var Xf = defineComponent({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { disabled: l } = toRefs(e), s = Qe();
    Pl({ id: "", options: ref([]) });
    const { forwardRef: r } = T(), i = computed(
      () => {
        var y2, m2;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (y2 = s.modelValue.value) == null ? void 0 : y2.some((x) => Xe(x, e.value)) : Xe((m2 = s.modelValue) == null ? void 0 : m2.value, e.value);
      }
    ), u = computed(() => Xe(s.selectedValue.value, e.value)), d = me(void 0, "radix-vue-combobox-item"), c = computed(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((y2) => Xe(y2, e.value)) : true);
    async function p(y2) {
      n("select", y2), !(y2 != null && y2.defaultPrevented) && !l.value && y2 && s.onValueChange(e.value);
    }
    function f(y2) {
      if (!y2)
        return;
      const m2 = { originalEvent: y2, value: e.value };
      Da(Tu, p, m2);
    }
    async function v2(y2) {
      await nextTick(), !y2.defaultPrevented && s.onSelectedValueChange(e.value);
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return Bu({
      isSelected: i
    }), (y2, m2) => (openBlock(), createBlock(unref(ka), null, {
      default: withCtx(() => [
        withDirectives(createVNode(unref(A), {
          ref: unref(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": unref(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": unref(l) || void 0,
          "data-disabled": unref(l) ? "" : void 0,
          as: y2.as,
          "as-child": y2.asChild,
          "data-hidden": c.value ? void 0 : true,
          onClick: f,
          onPointermove: v2
        }, {
          default: withCtx(() => [
            renderSlot(y2.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(y2.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [vShow, c.value]
        ])
      ]),
      _: 3
    }));
  }
});
var Zf = defineComponent({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = $u();
    return (n, l) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(A), mergeProps({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Jf = defineComponent({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(A), mergeProps(t, { "aria-hidden": "" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qf = defineComponent({
  __name: "ComboboxArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2, e = Qe(), n = Pu();
    return T(), (l, s) => unref(e).open.value && unref(n).position.value === "popper" ? (openBlock(), createBlock(unref(Lt), normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var ev = defineComponent({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ft), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ma = defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(St), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wn = defineComponent({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Pt, El] = Q(["MenuRoot", "MenuSub"], "MenuContext");
var [ia, Iu] = Q("MenuRoot");
var jn = defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { modal: l, dir: s } = toRefs(e), r = be(s), i = ne(e, "open", n), u = ref(), d = ref(false);
    return watchEffect((c) => {
      if (!Je)
        return;
      const p = () => {
        d.value = true, document.addEventListener("pointerdown", f, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", f, {
          capture: true,
          once: true
        });
      }, f = () => d.value = false;
      document.addEventListener("keydown", p, { capture: true }), c(() => {
        document.removeEventListener("keydown", p, { capture: true }), document.removeEventListener("pointerdown", f, {
          capture: true
        }), document.removeEventListener("pointermove", f, {
          capture: true
        });
      });
    }), El({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Iu({
      onClose: () => {
        i.value = false;
      },
      isUsingKeyboardRef: d,
      dir: r,
      modal: l
    }), (c, p) => (openBlock(), createBlock(unref(xt), null, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ru = "rovingFocusGroup.onEntryFocus";
var Au = { bubbles: false, cancelable: true };
var Dl = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ou(a2, t) {
  return t !== "rtl" ? a2 : a2 === "ArrowLeft" ? "ArrowRight" : a2 === "ArrowRight" ? "ArrowLeft" : a2;
}
function $l(a2, t, e) {
  const n = Ou(a2.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Dl[n];
}
function Bl(a2) {
  const t = document.activeElement;
  for (const e of a2)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function ku(a2, t) {
  return a2.map((e, n) => a2[(t + n) % a2.length]);
}
var [Mu, Vu] = Q("RovingFocusGroup");
var zt = defineComponent({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: false },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { loop: l, orientation: s, dir: r } = toRefs(e), i = be(r), u = ne(e, "currentTabStopId", n, {
      defaultValue: e.defaultCurrentTabStopId,
      passive: e.currentTabStopId === void 0
    }), d = ref(false), c = ref(false), p = ref(0), { forwardRef: f, currentElement: v2 } = T(), { createCollection: y2 } = Re("rovingFocus"), m2 = y2(v2);
    function x(P2) {
      const D2 = !c.value;
      if (P2.currentTarget && P2.target === P2.currentTarget && D2 && !d.value) {
        const g = new CustomEvent(Ru, Au);
        if (P2.currentTarget.dispatchEvent(g), n("entryFocus", g), !g.defaultPrevented) {
          const S = m2.value, E = S.find((M) => M.getAttribute("data-active") === "true"), $2 = S.find(
            (M) => M.id === u.value
          ), R2 = [E, $2, ...S].filter(
            Boolean
          );
          Bl(R2);
        }
      }
      c.value = false;
    }
    return Vu({
      loop: l,
      dir: i,
      orientation: s,
      currentTabStopId: u,
      onItemFocus: (P2) => {
        u.value = P2;
      },
      onItemShiftTab: () => {
        d.value = true;
      },
      onFocusableItemAdd: () => {
        p.value++;
      },
      onFocusableItemRemove: () => {
        p.value--;
      }
    }), (P2, D2) => (openBlock(), createBlock(unref(A), {
      ref: unref(f),
      tabindex: d.value || p.value === 0 ? -1 : 0,
      "data-orientation": unref(s),
      as: P2.as,
      "as-child": P2.asChild,
      dir: unref(i),
      style: { outline: "none" },
      onMousedown: D2[0] || (D2[0] = (g) => c.value = true),
      onFocus: x,
      onBlur: D2[1] || (D2[1] = (g) => d.value = false)
    }, {
      default: withCtx(() => [
        renderSlot(P2.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"]));
  }
});
var Kt = defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: true },
    active: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = Mu(), n = computed(() => t.tabStopId || me()), l = computed(
      () => e.currentTabStopId.value === n.value
    ), { injectCollection: s } = Re("rovingFocus"), r = s();
    onMounted(() => {
      t.focusable && e.onFocusableItemAdd();
    }), onUnmounted(() => {
      t.focusable && e.onFocusableItemRemove();
    });
    function i(u) {
      if (u.key === "Tab" && u.shiftKey) {
        e.onItemShiftTab();
        return;
      }
      if (u.target !== u.currentTarget)
        return;
      const d = $l(
        u,
        e.orientation.value,
        e.dir.value
      );
      if (d !== void 0) {
        if (u.metaKey || u.ctrlKey || u.altKey || u.shiftKey)
          return;
        u.preventDefault();
        let c = [...r.value];
        if (d === "last")
          c.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && c.reverse();
          const p = c.indexOf(
            u.currentTarget
          );
          c = e.loop.value ? ku(c, p + 1) : c.slice(p + 1);
        }
        nextTick(() => Bl(c));
      }
    }
    return (u, d) => (openBlock(), createBlock(unref(A), {
      "data-radix-vue-collection-item": "",
      tabindex: l.value ? 0 : -1,
      "data-orientation": unref(e).orientation.value,
      "data-active": u.active,
      "data-disabled": !u.focusable || void 0,
      as: u.as,
      "as-child": u.asChild,
      onMousedown: d[0] || (d[0] = (c) => {
        u.focusable ? unref(e).onItemFocus(n.value) : c.preventDefault();
      }),
      onFocus: d[1] || (d[1] = (c) => unref(e).onItemFocus(n.value)),
      onKeydown: i
    }, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"]));
  }
});
var [Un, Fu] = Q("MenuContent");
var Gn = defineComponent({
  __name: "MenuContentImpl",
  props: mergeDefaults({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Sl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Pt(), s = ia(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = toRefs(e);
    On(), sa(i.value);
    const d = ref(""), c = ref(0), p = ref(0), f = ref(null), v2 = ref("right"), y2 = ref(0), m2 = ref(null), { createCollection: x } = Re(), { forwardRef: P2, currentElement: D2 } = T(), g = x(D2);
    watch(D2, (O2) => {
      l.onContentChange(O2);
    });
    const { handleTypeaheadSearch: S } = Ta(g);
    onUnmounted(() => {
      window.clearTimeout(c.value);
    });
    function E(O2) {
      var j2, J2;
      return v2.value === ((j2 = f.value) == null ? void 0 : j2.side) && Ai(O2, (J2 = f.value) == null ? void 0 : J2.area);
    }
    async function $2(O2) {
      var L;
      n("openAutoFocus", O2), !O2.defaultPrevented && (O2.preventDefault(), (L = D2.value) == null || L.focus());
    }
    function R2(O2) {
      if (O2.defaultPrevented)
        return;
      const j2 = O2.target.closest("[data-radix-menu-content]") === O2.currentTarget, J2 = O2.ctrlKey || O2.altKey || O2.metaKey, W2 = O2.key.length === 1, X2 = Vt(
        O2,
        document.activeElement,
        D2.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: true,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (X2)
        return X2 == null ? void 0 : X2.focus();
      if (O2.code === "Space" || (j2 && (O2.key === "Tab" && O2.preventDefault(), !J2 && W2 && S(O2.key)), O2.target !== D2.value) || !Bi.includes(O2.key))
        return;
      O2.preventDefault();
      const N = g.value;
      yl.includes(O2.key) && N.reverse(), mn(N);
    }
    function M(O2) {
      var L, j2;
      (j2 = (L = O2 == null ? void 0 : O2.currentTarget) == null ? void 0 : L.contains) != null && j2.call(L, O2.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function V2(O2) {
      var J2;
      if (!Qt(O2))
        return;
      const L = O2.target, j2 = y2.value !== O2.clientX;
      if ((J2 = O2 == null ? void 0 : O2.currentTarget) != null && J2.contains(L) && j2) {
        const W2 = O2.clientX > y2.value ? "right" : "left";
        v2.value = W2, y2.value = O2.clientX;
      }
    }
    return Fu({
      onItemEnter: (O2) => !!E(O2),
      onItemLeave: (O2) => {
        var L;
        E(O2) || ((L = D2.value) == null || L.focus(), m2.value = null);
      },
      onTriggerLeave: (O2) => !!E(O2),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (O2) => {
        f.value = O2;
      }
    }), (O2, L) => (openBlock(), createBlock(unref(Ra), {
      "as-child": "",
      trapped: unref(r),
      onMountAutoFocus: $2,
      onUnmountAutoFocus: L[7] || (L[7] = (j2) => n("closeAutoFocus", j2))
    }, {
      default: withCtx(() => [
        createVNode(unref(vt), {
          "as-child": "",
          "disable-outside-pointer-events": unref(i),
          onEscapeKeyDown: L[2] || (L[2] = (j2) => n("escapeKeyDown", j2)),
          onPointerDownOutside: L[3] || (L[3] = (j2) => n("pointerDownOutside", j2)),
          onFocusOutside: L[4] || (L[4] = (j2) => n("focusOutside", j2)),
          onInteractOutside: L[5] || (L[5] = (j2) => n("interactOutside", j2)),
          onDismiss: L[6] || (L[6] = (j2) => n("dismiss"))
        }, {
          default: withCtx(() => [
            createVNode(unref(zt), {
              "current-tab-stop-id": m2.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (j2) => m2.value = j2),
              "as-child": "",
              orientation: "vertical",
              dir: unref(s).dir.value,
              loop: unref(u),
              onEntryFocus: L[1] || (L[1] = (j2) => {
                n("entryFocus", j2), unref(s).isUsingKeyboardRef.value || j2.preventDefault();
              })
            }, {
              default: withCtx(() => [
                createVNode(unref(Ct), {
                  ref: unref(P2),
                  role: "menu",
                  as: O2.as,
                  "as-child": O2.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": unref(Ln)(unref(l).open.value),
                  dir: unref(s).dir.value,
                  side: O2.side,
                  "side-offset": O2.sideOffset,
                  align: O2.align,
                  "align-offset": O2.alignOffset,
                  "avoid-collisions": O2.avoidCollisions,
                  "collision-boundary": O2.collisionBoundary,
                  "collision-padding": O2.collisionPadding,
                  "arrow-padding": O2.arrowPadding,
                  "prioritize-position": O2.prioritizePosition,
                  sticky: O2.sticky,
                  "hide-when-detached": O2.hideWhenDetached,
                  onKeydown: R2,
                  onBlur: M,
                  onPointermove: V2
                }, {
                  default: withCtx(() => [
                    renderSlot(O2.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "sticky", "hide-when-detached"])
              ]),
              _: 3
            }, 8, ["current-tab-stop-id", "dir", "loop"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var Tl = defineComponent({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Un(), n = ref(false);
    async function l(r) {
      if (!r.defaultPrevented && Qt(r)) {
        if (t.disabled)
          e.onItemLeave(r);
        else if (!e.onItemEnter(r)) {
          const u = r.currentTarget;
          u == null || u.focus();
        }
      }
    }
    async function s(r) {
      await nextTick(), !r.defaultPrevented && Qt(r) && e.onItemLeave(r);
    }
    return (r, i) => (openBlock(), createBlock(unref(A), {
      role: "menuitem",
      tabindex: "-1",
      as: r.as,
      "as-child": r.asChild,
      "data-radix-vue-collection-item": "",
      "aria-disabled": r.disabled || void 0,
      "data-disabled": r.disabled ? "" : void 0,
      "data-highlighted": n.value ? "" : void 0,
      onPointermove: l,
      onPointerleave: s,
      onFocus: i[0] || (i[0] = async (u) => {
        await nextTick(), !(u.defaultPrevented || r.disabled) && (n.value = true);
      }),
      onBlur: i[1] || (i[1] = async (u) => {
        await nextTick(), !u.defaultPrevented && (n.value = false);
      })
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"]));
  }
});
var ua = defineComponent({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = T(), r = ia(), i = Un(), u = ref(false);
    async function d() {
      const c = s.value;
      if (!e.disabled && c) {
        const p = new CustomEvent(Di, {
          bubbles: true,
          cancelable: true
        });
        n("select", p), await nextTick(), p.defaultPrevented ? u.value = false : r.onClose();
      }
    }
    return (c, p) => (openBlock(), createBlock(Tl, mergeProps(e, {
      ref: unref(l),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = true;
      }),
      onPointerup: p[1] || (p[1] = async (f) => {
        var v2;
        await nextTick(), !f.defaultPrevented && (u.value || (v2 = f.currentTarget) == null || v2.click());
      }),
      onKeydown: p[2] || (p[2] = async (f) => {
        const v2 = unref(i).searchRef.value !== "";
        c.disabled || v2 && f.key === " " || unref(vn).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Lu, Il] = Q(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
);
var qn = defineComponent({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = Lu({
      checked: ref(false)
    });
    return (e, n) => (openBlock(), createBlock(unref(Ee), {
      present: e.forceMount || unref(wa)(unref(t).checked.value) || unref(t).checked.value === true
    }, {
      default: withCtx(() => [
        createVNode(unref(A), {
          as: e.as,
          "as-child": e.asChild,
          "data-state": unref(Nn)(unref(t).checked.value)
        }, {
          default: withCtx(() => [
            renderSlot(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Yn = defineComponent({
  __name: "MenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String], default: false },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = ne(e, "checked", n);
    return Il({ checked: l }), (s, r) => (openBlock(), createBlock(ua, mergeProps({ role: "menuitemcheckbox" }, e, {
      "aria-checked": unref(wa)(unref(l)) ? "mixed" : unref(l),
      "data-state": unref(Nn)(unref(l)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), unref(wa)(unref(l)) ? l.value = true : l.value = !unref(l);
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var Nu = defineComponent({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = _e(e, n), s = Pt(), { forwardRef: r, currentElement: i } = T();
    return ra(i), (u, d) => (openBlock(), createBlock(Gn, mergeProps(unref(l), {
      ref: unref(r),
      "trap-focus": unref(s).open.value,
      "disable-outside-pointer-events": unref(s).open.value,
      "disable-outside-scroll": true,
      onDismiss: d[0] || (d[0] = (c) => unref(s).onOpenChange(false)),
      onFocusOutside: d[1] || (d[1] = withModifiers((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
});
var zu = defineComponent({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t), s = Pt();
    return (r, i) => (openBlock(), createBlock(Gn, mergeProps(unref(l), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      "disable-outside-scroll": false,
      onDismiss: i[0] || (i[0] = (u) => unref(s).onOpenChange(false))
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xn = defineComponent({
  __name: "MenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t), s = Pt(), r = ia();
    return (i, u) => (openBlock(), createBlock(unref(Ee), {
      present: i.forceMount || unref(s).open.value
    }, {
      default: withCtx(() => [
        unref(r).modal.value ? (openBlock(), createBlock(Nu, normalizeProps(mergeProps({ key: 0 }, { ...i.$attrs, ...unref(l) })), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(zu, normalizeProps(mergeProps({ key: 1 }, { ...i.$attrs, ...unref(l) })), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Va = defineComponent({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zn = defineComponent({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Jn = defineComponent({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ft), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Ku, Hu] = Q("MenuRadioGroup");
var Qn = defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "modelValue", t);
    return Hu({
      modelValue: l,
      onValueChange: (s) => {
        l.value = s;
      }
    }), (s, r) => (openBlock(), createBlock(Va, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var eo = defineComponent({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { value: l } = toRefs(e), s = Ku(), r = computed(
      () => s.modelValue.value === (l == null ? void 0 : l.value)
    );
    return Il({ checked: r }), (i, u) => (openBlock(), createBlock(ua, mergeProps({ role: "menuitemradio" }, e, {
      "aria-checked": r.value,
      "data-state": unref(Nn)(r.value),
      onSelect: u[0] || (u[0] = async (d) => {
        n("select", d), unref(s).onValueChange(unref(l));
      })
    }), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var to = defineComponent({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Rl, Wu] = Q("MenuSub");
var ao = defineComponent({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "open", t, {
      defaultValue: false,
      passive: e.open === void 0
    }), s = Pt(), r = ref(), i = ref();
    return watchEffect((u) => {
      (s == null ? void 0 : s.open.value) === false && (l.value = false), u(() => l.value = false);
    }), El({
      open: l,
      onOpenChange: (u) => {
        l.value = u;
      },
      content: i,
      onContentChange: (u) => {
        i.value = u;
      }
    }), Wu({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (u) => {
        r.value = u;
      }
    }), (u, d) => (openBlock(), createBlock(unref(xt), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var no = defineComponent({
  __name: "MenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t), s = Pt(), r = ia(), i = Rl(), { forwardRef: u, currentElement: d } = T();
    return i.contentId || (i.contentId = me(void 0, "radix-vue-menu-sub-content")), (c, p) => (openBlock(), createBlock(unref(Ee), {
      present: c.forceMount || unref(s).open.value
    }, {
      default: withCtx(() => [
        createVNode(Gn, mergeProps(unref(l), {
          id: unref(i).contentId,
          ref: unref(u),
          "aria-labelledby": unref(i).triggerId,
          align: "start",
          side: unref(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": false,
          "disable-outside-scroll": false,
          "trap-focus": false,
          onOpenAutoFocus: p[0] || (p[0] = withModifiers((f) => {
            var v2;
            unref(r).isUsingKeyboardRef.value && ((v2 = unref(d)) == null || v2.focus());
          }, ["prevent"])),
          onCloseAutoFocus: p[1] || (p[1] = withModifiers(() => {
          }, ["prevent"])),
          onFocusOutside: p[2] || (p[2] = (f) => {
            f.defaultPrevented || f.target !== unref(i).trigger.value && unref(s).onOpenChange(false);
          }),
          onEscapeKeyDown: p[3] || (p[3] = (f) => {
            unref(r).onClose(), f.preventDefault();
          }),
          onKeydown: p[4] || (p[4] = (f) => {
            var m2, x;
            const v2 = (m2 = f.currentTarget) == null ? void 0 : m2.contains(f.target), y2 = unref(Ii)[unref(r).dir.value].includes(f.key);
            v2 && y2 && (unref(s).onOpenChange(false), (x = unref(i).trigger.value) == null || x.focus(), f.preventDefault());
          })
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var oo = defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Pt(), n = ia(), l = Rl(), s = Un(), r = ref(null);
    l.triggerId || (l.triggerId = me(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    onUnmounted(() => {
      i();
    });
    function u(p) {
      !Qt(p) || s.onItemEnter(p) || !t.disabled && !e.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        e.onOpenChange(true), i();
      }, 100));
    }
    async function d(p) {
      var v2, y2;
      if (!Qt(p))
        return;
      i();
      const f = (v2 = e.content.value) == null ? void 0 : v2.getBoundingClientRect();
      if (f != null && f.width) {
        const m2 = (y2 = e.content.value) == null ? void 0 : y2.dataset.side, x = m2 === "right", P2 = x ? -5 : 5, D2 = f[x ? "left" : "right"], g = f[x ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + P2, y: p.clientY },
            { x: D2, y: f.top },
            { x: g, y: f.top },
            { x: g, y: f.bottom },
            { x: D2, y: f.bottom }
          ],
          side: m2
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(p))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function c(p) {
      var v2;
      const f = s.searchRef.value !== "";
      t.disabled || f && p.key === " " || Ti[n.dir.value].includes(p.key) && (e.onOpenChange(true), await nextTick(), (v2 = e.content.value) == null || v2.focus(), p.preventDefault());
    }
    return (p, f) => (openBlock(), createBlock(Ma, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(Tl, mergeProps(t, {
          id: unref(l).triggerId,
          ref: (v2) => {
            var y2;
            (y2 = unref(l)) == null || y2.onTriggerChange(v2 == null ? void 0 : v2.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(l).contentId,
          "data-state": unref(Ln)(unref(e).open.value),
          onClick: f[0] || (f[0] = async (v2) => {
            t.disabled || v2.defaultPrevented || (v2.currentTarget.focus(), unref(e).open.value || unref(e).onOpenChange(true));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
});
var [Al, ju] = Q("ContextMenuRoot");
var tv = defineComponent({
  inheritAttrs: false,
  __name: "ContextMenuRoot",
  props: {
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { dir: l, modal: s } = toRefs(e);
    T();
    const r = be(l), i = ref(false);
    return ju({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      dir: r,
      modal: s
    }), watch(i, (u) => {
      n("update:open", u);
    }), (u, d) => (openBlock(), createBlock(unref(jn), {
      open: i.value,
      "onUpdate:open": d[0] || (d[0] = (c) => i.value = c),
      dir: unref(r),
      modal: unref(s)
    }, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
function To(a2) {
  return a2.pointerType !== "mouse";
}
var av = defineComponent({
  inheritAttrs: false,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, { disabled: e } = toRefs(t), { forwardRef: n } = T(), l = Al(), s = ref({ x: 0, y: 0 }), r = computed(() => ({
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        left: s.value.x,
        right: s.value.x,
        top: s.value.y,
        bottom: s.value.y,
        ...s.value
      })
    })), i = ref(0);
    function u() {
      window.clearTimeout(i.value);
    }
    function d(v2) {
      s.value = { x: v2.clientX, y: v2.clientY }, l.onOpenChange(true);
    }
    async function c(v2) {
      e.value || (await nextTick(), v2.defaultPrevented || (u(), d(v2), v2.preventDefault()));
    }
    async function p(v2) {
      e.value || (await nextTick(), To(v2) && !v2.defaultPrevented && (u(), i.value = window.setTimeout(() => d(v2), 700)));
    }
    async function f(v2) {
      e.value || (await nextTick(), To(v2) && !v2.defaultPrevented && u());
    }
    return (v2, y2) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(Ma), {
        as: "template",
        element: r.value
      }, null, 8, ["element"]),
      createVNode(unref(A), mergeProps({
        ref: unref(n),
        as: v2.as,
        "as-child": v2.asChild,
        "data-state": unref(l).open.value ? "open" : "closed",
        "data-disabled": unref(e) ? "" : void 0,
        style: {
          WebkitTouchCallout: "none"
        }
      }, v2.$attrs, {
        onContextmenu: c,
        onPointerdown: p,
        onPointermove: f,
        onPointercancel: f,
        onPointerup: f
      }), {
        default: withCtx(() => [
          renderSlot(v2.$slots, "default")
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-state", "data-disabled"])
    ], 64));
  }
});
var nv = defineComponent({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Jn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ov = defineComponent({
  __name: "ContextMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    T();
    const s = Al(), r = ref(false);
    return (i, u) => (openBlock(), createBlock(unref(Xn), mergeProps(unref(l), {
      side: "right",
      "side-offset": 2,
      align: "start",
      style: {
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        !d.defaultPrevented && r.value && d.preventDefault(), r.value = false;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        !d.defaultPrevented && !unref(s).modal.value && (r.value = true);
      })
    }), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var lv = defineComponent({
  __name: "ContextMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Wn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var sv = defineComponent({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    return T(), (s, r) => (openBlock(), createBlock(unref(ua), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var rv = defineComponent({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Va), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var iv = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(to), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var uv = defineComponent({
  __name: "ContextMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    return T(), (s, r) => (openBlock(), createBlock(unref(Yn), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var dv = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var cv = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Zn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var pv = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    return T(), (s, r) => (openBlock(), createBlock(unref(Qn), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var fv = defineComponent({
  __name: "ContextMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    return T(), (s, r) => (openBlock(), createBlock(unref(eo), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vv = defineComponent({
  __name: "ContextMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    T();
    const l = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (s, r) => (openBlock(), createBlock(unref(ao), {
      open: unref(l),
      "onUpdate:open": r[0] || (r[0] = (i) => isRef(l) ? l.value = i : null)
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var mv = defineComponent({
  __name: "ContextMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    return T(), (s, r) => (openBlock(), createBlock(unref(no), mergeProps(unref(l), { style: {
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var hv = defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(oo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Uu = ["hour", "minute", "second"];
function Tt(a2) {
  const { formatter: t } = a2, e = $n.map((n) => [n, a2.value[n]]);
  if ("hour" in a2.value) {
    const n = el.map((s) => s === "dayPeriod" ? [s, t.dayPeriod($(a2.value))] : [s, a2.value[s]]), l = [...e, ...n];
    return Object.fromEntries(l);
  }
  return Object.fromEntries(e);
}
function Ol(a2) {
  const t = tl.map((e) => e === "dayPeriod" ? [e, "AM"] : [e, null]).filter(([e]) => e === "literal" || e === null ? false : a2 === "day" ? !Uu.includes(e) : true);
  return Object.fromEntries(t);
}
function Gu(a2) {
  const { segmentValues: t, formatter: e, locale: n } = a2;
  function l(r) {
    if ("hour" in t) {
      const i = t[r];
      return i !== null ? r === "day" && t.month !== null ? e.part(a2.dateRef.set({ [r]: i, month: t.month }), r, {
        hourCycle: a2.hourCycle === 24 ? "h24" : void 0
      }) : e.part(a2.dateRef.set({ [r]: i }), r, {
        hourCycle: a2.hourCycle === 24 ? "h24" : void 0
      }) : tn(r, "", n.value);
    } else {
      if (fr(r)) {
        const i = t[r];
        return i !== null ? r === "day" && t.month !== null ? e.part(a2.dateRef.set({ [r]: i, month: t.month }), r) : e.part(a2.dateRef.set({ [r]: i }), r) : tn(r, "", n.value);
      }
      return "";
    }
  }
  return Object.keys(t).reduce((r, i) => {
    if (!al(i))
      return r;
    if ("hour" in t && i === "dayPeriod") {
      const u = t[i];
      u !== null ? r[i] = u : r[i] = tn(i, "AM", n.value);
    } else
      r[i] = l(i);
    return r;
  }, {});
}
function qu(a2) {
  const { granularity: t, formatter: e, contentObj: n, hideTimeZone: l, hourCycle: s } = a2;
  return e.toParts(a2.dateRef, vr(t, s)).map((u) => ["literal", "timeZoneName", null].includes(u.type) || !al(u.type) ? {
    part: u.type,
    value: u.value
  } : {
    part: u.type,
    value: n[u.type]
  }).filter((u) => !(u.part === null || u.value === null || u.part === "timeZoneName" && (!m(a2.dateRef) || l)));
}
function yn(a2) {
  const t = Gu(a2), e = qu({
    contentObj: t,
    ...a2
  });
  return {
    obj: t,
    arr: e
  };
}
function We(a2) {
  const t = pt();
  return a2 === t.ARROW_RIGHT || a2 === t.ARROW_LEFT;
}
function gt(a2) {
  return !Number.isNaN(Number.parseInt(a2));
}
function tt(a2) {
  const t = pt();
  return !!([
    t.ENTER,
    t.ARROW_UP,
    t.ARROW_DOWN,
    t.ARROW_LEFT,
    t.ARROW_RIGHT,
    t.BACKSPACE,
    t.SPACE
  ].includes(a2) || gt(a2));
}
var Yu = ["id", "value", "name", "disabled", "required"];
var [Xu, Zu] = Q("DateFieldRoot");
var Ju = defineComponent({
  inheritAttrs: false,
  __name: "DateFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, granularity: d, defaultValue: c, dir: p } = toRefs(n), f = An(n.locale), v2 = be(p), { primitiveElement: y2, currentElement: m2 } = qe(), x = ref(/* @__PURE__ */ new Set());
    onMounted(() => {
      Array.from(m2.value.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((F) => F.getAttribute("data-radix-vue-date-field-segment") !== "literal").forEach((F) => x.value.add(F));
    });
    const P2 = ne(n, "modelValue", l, {
      defaultValue: c.value,
      passive: n.modelValue === void 0
    }), D2 = Ot({
      defaultPlaceholder: n.placeholder,
      granularity: d.value,
      defaultValue: P2.value
    }), g = ne(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? D2.copy(),
      passive: n.placeholder === void 0
    }), S = computed(() => n.granularity ? z(g.value) ? n.granularity : "day" : z(g.value) ? "minute" : "day"), E = computed(() => {
      var F;
      return P2.value ? !!((F = u.value) != null && F.call(u, P2.value) || n.minValue && R(P2.value, n.minValue) || n.maxValue && R(n.maxValue, P2.value)) : false;
    }), $2 = Ol(S.value), R2 = ref(P2.value ? { ...Tt({ value: P2.value, formatter: f }) } : { ...$2 }), M = computed(() => yn({
      granularity: S.value,
      dateRef: g.value,
      formatter: f,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: R2.value,
      locale: s
    })), V2 = computed(() => M.value.arr), O2 = computed(() => V2.value.filter(({ part: F }) => F !== "literal"));
    watch(s, (F) => {
      f.getLocale() !== F && f.setLocale(F);
    }), watch(P2, (F) => {
      F !== void 0 && (!$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(g.value, F) || g.value.compare(F) !== 0) && (g.value = F.copy());
    }), watch([P2, s], ([F]) => {
      F !== void 0 ? R2.value = { ...Tt({ value: F, formatter: f }) } : R2.value = { ...$2 };
    });
    const L = ref(null), j2 = computed(() => Array.from(x.value).findIndex((F) => {
      var Z;
      return F.getAttribute("data-radix-vue-date-field-segment") === ((Z = L.value) == null ? void 0 : Z.getAttribute("data-radix-vue-date-field-segment"));
    })), J2 = computed(() => {
      const F = v2.value === "rtl" ? -1 : 1;
      return (F < 0 ? j2.value < 0 : j2.value > x.value.size - 1) ? null : Array.from(x.value)[j2.value + F];
    }), W2 = computed(() => {
      const F = v2.value === "rtl" ? -1 : 1;
      return (F > 0 ? j2.value < 0 : j2.value > x.value.size - 1) ? null : Array.from(x.value)[j2.value - F];
    }), X2 = pt();
    function N(F) {
      var Z, U;
      We(F.key) && (F.key === X2.ARROW_LEFT && ((Z = W2.value) == null || Z.focus()), F.key === X2.ARROW_RIGHT && ((U = J2.value) == null || U.focus()));
    }
    function q2(F) {
      L.value = F;
    }
    return Zu({
      isDateUnavailable: u.value,
      locale: s,
      modelValue: P2,
      placeholder: g,
      disabled: r,
      formatter: f,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: R2,
      isInvalid: E,
      segmentContents: O2,
      elements: x,
      setFocusedElement: q2,
      focusNext() {
        var F;
        (F = J2.value) == null || F.focus();
      }
    }), t({
      /** Helper to set the focused element inside the DateField */
      setFocusedElement: q2
    }), (F, Z) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(A), mergeProps(F.$attrs, {
        ref_key: "primitiveElement",
        ref: y2,
        role: "group",
        "aria-disabled": unref(r) ? true : void 0,
        "data-disabled": unref(r) ? "" : void 0,
        "data-readonly": unref(i) ? "" : void 0,
        "data-invalid": E.value ? "" : void 0,
        dir: unref(v2),
        onKeydown: withKeys(N, ["left", "right"])
      }), {
        default: withCtx(() => [
          renderSlot(F.$slots, "default", {
            modelValue: unref(P2),
            segments: V2.value,
            isInvalid: E.value
          })
        ]),
        _: 3
      }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
      createBaseVNode("input", {
        id: F.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: unref(P2) ? unref(P2).toString() : "",
        name: F.name,
        disabled: unref(r),
        required: F.required,
        style: normalizeStyle({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }),
        onFocus: Z[0] || (Z[0] = (U) => {
          var Y, te;
          return (te = (Y = Array.from(x.value)) == null ? void 0 : Y[0]) == null ? void 0 : te.focus();
        })
      }, null, 44, Yu)
    ], 64));
  }
});
var Et = {
  role: "spinbutton",
  contenteditable: true,
  tabindex: 0,
  spellcheck: false,
  inputmode: "numeric",
  autocorrect: "off",
  enterkeyhint: "next",
  style: "caret-color: transparent;"
};
function Qu(a2) {
  const { segmentValues: t, placeholder: e } = a2, n = t.day === null, l = t.day ? e.set({ day: t.day }) : e, s = l.day, r = 1, i = P(l), u = n ? "Empty" : `${s}`;
  return {
    ...Et,
    "aria-label": "day,",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function ed(a2) {
  const { segmentValues: t, placeholder: e, formatter: n } = a2, l = t.month === null, s = t.month ? e.set({ month: t.month }) : e, r = s.month, i = 1, u = 12, d = l ? "Empty" : `${r} - ${n.fullMonth($(s))}`;
  return {
    ...Et,
    "aria-label": "month, ",
    contenteditable: true,
    "aria-valuemin": i,
    "aria-valuemax": u,
    "aria-valuenow": r,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function td(a2) {
  const { segmentValues: t, placeholder: e } = a2, n = t.year === null, l = t.year ? e.set({ year: t.year }) : e, s = 1, r = 9999, i = l.year, u = n ? "Empty" : `${i}`;
  return {
    ...Et,
    "aria-label": "year, ",
    "aria-valuemin": s,
    "aria-valuemax": r,
    "aria-valuenow": i,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function ad(a2) {
  const { segmentValues: t, hourCycle: e, placeholder: n } = a2;
  if (!("hour" in t) || !("hour" in n))
    return {};
  const l = t.hour === null, s = t.hour ? n.set({ hour: t.hour }) : n, r = e === 12 ? 1 : 0, i = e === 12 ? 12 : 23, u = s.hour, d = l ? "Empty" : `${u} ${t.dayPeriod ?? ""}`;
  return {
    ...Et,
    "aria-label": "hour, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": u,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function nd(a2) {
  const { segmentValues: t, placeholder: e } = a2;
  if (!("minute" in t) || !("minute" in e))
    return {};
  const n = t.minute === null, s = (t.minute ? e.set({ minute: t.minute }) : e).minute, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Et,
    "aria-label": "minute, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function od(a2) {
  const { segmentValues: t, placeholder: e } = a2;
  if (!("second" in t) || !("second" in e))
    return {};
  const n = t.second === null, s = (t.second ? e.set({ second: t.second }) : e).second, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...Et,
    "aria-label": "second, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function ld(a2) {
  const { segmentValues: t } = a2;
  if (!("dayPeriod" in t))
    return {};
  const e = 0, n = 12, l = t.hour ? t.hour > 12 ? t.hour - 12 : t.hour : 0, s = t.dayPeriod ?? "AM";
  return {
    ...Et,
    inputmode: "text",
    "aria-label": "AM/PM",
    "aria-valuemin": e,
    "aria-valuemax": n,
    "aria-valuenow": l,
    "aria-valuetext": s
  };
}
function sd(a2) {
  return {
    "aria-hidden": true,
    "data-segment": "literal"
  };
}
function rd(a2) {
  return {
    role: "textbox",
    "aria-label": "timezone, ",
    "data-readonly": true,
    "data-segment": "timeZoneName",
    tabindex: 0,
    style: "caret-color: transparent;"
  };
}
var id = {
  day: {
    attrs: Qu
  },
  month: {
    attrs: ed
  },
  year: {
    attrs: td
  },
  hour: {
    attrs: ad
  },
  minute: {
    attrs: nd
  },
  second: {
    attrs: od
  },
  dayPeriod: {
    attrs: ld
  },
  literal: {
    attrs: sd
  },
  timeZoneName: {
    attrs: rd
  }
};
function kl(a2) {
  const t = pt();
  function e({ e: g, part: S, dateRef: E, prevValue: $2 }) {
    const R2 = g.key === t.ARROW_UP ? 1 : -1, M = 0, V2 = 59;
    if ($2 === null)
      return R2 > 0 ? M : V2;
    const O2 = [S, R2];
    return E.set({ [S]: $2 }).cycle(...O2)[S];
  }
  function n(g) {
    if (a2.hasLeftFocus.value = false, g === null)
      return g;
    const S = g.toString();
    return S.length === 1 ? null : Number.parseInt(S.slice(0, -1));
  }
  function l({ e: g, part: S, dateRef: E, prevValue: $2, hourCycle: R2 }) {
    const M = g.key === t.ARROW_UP ? 1 : -1;
    if ($2 === null)
      return E[S];
    if (S === "hour" && "hour" in E) {
      const O2 = [S, M, { hourCycle: R2 }];
      return E.set({ [S]: $2 }).cycle(...O2)[S];
    }
    const V2 = [S, M];
    return S === "day" && a2.segmentValues.value.month !== null ? E.set({ [S]: $2, month: a2.segmentValues.value.month }).cycle(...V2)[S] : E.set({ [S]: $2 }).cycle(...V2)[S];
  }
  function s(g, S, E) {
    let $2 = false;
    const R2 = Math.floor(g / 10);
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, E = null), E === null)
      return S === 0 ? (a2.lastKeyZero.value = true, { value: null, moveToNext: $2 }) : ((a2.lastKeyZero.value || S > R2) && ($2 = true), a2.lastKeyZero.value = false, { value: S, moveToNext: $2 });
    const M = E.toString().length, V2 = Number.parseInt(E.toString() + S.toString());
    return M === 2 || V2 > g ? ((S > R2 || V2 > g) && ($2 = true), { value: S, moveToNext: $2 }) : ($2 = true, { value: V2, moveToNext: $2 });
  }
  function r(g, S) {
    let $2 = false;
    const R2 = Math.floor(59 / 10);
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, S = null), S === null)
      return g === 0 ? (a2.lastKeyZero.value = true, { value: 0, moveToNext: $2 }) : ((a2.lastKeyZero.value || g > R2) && ($2 = true), a2.lastKeyZero.value = false, { value: g, moveToNext: $2 });
    const M = S.toString().length, V2 = Number.parseInt(S.toString() + g.toString());
    return M === 2 || V2 > 59 ? (g > R2 && ($2 = true), { value: g, moveToNext: $2 }) : ($2 = true, { value: V2, moveToNext: $2 });
  }
  function i(g, S) {
    let $2 = false;
    const R2 = Math.floor(24 / 10);
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, S = null), S === null)
      return g === 0 ? (a2.lastKeyZero.value = true, { value: null, moveToNext: $2 }) : ((a2.lastKeyZero.value || g > R2) && ($2 = true), a2.lastKeyZero.value = false, { value: g, moveToNext: $2 });
    const M = S.toString().length, V2 = Number.parseInt(S.toString() + g.toString());
    return M === 2 || V2 > 24 ? (g > R2 && ($2 = true), { value: g, moveToNext: $2 }) : ($2 = true, { value: V2, moveToNext: $2 });
  }
  function u(g, S) {
    let E = false;
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, S = null), S === null)
      return { value: g === 0 ? 1 : g, moveToNext: E };
    const $2 = S.toString() + g.toString();
    return $2.length > 4 ? { value: g === 0 ? 1 : g, moveToNext: E } : ($2.length === 4 && (E = true), { value: Number.parseInt($2), moveToNext: E });
  }
  const d = computed(() => id[a2.part].attrs({
    placeholder: a2.placeholder.value,
    hourCycle: a2.hourCycle,
    segmentValues: a2.segmentValues.value,
    formatter: a2.formatter
  }));
  function c(g) {
    if (!tt(g.key) || We(g.key))
      return;
    const S = a2.segmentValues.value.day;
    if (g.key === t.ARROW_DOWN || g.key === t.ARROW_UP) {
      a2.segmentValues.value.day = l({ e: g, part: "day", dateRef: a2.placeholder.value, prevValue: S });
      return;
    }
    if (gt(g.key)) {
      const E = Number.parseInt(g.key), $2 = a2.segmentValues.value.month, R2 = $2 ? P(a2.placeholder.value.set({ month: $2 })) : P(a2.placeholder.value), { value: M, moveToNext: V2 } = s(R2, E, S);
      a2.segmentValues.value.day = M, V2 && a2.focusNext();
    }
    g.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.day = n(S));
  }
  function p(g) {
    if (!tt(g.key) || We(g.key))
      return;
    const S = a2.segmentValues.value.month;
    if (g.key === t.ARROW_DOWN || g.key === t.ARROW_UP) {
      a2.segmentValues.value.month = l({ e: g, part: "month", dateRef: a2.placeholder.value, prevValue: S });
      return;
    }
    if (gt(g.key)) {
      const E = Number.parseInt(g.key), { value: $2, moveToNext: R2 } = s(12, E, S);
      a2.segmentValues.value.month = $2, R2 && a2.focusNext();
    }
    g.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.month = n(S));
  }
  function f(g) {
    if (!tt(g.key) || We(g.key))
      return;
    const S = a2.segmentValues.value.year;
    if (g.key === t.ARROW_DOWN || g.key === t.ARROW_UP) {
      a2.segmentValues.value.year = l({ e: g, part: "year", dateRef: a2.placeholder.value, prevValue: S });
      return;
    }
    if (gt(g.key)) {
      const E = Number.parseInt(g.key), { value: $2, moveToNext: R2 } = u(E, S);
      a2.segmentValues.value.year = $2, R2 && a2.focusNext();
    }
    g.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.year = n(S));
  }
  function v2(g) {
    const S = a2.placeholder.value;
    if (!tt(g.key) || We(g.key) || !("hour" in S) || !("hour" in a2.segmentValues.value))
      return;
    const E = a2.segmentValues.value.hour, $2 = a2.hourCycle;
    if (g.key === t.ARROW_UP || g.key === t.ARROW_DOWN) {
      a2.segmentValues.value.hour = l({ e: g, part: "hour", dateRef: a2.placeholder.value, prevValue: E, hourCycle: $2 }), "dayPeriod" in a2.segmentValues.value && (a2.segmentValues.value.hour < 12 ? a2.segmentValues.value.dayPeriod = "AM" : a2.segmentValues.value.hour && (a2.segmentValues.value.dayPeriod = "PM"));
      return;
    }
    if (gt(g.key)) {
      const R2 = Number.parseInt(g.key), { value: M, moveToNext: V2 } = i(R2, E);
      "dayPeriod" in a2.segmentValues.value && M && M > 12 ? a2.segmentValues.value.dayPeriod = "PM" : "dayPeriod" in a2.segmentValues.value && M && (a2.segmentValues.value.dayPeriod = "AM"), a2.segmentValues.value.hour = M, V2 && a2.focusNext();
    }
    g.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.hour = n(E));
  }
  function y2(g) {
    const S = a2.placeholder.value;
    if (!tt(g.key) || We(g.key) || !("minute" in S) || !("minute" in a2.segmentValues.value))
      return;
    const E = a2.segmentValues.value.minute;
    if (a2.segmentValues.value.minute = e({ e: g, part: "minute", dateRef: a2.placeholder.value, prevValue: E }), gt(g.key)) {
      const $2 = Number.parseInt(g.key), { value: R2, moveToNext: M } = r($2, E);
      a2.segmentValues.value.minute = R2, M && a2.focusNext();
    }
    g.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.minute = n(E));
  }
  function m2(g) {
    const S = a2.placeholder.value;
    if (!tt(g.key) || We(g.key) || !("second" in S) || !("second" in a2.segmentValues.value))
      return;
    const E = a2.segmentValues.value.second;
    if (a2.segmentValues.value.second = e({ e: g, part: "second", dateRef: a2.placeholder.value, prevValue: E }), gt(g.key)) {
      const $2 = Number.parseInt(g.key), { value: R2, moveToNext: M } = r($2, E);
      a2.segmentValues.value.second = R2, M && a2.focusNext();
    }
    g.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.second = n(E));
  }
  function x(g) {
    if (!((!tt(g.key) || We(g.key)) && g.key !== "a" && g.key !== "p" || !("hour" in a2.placeholder.value) || !("dayPeriod" in a2.segmentValues.value))) {
      if (g.key === t.ARROW_UP || g.key === t.ARROW_DOWN) {
        if (a2.segmentValues.value.dayPeriod === "AM") {
          a2.segmentValues.value.dayPeriod = "PM", a2.segmentValues.value.hour = a2.segmentValues.value.hour + 12;
          return;
        }
        a2.segmentValues.value.dayPeriod = "AM", a2.segmentValues.value.hour = a2.segmentValues.value.hour - 12;
        return;
      }
      if (g.key === "a") {
        a2.segmentValues.value.dayPeriod = "AM", a2.segmentValues.value.hour = a2.segmentValues.value.hour - 12;
        return;
      }
      g.key === "p" && (a2.segmentValues.value.dayPeriod = "PM", a2.segmentValues.value.hour = a2.segmentValues.value.hour + 12);
    }
  }
  function P2(g) {
    a2.disabled.value && g.preventDefault();
  }
  function D2(g) {
    const S = a2.disabled.value, E = a2.readonly.value;
    if (g.key !== t.TAB && g.preventDefault(), S || E)
      return;
    if ({
      day: c,
      month: p,
      year: f,
      hour: v2,
      minute: y2,
      second: m2,
      dayPeriod: x,
      timeZoneName: () => {
      }
    }[a2.part](g), !We(g.key) && g.key !== t.TAB && g.key !== t.SHIFT && tt(g.key) && Object.values(a2.segmentValues.value).every((R2) => R2 !== null)) {
      let R2 = { ...a2.segmentValues.value };
      "dayPeriod" in a2.segmentValues.value && (R2 = {
        ...R2,
        hour: a2.segmentValues.value.dayPeriod === "PM" && !a2.modelValue.value ? a2.segmentValues.value.hour + 12 : a2.segmentValues.value.hour
      });
      let M = a2.placeholder.value.copy();
      Object.keys(R2).forEach((V2) => {
        const O2 = R2[V2];
        M = M.set({ [V2]: O2 });
      }), a2.modelValue.value = M.copy();
    }
  }
  return {
    handleSegmentClick: P2,
    handleSegmentKeydown: D2,
    attributes: d
  };
}
var ud = defineComponent({
  __name: "DateFieldInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Xu(), n = ref(true), l = ref(false), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = kl({
      hasLeftFocus: n,
      lastKeyZero: l,
      placeholder: e.placeholder,
      hourCycle: e.hourCycle,
      segmentValues: e.segmentValues,
      formatter: e.formatter,
      part: t.part,
      disabled: e.disabled,
      readonly: e.readonly,
      focusNext: e.focusNext,
      modelValue: e.modelValue
    }), u = computed(() => e.disabled.value), d = computed(() => e.readonly.value), c = computed(() => e.isInvalid.value);
    return (p, f) => (openBlock(), createBlock(unref(A), mergeProps({
      as: p.as,
      "as-child": p.asChild
    }, unref(i), {
      contenteditable: u.value || d.value ? false : p.part !== "literal",
      "data-radix-vue-date-field-segment": p.part,
      "aria-disabled": u.value ? true : void 0,
      "aria-readonly": d.value ? true : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-invalid": c.value ? "" : void 0,
      "aria-invalid": c.value ? true : void 0
    }, toHandlers(p.part !== "literal" ? {
      mousedown: unref(s),
      keydown: unref(r),
      focusout: () => {
        n.value = true;
      },
      focusin: (v2) => {
        unref(e).setFocusedElement(v2.target);
      }
    } : {})), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-invalid", "aria-invalid"]));
  }
});
var yv = defineComponent({
  __name: "DatePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Zi), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gv = defineComponent({
  __name: "DatePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Ji), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(({ headingValue: l }) => [
        renderSlot(e.$slots, "default", { headingValue: l }, () => [
          createTextVNode(toDisplayString(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
var bv = defineComponent({
  __name: "DatePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Qi), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Cv = defineComponent({
  __name: "DatePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(eu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wv = defineComponent({
  __name: "DatePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(tu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _v = defineComponent({
  __name: "DatePickerNext",
  props: {
    step: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(au), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var xv = defineComponent({
  __name: "DatePickerPrev",
  props: {
    step: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(nu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Sv = defineComponent({
  __name: "DatePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ou), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pv = defineComponent({
  __name: "DatePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(lu), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ev = defineComponent({
  __name: "DatePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(su), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Dv = defineComponent({
  __name: "DatePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ru), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $v = defineComponent({
  __name: "DatePickerInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ud), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [lo, dd] = Q("DatePickerRoot");
var Bv = defineComponent({
  inheritAttrs: false,
  __name: "DatePickerRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false },
    isDateDisabled: { type: Function, default: void 0 },
    pagedNavigation: { type: Boolean, default: false },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    fixedWeeks: { type: Boolean, default: false },
    numberOfMonths: { default: 1 },
    preventDeselect: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:placeholder", "update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateDisabled: v2,
      isDateUnavailable: y2,
      defaultOpen: m2,
      modal: x,
      id: P2,
      name: D2,
      required: g,
      minValue: S,
      maxValue: E,
      granularity: $2,
      hideTimeZone: R2,
      hourCycle: M,
      defaultValue: V2,
      dir: O2
    } = toRefs(e), L = be(O2), j2 = ne(e, "modelValue", n, {
      defaultValue: V2.value,
      passive: e.modelValue === void 0
    }), J2 = computed(() => Ot({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: j2.value
    })), W2 = ne(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? J2.value.copy(),
      passive: e.placeholder === void 0
    }), X2 = ne(e, "open", n, {
      defaultValue: m2.value,
      passive: e.open === void 0
    }), N = ref();
    return dd({
      isDateUnavailable: y2.value,
      isDateDisabled: v2.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: f,
      modelValue: j2,
      placeholder: W2,
      defaultOpen: m2,
      modal: x,
      open: X2,
      id: P2,
      name: D2,
      required: g,
      minValue: S,
      maxValue: E,
      granularity: $2,
      hideTimeZone: R2,
      hourCycle: M,
      dateFieldRef: N,
      dir: L,
      onDateChange(q2) {
        !q2 || !j2.value ? j2.value = q2 : !f.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(j2.value, q2) ? j2.value = void 0 : j2.value = q2.copy();
      },
      onPlaceholderChange(q2) {
        $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(q2, W2.value) || (W2.value = q2.copy());
      }
    }), (q2, F) => (openBlock(), createBlock(unref(Hl), {
      open: unref(X2),
      "onUpdate:open": F[0] || (F[0] = (Z) => isRef(X2) ? X2.value = Z : null),
      "default-open": unref(m2),
      modal: unref(x)
    }, {
      default: withCtx(() => [
        renderSlot(q2.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
});
var Tv = defineComponent({
  __name: "DatePickerCalendar",
  setup(a2) {
    const t = lo();
    return (e, n) => (openBlock(), createBlock(unref(Xi), mergeProps({
      isDateDisabled: unref(t).isDateDisabled,
      isDateUnavailable: unref(t).isDateUnavailable,
      minValue: unref(t).minValue.value,
      maxValue: unref(t).maxValue.value,
      locale: unref(t).locale.value,
      disabled: unref(t).disabled.value,
      pagedNavigation: unref(t).pagedNavigation.value,
      weekStartsOn: unref(t).weekStartsOn.value,
      weekdayFormat: unref(t).weekdayFormat.value,
      fixedWeeks: unref(t).fixedWeeks.value,
      numberOfMonths: unref(t).numberOfMonths.value,
      readonly: unref(t).readonly.value,
      preventDeselect: unref(t).preventDeselect.value,
      dir: unref(t).dir.value
    }, {
      "model-value": unref(t).modelValue.value,
      placeholder: unref(t).placeholder.value,
      "initial-focus": "",
      multiple: false,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l && unref(t).modelValue.value && unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l, unref(t).modelValue.value) || unref(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l, unref(t).placeholder.value) || unref(t).onPlaceholderChange(l);
      })
    }), {
      default: withCtx(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
        renderSlot(e.$slots, "default", {
          date: r,
          grid: s,
          weekDays: l,
          weekStartsOn: i,
          locale: u,
          fixedWeeks: d
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
});
var Iv = defineComponent({
  __name: "DatePickerField",
  setup(a2) {
    const t = lo();
    return (e, n) => (openBlock(), createBlock(unref(Ju), mergeProps({
      ref: unref(t).dateFieldRef,
      "model-value": unref(t).modelValue.value,
      placeholder: unref(t).placeholder.value
    }, {
      id: unref(t).id.value,
      name: unref(t).name.value,
      disabled: unref(t).disabled.value,
      minValue: unref(t).minValue.value,
      maxValue: unref(t).maxValue.value,
      readonly: unref(t).readonly.value,
      hourCycle: unref(t).hourCycle.value,
      granularity: unref(t).granularity.value,
      hideTimeZone: unref(t).hideTimeZone.value,
      locale: unref(t).locale.value,
      isDateUnavailable: unref(t).isDateUnavailable,
      required: unref(t).required.value,
      dir: unref(t).dir.value
    }, {
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l && unref(t).modelValue.value && unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(unref(t).modelValue.value, l) && l.compare(unref(t).modelValue.value) === 0 || unref(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(unref(t).placeholder.value, l) && l.compare(unref(t).placeholder.value) === 0 || unref(t).onPlaceholderChange(l);
      })
    }), {
      default: withCtx(({ segments: l }) => [
        renderSlot(e.$slots, "default", { segments: l })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
});
var Rv = defineComponent({
  __name: "DatePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Xl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Av = defineComponent({
  __name: "DatePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ql), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ov = defineComponent({
  __name: "DatePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Yl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var kv = defineComponent({
  __name: "DatePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = lo();
    return (n, l) => (openBlock(), createBlock(unref(Wl), mergeProps({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = unref(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Mv = defineComponent({
  __name: "DatePickerContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    return (s, r) => (openBlock(), createBlock(unref(jl), null, {
      default: withCtx(() => [
        createVNode(unref(Gl), normalizeProps(guardReactiveProps({ ...unref(l), ...s.$attrs })), {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
});
var Vv = defineComponent({
  __name: "DateRangePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(yc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Fv = defineComponent({
  __name: "DateRangePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(gc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(({ headingValue: l }) => [
        renderSlot(e.$slots, "default", { headingValue: l }, () => [
          createTextVNode(toDisplayString(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
var Lv = defineComponent({
  __name: "DateRangePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(bc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Nv = defineComponent({
  __name: "DateRangePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Cc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var zv = defineComponent({
  __name: "DateRangePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(wc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Kv = defineComponent({
  __name: "DateRangePickerNext",
  props: {
    step: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(_c), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Hv = defineComponent({
  __name: "DateRangePickerPrev",
  props: {
    step: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(xc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wv = defineComponent({
  __name: "DateRangePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Sc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jv = defineComponent({
  __name: "DateRangePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Pc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Uv = defineComponent({
  __name: "DateRangePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Ec), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gv = defineComponent({
  __name: "DateRangePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Dc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var qv = defineComponent({
  __name: "DateRangePickerInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(hd), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [so, cd] = Q("DateRangePickerRoot");
var Yv = defineComponent({
  inheritAttrs: false,
  __name: "DateRangePickerRoot",
  props: {
    defaultValue: { default: () => ({ start: void 0, end: void 0 }) },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false },
    isDateDisabled: { type: Function, default: void 0 },
    pagedNavigation: { type: Boolean, default: false },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    fixedWeeks: { type: Boolean, default: false },
    numberOfMonths: { default: 1 },
    preventDeselect: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue", "update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateDisabled: v2,
      isDateUnavailable: y2,
      defaultOpen: m2,
      modal: x,
      id: P2,
      name: D2,
      required: g,
      minValue: S,
      maxValue: E,
      granularity: $2,
      hideTimeZone: R2,
      hourCycle: M,
      dir: V2
    } = toRefs(e), O2 = be(V2), L = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), j2 = Ot({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: L.value.start
    }), J2 = ne(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? j2.copy(),
      passive: e.placeholder === void 0
    }), W2 = ne(e, "open", n, {
      defaultValue: m2.value,
      passive: e.open === void 0
    }), X2 = ref();
    return cd({
      isDateUnavailable: y2.value,
      isDateDisabled: v2.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: f,
      modelValue: L,
      placeholder: J2,
      defaultOpen: m2,
      modal: x,
      open: W2,
      id: P2,
      name: D2,
      required: g,
      minValue: S,
      maxValue: E,
      granularity: $2,
      hideTimeZone: R2,
      hourCycle: M,
      dateFieldRef: X2,
      dir: O2,
      onStartValueChange(N) {
        n("update:startValue", N);
      },
      onDateChange(N) {
        var q2, F;
        L.value = { start: (q2 = N.start) == null ? void 0 : q2.copy(), end: (F = N.end) == null ? void 0 : F.copy() };
      },
      onPlaceholderChange(N) {
        J2.value = N.copy();
      }
    }), (N, q2) => (openBlock(), createBlock(unref(Hl), {
      open: unref(W2),
      "onUpdate:open": q2[0] || (q2[0] = (F) => isRef(W2) ? W2.value = F : null),
      "default-open": unref(m2),
      modal: unref(x)
    }, {
      default: withCtx(() => [
        renderSlot(N.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
});
var Xv = defineComponent({
  __name: "DateRangePickerCalendar",
  setup(a2) {
    const t = so();
    return (e, n) => (openBlock(), createBlock(unref(hc), mergeProps({
      isDateDisabled: unref(t).isDateDisabled,
      isDateUnavailable: unref(t).isDateUnavailable,
      locale: unref(t).locale.value,
      disabled: unref(t).disabled.value,
      pagedNavigation: unref(t).pagedNavigation.value,
      weekStartsOn: unref(t).weekStartsOn.value,
      weekdayFormat: unref(t).weekdayFormat.value,
      fixedWeeks: unref(t).fixedWeeks.value,
      numberOfMonths: unref(t).numberOfMonths.value,
      readonly: unref(t).readonly.value,
      preventDeselect: unref(t).preventDeselect.value,
      minValue: unref(t).minValue.value,
      maxValue: unref(t).maxValue.value,
      dir: unref(t).dir.value
    }, {
      "initial-focus": "",
      "model-value": unref(t).modelValue.value,
      placeholder: unref(t).placeholder.value,
      "onUpdate:startValue": n[0] || (n[0] = (l) => {
        unref(t).onStartValueChange(l);
      }),
      "onUpdate:modelValue": n[1] || (n[1] = (l) => {
        l.start && unref(t).modelValue.value.start && l.end && unref(t).modelValue.value.end && unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l.start, unref(t).modelValue.value.start) && unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l.end, unref(t).modelValue.value.end) || unref(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[2] || (n[2] = (l) => {
        unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l, unref(t).placeholder.value) || unref(t).onPlaceholderChange(l);
      })
    }), {
      default: withCtx(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
        renderSlot(e.$slots, "default", {
          date: r,
          grid: s,
          weekDays: l,
          weekStartsOn: i,
          locale: u,
          fixedWeeks: d
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
});
var Zv = defineComponent({
  __name: "DateRangePickerField",
  setup(a2) {
    const t = so();
    return (e, n) => (openBlock(), createBlock(unref(md), mergeProps({
      ref: unref(t).dateFieldRef,
      "model-value": unref(t).modelValue.value,
      placeholder: unref(t).placeholder.value
    }, {
      id: unref(t).id.value,
      name: unref(t).name.value,
      disabled: unref(t).disabled.value,
      minValue: unref(t).minValue.value,
      maxValue: unref(t).maxValue.value,
      readonly: unref(t).readonly.value,
      hourCycle: unref(t).hourCycle.value,
      granularity: unref(t).granularity.value,
      hideTimeZone: unref(t).hideTimeZone.value,
      locale: unref(t).locale.value,
      isDateUnavailable: unref(t).isDateUnavailable,
      required: unref(t).required.value,
      dir: unref(t).dir.value
    }, {
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l.start && unref(t).modelValue.value.start && l.end && unref(t).modelValue.value.end && l.start.compare(unref(t).modelValue.value.start) === 0 && l.end.compare(unref(t).modelValue.value.end) === 0 || unref(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        unref($14e0f24ef4ac5c92$export$91b62ebf2ba703ee)(l, unref(t).placeholder.value) && l.compare(unref(t).placeholder.value) === 0 || unref(t).onPlaceholderChange(l);
      })
    }), {
      default: withCtx(({ segments: l, modelValue: s }) => [
        renderSlot(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
});
var Jv = defineComponent({
  __name: "DateRangePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Xl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qv = defineComponent({
  __name: "DateRangePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ql), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var em = defineComponent({
  __name: "DateRangePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Yl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var tm = defineComponent({
  __name: "DateRangePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = so();
    return (n, l) => (openBlock(), createBlock(unref(Wl), mergeProps({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = unref(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var am = defineComponent({
  __name: "DateRangePickerContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    return (s, r) => (openBlock(), createBlock(unref(jl), null, {
      default: withCtx(() => [
        createVNode(unref(Gl), normalizeProps(guardReactiveProps({ ...unref(l), ...s.$attrs })), {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
});
var pd = ["id", "value", "name", "disabled", "required"];
var [fd, vd] = Q("DateRangeFieldRoot");
var md = defineComponent({
  inheritAttrs: false,
  __name: "DateRangeFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a2, { expose: t, emit: e }) {
    var te, de;
    const n = a2, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, dir: d } = toRefs(n), c = An(n.locale), { primitiveElement: p, currentElement: f } = qe(), v2 = ref(/* @__PURE__ */ new Set()), y2 = be(d);
    onMounted(() => {
      Array.from(f.value.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((H2) => H2.getAttribute("data-radix-vue-date-field-segment") !== "literal").forEach((H2) => v2.value.add(H2));
    });
    const m2 = ne(n, "modelValue", l, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), x = Ot({
      defaultPlaceholder: n.placeholder,
      granularity: n.granularity,
      defaultValue: m2.value.start
    }), P2 = ne(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? x.copy(),
      passive: n.placeholder === void 0
    }), D2 = computed(() => n.granularity ? z(P2.value) ? n.granularity : "day" : z(P2.value) ? "minute" : "day"), g = computed(() => {
      var H2;
      return m2.value.start ? !!((H2 = u.value) != null && H2.call(u, m2.value.start) || n.minValue && R(m2.value.start, n.minValue) || n.maxValue && R(n.maxValue, m2.value.start)) : false;
    }), S = computed(() => {
      var H2;
      return m2.value.end ? !!((H2 = u.value) != null && H2.call(u, m2.value.end) || n.minValue && R(m2.value.end, n.minValue) || n.maxValue && R(n.maxValue, m2.value.end)) : false;
    }), E = computed(() => g.value || S.value ? true : !m2.value.start || !m2.value.end ? false : !R(m2.value.start, m2.value.end) || u.value !== void 0 && !b(
      m2.value.start,
      m2.value.end,
      u.value,
      void 0
    )), $2 = Ol(D2.value), R2 = ref(m2.value.start ? { ...Tt({ value: m2.value.start, formatter: c }) } : { ...$2 }), M = ref(m2.value.end ? { ...Tt({ value: m2.value.end, formatter: c }) } : { ...$2 }), V2 = computed(() => yn({
      granularity: D2.value,
      dateRef: P2.value,
      formatter: c,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: R2.value,
      locale: s
    })), O2 = computed(() => yn({
      granularity: D2.value,
      dateRef: P2.value,
      formatter: c,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: M.value,
      locale: s
    })), L = computed(() => ({
      start: V2.value.arr,
      end: O2.value.arr
    })), j2 = computed(() => ({ start: L.value.start.filter(({ part: H2 }) => H2 !== "literal"), end: L.value.end.filter(({ part: H2 }) => H2 !== "literal") })), J2 = ref((te = m2.value.start) == null ? void 0 : te.copy()), W2 = ref((de = m2.value.end) == null ? void 0 : de.copy());
    watch([J2, W2], ([H2, oe]) => {
      var xe, ae;
      const ce = m2.value;
      if (!(ce.start && ce.end && H2 && oe && ce.start.compare(H2) === 0 && ce.end.compare(oe) === 0))
        if (H2 && oe) {
          if (((xe = m2.value.start) == null ? void 0 : xe.compare(H2)) === 0 && ((ae = m2.value.end) == null ? void 0 : ae.compare(oe)) === 0)
            return;
          m2.value = { start: H2.copy(), end: oe.copy() };
        } else
          m2.value.start && m2.value.end && (m2.value = { start: void 0, end: void 0 });
    }), watch(m2, (H2) => {
      H2.start && H2.end && ((!J2.value || H2.start.compare(J2.value) !== 0) && (J2.value = H2.start.copy()), (!W2.value || H2.end.compare(W2.value) !== 0) && (W2.value = H2.end.copy()));
    }), watch([J2, s], ([H2]) => {
      H2 !== void 0 ? R2.value = { ...Tt({ value: H2, formatter: c }) } : R2.value = { ...$2 };
    }), watch(s, (H2) => {
      c.getLocale() !== H2 && c.setLocale(H2);
    }), watch(m2, (H2) => {
      H2.start !== void 0 && (!$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(P2.value, H2.start) || P2.value.compare(H2.start) !== 0) && (P2.value = H2.start.copy());
    }), watch([W2, s], ([H2]) => {
      H2 !== void 0 ? M.value = { ...Tt({ value: H2, formatter: c }) } : M.value = { ...$2 };
    });
    const X2 = ref(null), N = computed(() => Array.from(v2.value).findIndex((H2) => {
      var oe, ce;
      return H2.getAttribute("data-radix-vue-date-field-segment") === ((oe = X2.value) == null ? void 0 : oe.getAttribute("data-radix-vue-date-field-segment")) && H2.getAttribute("data-radix-vue-date-range-field-segment-type") === ((ce = X2.value) == null ? void 0 : ce.getAttribute("data-radix-vue-date-range-field-segment-type"));
    })), q2 = computed(() => {
      const H2 = y2.value === "rtl" ? -1 : 1;
      return (H2 < 0 ? N.value < 0 : N.value > v2.value.size - 1) ? null : Array.from(v2.value)[N.value + H2];
    }), F = computed(() => {
      const H2 = y2.value === "rtl" ? -1 : 1;
      return (H2 > 0 ? N.value < 0 : N.value > v2.value.size - 1) ? null : Array.from(v2.value)[N.value - H2];
    }), Z = pt();
    function U(H2) {
      var oe, ce;
      We(H2.key) && (H2.key === Z.ARROW_LEFT && ((oe = F.value) == null || oe.focus()), H2.key === Z.ARROW_RIGHT && ((ce = q2.value) == null || ce.focus()));
    }
    function Y(H2) {
      X2.value = H2;
    }
    return vd({
      isDateUnavailable: u.value,
      locale: s,
      startValue: J2,
      endValue: W2,
      placeholder: P2,
      disabled: r,
      formatter: c,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: { start: R2, end: M },
      isInvalid: E,
      segmentContents: j2,
      elements: v2,
      setFocusedElement: Y,
      focusNext() {
        var H2;
        (H2 = q2.value) == null || H2.focus();
      }
    }), t({
      setFocusedElement: Y
    }), (H2, oe) => {
      var ce, xe;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(A), mergeProps(H2.$attrs, {
          ref_key: "primitiveElement",
          ref: p,
          role: "group",
          "aria-disabled": unref(r) ? true : void 0,
          "data-disabled": unref(r) ? "" : void 0,
          "data-readonly": unref(i) ? "" : void 0,
          "data-invalid": E.value ? "" : void 0,
          dir: unref(y2),
          onKeydown: withKeys(U, ["left", "right"])
        }), {
          default: withCtx(() => [
            renderSlot(H2.$slots, "default", {
              modelValue: unref(m2),
              segments: L.value
            })
          ]),
          _: 3
        }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
        createBaseVNode("input", {
          id: H2.id,
          type: "text",
          tabindex: "-1",
          "aria-hidden": "",
          value: `${(ce = unref(m2).start) == null ? void 0 : ce.toString()} - ${(xe = unref(m2).end) == null ? void 0 : xe.toString()}`,
          name: H2.name,
          disabled: unref(r),
          required: H2.required,
          style: normalizeStyle({
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }),
          onFocus: oe[0] || (oe[0] = (ae) => {
            var we, De;
            return (De = (we = Array.from(v2.value)) == null ? void 0 : we[0]) == null ? void 0 : De.focus();
          })
        }, null, 44, pd)
      ], 64);
    };
  }
});
var hd = defineComponent({
  __name: "DateRangeFieldInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = fd(), n = ref(true), l = ref(false), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = kl({
      hasLeftFocus: n,
      lastKeyZero: l,
      placeholder: e.placeholder,
      hourCycle: e.hourCycle,
      segmentValues: e.segmentValues[t.type],
      formatter: e.formatter,
      part: t.part,
      disabled: e.disabled,
      readonly: e.readonly,
      focusNext: e.focusNext,
      modelValue: t.type === "start" ? e.startValue : e.endValue
    }), u = computed(() => e.disabled.value), d = computed(() => e.readonly.value), c = computed(() => e.isInvalid.value);
    return (p, f) => (openBlock(), createBlock(unref(A), mergeProps({
      as: p.as,
      "as-child": p.asChild
    }, unref(i), {
      contenteditable: u.value || d.value ? false : p.part !== "literal",
      "data-radix-vue-date-field-segment": p.part,
      "aria-disabled": u.value ? true : void 0,
      "aria-readonly": d.value ? true : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-radix-vue-date-range-field-segment-type": p.type,
      "data-invalid": c.value ? "" : void 0,
      "aria-invalid": c.value ? true : void 0
    }, toHandlers(p.part !== "literal" ? {
      mousedown: unref(s),
      keydown: unref(r),
      focusout: () => {
        n.value = true;
      },
      focusin: (v2) => {
        unref(e).setFocusedElement(v2.target);
      }
    } : {})), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-radix-vue-date-range-field-segment-type", "data-invalid", "aria-invalid"]));
  }
});
var [Ml, yd] = Q("DropdownMenuRoot");
var nm = defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    T();
    const l = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), s = ref(), { modal: r, dir: i } = toRefs(e), u = be(i);
    return yd({
      open: l,
      onOpenChange: (d) => {
        l.value = d;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: r,
      dir: u
    }), (d, c) => (openBlock(), createBlock(unref(jn), {
      open: unref(l),
      "onUpdate:open": c[0] || (c[0] = (p) => isRef(l) ? l.value = p : null),
      dir: unref(u),
      modal: unref(r)
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
var om = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Ml(), { forwardRef: n, currentElement: l } = T();
    return onMounted(() => {
      e.triggerElement = l;
    }), e.triggerId || (e.triggerId = me(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (openBlock(), createBlock(unref(Ma), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(A), {
          id: unref(e).triggerId,
          ref: unref(n),
          type: s.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(e).open.value ? unref(e).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": unref(e).open.value ? "open" : "closed",
          onClick: r[0] || (r[0] = async (i) => {
            var u;
            !s.disabled && i.button === 0 && i.ctrlKey === false && ((u = unref(e)) == null || u.onOpenToggle(), await nextTick(), unref(e).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = withKeys(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && unref(e).onOpenToggle(), i.key === "ArrowDown" && unref(e).onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
});
var lm = defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Jn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var sm = defineComponent({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    T();
    const s = Ml(), r = ref(false);
    function i(u) {
      u.defaultPrevented || (r.value || setTimeout(() => {
        var d;
        (d = s.triggerElement.value) == null || d.focus();
      }, 0), r.value = false, u.preventDefault());
    }
    return s.contentId || (s.contentId = me(void 0, "radix-vue-dropdown-menu-content")), (u, d) => {
      var c;
      return openBlock(), createBlock(unref(Xn), mergeProps(unref(l), {
        id: unref(s).contentId,
        "aria-labelledby": (c = unref(s)) == null ? void 0 : c.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: d[0] || (d[0] = (p) => {
          var m2;
          if (p.defaultPrevented)
            return;
          const f = p.detail.originalEvent, v2 = f.button === 0 && f.ctrlKey === true, y2 = f.button === 2 || v2;
          (!unref(s).modal.value || y2) && (r.value = true), (m2 = unref(s).triggerElement.value) != null && m2.contains(p.target) && p.preventDefault();
        })
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "style"]);
    };
  }
});
var rm = defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Wn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var im = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    return T(), (s, r) => (openBlock(), createBlock(unref(ua), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var um = defineComponent({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Va), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var dm = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(to), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var cm = defineComponent({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    return T(), (s, r) => (openBlock(), createBlock(unref(Yn), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var pm = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var fm = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Zn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vm = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    return T(), (s, r) => (openBlock(), createBlock(unref(Qn), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var mm = defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    return T(), (s, r) => (openBlock(), createBlock(unref(eo), normalizeProps(guardReactiveProps(unref(l))), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var hm = defineComponent({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "open", t, {
      passive: e.open === void 0,
      defaultValue: e.defaultOpen ?? false
    });
    return T(), (s, r) => (openBlock(), createBlock(unref(ao), {
      open: unref(l),
      "onUpdate:open": r[0] || (r[0] = (i) => isRef(l) ? l.value = i : null)
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var ym = defineComponent({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    return T(), (s, r) => (openBlock(), createBlock(unref(no), mergeProps(unref(l), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var gm = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(oo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [ro, gd] = Q("HoverCardRoot");
var bm = defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { openDelay: l, closeDelay: s } = toRefs(e);
    T();
    const r = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), i = ref(0), u = ref(0), d = ref(false), c = ref(false), p = ref(false), f = ref();
    function v2() {
      clearTimeout(u.value), i.value = window.setTimeout(() => r.value = true, l.value);
    }
    function y2() {
      clearTimeout(i.value), !d.value && !c.value && (u.value = window.setTimeout(() => r.value = false, s.value));
    }
    function m2() {
      r.value = false;
    }
    return gd({
      open: r,
      onOpenChange(x) {
        r.value = x;
      },
      onOpen: v2,
      onClose: y2,
      onDismiss: m2,
      hasSelectionRef: d,
      isPointerDownOnContentRef: c,
      isPointerInTransit: p,
      triggerElement: f
    }), (x, P2) => (openBlock(), createBlock(unref(xt), null, {
      default: withCtx(() => [
        renderSlot(x.$slots, "default")
      ]),
      _: 3
    }));
  }
});
function Vl(a2) {
  return (t) => t.pointerType === "touch" ? void 0 : a2();
}
function bd(a2) {
  const t = [], e = document.createTreeWalker(a2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
var Cm = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a2) {
    const { forwardRef: t, currentElement: e } = T(), n = ro();
    return n.triggerElement = e, (l, s) => (openBlock(), createBlock(unref(St), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(A), {
          ref: unref(t),
          "as-child": l.asChild,
          as: l.as,
          "data-state": unref(n).open.value ? "open" : "closed",
          onPointerenter: s[0] || (s[0] = (r) => unref(Vl)(unref(n).onOpen)(r)),
          onFocus: s[1] || (s[1] = (r) => unref(n).onOpen()),
          onBlur: s[2] || (s[2] = (r) => unref(n).onClose())
        }, {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "data-state"])
      ]),
      _: 3
    }));
  }
});
var wm = defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ft), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Cd = defineComponent({
  __name: "HoverCardContentImpl",
  props: {
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = _t(e), { forwardRef: s, currentElement: r } = T(), i = ro(), { isPointerInTransit: u, onPointerExit: d } = il(i.triggerElement, r);
    i.isPointerInTransit = u, d(() => {
      i.onClose();
    });
    const c = ref(false);
    let p;
    watchEffect((v2) => {
      if (c.value) {
        const y2 = document.body;
        p = y2.style.userSelect || y2.style.webkitUserSelect, y2.style.userSelect = "none", y2.style.webkitUserSelect = "none", v2(() => {
          y2.style.userSelect = p, y2.style.webkitUserSelect = p;
        });
      }
    });
    function f() {
      c.value = false, i.isPointerDownOnContentRef.value = false, nextTick(() => {
        var y2;
        ((y2 = document.getSelection()) == null ? void 0 : y2.toString()) !== "" && (i.hasSelectionRef.value = true);
      });
    }
    return onMounted(() => {
      r.value && (document.addEventListener("pointerup", f), bd(r.value).forEach((y2) => y2.setAttribute("tabindex", "-1")));
    }), onUnmounted(() => {
      document.removeEventListener("pointerup", f), i.hasSelectionRef.value = false, i.isPointerDownOnContentRef.value = false;
    }), (v2, y2) => (openBlock(), createBlock(unref(vt), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: y2[1] || (y2[1] = (m2) => n("escapeKeyDown", m2)),
      onPointerDownOutside: y2[2] || (y2[2] = (m2) => n("pointerDownOutside", m2)),
      onFocusOutside: y2[3] || (y2[3] = withModifiers((m2) => n("focusOutside", m2), ["prevent"])),
      onDismiss: unref(i).onDismiss
    }, {
      default: withCtx(() => [
        createVNode(unref(Ct), mergeProps({ ...unref(l), ...v2.$attrs }, {
          ref: unref(s),
          "data-state": unref(i).open.value ? "open" : "closed",
          style: {
            userSelect: c.value ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: c.value ? "text" : void 0,
            // re-namespace exposed content custom properties
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          },
          onPointerdown: y2[0] || (y2[0] = (m2) => {
            m2.currentTarget.contains(m2.target) && (c.value = true), unref(i).hasSelectionRef.value = false, unref(i).isPointerDownOnContentRef.value = true;
          })
        }), {
          default: withCtx(() => [
            renderSlot(v2.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }, 8, ["onDismiss"]));
  }
});
var _m = defineComponent({
  __name: "HoverCardContent",
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t), { forwardRef: s } = T(), r = ro();
    return (i, u) => (openBlock(), createBlock(unref(Ee), {
      present: i.forceMount || unref(r).open.value
    }, {
      default: withCtx(() => [
        createVNode(Cd, mergeProps(unref(l), {
          ref: unref(s),
          onPointerenter: u[0] || (u[0] = (d) => unref(Vl)(unref(r).onOpen)(d))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var xm = defineComponent({
  __name: "HoverCardArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Sm = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      onMousedown: n[0] || (n[0] = (l) => {
        !l.defaultPrevented && l.detail > 1 && l.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function wd(a2) {
  return a2 == null ? void 0 : a2.querySelector("[data-state=checked]");
}
function _d(a2, t, e) {
  return a2 === void 0 ? false : Array.isArray(a2) ? a2.some((n) => Rt(n, t, e)) : Rt(a2, t, e);
}
function Rt(a2, t, e) {
  return a2 === void 0 || t === void 0 ? false : typeof a2 == "string" ? a2 === t : typeof e == "function" ? e(a2, t) : typeof e == "string" ? (a2 == null ? void 0 : a2[e]) === (t == null ? void 0 : t[e]) : Xe(a2, t);
}
function ba(a2, t, e) {
  const n = a2.findIndex((i) => Xe(i, t)), l = a2.findIndex((i) => Xe(i, e));
  if (n === -1 || l === -1)
    return [];
  const [s, r] = [n, l].sort((i, u) => i - u);
  return a2.slice(s, r + 1);
}
var [Fa, xd] = Q("ListboxRoot");
var Pm = defineComponent({
  __name: "ListboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {},
    disabled: { type: Boolean },
    selectionBehavior: { default: "toggle" },
    highlightOnHover: { type: Boolean },
    by: {},
    name: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "highlight", "entryFocus", "leave"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { multiple: l, highlightOnHover: s, orientation: r, disabled: i, selectionBehavior: u, dir: d } = toRefs(e), { getItems: c } = Aa(), { handleTypeaheadSearch: p } = Ta(), { primitiveElement: f, currentElement: v2 } = qe(), y2 = pt(), m2 = be(d), x = ct(v2), P2 = ref(), D2 = ref(false), g = ref(true), S = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? (l.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: true
    });
    function E(U) {
      if (D2.value = true, Array.isArray(S.value)) {
        const Y = S.value.findIndex((te) => Rt(te, U, e.by));
        e.selectionBehavior === "toggle" ? Y === -1 ? S.value.push(U) : S.value.splice(Y, 1) : (S.value = [U], P2.value = U);
      } else
        e.selectionBehavior === "toggle" && Rt(S.value, U, e.by) ? S.value = void 0 : S.value = U;
      setTimeout(() => {
        D2.value = false;
      }, 1);
    }
    const $2 = ref(null), R2 = ref(null), M = ref(false), V2 = pn(), O2 = pn();
    function L() {
      return c().map((U) => U.ref).filter((U) => U.dataset.disabled !== "");
    }
    function j2(U) {
      $2.value = U, $2.value.focus(), $2.value.scrollIntoView({ block: "nearest" });
      const Y = c().find((te) => te.ref === U);
      n("highlight", Y);
    }
    function J2(U) {
      $2.value && $2.value.click();
    }
    function W2(U) {
      if (D2.value = true, M.value)
        O2.trigger(U);
      else {
        const Y = U.altKey || U.ctrlKey || U.metaKey;
        if (Y && U.key === "a" && l.value) {
          const te = c(), de = te.map((H2) => H2.value);
          S.value = [...de], U.preventDefault(), j2(te[te.length - 1].ref);
        } else if (!Y) {
          const te = p(U.key, L());
          te && j2(te);
        }
      }
      setTimeout(() => {
        D2.value = false;
      }, 1);
    }
    function X2(U) {
      R2.value = $2.value, $2.value = null, n("leave", U);
    }
    function N(U) {
      var te, de;
      const Y = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
      if ((te = U.currentTarget) == null || te.dispatchEvent(Y), n("entryFocus", Y), !Y.defaultPrevented)
        if (R2.value)
          j2(R2.value);
        else {
          const H2 = (de = L()) == null ? void 0 : de[0];
          j2(H2);
        }
    }
    function q2(U) {
      const Y = $l(U, r.value, m2.value);
      if (!Y)
        return;
      let te = L();
      if ($2.value) {
        if (Y === "last")
          te.reverse();
        else if (Y === "prev" || Y === "next") {
          Y === "prev" && te.reverse();
          const de = te.indexOf($2.value);
          te = te.slice(de + 1);
        }
        F(U, te[0]);
      }
      if (te.length) {
        const de = !$2.value && Y === "prev" ? te.length - 1 : 0;
        j2(te[de]);
      }
      if (M.value)
        return O2.trigger(U);
    }
    function F(U, Y) {
      var de;
      if (!(M.value || e.selectionBehavior !== "replace" || !l.value || !Array.isArray(S.value) || (U.altKey || U.ctrlKey || U.metaKey) && !U.shiftKey) && U.shiftKey) {
        const H2 = c().filter((xe) => xe.ref.dataset.disabled !== "");
        let oe = (de = H2.find((xe) => xe.ref === Y)) == null ? void 0 : de.value;
        if (U.key === y2.END ? oe = H2[H2.length - 1].value : U.key === y2.HOME && (oe = H2[0].value), !oe || !P2.value)
          return;
        const ce = ba(H2.map((xe) => xe.value), P2.value, oe);
        S.value = ce;
      }
    }
    async function Z(U) {
      if (M.value)
        V2.trigger(U);
      else {
        await nextTick();
        const te = L().find((de) => de.dataset.state === "checked");
        te && j2(te);
      }
    }
    return watch(S, () => {
      D2.value || nextTick(() => {
        Z();
      });
    }, { immediate: true, deep: true }), xd({
      modelValue: S,
      // @ts-expect-error ignoring
      onValueChange: E,
      multiple: l,
      orientation: r,
      dir: m2,
      disabled: i,
      highlightOnHover: s,
      highlightedElement: $2,
      isVirtual: M,
      virtualFocusHook: V2,
      virtualKeydownHook: O2,
      by: e.by,
      firstValue: P2,
      selectionBehavior: u,
      focusable: g,
      onLeave: X2,
      onEnter: N,
      onChangeHighlight: j2,
      onKeydownEnter: J2,
      onKeydownNavigation: q2,
      onKeydownTypeAhead: W2
    }), (U, Y) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: f,
      as: U.as,
      "as-child": U.asChild,
      dir: unref(m2),
      "data-disabled": unref(i) ? "" : void 0,
      onPointerleave: X2,
      onFocusout: Y[0] || (Y[0] = (te) => {
        const de = te.relatedTarget || te.target;
        $2.value && !unref(v2).contains(de) && X2(te);
      })
    }, {
      default: withCtx(() => [
        renderSlot(U.$slots, "default", { modelValue: unref(S) }),
        unref(x) && e.name ? (openBlock(), createBlock(unref(zn), {
          key: 0,
          name: e.name,
          value: unref(S)
        }, null, 8, ["name", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
});
var Em = defineComponent({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = Fa(), e = kt(false, 10);
    return (n, l) => (openBlock(), createBlock(unref(Oa), null, {
      default: withCtx(() => [
        createVNode(unref(A), {
          role: "listbox",
          as: n.as,
          "as-child": n.asChild,
          tabindex: unref(t).focusable.value ? unref(t).highlightedElement.value ? "-1" : "0" : void 0,
          "data-orientation": unref(t).orientation.value,
          onMousedown: l[0] || (l[0] = withModifiers((s) => e.value = true, ["left"])),
          onFocus: l[1] || (l[1] = (s) => {
            unref(e) || unref(t).onEnter(s);
          }),
          onKeydown: [
            l[2] || (l[2] = withKeys(withModifiers((s) => {
              unref(t).focusable.value && unref(t).onKeydownNavigation(s);
            }, ["prevent"]), ["down", "up", "home", "end"])),
            withKeys(unref(t).onKeydownEnter, ["enter"]),
            unref(t).onKeydownTypeAhead
          ]
        }, {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
});
var Dm = defineComponent({
  __name: "ListboxFilter",
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "modelValue", t, {
      defaultValue: "",
      passive: e.modelValue === void 0
    }), s = Fa();
    s.focusable.value = false;
    const { primitiveElement: r, currentElement: i } = qe();
    return onMounted(() => {
      setTimeout(() => {
        var u;
        e.autoFocus && ((u = i.value) == null || u.focus());
      }, 1);
    }), (u, d) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: r,
      as: u.as,
      "as-child": u.asChild,
      value: unref(l),
      disabled: unref(s).disabled.value ? "" : void 0,
      "data-disabled": unref(s).disabled.value ? "" : void 0,
      type: "text",
      onKeydown: [
        withKeys(withModifiers(unref(s).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        withKeys(unref(s).onKeydownEnter, ["enter"])
      ],
      onInput: d[0] || (d[0] = (c) => {
        l.value = c.target.value;
      })
    }, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "onKeydown"]));
  }
});
var Sd = "listbox.select";
var [Pd, Ed] = Q("ListboxItem");
var $m = defineComponent({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = T(), r = me(void 0, "radix-vue-listbox-item"), i = Fa(), u = computed(() => s.value === i.highlightedElement.value), d = computed(() => _d(i.modelValue.value, e.value, i.by)), c = computed(() => i.disabled.value || e.disabled);
    async function p(v2) {
      n("select", v2), !(v2 != null && v2.defaultPrevented) && !c.value && v2 && (i.onValueChange(e.value), i.onChangeHighlight(v2.target));
    }
    function f(v2) {
      const y2 = { originalEvent: v2, value: e.value };
      Da(Sd, p, y2);
    }
    return Ed({
      isSelected: d
    }), (v2, y2) => (openBlock(), createBlock(unref(ka), null, {
      default: withCtx(() => [
        createVNode(unref(A), {
          id: unref(r),
          ref: unref(l),
          role: "option",
          tabindex: unref(i).focusable.value ? u.value ? "0" : "-1" : void 0,
          "aria-selected": d.value,
          as: v2.as,
          "as-child": v2.asChild,
          disabled: c.value ? "" : void 0,
          "data-disabled": c.value ? "" : void 0,
          "data-highlighted": u.value ? "" : void 0,
          "data-state": d.value ? "checked" : "unchecked",
          onClick: f,
          onKeydown: withKeys(withModifiers(f, ["prevent"]), ["space"]),
          onPointermove: y2[0] || (y2[0] = (m2) => {
            unref(i).highlightOnHover.value ? unref(i).onChangeHighlight(unref(s)) : unref(i).focusable.value || unref(i).onChangeHighlight(unref(s));
          })
        }, {
          default: withCtx(() => [
            renderSlot(v2.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"])
      ]),
      _: 3
    }));
  }
});
var Bm = defineComponent({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Pd();
    return (n, l) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(A), mergeProps({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
function Bt(a2, t, e) {
  let n = e.initialDeps ?? [], l;
  return () => {
    var s, r, i, u;
    let d;
    e.key && ((s = e.debug) != null && s.call(e)) && (d = Date.now());
    const c = a2();
    if (!(c.length !== n.length || c.some((v2, y2) => n[y2] !== v2)))
      return l;
    n = c;
    let f;
    if (e.key && ((r = e.debug) != null && r.call(e)) && (f = Date.now()), l = t(...c), e.key && ((i = e.debug) != null && i.call(e))) {
      const v2 = Math.round((Date.now() - d) * 100) / 100, y2 = Math.round((Date.now() - f) * 100) / 100, m2 = y2 / 16, x = (P2, D2) => {
        for (P2 = String(P2); P2.length < D2; )
          P2 = " " + P2;
        return P2;
      };
      console.info(
        `%c⏱ ${x(y2, 5)} /${x(v2, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * m2, 120)
        )}deg 100% 31%);`,
        e == null ? void 0 : e.key
      );
    }
    return (u = e == null ? void 0 : e.onChange) == null || u.call(e, l), l;
  };
}
function rn(a2, t) {
  if (a2 === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return a2;
}
var Dd = (a2, t) => Math.abs(a2 - t) < 1;
var $d = (a2) => a2;
var Bd = (a2) => {
  const t = Math.max(a2.startIndex - a2.overscan, 0), e = Math.min(a2.endIndex + a2.overscan, a2.count - 1), n = [];
  for (let l = t; l <= e; l++)
    n.push(l);
  return n;
};
var Td = (a2, t) => {
  const e = a2.scrollElement;
  if (!e)
    return;
  const n = (s) => {
    const { width: r, height: i } = s;
    t({ width: Math.round(r), height: Math.round(i) });
  };
  if (n(e.getBoundingClientRect()), typeof ResizeObserver > "u")
    return () => {
    };
  const l = new ResizeObserver((s) => {
    const r = s[0];
    if (r != null && r.borderBoxSize) {
      const i = r.borderBoxSize[0];
      if (i) {
        n({ width: i.inlineSize, height: i.blockSize });
        return;
      }
    }
    n(e.getBoundingClientRect());
  });
  return l.observe(e, { box: "border-box" }), () => {
    l.unobserve(e);
  };
};
var Id = (a2, t) => {
  const e = a2.scrollElement;
  if (!e)
    return;
  const n = () => {
    t(e[a2.options.horizontal ? "scrollLeft" : "scrollTop"]);
  };
  return n(), e.addEventListener("scroll", n, {
    passive: true
  }), () => {
    e.removeEventListener("scroll", n);
  };
};
var Rd = (a2, t, e) => {
  if (t != null && t.borderBoxSize) {
    const n = t.borderBoxSize[0];
    if (n)
      return Math.round(
        n[e.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    a2.getBoundingClientRect()[e.options.horizontal ? "width" : "height"]
  );
};
var Ad = (a2, {
  adjustments: t = 0,
  behavior: e
}, n) => {
  var l, s;
  const r = a2 + t;
  (s = (l = n.scrollElement) == null ? void 0 : l.scrollTo) == null || s.call(l, {
    [n.options.horizontal ? "left" : "top"]: r,
    behavior: e
  });
};
var Od = class {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.isScrolling = false, this.isScrollingTimeoutId = null, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollDirection = null, this.scrollAdjustments = 0, this.measureElementCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const n = () => e || (typeof ResizeObserver < "u" ? e = new ResizeObserver((l) => {
        l.forEach((s) => {
          this._measureElement(s.target, s);
        });
      }) : null);
      return {
        disconnect: () => {
          var l;
          return (l = n()) == null ? void 0 : l.disconnect();
        },
        observe: (l) => {
          var s;
          return (s = n()) == null ? void 0 : s.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var s;
          return (s = n()) == null ? void 0 : s.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([n, l]) => {
        typeof l > "u" && delete e[n];
      }), this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: $d,
        rangeExtractor: Bd,
        onChange: () => {
        },
        measureElement: Rd,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        ...e
      };
    }, this.notify = (e) => {
      var n, l;
      (l = (n = this.options).onChange) == null || l.call(n, this, e);
    }, this.maybeNotify = Bt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (e) => {
        this.notify(e);
      },
      {
        key: "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.scrollElement = null;
    }, this._didMount = () => (this.measureElementCache.forEach(this.observer.observe), () => {
      this.observer.disconnect(), this.cleanup();
    }), this._willUpdate = () => {
      const e = this.options.getScrollElement();
      this.scrollElement !== e && (this.cleanup(), this.scrollElement = e, this._scrollToOffset(this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      }), this.unsubs.push(
        this.options.observeElementRect(this, (n) => {
          this.scrollRect = n, this.maybeNotify();
        })
      ), this.unsubs.push(
        this.options.observeElementOffset(this, (n) => {
          this.scrollAdjustments = 0, this.scrollOffset !== n && (this.isScrollingTimeoutId !== null && (clearTimeout(this.isScrollingTimeoutId), this.isScrollingTimeoutId = null), this.isScrolling = true, this.scrollDirection = this.scrollOffset < n ? "forward" : "backward", this.scrollOffset = n, this.maybeNotify(), this.isScrollingTimeoutId = setTimeout(() => {
            this.isScrollingTimeoutId = null, this.isScrolling = false, this.scrollDirection = null, this.maybeNotify();
          }, this.options.scrollingDelay));
        })
      ));
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.memoOptions = Bt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (e, n, l, s) => (this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: s
      }),
      {
        key: false
      }
    ), this.getFurthestMeasurement = (e, n) => {
      const l = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      for (let r = n - 1; r >= 0; r--) {
        const i = e[r];
        if (l.has(i.lane))
          continue;
        const u = s.get(
          i.lane
        );
        if (u == null || i.end > u.end ? s.set(i.lane, i) : i.end < u.end && l.set(i.lane, true), l.size === this.options.lanes)
          break;
      }
      return s.size === this.options.lanes ? Array.from(s.values()).sort((r, i) => r.end === i.end ? r.index - i.index : r.end - i.end)[0] : void 0;
    }, this.getMeasurements = Bt(
      () => [this.memoOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: n, scrollMargin: l, getItemKey: s }, r) => {
        const i = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, i);
        for (let d = i; d < e; d++) {
          const c = s(d), p = this.options.lanes === 1 ? u[d - 1] : this.getFurthestMeasurement(u, d), f = p ? p.end : n + l, v2 = r.get(c), y2 = typeof v2 == "number" ? v2 : this.options.estimateSize(d), m2 = f + y2, x = p ? p.lane : d % this.options.lanes;
          u[d] = {
            index: d,
            start: f,
            size: y2,
            end: m2,
            key: c,
            lane: x
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Bt(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (e, n, l) => this.range = e.length > 0 && n > 0 ? kd({
        measurements: e,
        outerSize: n,
        scrollOffset: l
      }) : null,
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = Bt(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (e, n, l, s) => n === null ? [] : e({
        ...n,
        overscan: l,
        count: s
      }),
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e) => {
      const n = this.options.indexAttribute, l = e.getAttribute(n);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (e, n) => {
      const l = this.measurementsCache[this.indexFromElement(e)];
      if (!l || !e.isConnected) {
        this.measureElementCache.forEach((i, u) => {
          i === e && (this.observer.unobserve(e), this.measureElementCache.delete(u));
        });
        return;
      }
      const s = this.measureElementCache.get(l.key);
      s !== e && (s && this.observer.unobserve(s), this.observer.observe(e), this.measureElementCache.set(l.key, e));
      const r = this.options.measureElement(e, n, this);
      this.resizeItem(l, r);
    }, this.resizeItem = (e, n) => {
      const l = this.itemSizeCache.get(e.key) ?? e.size, s = n - l;
      s !== 0 && (e.start < this.scrollOffset + this.scrollAdjustments && (this.options.debug && console.info("correction", s), this._scrollToOffset(this.scrollOffset, {
        adjustments: this.scrollAdjustments += s,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(e.index), this.itemSizeCache = new Map(this.itemSizeCache.set(e.key, n)), this.notify(false));
    }, this.measureElement = (e) => {
      e && this._measureElement(e, void 0);
    }, this.getVirtualItems = Bt(
      () => [this.getIndexes(), this.getMeasurements()],
      (e, n) => {
        const l = [];
        for (let s = 0, r = e.length; s < r; s++) {
          const i = e[s], u = n[i];
          l.push(u);
        }
        return l;
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e) => {
      const n = this.getMeasurements();
      return rn(
        n[Fl(
          0,
          n.length - 1,
          (l) => rn(n[l]).start,
          e
        )]
      );
    }, this.getOffsetForAlignment = (e, n) => {
      const l = this.getSize();
      n === "auto" && (e <= this.scrollOffset ? n = "start" : e >= this.scrollOffset + l ? n = "end" : n = "start"), n === "start" ? e = e : n === "end" ? e = e - l : n === "center" && (e = e - l / 2);
      const s = this.options.horizontal ? "scrollWidth" : "scrollHeight", i = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[s] : this.scrollElement[s] : 0) - this.getSize();
      return Math.max(Math.min(i, e), 0);
    }, this.getOffsetForIndex = (e, n = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const l = rn(this.getMeasurements()[e]);
      if (n === "auto")
        if (l.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd)
          n = "end";
        else if (l.start <= this.scrollOffset + this.options.scrollPaddingStart)
          n = "start";
        else
          return [this.scrollOffset, n];
      const s = n === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(s, n), n];
    }, this.isDynamicMode = () => this.measureElementCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && (clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (e, { align: n = "start", behavior: l } = {}) => {
      this.cancelScrollToIndex(), l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(e, n), {
        adjustments: void 0,
        behavior: l
      });
    }, this.scrollToIndex = (e, { align: n = "auto", behavior: l } = {}) => {
      e = Math.max(0, Math.min(e, this.options.count - 1)), this.cancelScrollToIndex(), l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const [s, r] = this.getOffsetForIndex(e, n);
      this._scrollToOffset(s, { adjustments: void 0, behavior: l }), l !== "smooth" && this.isDynamicMode() && (this.scrollToIndexTimeoutId = setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.measureElementCache.has(
          this.options.getItemKey(e)
        )) {
          const [u] = this.getOffsetForIndex(e, r);
          Dd(u, this.scrollOffset) || this.scrollToIndex(e, { align: r, behavior: l });
        } else
          this.scrollToIndex(e, { align: r, behavior: l });
      }));
    }, this.scrollBy = (e, { behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.scrollOffset + e, {
        adjustments: void 0,
        behavior: n
      });
    }, this.getTotalSize = () => {
      var e;
      const n = this.getMeasurements();
      let l;
      return n.length === 0 ? l = this.options.paddingStart : l = this.options.lanes === 1 ? ((e = n[n.length - 1]) == null ? void 0 : e.end) ?? 0 : Math.max(
        ...n.slice(-this.options.lanes).map((s) => s.end)
      ), l - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (e, {
      adjustments: n,
      behavior: l
    }) => {
      this.options.scrollToFn(e, { behavior: l, adjustments: n }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(false);
    }, this.setOptions(t), this.scrollRect = this.options.initialRect, this.scrollOffset = this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e) => {
      this.itemSizeCache.set(e.key, e.size);
    }), this.maybeNotify();
  }
};
var Fl = (a2, t, e, n) => {
  for (; a2 <= t; ) {
    const l = (a2 + t) / 2 | 0, s = e(l);
    if (s < n)
      a2 = l + 1;
    else if (s > n)
      t = l - 1;
    else
      return l;
  }
  return a2 > 0 ? a2 - 1 : 0;
};
function kd({
  measurements: a2,
  outerSize: t,
  scrollOffset: e
}) {
  const n = a2.length - 1, s = Fl(0, n, (i) => a2[i].start, e);
  let r = s;
  for (; r < n && a2[r].end < e + t; )
    r++;
  return { startIndex: s, endIndex: r };
}
function Md(a2) {
  const t = new Od(unref(a2)), e = shallowRef(t), n = t._didMount();
  return watch(
    () => unref(a2).getScrollElement(),
    (l) => {
      l && t._willUpdate();
    },
    {
      immediate: true
    }
  ), watch(
    () => unref(a2),
    (l) => {
      t.setOptions({
        ...l,
        onChange: (s, r) => {
          var i;
          triggerRef(e), (i = l.onChange) == null || i.call(l, s, r);
        }
      }), t._willUpdate(), triggerRef(e);
    },
    {
      immediate: true
    }
  ), onScopeDispose(n), e;
}
function Vd(a2) {
  return Md(
    computed(() => ({
      observeElementRect: Td,
      observeElementOffset: Id,
      scrollToFn: Ad,
      ...unref(a2)
    }))
  );
}
var Tm = defineComponent({
  __name: "ListboxVirtualizer",
  props: {
    options: {},
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a2) {
    const t = a2, e = useSlots(), n = Fa(), l = Vr(), { getItems: s } = Hn();
    n.isVirtual.value = true;
    const r = computed(() => {
      const f = l.value;
      if (f) {
        const v2 = window.getComputedStyle(f);
        return {
          start: Number.parseFloat(v2.paddingBlockStart || v2.paddingTop),
          end: Number.parseFloat(v2.paddingBlockEnd || v2.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), i = Vd(
      {
        get scrollPaddingStart() {
          return r.value.start;
        },
        get scrollPaddingEnd() {
          return r.value.end;
        },
        get count() {
          return t.options.length;
        },
        get horizontal() {
          return n.orientation.value === "horizontal";
        },
        estimateSize() {
          return t.estimateSize ?? 28;
        },
        getScrollElement() {
          return l.value;
        },
        overscan: 12
      }
    ), u = computed(() => i.value.getVirtualItems().map((f) => ({
      item: f,
      is: cloneVNode(e.default({
        option: t.options[f.index]
      })[0], {
        key: `${f.index}`,
        "data-index": f.index,
        "aria-setsize": t.options.length,
        "aria-posinset": f.index + 1,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${f.start}px)`,
          overflowAnchor: "none"
        }
      })
    })));
    n.virtualFocusHook.on((f) => {
      const v2 = t.options.findIndex((y2) => Array.isArray(n.modelValue.value) ? Rt(y2, n.modelValue.value[0], n.by) : Rt(y2, n.modelValue.value, n.by));
      v2 !== -1 && (f == null || f.preventDefault(), i.value.scrollToIndex(v2, { align: "start" }), requestAnimationFrame(() => {
        const y2 = wd(l.value);
        y2 && f && (y2 == null || y2.focus());
      }));
    });
    const d = kt("", 1e3), c = computed(() => {
      const f = (v2) => t.textContent ? t.textContent(v2) : v2.toString().toLowerCase();
      return t.options.map((v2, y2) => ({
        index: y2,
        textContent: f(v2)
      }));
    });
    function p(f, v2) {
      var P2, D2, g, S;
      if (!((P2 = n.firstValue) != null && P2.value) || !n.multiple.value || !Array.isArray(n.modelValue.value))
        return;
      const m2 = (D2 = s().filter((E) => E.ref.dataset.disabled !== "").find((E) => E.ref === n.highlightedElement.value)) == null ? void 0 : D2.value;
      if (!m2)
        return;
      let x = null;
      switch (v2) {
        case "prev":
        case "next": {
          x = ba(t.options, n.firstValue.value, m2);
          break;
        }
        case "first": {
          x = ba(t.options, n.firstValue.value, (g = t.options) == null ? void 0 : g[0]);
          break;
        }
        case "last": {
          x = ba(t.options, n.firstValue.value, (S = t.options) == null ? void 0 : S[t.options.length - 1]);
          break;
        }
      }
      n.modelValue.value = x;
    }
    return n.virtualKeydownHook.on((f) => {
      var x;
      const v2 = f.altKey || f.ctrlKey || f.metaKey;
      if (f.key === "Tab" && !v2)
        return;
      let m2 = Dl[f.key];
      if (v2 && f.key === "a" && n.multiple.value ? (f.preventDefault(), n.modelValue.value = [...t.options], m2 = "last") : f.shiftKey && m2 && p(f, m2), ["first", "last"].includes(m2)) {
        f.preventDefault();
        const P2 = m2 === "first" ? 0 : t.options.length - 1;
        i.value.scrollToIndex(P2), requestAnimationFrame(() => {
          const D2 = s(), g = m2 === "first" ? D2[0] : D2[D2.length - 1];
          n.onChangeHighlight(g.ref);
        });
      } else if (!m2 && !v2) {
        d.value += f.key;
        const P2 = Number((x = document.activeElement) == null ? void 0 : x.getAttribute("data-index")), D2 = c.value[P2].textContent, g = c.value.map(($2) => $2.textContent), S = pl(g, d.value, D2), E = c.value.find(($2) => $2.textContent === S);
        E && (i.value.scrollToIndex(E.index, { align: "start" }), requestAnimationFrame(() => {
          const $2 = l.value.querySelector(`[data-index="${E.index}"]`);
          $2 instanceof HTMLElement && n.onChangeHighlight($2);
        }));
      }
    }), (f, v2) => (openBlock(), createElementBlock("div", {
      "data-radix-vue-virtualizer": "",
      style: normalizeStyle({
        position: "relative",
        width: "100%",
        height: `${unref(i).getTotalSize()}px`
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(u.value, ({ is: y2, item: m2 }) => (openBlock(), createBlock(resolveDynamicComponent(y2), {
        key: m2.index
      }))), 128))
    ], 4));
  }
});
var [Fd, Ld] = Q("ListboxGroup");
var Im = defineComponent({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = me(void 0, "radix-vue-listbox-group");
    return Ld({ id: e }), (n, l) => (openBlock(), createBlock(unref(A), mergeProps({ role: "group" }, t, { "aria-labelledby": unref(e) }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
});
var Rm = defineComponent({
  __name: "ListboxGroupLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Fd({ id: "" });
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var [La, Nd] = Q("MenubarRoot");
var Am = defineComponent({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = T(), { createCollection: r } = Re("menubar");
    r(s);
    const i = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), u = ref(null), { dir: d, loop: c } = toRefs(e), p = be(d);
    return Nd({
      modelValue: i,
      dir: p,
      loop: c,
      onMenuOpen: (f) => {
        i.value = f, u.value = f;
      },
      onMenuClose: () => {
        i.value = "";
      },
      onMenuToggle: (f) => {
        i.value = i.value ? "" : f, u.value = f;
      }
    }), (f, v2) => (openBlock(), createBlock(unref(zt), {
      "current-tab-stop-id": u.value,
      "onUpdate:currentTabStopId": v2[0] || (v2[0] = (y2) => u.value = y2),
      orientation: "horizontal",
      loop: unref(c),
      dir: unref(p),
      "as-child": ""
    }, {
      default: withCtx(() => [
        createVNode(unref(A), {
          ref: unref(l),
          role: "menubar"
        }, {
          default: withCtx(() => [
            renderSlot(f.$slots, "default")
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["current-tab-stop-id", "loop", "dir"]));
  }
});
var [io, zd] = Q("MenubarMenu");
var Om = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a2) {
    const e = me(a2.value), n = La();
    T();
    const l = ref(), s = ref(false), r = computed(() => n.modelValue.value === e);
    return watch(r, () => {
      r.value || (s.value = false);
    }), zd({
      value: e,
      triggerElement: l,
      triggerId: e,
      contentId: "",
      wasKeyboardTriggerOpenRef: s
    }), (i, u) => (openBlock(), createBlock(unref(jn), {
      open: r.value,
      modal: false,
      dir: unref(n).dir.value,
      "onUpdate:open": u[0] || (u[0] = (d) => {
        d || unref(n).onMenuClose();
      })
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir"]));
  }
});
var km = defineComponent({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = La(), e = io(), { forwardRef: n, currentElement: l } = T(), s = ref(false), r = computed(() => t.modelValue.value === e.value);
    return onMounted(() => {
      e.triggerElement = l;
    }), (i, u) => (openBlock(), createBlock(unref(Kt), {
      "as-child": "",
      focusable: !i.disabled,
      "tab-stop-id": unref(e).value
    }, {
      default: withCtx(() => [
        createVNode(unref(Ma), { "as-child": "" }, {
          default: withCtx(() => [
            createVNode(unref(A), {
              id: unref(e).triggerId,
              ref: unref(n),
              as: i.as,
              type: i.as === "button" ? "button" : void 0,
              role: "menuitem",
              "aria-haspopup": "menu",
              "aria-expanded": r.value,
              "aria-controls": r.value ? unref(e).contentId : void 0,
              "data-highlighted": s.value ? "" : void 0,
              "data-state": r.value ? "open" : "closed",
              "data-disabled": i.disabled ? "" : void 0,
              disabled: i.disabled,
              "data-value": unref(e).value,
              "data-radix-vue-collection-item": "",
              onPointerdown: u[0] || (u[0] = (d) => {
                !i.disabled && d.button === 0 && d.ctrlKey === false && (unref(t).onMenuOpen(unref(e).value), r.value || d.preventDefault());
              }),
              onPointerenter: u[1] || (u[1] = () => {
                var c;
                !!unref(t).modelValue.value && !r.value && (unref(t).onMenuOpen(unref(e).value), (c = unref(l)) == null || c.focus());
              }),
              onKeydown: u[2] || (u[2] = withKeys((d) => {
                i.disabled || (["Enter", " "].includes(d.key) && unref(t).onMenuToggle(unref(e).value), d.key === "ArrowDown" && unref(t).onMenuOpen(unref(e).value), ["Enter", " ", "ArrowDown"].includes(d.key) && (unref(e).wasKeyboardTriggerOpenRef.value = true, d.preventDefault()));
              }, ["enter", "space", "arrow-down"])),
              onFocus: u[3] || (u[3] = (d) => s.value = true),
              onBlur: u[4] || (u[4] = (d) => s.value = false)
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["id", "as", "type", "aria-expanded", "aria-controls", "data-highlighted", "data-state", "data-disabled", "disabled", "data-value"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["focusable", "tab-stop-id"]));
  }
});
var Mm = defineComponent({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Jn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vm = defineComponent({
  __name: "MenubarContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    T();
    const s = La(), r = io();
    r.contentId || (r.contentId = me(void 0, "radix-vue-menubar-content"));
    const { injectCollection: i } = Re("menubar"), u = i(), d = ref(false);
    function c(p) {
      const v2 = p.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), m2 = (s.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === p.key;
      if (!m2 && v2)
        return;
      let P2 = u.value.map((S) => S.dataset.value);
      m2 && P2.reverse();
      const D2 = P2.indexOf(r.value);
      P2 = s.loop.value ? kn(P2, D2 + 1) : P2.slice(D2 + 1);
      const [g] = P2;
      g && s.onMenuOpen(g);
    }
    return (p, f) => (openBlock(), createBlock(unref(Xn), mergeProps(unref(l), {
      id: unref(r).contentId,
      "data-radix-menubar-content": "",
      "aria-labelledby": unref(r).triggerId,
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: f[0] || (f[0] = (v2) => {
        var m2;
        !!!unref(s).modelValue.value && !d.value && ((m2 = unref(r).triggerElement.value) == null || m2.focus()), d.value = false, v2.preventDefault();
      }),
      onFocusOutside: f[1] || (f[1] = (v2) => {
        const y2 = v2.target;
        unref(u).some((x) => x.contains(y2)) && v2.preventDefault();
      }),
      onInteractOutside: f[2] || (f[2] = (v2) => {
        d.value = true;
      }),
      onEntryFocus: f[3] || (f[3] = (v2) => {
        unref(r).wasKeyboardTriggerOpenRef.value || v2.preventDefault();
      }),
      onKeydown: withKeys(c, ["arrow-right", "arrow-left"])
    }), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "style"]));
  }
});
var Fm = defineComponent({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Wn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Lm = defineComponent({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    return T(), (s, r) => (openBlock(), createBlock(unref(ua), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Nm = defineComponent({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Va), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var zm = defineComponent({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(to), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Km = defineComponent({
  __name: "MenubarCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    return T(), (s, r) => (openBlock(), createBlock(unref(Yn), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Hm = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wm = defineComponent({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Zn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jm = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = Ie(t);
    return T(), (s, r) => (openBlock(), createBlock(unref(Qn), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Um = defineComponent({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    return T(), (s, r) => (openBlock(), createBlock(unref(eo), normalizeProps(guardReactiveProps(unref(l))), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gm = defineComponent({
  __name: "MenubarSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    T();
    const l = ne(e, "open", n, {
      defaultValue: e.defaultOpen ?? false,
      passive: e.open === void 0
    });
    return (s, r) => (openBlock(), createBlock(unref(ao), {
      open: unref(l),
      "onUpdate:open": r[0] || (r[0] = (i) => isRef(l) ? l.value = i : null)
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var qm = defineComponent({
  __name: "MenubarSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const l = _e(a2, t);
    T();
    const { injectCollection: s } = Re("menubar"), r = La(), i = io(), u = s();
    function d(c) {
      if (c.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let v2 = u.value.map((x) => x.dataset.value);
      const y2 = v2.indexOf(i.value);
      v2 = r.loop.value ? kn(v2, y2 + 1) : v2.slice(y2 + 1);
      const [m2] = v2;
      m2 && r.onMenuOpen(m2);
    }
    return (c, p) => (openBlock(), createBlock(unref(no), mergeProps(unref(l), {
      "data-radix-menubar-content": "",
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onKeydown: withKeys(d, ["arrow-right"])
    }), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var Ym = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(oo), mergeProps(t, { "data-radix-menubar-subtrigger": "" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [mt, Ll] = Q(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext");
var Xm = defineComponent({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: { default: void 0 },
    defaultValue: {},
    dir: {},
    orientation: { default: "horizontal" },
    delayDuration: { default: 200 },
    skipDelayDuration: { default: 300 },
    disableClickTrigger: { type: Boolean, default: false },
    disableHoverTrigger: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), s = ref(""), { forwardRef: r, currentElement: i } = T(), u = ref(), d = ref(), { createCollection: c } = Re("nav");
    c(u);
    const { delayDuration: p, skipDelayDuration: f, dir: v2, disableClickTrigger: y2, disableHoverTrigger: m2 } = toRefs(e), x = be(v2), P2 = kt(false, f), D2 = computed(() => l.value !== "" || P2.value ? 150 : p.value), g = Bn((S) => {
      s.value = l.value, l.value = S;
    }, D2);
    return Ll({
      isRootMenu: true,
      modelValue: l,
      previousValue: s,
      baseId: me(void 0, "radix-navigation-menu"),
      disableClickTrigger: y2,
      disableHoverTrigger: m2,
      dir: x,
      orientation: e.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      onIndicatorTrackChange: (S) => {
        u.value = S;
      },
      viewport: d,
      onViewportChange: (S) => {
        d.value = S;
      },
      onTriggerEnter: (S) => {
        g(S);
      },
      onTriggerLeave: () => {
        P2.value = true, g("");
      },
      onContentEnter: (S) => {
        g(S);
      },
      onContentLeave: () => {
        g("");
      },
      onItemSelect: (S) => {
        s.value = l.value, l.value = S;
      },
      onItemDismiss: () => {
        s.value = l.value, l.value = "";
      }
    }), (S, E) => (openBlock(), createBlock(unref(A), {
      ref: unref(r),
      "aria-label": "Main",
      as: S.as,
      "as-child": S.asChild,
      "data-orientation": S.orientation,
      dir: unref(x)
    }, {
      default: withCtx(() => [
        renderSlot(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function Na(a2) {
  return a2 ? "open" : "closed";
}
function Nl(a2, t) {
  return `${a2}-trigger-${t}`;
}
function uo(a2, t) {
  return `${a2}-content-${t}`;
}
var Ca = "navigationMenu.rootContentDismiss";
function gn(a2) {
  const t = [], e = document.createTreeWalker(a2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function zl(a2) {
  const t = document.activeElement;
  return a2.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function Kd(a2) {
  return a2.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    a2.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
function Kl(a2) {
  return (t) => t.pointerType === "mouse" ? a2(t) : void 0;
}
var [co, Hd] = Q("NavigationMenuItem");
var Zm = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(a2) {
    const t = a2;
    T();
    const { injectCollection: e } = Re("nav"), n = e(), l = mt(), s = me(t.value), r = ref(), i = ref(), u = uo(l.baseId, s);
    let d = () => ({});
    const c = ref(false);
    async function p(m2 = "start") {
      const x = document.getElementById(u);
      if (x) {
        d();
        const P2 = gn(x);
        P2.length && zl(m2 === "start" ? P2 : P2.reverse());
      }
    }
    function f() {
      const m2 = document.getElementById(u);
      if (m2) {
        const x = gn(m2);
        x.length && (d = Kd(x));
      }
    }
    Hd({
      value: s,
      contentId: u,
      triggerRef: r,
      focusProxyRef: i,
      wasEscapeCloseRef: c,
      onEntryKeyDown: p,
      onFocusProxyEnter: p,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function v2() {
      var m2;
      l.onItemDismiss(), (m2 = r.value) == null || m2.focus();
    }
    function y2(m2) {
      const x = document.activeElement;
      if (m2.keyCode === 32 || m2.key === "Enter")
        if (l.modelValue.value === s) {
          v2(), m2.preventDefault();
          return;
        } else {
          m2.target.click(), m2.preventDefault();
          return;
        }
      const P2 = n.value.filter(
        (g) => {
          var S;
          return (S = g.parentElement) == null ? void 0 : S.hasAttribute("data-menu-item");
        }
      ), D2 = Vt(m2, x, void 0, {
        itemsArray: P2,
        loop: false
      });
      D2 && (D2 == null || D2.focus()), m2.preventDefault(), m2.stopPropagation();
    }
    return (m2, x) => (openBlock(), createBlock(unref(A), {
      "as-child": m2.asChild,
      as: m2.as,
      "data-menu-item": "",
      onKeydown: withKeys(y2, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: withCtx(() => [
        renderSlot(m2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Wd = defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { injectCollection: l } = Re("nav"), s = l(), { forwardRef: r, currentElement: i } = T(), u = mt(), d = co(), c = Nl(u.baseId, d.value), p = uo(u.baseId, d.value), f = ref(null), v2 = computed(() => {
      const S = s.value.map((O2) => O2.id.split("trigger-")[1]);
      u.dir.value === "rtl" && S.reverse();
      const E = S.indexOf(u.modelValue.value), $2 = S.indexOf(u.previousValue.value), R2 = d.value === u.modelValue.value, M = $2 === S.indexOf(d.value);
      if (!R2 && !M)
        return f.value;
      const V2 = (() => {
        if (E !== $2) {
          if (R2 && $2 !== -1)
            return E > $2 ? "from-end" : "from-start";
          if (M && E !== -1)
            return E > $2 ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = V2, V2;
    });
    function y2(g) {
      var S, E;
      if (n("focusOutside", g), n("interactOutside", g), !g.defaultPrevented) {
        d.onContentFocusOutside();
        const $2 = g.target;
        (E = (S = u.rootNavigationMenu) == null ? void 0 : S.value) != null && E.contains($2) && g.preventDefault();
      }
    }
    function m2(g) {
      var S;
      if (n("pointerDownOutside", g), !g.defaultPrevented) {
        const E = g.target, $2 = s.value.some(
          (M) => M.contains(E)
        ), R2 = u.isRootMenu && ((S = u.viewport.value) == null ? void 0 : S.contains(E));
        ($2 || R2 || !u.isRootMenu) && g.preventDefault();
      }
    }
    watchEffect((g) => {
      const S = i.value;
      if (u.isRootMenu && S) {
        const E = () => {
          var $2;
          u.onItemDismiss(), d.onRootContentClose(), S.contains(document.activeElement) && (($2 = d.triggerRef.value) == null || $2.focus());
        };
        S.addEventListener(Ca, E), g(
          () => S.removeEventListener(Ca, E)
        );
      }
    });
    function x(g) {
      var S, E;
      n("escapeKeyDown", g), g.defaultPrevented || (u.onItemDismiss(), (E = (S = d.triggerRef) == null ? void 0 : S.value) == null || E.focus(), d.wasEscapeCloseRef.value = true);
    }
    function P2(g) {
      var M;
      const S = g.altKey || g.ctrlKey || g.metaKey, E = g.key === "Tab" && !S, $2 = gn(g.currentTarget);
      if (E) {
        const V2 = document.activeElement, O2 = $2.findIndex(
          (J2) => J2 === V2
        ), j2 = g.shiftKey ? $2.slice(0, O2).reverse() : $2.slice(O2 + 1, $2.length);
        if (zl(j2))
          g.preventDefault();
        else {
          (M = d.focusProxyRef.value) == null || M.focus();
          return;
        }
      }
      const R2 = Vt(
        g,
        document.activeElement,
        void 0,
        { itemsArray: $2, loop: false, enableIgnoredElement: true }
      );
      R2 == null || R2.focus();
    }
    function D2() {
      var S;
      const g = new Event(Ca, {
        bubbles: true,
        cancelable: true
      });
      (S = i.value) == null || S.dispatchEvent(g);
    }
    return (g, S) => (openBlock(), createBlock(unref(vt), mergeProps({
      id: unref(p),
      ref: unref(r),
      "aria-labelledby": unref(c),
      "data-motion": v2.value,
      "data-state": unref(Na)(unref(u).modelValue.value === unref(d).value),
      "data-orientation": unref(u).orientation
    }, e, {
      onKeydown: P2,
      onEscapeKeyDown: x,
      onPointerDownOutside: m2,
      onFocusOutside: y2,
      onDismiss: D2
    }), {
      default: withCtx(() => [
        renderSlot(g.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
});
var Jm = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Ie(n), { forwardRef: s } = T(), r = $a(), i = mt(), u = co(), d = computed(() => u.value === i.modelValue.value), c = computed(() => i.viewport.value && !i.modelValue.value && i.previousValue.value ? i.previousValue.value === u.value : false);
    return (p, f) => unref(r) ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(i).viewport.value,
      disabled: !unref(i).viewport.value
    }, [
      createVNode(unref(Ee), {
        present: p.forceMount || d.value || c.value
      }, {
        default: withCtx(() => [
          createVNode(Wd, mergeProps({
            ref: unref(s),
            "data-state": unref(Na)(d.value),
            style: {
              pointerEvents: !d.value && unref(i).isRootMenu ? "none" : void 0
            }
          }, { ...p.$attrs, ...e, ...unref(l) }, {
            onPointerenter: f[0] || (f[0] = (v2) => unref(i).onContentEnter(unref(u).value)),
            onPointerleave: f[1] || (f[1] = (v2) => unref(Kl)(() => unref(i).onContentLeave())(v2)),
            onPointerDownOutside: f[2] || (f[2] = (v2) => n("pointerDownOutside", v2)),
            onFocusOutside: f[3] || (f[3] = (v2) => n("focusOutside", v2)),
            onInteractOutside: f[4] || (f[4] = (v2) => n("interactOutside", v2))
          }), {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "style"])
        ]),
        _: 3
      }, 8, ["present"])
    ], 8, ["to", "disabled"])) : createCommentVNode("", true);
  }
});
var Qm = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T(), { injectCollection: n } = Re("nav"), l = n(), s = mt(), r = ref(), i = computed(() => s.orientation === "horizontal"), u = computed(() => !!s.modelValue.value), d = ref();
    function c() {
      d.value && (r.value = {
        size: i.value ? d.value.offsetWidth : d.value.offsetHeight,
        offset: i.value ? d.value.offsetLeft : d.value.offsetTop
      });
    }
    return watchEffect(() => {
      if (!s.modelValue.value) {
        r.value = void 0;
        return;
      }
      const p = l.value;
      d.value = p.find(
        (f) => f.id.includes(s.modelValue.value)
      ), c();
    }), Ge(d, c), Ge(s.indicatorTrack, c), (p, f) => unref(s).indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(s).indicatorTrack.value
    }, [
      createVNode(unref(Ee), {
        present: p.forceMount || u.value
      }, {
        default: withCtx(() => {
          var v2, y2, m2, x;
          return [
            createVNode(unref(A), mergeProps({
              ref: unref(e),
              "aria-hidden": "",
              "data-state": u.value ? "visible" : "hidden",
              "data-orientation": unref(s).orientation,
              "as-child": t.asChild,
              as: p.as,
              style: {
                position: "absolute",
                ...i.value ? {
                  left: 0,
                  width: `${(v2 = r.value) == null ? void 0 : v2.size}px`,
                  transform: `translateX(${(y2 = r.value) == null ? void 0 : y2.offset}px)`
                } : {
                  top: 0,
                  height: `${(m2 = r.value) == null ? void 0 : m2.size}px`,
                  transform: `translateY(${(x = r.value) == null ? void 0 : x.offset}px)`
                }
              }
            }, p.$attrs), {
              default: withCtx(() => [
                renderSlot(p.$slots, "default")
              ]),
              _: 3
            }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])
          ];
        }),
        _: 3
      }, 8, ["present"])
    ], 8, ["to"])) : createCommentVNode("", true);
  }
});
var eh = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    T();
    async function l(s) {
      var r;
      if (n("select", s), await nextTick(), !s.defaultPrevented && !s.metaKey) {
        const i = new CustomEvent(
          Ca,
          {
            bubbles: true,
            cancelable: true
          }
        );
        (r = s.target) == null || r.dispatchEvent(i);
      }
    }
    return (s, r) => (openBlock(), createBlock(unref(A), {
      as: s.as,
      "data-active": s.active ? "" : void 0,
      "aria-current": s.active ? "page" : void 0,
      "as-child": e.asChild,
      "data-radix-vue-collection-item": "",
      onClick: l
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
});
var th = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(a2) {
    const t = a2, e = mt(), { forwardRef: n, currentElement: l } = T();
    return onMounted(() => {
      e.onIndicatorTrackChange(l.value);
    }), (s, r) => (openBlock(), createBlock(unref(A), {
      ref: unref(n),
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        createVNode(unref(A), mergeProps(s.$attrs, {
          "as-child": t.asChild,
          as: s.as,
          "data-orientation": unref(e).orientation
        }), {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-orientation"])
      ]),
      _: 3
    }, 512));
  }
});
var ah = defineComponent({
  __name: "NavigationMenuSub",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), s = ref(""), r = mt(), { forwardRef: i, currentElement: u } = T(), d = ref(), c = ref(), { createCollection: p } = Re("nav");
    return p(d), Ll({
      ...r,
      isRootMenu: false,
      modelValue: l,
      previousValue: s,
      orientation: e.orientation,
      rootNavigationMenu: u,
      indicatorTrack: d,
      onIndicatorTrackChange: (f) => {
        d.value = f;
      },
      viewport: c,
      onViewportChange: (f) => {
        c.value = f;
      },
      onTriggerEnter: (f) => {
        l.value = f;
      },
      onTriggerLeave: () => {
      },
      onContentEnter: () => {
      },
      onContentLeave: () => {
      },
      onItemSelect: (f) => {
        l.value = f;
      },
      onItemDismiss: () => {
        l.value = "";
      }
    }), (f, v2) => (openBlock(), createBlock(unref(A), {
      ref: unref(i),
      "data-orientation": f.orientation,
      "as-child": e.asChild,
      as: f.as
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-orientation", "as-child", "as"]));
  }
});
var jd = ["aria-owns"];
var nh = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = mt(), n = co(), { forwardRef: l, currentElement: s } = T(), r = ref(""), i = ref(""), u = kt(false, 300), d = ref(false), c = computed(() => n.value === e.modelValue.value);
    onMounted(() => {
      n.triggerRef = s, r.value = Nl(e.baseId, n.value), i.value = uo(e.baseId, n.value);
    });
    function p() {
      e.disableHoverTrigger.value || (d.value = false, n.wasEscapeCloseRef.value = false);
    }
    function f(D2) {
      if (!e.disableHoverTrigger.value && D2.pointerType === "mouse") {
        if (t.disabled || d.value || n.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(n.value), u.value = true;
      }
    }
    function v2(D2) {
      if (!e.disableHoverTrigger.value && D2.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = false;
      }
    }
    function y2(D2) {
      D2.pointerType === "mouse" && e.disableClickTrigger.value || u.value || (c.value ? e.onItemSelect("") : e.onItemSelect(n.value), d.value = c.value);
    }
    function m2(D2) {
      const S = { horizontal: "ArrowDown", vertical: e.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      c.value && D2.key === S && (n.onEntryKeyDown(), D2.preventDefault(), D2.stopPropagation());
    }
    function x(D2) {
      n.focusProxyRef.value = Be(D2);
    }
    function P2(D2) {
      const g = document.getElementById(n.contentId), S = D2.relatedTarget, E = S === s.value, $2 = g == null ? void 0 : g.contains(S);
      (E || !$2) && n.onFocusProxyEnter(E ? "start" : "end");
    }
    return (D2, g) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(A), mergeProps({
        id: r.value,
        ref: unref(l),
        disabled: D2.disabled,
        "data-disabled": D2.disabled ? "" : void 0,
        "data-state": unref(Na)(c.value),
        "aria-expanded": c.value,
        "aria-controls": i.value,
        "as-child": t.asChild,
        as: D2.as
      }, D2.$attrs, {
        "data-radix-vue-collection-item": "",
        onPointerenter: p,
        onPointermove: f,
        onPointerleave: v2,
        onClick: y2,
        onKeydown: m2
      }), {
        default: withCtx(() => [
          renderSlot(D2.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
      c.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(unref(Nt), {
          ref: x,
          "aria-hidden": "",
          tabindex: 0,
          onFocus: P2
        }),
        unref(e).viewport ? (openBlock(), createElementBlock("span", {
          key: 0,
          "aria-owns": i.value
        }, null, 8, jd)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true)
    ], 64));
  }
});
var oh = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const { forwardRef: t, currentElement: e } = T(), n = mt(), l = ref(), s = computed(() => !!n.modelValue.value), r = computed(() => n.modelValue.value);
    watch(e, () => {
      e.value && n.onViewportChange(e.value);
    });
    const i = ref();
    return watch([r, s], async () => {
      var d, c;
      if (await nextTick(), !e.value)
        return;
      const u = (c = (d = e.value.querySelector("[data-state=open]")) == null ? void 0 : d.children) == null ? void 0 : c[0];
      i.value = u;
    }, { immediate: true }), Ge(i, () => {
      i.value && (l.value = {
        width: i.value.offsetWidth,
        height: i.value.offsetHeight
      });
    }), (u, d) => (openBlock(), createBlock(unref(Ee), {
      present: u.forceMount || s.value
    }, {
      default: withCtx(() => {
        var c, p;
        return [
          createVNode(unref(A), mergeProps(u.$attrs, {
            ref: unref(t),
            as: u.as,
            "as-child": u.asChild,
            "data-state": unref(Na)(s.value),
            "data-orientation": unref(n).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && unref(n).isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": l.value ? `${(c = l.value) == null ? void 0 : c.width}px` : void 0,
              "--radix-navigation-menu-viewport-height": l.value ? `${(p = l.value) == null ? void 0 : p.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (f) => unref(n).onContentEnter(unref(n).modelValue.value)),
            onPointerleave: d[1] || (d[1] = (f) => unref(Kl)(() => unref(n).onContentLeave())(f))
          }), {
            default: withCtx(() => [
              renderSlot(u.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child", "data-state", "data-orientation", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
var [Ht, Ud] = Q("PaginationRoot");
var lh = defineComponent({
  __name: "PaginationRoot",
  props: {
    page: {},
    defaultPage: { default: 1 },
    itemsPerPage: { default: 10 },
    total: { default: 0 },
    siblingCount: { default: 2 },
    disabled: { type: Boolean },
    showEdges: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:page"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { siblingCount: l, disabled: s, showEdges: r } = toRefs(e);
    T();
    const i = ne(e, "page", n, {
      defaultValue: e.defaultPage,
      passive: e.page === void 0
    }), u = computed(() => Math.max(1, Math.ceil(e.total / e.itemsPerPage)));
    return Ud({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: l,
      disabled: s,
      showEdges: r
    }), (d, c) => (openBlock(), createBlock(unref(A), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default", {
          page: unref(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var sh = defineComponent({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(A), mergeProps(t, { "data-type": "ellipsis" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default", {}, () => [
          createTextVNode("…")
        ])
      ]),
      _: 3
    }, 16));
  }
});
var rh = defineComponent({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Ht();
    return T(), (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: unref(e).page.value === 1 || unref(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => unref(e).onPageChange(1))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
var ih = defineComponent({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Ht();
    return T(), (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: unref(e).page.value === unref(e).pageCount.value || unref(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => unref(e).onPageChange(unref(e).pageCount.value))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function at(a2, t) {
  const e = t - a2 + 1;
  return Array.from({ length: e }, (n, l) => l + a2);
}
function Gd(a2) {
  return a2.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
var fa = "ellipsis";
function qd(a2, t, e, n) {
  const s = t, r = Math.max(a2 - e, 1), i = Math.min(a2 + e, s), u = r > 1 + 2, d = i < s - 2;
  if (n) {
    const p = Math.min(2 * e + 5, t) - 2;
    if (!u && d)
      return [...at(1, p), fa, s];
    if (u && !d) {
      const v2 = at(s - p + 1, s);
      return [1, fa, ...v2];
    }
    if (u && d) {
      const v2 = at(r, i);
      return [1, fa, ...v2, fa, s];
    }
    return at(1, s);
  } else {
    const c = e * 2 + 1;
    return t < c ? at(1, s) : a2 <= e + 1 ? at(1, c) : t - a2 <= e ? at(t - c + 1, s) : at(r, i);
  }
}
var uh = defineComponent({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Ht(), n = computed(() => Gd(
      qd(
        e.page.value,
        e.pageCount.value,
        e.siblingCount.value,
        e.showEdges.value
      )
    ));
    return (l, s) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
});
var dh = defineComponent({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Ht(), n = computed(() => e.page.value === t.value);
    return (l, s) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      "data-type": "page",
      "aria-label": `Page ${l.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: unref(e).disabled.value,
      type: l.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (r) => unref(e).onPageChange(l.value))
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(l.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
});
var ch = defineComponent({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Ht();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: unref(e).page.value === unref(e).pageCount.value || unref(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => unref(e).onPageChange(unref(e).page.value + 1))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
var ph = defineComponent({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Ht();
    return (n, l) => {
      var s;
      return openBlock(), createBlock(unref(A), mergeProps(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: unref(e).page.value === 1 || ((s = unref(e).disabled) == null ? void 0 : s.value),
        onClick: l[0] || (l[0] = (r) => unref(e).onPageChange(unref(e).page.value - 1))
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default", {}, () => [
            createTextVNode("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
});
var Yd = ["id", "value", "name", "disabled", "required"];
var [Xd, Zd] = Q("PinInputRoot");
var fh = defineComponent({
  inheritAttrs: false,
  __name: "PinInputRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "" },
    mask: { type: Boolean },
    otp: { type: Boolean },
    type: { default: "text" },
    dir: {},
    name: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    id: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "complete"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { mask: l, otp: s, placeholder: r, type: i, disabled: u, dir: d } = toRefs(e), { forwardRef: c } = T(), p = be(d), f = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? [],
      passive: e.modelValue === void 0
    }), v2 = ref(/* @__PURE__ */ new Set());
    function y2(x) {
      v2.value.add(x);
    }
    const m2 = computed(() => f.value.filter((P2) => !!P2).length === v2.value.size);
    return watch(f, () => {
      m2.value && n("complete", f.value);
    }, { deep: true }), Zd({
      modelValue: f,
      mask: l,
      otp: s,
      placeholder: r,
      type: i,
      dir: p,
      disabled: u,
      isCompleted: m2,
      inputElements: v2,
      onInputElementChange: y2
    }), (x, P2) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(A), mergeProps(x.$attrs, {
        ref: unref(c),
        dir: unref(p),
        "data-complete": m2.value ? "" : void 0,
        "data-disabled": unref(u) ? "" : void 0
      }), {
        default: withCtx(() => [
          renderSlot(x.$slots, "default", { modelValue: unref(f) })
        ]),
        _: 3
      }, 16, ["dir", "data-complete", "data-disabled"]),
      createBaseVNode("input", {
        id: x.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: unref(f).join(""),
        name: x.name,
        disabled: unref(u),
        required: x.required,
        style: normalizeStyle({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }),
        onFocus: P2[0] || (P2[0] = (D2) => {
          var g, S;
          return (S = (g = Array.from(v2.value)) == null ? void 0 : g[0]) == null ? void 0 : S.focus();
        })
      }, null, 44, Yd)
    ], 64));
  }
});
var Jd = ["autocomplete", "type", "inputmode", "pattern", "placeholder", "value", "disabled", "data-disabled", "data-complete", "aria-label"];
var vh = defineComponent({
  __name: "PinInputInput",
  props: {
    index: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, e = Xd(), n = computed(() => Array.from(e.inputElements.value)), l = computed(() => t.disabled || e.disabled.value), s = computed(() => e.otp.value), r = computed(() => e.type.value === "number"), i = computed(() => e.mask.value), u = ref();
    function d(g) {
      var $2;
      const S = g.target;
      if (((($2 = g.data) == null ? void 0 : $2.length) ?? 0) > 1) {
        x(S.value);
        return;
      }
      if (r.value && !/^[0-9]*$/.test(S.value)) {
        S.value = S.value.replace(/\D/g, "");
        return;
      }
      S.value = S.value.slice(-1), D2(t.index, S.value);
      const E = n.value[t.index + 1];
      E && E.focus();
    }
    function c(g) {
      Vt(g, document.activeElement, void 0, {
        itemsArray: n.value,
        focus: true,
        loop: false,
        arrowKeyOptions: "horizontal",
        dir: e.dir.value
      });
    }
    function p(g) {
      if (g.preventDefault(), g.target.value)
        D2(t.index, "");
      else {
        const $2 = n.value[t.index - 1];
        $2 && ($2.focus(), D2(t.index - 1, ""));
      }
    }
    function f(g) {
      g.key === "Delete" && (g.preventDefault(), D2(t.index, ""));
    }
    function v2(g) {
      const S = g.target;
      S.setSelectionRange(1, 1), S.value || (S.placeholder = "");
    }
    function y2(g) {
      const S = g.target;
      nextTick(() => {
        S.value || (S.placeholder = e.placeholder.value);
      });
    }
    function m2(g) {
      g.preventDefault();
      const S = g.clipboardData;
      if (!S)
        return;
      const E = S.getData("text");
      x(E);
    }
    function x(g) {
      var R2;
      const S = [...e.modelValue.value], E = g.length >= n.value.length ? 0 : t.index, $2 = Math.min(E + g.length, n.value.length);
      for (let M = E; M < $2; M++) {
        const V2 = n.value[M], O2 = g[M - E];
        r.value && !/^[0-9]*$/.test(O2) || (S[M] = O2, V2.focus());
      }
      e.modelValue.value = S, (R2 = n.value[$2]) == null || R2.focus();
    }
    function P2(g) {
      let S = g.length - 1;
      for (; S >= 0 && g[S] === ""; )
        g.pop(), S--;
      return g;
    }
    function D2(g, S) {
      const E = [...e.modelValue.value];
      E[g] = S, e.modelValue.value = P2(E);
    }
    return onMounted(() => {
      e.onInputElementChange(u.value);
    }), onUnmounted(() => {
      var g;
      (g = e.inputElements) == null || g.value.delete(u.value);
    }), (g, S) => (openBlock(), createElementBlock("input", {
      ref_key: "inputRef",
      ref: u,
      autocapitalize: "none",
      autocomplete: s.value ? "one-time-code" : "false",
      type: i.value ? "password" : "text",
      inputmode: r.value ? "numeric" : "text",
      pattern: r.value ? "[0-9]*" : void 0,
      placeholder: unref(e).placeholder.value,
      value: unref(e).modelValue.value.at(g.index),
      disabled: l.value,
      "data-disabled": l.value ? "" : void 0,
      "data-complete": unref(e).isCompleted.value ? "" : void 0,
      "aria-label": `pin input ${g.index + 1} of ${n.value.length}`,
      onInput: S[0] || (S[0] = (E) => d(E)),
      onKeydown: [
        withKeys(c, ["left", "right", "up", "down", "home", "end"]),
        withKeys(p, ["backspace"]),
        withKeys(f, ["delete"])
      ],
      onFocus: v2,
      onBlur: y2,
      onPaste: m2
    }, null, 40, Jd));
  }
});
var [Dt, Qd] = Q("PopoverRoot");
var Hl = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { modal: l } = toRefs(e), s = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = ref(), i = ref(false);
    return Qd({
      contentId: "",
      modal: l,
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: r,
      hasCustomAnchor: i
    }), (u, d) => (openBlock(), createBlock(unref(xt), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Wl = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Dt(), { forwardRef: n, currentElement: l } = T();
    return onMounted(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (openBlock(), createBlock(resolveDynamicComponent(unref(e).hasCustomAnchor.value ? unref(A) : unref(St)), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(A), {
          ref: unref(n),
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(e).contentId,
          "data-state": unref(e).open.value ? "open" : "closed",
          as: s.as,
          "as-child": t.asChild,
          onClick: unref(e).onOpenToggle
        }, {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
});
var jl = defineComponent({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ft), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ul = defineComponent({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = _t(e), { forwardRef: s } = T(), r = Dt();
    return On(), (i, u) => (openBlock(), createBlock(unref(Ra), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: withCtx(() => [
        createVNode(unref(vt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => unref(r).onOpenChange(false))
        }, {
          default: withCtx(() => [
            createVNode(unref(Ct), mergeProps(unref(l), {
              id: unref(r).contentId,
              ref: unref(s),
              "data-state": unref(r).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var ec = defineComponent({
  __name: "PopoverContentModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Dt(), s = ref(false);
    sa(true);
    const r = _e(e, n), { forwardRef: i, currentElement: u } = T();
    return ra(u), (d, c) => (openBlock(), createBlock(Ul, mergeProps(unref(r), {
      ref: unref(i),
      "trap-focus": unref(l).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = withModifiers(
        (p) => {
          var f;
          n("closeAutoFocus", p), s.value || (f = unref(l).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const f = p.detail.originalEvent, v2 = f.button === 0 && f.ctrlKey === true, y2 = f.button === 2 || v2;
        s.value = y2;
      }),
      onFocusOutside: c[2] || (c[2] = withModifiers(() => {
      }, ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
});
var tc = defineComponent({
  __name: "PopoverContentNonModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Dt(), s = ref(false), r = ref(false), i = _e(e, n);
    return (u, d) => (openBlock(), createBlock(Ul, mergeProps(unref(i), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (s.value || (p = unref(l).triggerElement.value) == null || p.focus(), c.preventDefault()), s.value = false, r.value = false;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var v2;
        n("interactOutside", c), c.defaultPrevented || (s.value = true, c.detail.originalEvent.type === "pointerdown" && (r.value = true));
        const p = c.target;
        ((v2 = unref(l).triggerElement.value) == null ? void 0 : v2.contains(p)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gl = defineComponent({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Dt(), s = _e(e, n), { forwardRef: r } = T();
    return l.contentId || (l.contentId = me(void 0, "radix-vue-popover-content")), (i, u) => (openBlock(), createBlock(unref(Ee), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        unref(l).modal.value ? (openBlock(), createBlock(ec, mergeProps({ key: 0 }, unref(s), { ref: unref(r) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(tc, mergeProps({ key: 1 }, unref(s), { ref: unref(r) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var ql = defineComponent({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Yl = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Dt();
    return (n, l) => (openBlock(), createBlock(unref(A), {
      type: n.as === "button" ? "button" : void 0,
      as: n.as,
      "as-child": t.asChild,
      onClick: l[0] || (l[0] = (s) => unref(e).onOpenChange(false))
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child"]));
  }
});
var Xl = defineComponent({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Dt();
    return onBeforeMount(() => {
      e.hasCustomAnchor.value = true;
    }), onUnmounted(() => {
      e.hasCustomAnchor.value = false;
    }), (n, l) => (openBlock(), createBlock(unref(St), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ea = 100;
var [ac, nc] = Q("ProgressRoot");
var po = (a2) => typeof a2 == "number";
function oc(a2, t) {
  return a2 === null || po(a2) && !Number.isNaN(a2) && a2 <= t && a2 >= 0 ? a2 : (console.error(`Invalid prop \`value\` of value \`${a2}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ea} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function lc(a2) {
  return po(a2) && !Number.isNaN(a2) && a2 > 0 ? a2 : (console.error(
    `Invalid prop \`max\` of value \`${a2}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ea}\`.`
  ), ea);
}
var mh = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: ea },
    getValueLabel: { type: Function, default: (a2, t) => `${Math.round(a2 / t * ea)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    T();
    const l = ne(e, "modelValue", n, {
      passive: e.modelValue === void 0
    }), s = ne(e, "max", n, {
      passive: e.max === void 0
    });
    watch(
      () => l.value,
      async (i) => {
        const u = oc(i, e.max);
        u !== i && (await nextTick(), l.value = u);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (i) => {
        const u = lc(e.max);
        u !== i && (s.value = u);
      },
      { immediate: true }
    );
    const r = computed(() => l.value ? l.value === s.value ? "complete" : "loading" : "indeterminate");
    return nc({
      modelValue: l,
      max: s,
      progressState: r
    }), (i, u) => (openBlock(), createBlock(unref(A), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": unref(s),
      "aria-valuemin": 0,
      "aria-valuenow": po(unref(l)) ? unref(l) : void 0,
      "aria-valuetext": i.getValueLabel(unref(l), unref(s)),
      "aria-label": i.getValueLabel(unref(l), unref(s)),
      role: "progressbar",
      "data-state": r.value,
      "data-value": unref(l) ?? void 0,
      "data-max": unref(s)
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
});
var hh = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = ac();
    return T(), (n, l) => {
      var s;
      return openBlock(), createBlock(unref(A), mergeProps(t, {
        "data-state": unref(e).progressState.value,
        "data-value": ((s = unref(e).modelValue) == null ? void 0 : s.value) ?? void 0,
        "data-max": unref(e).max.value
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
});
var [sc, rc] = Q("RadioGroupRoot");
var yh = defineComponent({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean, default: false },
    name: {},
    required: { type: Boolean, default: false },
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l } = T(), s = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { disabled: r, loop: i, orientation: u, name: d, required: c, dir: p } = toRefs(e), f = be(p);
    return rc({
      modelValue: s,
      changeModelValue: (v2) => {
        s.value = v2;
      },
      disabled: r,
      loop: i,
      orientation: u,
      name: d == null ? void 0 : d.value,
      required: c
    }), (v2, y2) => (openBlock(), createBlock(unref(zt), {
      "as-child": "",
      orientation: unref(u),
      dir: unref(f),
      loop: unref(i)
    }, {
      default: withCtx(() => [
        createVNode(unref(A), {
          ref: unref(l),
          role: "radiogroup",
          "data-disabled": unref(r) ? "" : void 0,
          "as-child": v2.asChild,
          as: v2.as,
          required: unref(c),
          "aria-orientation": unref(u),
          "aria-required": unref(c),
          dir: unref(f),
          name: unref(d)
        }, {
          default: withCtx(() => [
            renderSlot(v2.$slots, "default")
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var ic = ["value", "checked", "name", "disabled", "required"];
var uc = defineComponent({
  __name: "Radio",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, l = ne(e, "checked", t, {
      passive: e.checked === void 0
    }), { value: s } = toRefs(e), { forwardRef: r, currentElement: i } = T(), u = ct(i), d = computed(() => {
      var p;
      return e.id && i.value ? ((p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText) ?? e.value : void 0;
    });
    function c(p) {
      l.value = true, u.value && p.stopPropagation();
    }
    return (p, f) => (openBlock(), createBlock(unref(A), mergeProps(p.$attrs, {
      id: p.id,
      ref: unref(r),
      role: "radio",
      type: p.as === "button" ? "button" : void 0,
      as: p.as,
      "aria-checked": unref(l),
      "aria-label": d.value,
      "as-child": p.asChild,
      disabled: p.disabled ? "" : void 0,
      "data-state": unref(l) ? "checked" : "unchecked",
      "data-disabled": p.disabled ? "" : void 0,
      value: unref(s),
      required: p.required,
      name: p.name,
      onClick: withModifiers(c, ["stop"])
    }), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default"),
        unref(u) ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "",
          value: unref(s),
          checked: !!unref(l),
          name: p.name,
          disabled: p.disabled,
          required: p.required,
          style: normalizeStyle({
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          })
        }, null, 12, ic)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
});
var [dc, cc] = Q("RadioGroupItem");
var gh = defineComponent({
  inheritAttrs: false,
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e, currentElement: n } = T(), l = sc(), s = computed(() => l.disabled.value || t.disabled), r = computed(() => l.required.value || t.required), i = computed(() => {
      var p;
      return ((p = l.modelValue) == null ? void 0 : p.value) === t.value;
    });
    cc({ disabled: s, checked: i });
    const u = ref(false), d = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    it("keydown", (p) => {
      d.includes(p.key) && (u.value = true);
    }), it("keyup", () => {
      u.value = false;
    });
    function c() {
      setTimeout(() => {
        var p;
        u.value && ((p = n.value) == null || p.click());
      }, 0);
    }
    return (p, f) => (openBlock(), createBlock(unref(Kt), {
      checked: i.value,
      disabled: s.value,
      "as-child": "",
      focusable: !s.value,
      active: i.value
    }, {
      default: withCtx(() => [
        createVNode(uc, mergeProps({ ...p.$attrs, ...t }, {
          ref: unref(e),
          checked: i.value,
          required: r.value,
          disabled: s.value,
          "onUpdate:checked": f[0] || (f[0] = (v2) => unref(l).changeModelValue(p.value)),
          onKeydown: f[1] || (f[1] = withKeys(withModifiers(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: c
        }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["checked", "required", "disabled"])
      ]),
      _: 3
    }, 8, ["checked", "disabled", "focusable", "active"]));
  }
});
var bh = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const { forwardRef: t } = T(), e = dc();
    return (n, l) => (openBlock(), createBlock(unref(Ee), {
      present: n.forceMount || unref(e).checked.value
    }, {
      default: withCtx(() => [
        createVNode(unref(A), mergeProps({
          ref: unref(t),
          "data-state": unref(e).checked.value ? "checked" : "unchecked",
          "data-disabled": unref(e).disabled.value ? "" : void 0,
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function pc(a2) {
  const t = computed(() => a2.start.value ? !!a2.isDateDisabled(a2.start.value) : false), e = computed(() => a2.end.value ? !!a2.isDateDisabled(a2.end.value) : false), n = computed(
    () => t.value || e.value ? false : !!(a2.start.value && a2.end.value && R(a2.end.value, a2.start.value))
  ), l = (u) => a2.start.value ? $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.start.value, u) : false, s = (u) => a2.end.value ? $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.end.value, u) : false, r = (u) => a2.start.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.start.value, u) || a2.end.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.end.value, u) ? true : a2.end.value && a2.start.value ? v(u, a2.start.value, a2.end.value) : false, i = computed(() => {
    if (a2.start.value && a2.end.value || !a2.start.value || !a2.focusedValue.value)
      return null;
    const u = R(a2.start.value, a2.focusedValue.value), d = u ? a2.start.value : a2.focusedValue.value, c = u ? a2.focusedValue.value : a2.start.value;
    return $14e0f24ef4ac5c92$export$ea39ec197993aef0(d.add({ days: 1 }), c) ? {
      start: d,
      end: c
    } : b(d, c, a2.isDateUnavailable, a2.isDateDisabled) ? {
      start: d,
      end: c
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: l,
    isSelectionEnd: s
  };
}
var fc = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } };
var vc = {
  role: "heading",
  "aria-level": "2"
};
var [Wt, mc] = Q("RangeCalendarRoot");
var hc = defineComponent({
  __name: "RangeCalendarRoot",
  props: {
    defaultPlaceholder: {},
    defaultValue: { default: () => ({ start: void 0, end: void 0 }) },
    modelValue: {},
    placeholder: { default: void 0 },
    pagedNavigation: { type: Boolean, default: false },
    preventDeselect: { type: Boolean, default: false },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    calendarLabel: {},
    fixedWeeks: { type: Boolean, default: false },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    numberOfMonths: { default: 1 },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    initialFocus: { type: Boolean, default: false },
    isDateDisabled: { type: Function, default: void 0 },
    isDateUnavailable: { type: Function, default: void 0 },
    dir: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, {
      disabled: l,
      readonly: s,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateUnavailable: v2,
      isDateDisabled: y2,
      calendarLabel: m2,
      maxValue: x,
      minValue: P2,
      locale: D2,
      dir: g
    } = toRefs(e), { primitiveElement: S, currentElement: E } = qe(), $2 = be(g), R2 = ref(), M = ref(), V2 = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), O2 = Ot({
      defaultPlaceholder: e.placeholder,
      defaultValue: V2.value.start
    }), L = ref(V2.value.start), j2 = ref(V2.value.end), J2 = ne(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? O2.copy(),
      passive: e.placeholder === void 0
    });
    function W2(fe) {
      J2.value = fe.copy();
    }
    const {
      fullCalendarLabel: X2,
      headingValue: N,
      isDateDisabled: q2,
      isDateUnavailable: F,
      isNextButtonDisabled: Z,
      isPrevButtonDisabled: U,
      grid: Y,
      weekdays: te,
      isOutsideVisibleView: de,
      nextPage: H2,
      prevPage: oe,
      formatter: ce
    } = wl({
      locale: D2,
      placeholder: J2,
      weekStartsOn: u,
      fixedWeeks: c,
      numberOfMonths: p,
      minValue: P2,
      maxValue: x,
      disabled: l,
      weekdayFormat: d,
      pagedNavigation: i,
      isDateDisabled: y2.value,
      isDateUnavailable: v2.value,
      calendarLabel: m2
    }), {
      isInvalid: xe,
      isSelected: ae,
      highlightedRange: we,
      isSelectionStart: De,
      isSelectionEnd: $e
    } = pc({
      start: L,
      end: j2,
      isDateDisabled: q2,
      isDateUnavailable: F,
      focusedValue: M
    });
    return watch(V2, (fe) => {
      fe.start && fe.end && (L.value && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(L.value, fe.start) && (L.value = fe.start.copy()), j2.value && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(j2.value, fe.end) && (j2.value = fe.end.copy()));
    }), watch(L, (fe) => {
      fe && !$14e0f24ef4ac5c92$export$91b62ebf2ba703ee(fe, J2.value) && W2(fe), n("update:startValue", fe);
    }), watch([L, j2], ([fe, Me]) => {
      const Ae = V2.value;
      if (!(Ae && Ae.start && Ae.end && fe && Me && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(Ae.start, fe) && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(Ae.end, Me)))
        if (fe && Me) {
          if (Ae.start && Ae.end && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(Ae.start, fe) && $14e0f24ef4ac5c92$export$91b62ebf2ba703ee(Ae.end, Me))
            return;
          R(Me, fe) ? V2.value = {
            start: Me.copy(),
            end: fe.copy()
          } : V2.value = {
            start: fe.copy(),
            end: Me.copy()
          };
        } else
          Ae.start && Ae.end && (V2.value = {
            start: void 0,
            end: void 0
          });
    }), mc({
      isDateUnavailable: F,
      startValue: L,
      endValue: j2,
      formatter: ce,
      modelValue: V2,
      placeholder: J2,
      disabled: l,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: s,
      preventDeselect: f,
      fullCalendarLabel: X2,
      headingValue: N,
      isInvalid: xe,
      isDateDisabled: q2,
      highlightedRange: we,
      focusedValue: M,
      lastPressedDateValue: R2,
      isSelected: ae,
      isSelectionEnd: $e,
      isSelectionStart: De,
      isNextButtonDisabled: Z,
      isPrevButtonDisabled: U,
      isOutsideVisibleView: de,
      nextPage: H2,
      prevPage: oe,
      parentElement: E,
      onPlaceholderChange: W2,
      locale: D2,
      dir: $2
    }), onMounted(() => {
      r.value && nl(E.value);
    }), (fe, Me) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: S,
      as: fe.as,
      "as-child": fe.asChild,
      role: "application",
      "aria-label": unref(X2),
      "data-readonly": unref(s) ? "" : void 0,
      "data-disabled": unref(l) ? "" : void 0,
      "data-invalid": unref(xe) ? "" : void 0,
      dir: unref($2)
    }, {
      default: withCtx(() => [
        createBaseVNode("div", fc, [
          createBaseVNode("div", vc, toDisplayString(unref(X2)), 1)
        ]),
        renderSlot(fe.$slots, "default", {
          date: unref(J2),
          grid: unref(Y),
          weekDays: unref(te),
          weekStartsOn: unref(u),
          locale: unref(D2),
          fixedWeeks: unref(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
});
var yc = defineComponent({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gc = defineComponent({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Wt();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      "data-disabled": unref(e).disabled.value ? "" : void 0
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {
          headingValue: unref(e).headingValue.value
        }, () => [
          createTextVNode(toDisplayString(unref(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
});
var bc = defineComponent({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a2) {
    const t = a2, e = Wt();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": unref(e).readonly ? true : void 0,
      "aria-disabled": unref(e).disabled ? true : void 0,
      "data-readonly": unref(e).readonly ? "" : void 0,
      "data-disabled": unref(e).disabled ? "" : void 0
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
});
var Cc = defineComponent({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a2) {
    const t = Wt();
    return (e, n) => {
      var l, s;
      return openBlock(), createBlock(unref(A), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": unref(t).isSelected(e.date) ? true : void 0,
        "aria-disabled": unref(t).isDateDisabled(e.date) || ((s = (l = unref(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": unref(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
});
var wc = defineComponent({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _c = defineComponent({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Wt();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      "aria-label": "Next page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": unref(e).isNextButtonDisabled(t.step) || void 0,
      "data-disabled": unref(e).isNextButtonDisabled(t.step) || void 0,
      disabled: unref(e).isNextButtonDisabled(t.step),
      onClick: l[0] || (l[0] = (s) => unref(e).nextPage(t.step))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
});
var xc = defineComponent({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Wt();
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      "aria-label": "Previous page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": unref(e).isPrevButtonDisabled(t.step) || void 0,
      "data-disabled": unref(e).isPrevButtonDisabled(t.step) || void 0,
      disabled: unref(e).isPrevButtonDisabled(t.step),
      onClick: l[0] || (l[0] = (s) => unref(e).prevPage(t.step))
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
});
var Sc = defineComponent({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), mergeProps(t, { "aria-hidden": "true" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pc = defineComponent({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ec = defineComponent({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Dc = defineComponent({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Wt(), n = pt(), { primitiveElement: l, currentElement: s } = qe(), r = computed(() => e.formatter.custom($(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = computed(() => e.isDateDisabled(t.day)), u = computed(() => {
      var $2;
      return ($2 = e.isDateUnavailable) == null ? void 0 : $2.call(e, t.day);
    }), d = computed(() => e.isSelected(t.day)), c = computed(() => e.isSelectionStart(t.day)), p = computed(() => e.isSelectionEnd(t.day)), f = computed(() => e.highlightedRange.value ? V(t.day, e.highlightedRange.value.start, e.highlightedRange.value.end) : false), v2 = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", y2 = computed(() => $14e0f24ef4ac5c92$export$629b0a497aa65267(t.day, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())), m2 = computed(() => !$14e0f24ef4ac5c92$export$a18c89cbd24170ff(t.day, t.month)), x = computed(
      () => e.isOutsideVisibleView(t.day)
    ), P2 = computed(() => $14e0f24ef4ac5c92$export$ea39ec197993aef0(t.day, e.placeholder.value));
    function D2($2) {
      var R2;
      if (!e.readonly.value && !(e.isDateDisabled($2) || (R2 = e.isDateUnavailable) != null && R2.call(e, $2))) {
        if (e.lastPressedDateValue.value = $2.copy(), e.startValue.value && e.highlightedRange.value === null) {
          if ($14e0f24ef4ac5c92$export$ea39ec197993aef0($2, e.startValue.value) && !e.preventDeselect.value && !e.endValue.value) {
            e.startValue.value = void 0, e.onPlaceholderChange($2);
            return;
          } else if (!e.endValue.value) {
            e.lastPressedDateValue.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(e.lastPressedDateValue.value, $2) && (e.startValue.value = $2.copy());
            return;
          }
        }
        if (e.startValue.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(e.startValue.value, $2) && !e.preventDeselect.value && !e.endValue.value) {
          e.startValue.value = void 0, e.onPlaceholderChange($2);
          return;
        }
        e.startValue.value ? e.endValue.value ? e.endValue.value && e.startValue.value && (e.endValue.value = void 0, e.startValue.value = $2.copy()) : e.endValue.value = $2.copy() : e.startValue.value = $2.copy();
      }
    }
    function g($2) {
      var M;
      const R2 = X($2.target.getAttribute("data-value"), e.placeholder.value);
      e.isDateDisabled(R2) || (M = e.isDateUnavailable) != null && M.call(e, R2) || D2(R2);
    }
    function S($2) {
      var M;
      const R2 = X($2.target.getAttribute("data-value"), e.placeholder.value);
      e.isDateDisabled(R2) || (M = e.isDateUnavailable) != null && M.call(e, R2) || (e.focusedValue.value = R2.copy());
    }
    function E($2) {
      const R2 = $2.target;
      $2.preventDefault(), $2.stopPropagation();
      const M = e.parentElement.value, V2 = M ? Array.from(M.querySelectorAll(v2)) : [];
      let L = V2.indexOf(s.value);
      const j2 = 7, J2 = e.dir.value === "rtl" ? -1 : 1;
      switch ($2.code) {
        case n.ARROW_RIGHT:
          L += J2;
          break;
        case n.ARROW_LEFT:
          L -= J2;
          break;
        case n.ARROW_UP:
          L -= j2;
          break;
        case n.ARROW_DOWN:
          L += j2;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          D2(X(R2.getAttribute("data-value"), e.placeholder.value));
          return;
        default:
          return;
      }
      if (L >= 0 && L < V2.length) {
        V2[L].focus();
        return;
      }
      if (L < 0) {
        if (e.isPrevButtonDisabled("month"))
          return;
        e.prevPage(), nextTick(() => {
          const W2 = M ? Array.from(M.querySelectorAll(v2)) : [];
          W2[W2.length - Math.abs(L)].focus();
        });
        return;
      }
      if (L >= V2.length) {
        if (e.isNextButtonDisabled("month"))
          return;
        e.nextPage(), nextTick(() => {
          (M ? Array.from(M.querySelectorAll(v2)) : [])[L - V2.length].focus();
        });
      }
    }
    return ($2, R2) => (openBlock(), createBlock(unref(A), mergeProps({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": d.value ? true : void 0,
      "aria-disabled": m2.value || i.value || u.value ? true : void 0,
      "data-highlighted": f.value ? "" : void 0,
      "data-selection-start": c.value ? true : void 0,
      "data-selection-end": p.value ? true : void 0,
      "data-selected": d.value ? true : void 0,
      "data-outside-visible-view": x.value ? "" : void 0,
      "data-value": $2.day.toString(),
      "data-disabled": i.value || m2.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": y2.value ? "" : void 0,
      "data-outside-month": m2.value ? "" : void 0,
      "data-focused": P2.value ? "" : void 0,
      tabindex: P2.value ? 0 : m2.value || i.value ? void 0 : -1,
      onClick: g,
      onFocusin: S,
      onMouseenter: S,
      onKeydown: withKeys(E, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: withCtx(() => [
        renderSlot($2.$slots, "default", {}, () => [
          createTextVNode(toDisplayString($2.day.day.toLocaleString(unref(e).locale.value)), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
});
var [ze, $c] = Q("ScrollAreaRoot");
var Ch = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: {},
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e, currentElement: n } = T(), l = ref(0), s = ref(0), r = ref(), i = ref(), u = ref(), d = ref(), c = ref(false), p = ref(false), { type: f, dir: v2, scrollHideDelay: y2 } = toRefs(t), m2 = be(v2);
    return $c({
      type: f,
      dir: m2,
      scrollHideDelay: y2,
      scrollArea: n,
      viewport: r,
      onViewportChange: (x) => {
        r.value = x || void 0;
      },
      content: i,
      onContentChange: (x) => {
        i.value = x;
      },
      scrollbarX: u,
      scrollbarXEnabled: c,
      scrollbarY: d,
      scrollbarYEnabled: p,
      onScrollbarXChange: (x) => {
        u.value = x || void 0;
      },
      onScrollbarYChange: (x) => {
        d.value = x || void 0;
      },
      onScrollbarXEnabledChange: (x) => {
        c.value = x;
      },
      onScrollbarYEnabledChange: (x) => {
        p.value = x;
      },
      onCornerWidthChange: (x) => {
        l.value = x;
      },
      onCornerHeightChange: (x) => {
        s.value = x;
      }
    }), (x, P2) => (openBlock(), createBlock(unref(A), {
      ref: unref(e),
      "as-child": t.asChild,
      as: x.as,
      dir: unref(m2),
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        "--radix-scroll-area-corner-width": `${l.value}px`,
        "--radix-scroll-area-corner-height": `${s.value}px`
      })
    }, {
      default: withCtx(() => [
        renderSlot(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
});
var wh = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2, { expose: t }) {
    const e = a2, n = ze(), l = ref();
    onMounted(() => {
      n.onViewportChange(l.value), n.onContentChange(r.value);
    }), t({
      viewportElement: l
    });
    const { forwardRef: s, currentElement: r } = T();
    return (i, u) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", mergeProps({
        ref_key: "viewportElement",
        ref: l,
        "data-radix-scroll-area-viewport": "",
        style: {
          /**
           * We don't support `visible` because the intention is to have at least one scrollbar
           * if this component is used and `visible` will behave like `auto` in that case
           * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
           *
           * We don't handle `auto` because the intention is for the native implementation
           * to be hidden if using this component. We just want to ensure the node is scrollable
           * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
           * the browser from having to work out whether to render native scrollbars or not,
           * we tell it to with the intention of hiding them in CSS.
           */
          overflowX: unref(n).scrollbarXEnabled.value ? "scroll" : "hidden",
          overflowY: unref(n).scrollbarYEnabled.value ? "scroll" : "hidden"
        }
      }, i.$attrs, { tabindex: 0 }), [
        createVNode(unref(A), {
          ref: unref(s),
          style: { minWidth: "100%", display: "table" },
          "as-child": e.asChild,
          as: i.as
        }, {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ], 16),
      createVNode(unref(A), {
        as: "style",
        nonce: i.nonce
      }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
function Bc(a2, [t, e]) {
  return Math.min(e, Math.max(t, a2));
}
function Zl(a2, t) {
  return (e) => {
    if (a2[0] === a2[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a2[1] - a2[0]);
    return t[0] + n * (e - a2[0]);
  };
}
function za(a2) {
  const t = Jl(a2.viewport, a2.content), e = a2.scrollbar.paddingStart + a2.scrollbar.paddingEnd, n = (a2.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function Jl(a2, t) {
  const e = a2 / t;
  return Number.isNaN(e) ? 0 : e;
}
function Tc(a2, t = () => {
}) {
  let e = { left: a2.scrollLeft, top: a2.scrollTop }, n = 0;
  return function l() {
    const s = { left: a2.scrollLeft, top: a2.scrollTop }, r = e.left !== s.left, i = e.top !== s.top;
    (r || i) && t(), e = s, n = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(n);
}
function Io(a2, t, e = "ltr") {
  const n = za(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - l, r = t.content - t.viewport, i = s - n, u = e === "ltr" ? [0, r] : [r * -1, 0], d = Bc(
    a2,
    u
  );
  return Zl([0, r], [0, i])(d);
}
function va(a2) {
  return a2 ? Number.parseInt(a2, 10) : 0;
}
function Ic(a2, t, e, n = "ltr") {
  const l = za(e), s = l / 2, r = t || s, i = l - r, u = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, c = e.content - e.viewport, p = n === "ltr" ? [0, c] : [c * -1, 0];
  return Zl(
    [u, d],
    p
  )(a2);
}
function Ro(a2, t) {
  return a2 > 0 && a2 < t;
}
var Ql = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = ze(), s = Ka(), r = Ha(), { forwardRef: i, currentElement: u } = T(), d = ref(""), c = ref();
    function p(P2) {
      var D2, g;
      if (c.value) {
        const S = P2.clientX - ((D2 = c.value) == null ? void 0 : D2.left), E = P2.clientY - ((g = c.value) == null ? void 0 : g.top);
        n("onDragScroll", { x: S, y: E });
      }
    }
    function f(P2) {
      P2.button === 0 && (P2.target.setPointerCapture(P2.pointerId), c.value = u.value.getBoundingClientRect(), d.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", l.viewport && (l.viewport.value.style.scrollBehavior = "auto"), p(P2));
    }
    function v2(P2) {
      p(P2);
    }
    function y2(P2) {
      const D2 = P2.target;
      D2.hasPointerCapture(P2.pointerId) && D2.releasePointerCapture(P2.pointerId), document.body.style.webkitUserSelect = d.value, l.viewport && (l.viewport.value.style.scrollBehavior = ""), c.value = void 0;
    }
    function m2(P2) {
      var E;
      const D2 = P2.target, g = (E = u.value) == null ? void 0 : E.contains(D2), S = s.sizes.value.content - s.sizes.value.viewport;
      g && s.handleWheelScroll(P2, S);
    }
    onMounted(() => {
      document.addEventListener("wheel", m2, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", m2);
    });
    function x() {
      var P2, D2, g, S, E;
      u.value && (e.isHorizontal ? s.handleSizeChange({
        content: ((P2 = l.viewport.value) == null ? void 0 : P2.scrollWidth) ?? 0,
        viewport: ((D2 = l.viewport.value) == null ? void 0 : D2.offsetWidth) ?? 0,
        scrollbar: {
          size: u.value.clientWidth ?? 0,
          paddingStart: va(getComputedStyle(u.value).paddingLeft),
          paddingEnd: va(getComputedStyle(u.value).paddingRight)
        }
      }) : s.handleSizeChange({
        content: ((g = l.viewport.value) == null ? void 0 : g.scrollHeight) ?? 0,
        viewport: ((S = l.viewport.value) == null ? void 0 : S.offsetHeight) ?? 0,
        scrollbar: {
          size: ((E = u.value) == null ? void 0 : E.clientHeight) ?? 0,
          paddingStart: va(getComputedStyle(u.value).paddingLeft),
          paddingEnd: va(getComputedStyle(u.value).paddingRight)
        }
      }));
    }
    return Ge(u, x), Ge(l.content, x), (P2, D2) => (openBlock(), createBlock(unref(A), {
      ref: unref(i),
      style: { position: "absolute" },
      "data-scrollbarimpl": "",
      as: unref(r).as.value,
      "as-child": unref(r).asChild.value,
      onPointerdown: f,
      onPointermove: v2,
      onPointerup: y2
    }, {
      default: withCtx(() => [
        renderSlot(P2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var Rc = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(a2) {
    const t = ze(), e = Ka(), { forwardRef: n, currentElement: l } = T();
    onMounted(() => {
      l.value && t.onScrollbarXChange(l.value);
    });
    const s = computed(() => e.sizes.value);
    return (r, i) => (openBlock(), createBlock(Ql, {
      ref: unref(n),
      "is-horizontal": true,
      "data-orientation": "horizontal",
      style: normalizeStyle({
        bottom: 0,
        left: unref(t).dir.value === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: unref(t).dir.value === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": s.value ? `${unref(za)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => unref(e).onDragScroll(u.x))
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
});
var Ac = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(a2) {
    const t = ze(), e = Ka(), { forwardRef: n, currentElement: l } = T();
    onMounted(() => {
      l.value && t.onScrollbarYChange(l.value);
    });
    const s = computed(() => e.sizes.value);
    return (r, i) => (openBlock(), createBlock(Ql, {
      ref: unref(n),
      "is-horizontal": false,
      "data-orientation": "vertical",
      style: normalizeStyle({
        top: 0,
        right: unref(t).dir.value === "ltr" ? 0 : void 0,
        left: unref(t).dir.value === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": s.value ? `${unref(za)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => unref(e).onDragScroll(u.y))
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
});
var [Ka, Oc] = Q("ScrollAreaScrollbarVisible");
var fo = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(a2) {
    const t = ze(), e = Ha(), { forwardRef: n } = T(), l = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), s = computed(() => {
      const P2 = Jl(l.value.viewport, l.value.content);
      return P2 > 0 && P2 < 1;
    }), r = ref(), i = ref(0);
    function u(P2, D2) {
      if (v2.value) {
        const g = t.viewport.value.scrollLeft + P2.deltaY;
        t.viewport.value.scrollLeft = g, Ro(g, D2) && P2.preventDefault();
      } else {
        const g = t.viewport.value.scrollTop + P2.deltaY;
        t.viewport.value.scrollTop = g, Ro(g, D2) && P2.preventDefault();
      }
    }
    function d(P2, D2) {
      v2.value ? i.value = D2.x : i.value = D2.y;
    }
    function c(P2) {
      i.value = 0;
    }
    function p(P2) {
      l.value = P2;
    }
    function f(P2, D2) {
      return Ic(
        P2,
        i.value,
        l.value,
        D2
      );
    }
    const v2 = computed(
      () => e.isHorizontal.value
    );
    function y2(P2) {
      v2.value ? t.viewport.value.scrollLeft = f(
        P2,
        t.dir.value
      ) : t.viewport.value.scrollTop = f(P2);
    }
    function m2() {
      if (v2.value) {
        if (t.viewport.value && r.value) {
          const P2 = t.viewport.value.scrollLeft, D2 = Io(
            P2,
            l.value,
            t.dir.value
          );
          r.value.style.transform = `translate3d(${D2}px, 0, 0)`;
        }
      } else if (t.viewport.value && r.value) {
        const P2 = t.viewport.value.scrollTop, D2 = Io(P2, l.value);
        r.value.style.transform = `translate3d(0, ${D2}px, 0)`;
      }
    }
    function x(P2) {
      r.value = P2;
    }
    return Oc({
      sizes: l,
      hasThumb: s,
      handleWheelScroll: u,
      handleThumbDown: d,
      handleThumbUp: c,
      handleSizeChange: p,
      onThumbPositionChange: m2,
      onThumbChange: x,
      onDragScroll: y2
    }), (P2, D2) => v2.value ? (openBlock(), createBlock(Rc, mergeProps({ key: 0 }, P2.$attrs, { ref: unref(n) }), {
      default: withCtx(() => [
        renderSlot(P2.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Ac, mergeProps({ key: 1 }, P2.$attrs, { ref: unref(n) }), {
      default: withCtx(() => [
        renderSlot(P2.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var es = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = ze(), e = Ha(), { forwardRef: n } = T(), l = ref(false), s = Bn(() => {
      if (t.viewport.value) {
        const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, i = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
        l.value = e.isHorizontal.value ? r : i;
      }
    }, 10);
    return onMounted(() => s()), Ge(t.viewport, s), Ge(t.content, s), (r, i) => (openBlock(), createBlock(unref(Ee), {
      present: r.forceMount || l.value
    }, {
      default: withCtx(() => [
        createVNode(fo, mergeProps(r.$attrs, {
          ref: unref(n),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var kc = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaScrollbarHover",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = ze(), { forwardRef: e } = T();
    let n;
    const l = ref(false);
    function s() {
      window.clearTimeout(n), l.value = true;
    }
    function r() {
      n = window.setTimeout(() => {
        l.value = false;
      }, t.scrollHideDelay.value);
    }
    return onMounted(() => {
      const i = t.scrollArea.value;
      i && (i.addEventListener("pointerenter", s), i.addEventListener("pointerleave", r));
    }), onUnmounted(() => {
      const i = t.scrollArea.value;
      i && (window.clearTimeout(n), i.removeEventListener("pointerenter", s), i.removeEventListener("pointerleave", r));
    }), (i, u) => (openBlock(), createBlock(unref(Ee), {
      present: i.forceMount || l.value
    }, {
      default: withCtx(() => [
        createVNode(es, mergeProps(i.$attrs, {
          ref: unref(e),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Mc = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = ze(), e = Ha(), { forwardRef: n } = T(), { state: l, dispatch: s } = cl("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    watchEffect((i) => {
      if (l.value === "idle") {
        const u = window.setTimeout(
          () => s("HIDE"),
          t.scrollHideDelay.value
        );
        i(() => {
          window.clearTimeout(u);
        });
      }
    });
    const r = Bn(() => s("SCROLL_END"), 100);
    return watchEffect((i) => {
      const u = t.viewport.value, d = e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (u) {
        let c = u[d];
        const p = () => {
          const f = u[d];
          c !== f && (s("SCROLL"), r()), c = f;
        };
        u.addEventListener("scroll", p), i(() => {
          u.removeEventListener("scroll", p);
        });
      }
    }), (i, u) => (openBlock(), createBlock(unref(Ee), {
      present: i.forceMount || unref(l) !== "hidden"
    }, {
      default: withCtx(() => [
        createVNode(fo, mergeProps(i.$attrs, { ref: unref(n) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var [Ha, Vc] = Q("ScrollAreaScrollbar");
var _h = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T(), n = ze(), l = computed(() => t.orientation === "horizontal");
    watch(
      l,
      () => {
        l.value ? n.onScrollbarXEnabledChange(true) : n.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      n.onScrollbarXEnabledChange(false), n.onScrollbarYEnabledChange(false);
    });
    const { orientation: s, forceMount: r, asChild: i, as: u } = toRefs(t);
    return Vc({
      orientation: s,
      forceMount: r,
      isHorizontal: l,
      as: u,
      asChild: i
    }), (d, c) => unref(n).type.value === "hover" ? (openBlock(), createBlock(kc, mergeProps({ key: 0 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(r)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(n).type.value === "scroll" ? (openBlock(), createBlock(Mc, mergeProps({ key: 1 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(r)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(n).type.value === "auto" ? (openBlock(), createBlock(es, mergeProps({ key: 2 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(r)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(n).type.value === "always" ? (openBlock(), createBlock(fo, mergeProps({ key: 3 }, d.$attrs, {
      ref: unref(e),
      "data-state": "visible"
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var xh = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = ze(), n = Ka();
    function l(f) {
      const y2 = f.target.getBoundingClientRect(), m2 = f.clientX - y2.left, x = f.clientY - y2.top;
      n.handleThumbDown(f, { x: m2, y: x });
    }
    function s(f) {
      n.handleThumbUp(f);
    }
    const { forwardRef: r, currentElement: i } = T(), u = ref(), d = computed(() => e.viewport.value);
    function c() {
      if (!u.value) {
        const f = Tc(
          d.value,
          n.onThumbPositionChange
        );
        u.value = f, n.onThumbPositionChange();
      }
    }
    const p = computed(() => n.sizes.value);
    return Tr(p, () => {
      n.onThumbChange(i.value), d.value && (n.onThumbPositionChange(), d.value.addEventListener("scroll", c));
    }), onUnmounted(() => {
      var f;
      d.value.removeEventListener("scroll", c), (f = e.viewport.value) == null || f.removeEventListener("scroll", c);
    }), (f, v2) => (openBlock(), createBlock(unref(A), {
      ref: unref(r),
      "data-state": unref(n).hasThumb ? "visible" : "hidden",
      style: normalizeStyle({
        width: "var(--radix-scroll-area-thumb-width)",
        height: "var(--radix-scroll-area-thumb-height)"
      }),
      "as-child": t.asChild,
      as: f.as,
      onPointerdown: l,
      onPointerup: s
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-state", "style", "as-child", "as"]));
  }
});
var Fc = defineComponent({
  __name: "ScrollAreaCornerImpl",
  setup(a2) {
    const t = ze(), e = ref(0), n = ref(0), l = computed(() => !!e.value && !!n.value);
    function s() {
      var u;
      const i = ((u = t.scrollbarX.value) == null ? void 0 : u.offsetHeight) || 0;
      t.onCornerHeightChange(i), n.value = i;
    }
    function r() {
      var u;
      const i = ((u = t.scrollbarY.value) == null ? void 0 : u.offsetWidth) || 0;
      t.onCornerWidthChange(i), e.value = i;
    }
    return Ge(t.scrollbarX.value, s), Ge(t.scrollbarY.value, r), watch(() => t.scrollbarX.value, s), watch(() => t.scrollbarY.value, r), (i, u) => {
      var d;
      return l.value ? (openBlock(), createBlock(unref(A), mergeProps({
        key: 0,
        style: {
          width: `${e.value}px`,
          height: `${n.value}px`,
          position: "absolute",
          right: unref(t).dir.value === "ltr" ? 0 : void 0,
          left: unref(t).dir.value === "rtl" ? 0 : void 0,
          bottom: 0
        }
      }, (d = i.$parent) == null ? void 0 : d.$props), {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])) : createCommentVNode("", true);
    };
  }
});
var Sh = defineComponent({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T(), n = ze(), l = computed(
      () => !!n.scrollbarX.value && !!n.scrollbarY.value
    ), s = computed(
      () => n.type.value !== "scroll" && l.value
    );
    return (r, i) => s.value ? (openBlock(), createBlock(Fc, mergeProps({ key: 0 }, t, { ref: unref(e) }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Lc = ["default-value"];
var Nc = defineComponent({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(a2) {
    const t = a2, { value: e } = toRefs(t);
    Fr(e);
    const n = ref();
    return (l, s) => (openBlock(), createBlock(unref(Nt), { "as-child": "" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => isRef(e) ? e.value = r : null),
          "default-value": unref(e)
        }), [
          renderSlot(l.$slots, "default")
        ], 16, Lc), [
          [vModelSelect, unref(e)]
        ])
      ]),
      _: 3
    }));
  }
});
var zc = {
  key: 0,
  value: ""
};
var [ht, ts] = Q("SelectRoot");
var [Kc, Hc] = Q("SelectRoot");
var Ph = defineComponent({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: void 0 },
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), s = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = ref(), i = ref(), u = ref({
      x: 0,
      y: 0
    }), d = ref(false), { required: c, disabled: p, dir: f } = toRefs(e), v2 = be(f);
    ts({
      triggerElement: r,
      onTriggerChange: (P2) => {
        r.value = P2;
      },
      valueElement: i,
      onValueElementChange: (P2) => {
        i.value = P2;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (P2) => {
        d.value = P2;
      },
      contentId: "",
      modelValue: l,
      onValueChange: (P2) => {
        l.value = P2;
      },
      open: s,
      required: c,
      onOpenChange: (P2) => {
        s.value = P2;
      },
      dir: v2,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const y2 = ct(r), m2 = ref(/* @__PURE__ */ new Set()), x = computed(() => Array.from(m2.value).map((P2) => {
      var D2;
      return (D2 = P2.props) == null ? void 0 : D2.value;
    }).join(";"));
    return Hc({
      onNativeOptionAdd: (P2) => {
        m2.value.add(P2);
      },
      onNativeOptionRemove: (P2) => {
        m2.value.delete(P2);
      }
    }), (P2, D2) => (openBlock(), createBlock(unref(xt), null, {
      default: withCtx(() => [
        renderSlot(P2.$slots, "default"),
        unref(y2) ? (openBlock(), createBlock(Nc, mergeProps({ key: x.value }, P2.$attrs, {
          "aria-hidden": "",
          tabindex: "-1",
          required: unref(c),
          name: P2.name,
          autocomplete: P2.autocomplete,
          disabled: unref(p),
          value: unref(l),
          onChange: D2[0] || (D2[0] = (g) => l.value = g.target.value)
        }), {
          default: withCtx(() => [
            unref(l) === void 0 ? (openBlock(), createElementBlock("option", zc)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(m2.value), (g) => (openBlock(), createBlock(resolveDynamicComponent(g), mergeProps(g.props, {
              key: g.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var Wc = [" ", "Enter", "ArrowUp", "ArrowDown"];
var jc = [" ", "Enter"];
var Ye = 10;
function as(a2) {
  return a2 === "" || a2 === void 0;
}
var Eh = defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = ht(), n = computed(() => {
      var v2;
      return ((v2 = e.disabled) == null ? void 0 : v2.value) || t.disabled;
    }), { forwardRef: l, currentElement: s } = T();
    e.contentId || (e.contentId = me(void 0, "radix-vue-select-content")), onMounted(() => {
      e.triggerElement = s;
    });
    const { injectCollection: r } = Re(), i = r(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = Ta(i);
    function p() {
      n.value || (e.onOpenChange(true), c());
    }
    function f(v2) {
      p(), e.triggerPointerDownPosRef.value = {
        x: Math.round(v2.pageX),
        y: Math.round(v2.pageY)
      };
    }
    return (v2, y2) => (openBlock(), createBlock(unref(St), { "as-child": "" }, {
      default: withCtx(() => {
        var m2, x, P2, D2;
        return [
          createVNode(unref(A), {
            ref: unref(l),
            role: "combobox",
            type: v2.as === "button" ? "button" : void 0,
            "aria-controls": unref(e).contentId,
            "aria-expanded": unref(e).open.value || false,
            "aria-required": (m2 = unref(e).required) == null ? void 0 : m2.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (x = unref(e)) == null ? void 0 : x.dir.value,
            "data-state": (P2 = unref(e)) != null && P2.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": unref(as)((D2 = unref(e).modelValue) == null ? void 0 : D2.value) ? "" : void 0,
            "as-child": v2.asChild,
            as: v2.as,
            onClick: y2[0] || (y2[0] = (g) => {
              var S;
              (S = g == null ? void 0 : g.currentTarget) == null || S.focus();
            }),
            onPointerdown: y2[1] || (y2[1] = (g) => {
              if (g.pointerType === "touch")
                return g.preventDefault();
              const S = g.target;
              S.hasPointerCapture(g.pointerId) && S.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === false && (f(g), g.preventDefault());
            }),
            onPointerup: y2[2] || (y2[2] = withModifiers(
              (g) => {
                g.pointerType === "touch" && f(g);
              },
              ["prevent"]
            )),
            onKeydown: y2[3] || (y2[3] = (g) => {
              const S = unref(u) !== "";
              !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && S && g.key === " " || (unref(d)(g.key), unref(Wc).includes(g.key) && (p(), g.preventDefault()));
            })
          }, {
            default: withCtx(() => [
              renderSlot(v2.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
});
var Dh = defineComponent({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ft), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [vo, Uc] = Q("SelectItemAlignedPosition");
var Gc = defineComponent({
  inheritAttrs: false,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { injectCollection: l } = Re(), s = ht(), r = yt(), i = l(), u = ref(false), d = ref(true), c = ref(), { forwardRef: p, currentElement: f } = T(), { viewport: v2, selectedItem: y2, selectedItemText: m2, focusSelectedItem: x } = r;
    function P2() {
      if (s.triggerElement.value && s.valueElement.value && c.value && f.value && (v2 != null && v2.value) && (y2 != null && y2.value) && (m2 != null && m2.value)) {
        const S = s.triggerElement.value.getBoundingClientRect(), E = f.value.getBoundingClientRect(), $2 = s.valueElement.value.getBoundingClientRect(), R2 = m2.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const ae = R2.left - E.left, we = $2.left - ae, De = S.left - we, $e = S.width + De, fe = Math.max($e, E.width), Me = window.innerWidth - Ye, Ae = So(we, Ye, Me - fe);
          c.value.style.minWidth = `${$e}px`, c.value.style.left = `${Ae}px`;
        } else {
          const ae = E.right - R2.right, we = window.innerWidth - $2.right - ae, De = window.innerWidth - S.right - we, $e = S.width + De, fe = Math.max($e, E.width), Me = window.innerWidth - Ye, Ae = So(
            we,
            Ye,
            Me - fe
          );
          c.value.style.minWidth = `${$e}px`, c.value.style.right = `${Ae}px`;
        }
        const M = i.value, V2 = window.innerHeight - Ye * 2, O2 = v2.value.scrollHeight, L = window.getComputedStyle(f.value), j2 = Number.parseInt(
          L.borderTopWidth,
          10
        ), J2 = Number.parseInt(L.paddingTop, 10), W2 = Number.parseInt(
          L.borderBottomWidth,
          10
        ), X2 = Number.parseInt(
          L.paddingBottom,
          10
        ), N = j2 + J2 + O2 + X2 + W2, q2 = Math.min(
          y2.value.offsetHeight * 5,
          N
        ), F = window.getComputedStyle(v2.value), Z = Number.parseInt(F.paddingTop, 10), U = Number.parseInt(
          F.paddingBottom,
          10
        ), Y = S.top + S.height / 2 - Ye, te = V2 - Y, de = y2.value.offsetHeight / 2, H2 = y2.value.offsetTop + de, oe = j2 + J2 + H2, ce = N - oe;
        if (oe <= Y) {
          const ae = y2.value === M[M.length - 1];
          c.value.style.bottom = "0px";
          const we = f.value.clientHeight - v2.value.offsetTop - v2.value.offsetHeight, De = Math.max(
            te,
            de + (ae ? U : 0) + we + W2
          ), $e = oe + De;
          c.value.style.height = `${$e}px`;
        } else {
          const ae = y2.value === M[0];
          c.value.style.top = "0px";
          const De = Math.max(
            Y,
            j2 + v2.value.offsetTop + (ae ? Z : 0) + de
          ) + ce;
          c.value.style.height = `${De}px`, v2.value.scrollTop = oe - Y + v2.value.offsetTop;
        }
        c.value.style.margin = `${Ye}px 0`, c.value.style.minHeight = `${q2}px`, c.value.style.maxHeight = `${V2}px`, n("placed"), requestAnimationFrame(() => u.value = true);
      }
    }
    const D2 = ref("");
    onMounted(async () => {
      await nextTick(), P2(), f.value && (D2.value = window.getComputedStyle(f.value).zIndex);
    });
    function g(S) {
      S && d.value === true && (P2(), x == null || x(), d.value = false);
    }
    return Uc({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: g
    }), (S, E) => (openBlock(), createElementBlock("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: normalizeStyle({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D2.value
      })
    }, [
      createVNode(unref(A), mergeProps({
        ref: unref(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...S.$attrs, ...e }), {
        default: withCtx(() => [
          renderSlot(S.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])
    ], 4));
  }
});
var qc = defineComponent({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Ye },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const e = _t(a2);
    return (n, l) => (openBlock(), createBlock(unref(Ct), mergeProps(unref(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var jt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
};
var [yt, Yc] = Q("SelectContent");
var Xc = defineComponent({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    bodyLock: { type: Boolean, default: true },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = ht();
    On(), sa(e.bodyLock);
    const { createCollection: s } = Re(), r = ref();
    ra(r);
    const i = s(r), { search: u, handleTypeaheadSearch: d } = Ta(i), c = ref(), p = ref(), f = ref(), v2 = ref(false), y2 = ref(false);
    function m2() {
      p.value && r.value && mn([p.value, r.value]);
    }
    watch(v2, () => {
      m2();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: P2 } = l;
    watchEffect((E) => {
      if (!r.value)
        return;
      let $2 = { x: 0, y: 0 };
      const R2 = (V2) => {
        var O2, L;
        $2 = {
          x: Math.abs(
            Math.round(V2.pageX) - (((O2 = P2.value) == null ? void 0 : O2.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V2.pageY) - (((L = P2.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, M = (V2) => {
        var O2;
        V2.pointerType !== "touch" && ($2.x <= 10 && $2.y <= 10 ? V2.preventDefault() : (O2 = r.value) != null && O2.contains(V2.target) || x(false), document.removeEventListener("pointermove", R2), P2.value = null);
      };
      P2.value !== null && (document.addEventListener("pointermove", R2), document.addEventListener("pointerup", M, {
        capture: true,
        once: true
      })), E(() => {
        document.removeEventListener("pointermove", R2), document.removeEventListener("pointerup", M, {
          capture: true
        });
      });
    });
    function D2(E) {
      const $2 = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !$2 && E.key.length === 1 && d(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let R2 = i.value;
        if (["ArrowUp", "End"].includes(E.key) && (R2 = R2.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const M = E.target, V2 = R2.indexOf(M);
          R2 = R2.slice(V2 + 1);
        }
        setTimeout(() => mn(R2)), E.preventDefault();
      }
    }
    const g = computed(() => e.position === "popper" ? e : {}), S = _t(g.value);
    return Yc({
      content: r,
      viewport: c,
      onViewportChange: (E) => {
        c.value = E;
      },
      itemRefCallback: (E, $2, R2) => {
        var O2, L;
        const M = !y2.value && !R2;
        (((O2 = l.modelValue) == null ? void 0 : O2.value) !== void 0 && ((L = l.modelValue) == null ? void 0 : L.value) === $2 || M) && (p.value = E, M && (y2.value = true));
      },
      selectedItem: p,
      selectedItemText: f,
      onItemLeave: () => {
        var E;
        (E = r.value) == null || E.focus();
      },
      itemTextRefCallback: (E, $2, R2) => {
        var O2, L;
        const M = !y2.value && !R2;
        (((O2 = l.modelValue) == null ? void 0 : O2.value) !== void 0 && ((L = l.modelValue) == null ? void 0 : L.value) === $2 || M) && (f.value = E);
      },
      focusSelectedItem: m2,
      position: e.position,
      isPositioned: v2,
      searchRef: u
    }), (E, $2) => (openBlock(), createBlock(unref(Ra), {
      "as-child": "",
      onMountAutoFocus: $2[6] || ($2[6] = withModifiers(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: $2[7] || ($2[7] = (R2) => {
        var M;
        n("closeAutoFocus", R2), !R2.defaultPrevented && ((M = unref(l).triggerElement.value) == null || M.focus({ preventScroll: true }), R2.preventDefault());
      })
    }, {
      default: withCtx(() => [
        createVNode(unref(vt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: $2[2] || ($2[2] = withModifiers(() => {
          }, ["prevent"])),
          onDismiss: $2[3] || ($2[3] = (R2) => unref(l).onOpenChange(false)),
          onEscapeKeyDown: $2[4] || ($2[4] = (R2) => n("escapeKeyDown", R2)),
          onPointerDownOutside: $2[5] || ($2[5] = (R2) => n("pointerDownOutside", R2))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(
              E.position === "popper" ? qc : Gc
            ), mergeProps({ ...E.$attrs, ...unref(S) }, {
              id: unref(l).contentId,
              ref: (R2) => {
                r.value = unref(Be)(R2);
              },
              role: "listbox",
              "data-state": unref(l).open.value ? "open" : "closed",
              dir: unref(l).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: $2[0] || ($2[0] = withModifiers(() => {
              }, ["prevent"])),
              onPlaced: $2[1] || ($2[1] = (R2) => v2.value = true),
              onKeydown: D2
            }), {
              default: withCtx(() => [
                renderSlot(E.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "dir", "onKeydown"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
});
var Zc = defineComponent({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(a2) {
    return ts(a2.context), (e, n) => renderSlot(e.$slots, "default");
  }
});
var Jc = { key: 1 };
var $h = defineComponent({
  inheritAttrs: false,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(a2, { emit: t }) {
    const e = a2, l = _e(e, t), s = ht(), r = ref();
    onMounted(() => {
      r.value = new DocumentFragment();
    });
    const i = ref(), u = computed(() => e.forceMount || s.open.value);
    return (d, c) => {
      var p;
      return u.value ? (openBlock(), createBlock(unref(Ee), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: true
      }, {
        default: withCtx(() => [
          createVNode(Xc, normalizeProps(guardReactiveProps({ ...unref(l), ...d.$attrs })), {
            default: withCtx(() => [
              renderSlot(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((p = i.value) != null && p.present) && r.value ? (openBlock(), createElementBlock("div", Jc, [
        (openBlock(), createBlock(Teleport, { to: r.value }, [
          createVNode(Zc, { context: unref(s) }, {
            default: withCtx(() => [
              renderSlot(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : createCommentVNode("", true);
    };
  }
});
var Bh = defineComponent({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2, e = ht(), n = yt();
    return (l, s) => unref(e).open.value && unref(n).position === "popper" ? (openBlock(), createBlock(unref(Lt), normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Th = defineComponent({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(A), mergeProps({ "aria-hidden": "" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [ns, Qc] = Q("SelectItem");
var Ih = defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { disabled: e } = toRefs(t), n = ht(), l = yt(jt), { forwardRef: s, currentElement: r } = T(), i = computed(() => {
      var m2;
      return ((m2 = n.modelValue) == null ? void 0 : m2.value) === t.value;
    }), u = ref(false), d = ref(t.textValue ?? ""), c = me(void 0, "radix-vue-select-item-text");
    async function p(m2) {
      await nextTick(), !(m2 != null && m2.defaultPrevented) && (e.value || (n.onValueChange(t.value), n.onOpenChange(false)));
    }
    async function f(m2) {
      var x;
      await nextTick(), !m2.defaultPrevented && (e.value ? (x = l.onItemLeave) == null || x.call(l) : m2.currentTarget.focus({ preventScroll: true }));
    }
    async function v2(m2) {
      var x;
      await nextTick(), !m2.defaultPrevented && m2.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l));
    }
    async function y2(m2) {
      var P2;
      await nextTick(), !(m2.defaultPrevented || ((P2 = l.searchRef) == null ? void 0 : P2.value) !== "" && m2.key === " ") && (jc.includes(m2.key) && p(), m2.key === " " && m2.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return onMounted(() => {
      r.value && l.itemRefCallback(
        r.value,
        t.value,
        t.disabled
      );
    }), Qc({
      value: t.value,
      disabled: e,
      textId: c,
      isSelected: i,
      onItemTextChange: (m2) => {
        d.value = ((d.value || (m2 == null ? void 0 : m2.textContent)) ?? "").trim();
      }
    }), (m2, x) => (openBlock(), createBlock(unref(A), {
      ref: unref(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": unref(c),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value && u.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": unref(e) || void 0,
      "data-disabled": unref(e) ? "" : void 0,
      tabindex: unref(e) ? void 0 : -1,
      as: m2.as,
      "as-child": m2.asChild,
      onFocus: x[0] || (x[0] = (P2) => u.value = true),
      onBlur: x[1] || (x[1] = (P2) => u.value = false),
      onPointerup: p,
      onPointerdown: x[2] || (x[2] = (P2) => {
        P2.currentTarget.focus({ preventScroll: true });
      }),
      onTouchend: x[3] || (x[3] = withModifiers(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: v2,
      onKeydown: y2
    }, {
      default: withCtx(() => [
        renderSlot(m2.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
});
var Rh = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = ns();
    return (n, l) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(A), mergeProps({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var [ep, tp] = Q("SelectGroup");
var Ah = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = me(void 0, "radix-vue-select-group");
    return tp({ id: e }), (n, l) => (openBlock(), createBlock(unref(A), mergeProps({ role: "group" }, t, { "aria-labelledby": unref(e) }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
});
var Oh = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = ep({ id: "" });
    return (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var kh = defineComponent({
  inheritAttrs: false,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = ht(), n = yt(jt), l = Kc(), s = ns(), { forwardRef: r, currentElement: i } = T(), u = computed(() => {
      var d;
      return h("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        innerHTML: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return onMounted(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), l.onNativeOptionAdd(u.value));
    }), onBeforeUnmount(() => {
      l.onNativeOptionRemove(u.value);
    }), (d, c) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(A), mergeProps({
        id: unref(s).textId,
        ref: unref(r)
      }, { ...t, ...d.$attrs }), {
        default: withCtx(() => [
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      unref(s).isSelected.value && unref(e).valueElement.value && !unref(e).valueElementHasChildren.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: unref(e).valueElement.value
      }, [
        renderSlot(d.$slots, "default")
      ], 8, ["to"])) : createCommentVNode("", true)
    ], 64));
  }
});
var Mh = defineComponent({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = yt(jt), n = e.position === "item-aligned" ? vo() : void 0, { forwardRef: l, currentElement: s } = T();
    onMounted(() => {
      e == null || e.onViewportChange(s.value);
    });
    const r = ref(0);
    function i(u) {
      const d = u.currentTarget, { shouldExpandOnScrollRef: c, contentWrapper: p } = n ?? {};
      if (c != null && c.value && (p != null && p.value)) {
        const f = Math.abs(r.value - d.scrollTop);
        if (f > 0) {
          const v2 = window.innerHeight - Ye * 2, y2 = Number.parseFloat(
            p.value.style.minHeight
          ), m2 = Number.parseFloat(p.value.style.height), x = Math.max(y2, m2);
          if (x < v2) {
            const P2 = x + f, D2 = Math.min(v2, P2), g = P2 - D2;
            p.value.style.height = `${D2}px`, p.value.style.bottom === "0px" && (d.scrollTop = g > 0 ? g : 0, p.value.style.justifyContent = "flex-end");
          }
        }
      }
      r.value = d.scrollTop;
    }
    return (u, d) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(A), mergeProps({
        ref: unref(l),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...u.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: i
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      createVNode(unref(A), {
        as: "style",
        nonce: u.nonce
      }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
var os = defineComponent({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(a2, { emit: t }) {
    const e = t, { injectCollection: n } = Re(), l = n(), s = yt(jt), r = ref(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    watchEffect(() => {
      const c = l.value.find(
        (p) => p === document.activeElement
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function u() {
      r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    function d() {
      var c;
      (c = s.onItemLeave) == null || c.call(s), r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    return onBeforeUnmount(() => i()), (c, p) => {
      var f;
      return openBlock(), createBlock(unref(A), mergeProps({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (f = c.$parent) == null ? void 0 : f.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
var Vh = defineComponent({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = yt(jt), e = t.position === "item-aligned" ? vo() : void 0, { forwardRef: n, currentElement: l } = T(), s = ref(false);
    return watchEffect((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), r(() => c.removeEventListener("scroll", d));
      }
    }), watch(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (openBlock(), createBlock(os, {
      key: 0,
      ref: unref(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = unref(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : createCommentVNode("", true);
  }
});
var Fh = defineComponent({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = yt(jt), e = t.position === "item-aligned" ? vo() : void 0, { forwardRef: n, currentElement: l } = T(), s = ref(false);
    return watchEffect((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), r(() => c.removeEventListener("scroll", d));
      }
    }), watch(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (openBlock(), createBlock(os, {
      key: 0,
      ref: unref(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = unref(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : createCommentVNode("", true);
  }
});
var Lh = defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const { forwardRef: t, currentElement: e } = T(), n = ht(), l = useSlots();
    return onBeforeMount(() => {
      var r;
      const s = !!Ba((r = l == null ? void 0 : l.default) == null ? void 0 : r.call(l)).length;
      n.onValueElementHasChildrenChange(s);
    }), onMounted(() => {
      n.valueElement = e;
    }), (s, r) => (openBlock(), createBlock(unref(A), {
      ref: unref(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: withCtx(() => {
        var i;
        return [
          unref(as)((i = unref(n).modelValue) == null ? void 0 : i.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(s.placeholder), 1)
          ], 64)) : renderSlot(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var Nh = defineComponent({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    return (t, e) => (openBlock(), createBlock(unref(A), {
      "aria-hidden": "",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default", {}, () => [
          createTextVNode("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var ls = defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = ["horizontal", "vertical"];
    function n(i) {
      return e.includes(i);
    }
    const l = computed(
      () => n(t.orientation) ? t.orientation : "horizontal"
    ), s = computed(
      () => l.value === "vertical" ? t.orientation : void 0
    ), r = computed(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, u) => (openBlock(), createBlock(unref(A), mergeProps({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": l.value
    }, r.value), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
});
var zh = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(ls, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ss(a2, [t, e]) {
  return Math.min(e, Math.max(t, a2));
}
function ap(a2 = [], t, e) {
  const n = [...a2];
  return n[e] = t, n.sort((l, s) => l - s);
}
function rs(a2, t, e) {
  const s = 100 / (e - t) * (a2 - t);
  return ss(s, [0, 100]);
}
function np(a2, t) {
  return t > 2 ? `Value ${a2 + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][a2] : void 0;
}
function op(a2, t) {
  if (a2.length === 1)
    return 0;
  const e = a2.map((l) => Math.abs(l - t)), n = Math.min(...e);
  return e.indexOf(n);
}
function lp(a2, t, e) {
  const n = a2 / 2, s = mo([0, 50], [0, n]);
  return (n - s(t) * e) * e;
}
function sp(a2) {
  return a2.slice(0, -1).map((t, e) => a2[e + 1] - t);
}
function rp(a2, t) {
  if (t > 0) {
    const e = sp(a2);
    return Math.min(...e) >= t;
  }
  return true;
}
function mo(a2, t) {
  return (e) => {
    if (a2[0] === a2[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a2[1] - a2[0]);
    return t[0] + n * (e - a2[0]);
  };
}
function ip(a2) {
  return (String(a2).split(".")[1] || "").length;
}
function up(a2, t) {
  const e = 10 ** t;
  return Math.round(a2 * e) / e;
}
var is = ["PageUp", "PageDown"];
var us = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var ds = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
};
var [cs, ps] = Q(["SliderVertical", "SliderHorizontal"]);
var fs = defineComponent({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Wa();
    return (s, r) => (openBlock(), createBlock(unref(A), mergeProps({ "data-slider-impl": "" }, e, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : unref(is).concat(unref(us)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: r[1] || (r[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), unref(l).thumbElements.value.includes(u) ? u.focus() : n("slideStart", i);
      }),
      onPointermove: r[2] || (r[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: r[3] || (r[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var dp = defineComponent({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { max: l, min: s, dir: r, inverted: i } = toRefs(e), { forwardRef: u, currentElement: d } = T(), c = ref(), p = computed(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function f(v2) {
      const y2 = c.value || d.value.getBoundingClientRect(), m2 = [0, y2.width], x = p.value ? [s.value, l.value] : [l.value, s.value], P2 = mo(m2, x);
      return c.value = y2, P2(v2 - y2.left);
    }
    return ps({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (v2, y2) => (openBlock(), createBlock(fs, {
      ref: unref(u),
      dir: unref(r),
      "data-orientation": "horizontal",
      style: normalizeStyle({
        "--radix-slider-thumb-transform": "translateX(-50%)"
      }),
      onSlideStart: y2[0] || (y2[0] = (m2) => {
        const x = f(m2.clientX);
        n("slideStart", x);
      }),
      onSlideMove: y2[1] || (y2[1] = (m2) => {
        const x = f(m2.clientX);
        n("slideMove", x);
      }),
      onSlideEnd: y2[2] || (y2[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: y2[3] || (y2[3] = (m2) => {
        const x = p.value ? "from-left" : "from-right", P2 = unref(ds)[x].includes(m2.key);
        n("stepKeyDown", m2, P2 ? -1 : 1);
      }),
      onEndKeyDown: y2[4] || (y2[4] = (m2) => n("endKeyDown", m2)),
      onHomeKeyDown: y2[5] || (y2[5] = (m2) => n("homeKeyDown", m2))
    }, {
      default: withCtx(() => [
        renderSlot(v2.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "style"]));
  }
});
var cp = defineComponent({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { max: l, min: s, inverted: r } = toRefs(e), { forwardRef: i, currentElement: u } = T(), d = ref(), c = computed(() => !r.value);
    function p(f) {
      const v2 = d.value || u.value.getBoundingClientRect(), y2 = [0, v2.height], m2 = c.value ? [l.value, s.value] : [s.value, l.value], x = mo(y2, m2);
      return d.value = v2, x(f - v2.top);
    }
    return ps({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (f, v2) => (openBlock(), createBlock(fs, {
      ref: unref(i),
      "data-orientation": "vertical",
      style: normalizeStyle({
        "--radix-slider-thumb-transform": "translateY(50%)"
      }),
      onSlideStart: v2[0] || (v2[0] = (y2) => {
        const m2 = p(y2.clientY);
        n("slideStart", m2);
      }),
      onSlideMove: v2[1] || (v2[1] = (y2) => {
        const m2 = p(y2.clientY);
        n("slideMove", m2);
      }),
      onSlideEnd: v2[2] || (v2[2] = () => {
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: v2[3] || (v2[3] = (y2) => {
        const m2 = c.value ? "from-bottom" : "from-top", x = unref(ds)[m2].includes(y2.key);
        n("stepKeyDown", y2, x ? -1 : 1);
      }),
      onEndKeyDown: v2[4] || (v2[4] = (y2) => n("endKeyDown", y2)),
      onHomeKeyDown: v2[5] || (v2[5] = (y2) => n("homeKeyDown", y2))
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
});
var pp = ["value", "name", "disabled", "step"];
var [Wa, fp] = Q("SliderRoot");
var Kh = defineComponent({
  inheritAttrs: false,
  __name: "SliderRoot",
  props: {
    name: {},
    defaultValue: { default: () => [0] },
    modelValue: {},
    disabled: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    dir: {},
    inverted: { type: Boolean, default: false },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    minStepsBetweenThumbs: { default: 0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { min: l, max: s, step: r, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = toRefs(e), p = be(c), { forwardRef: f, currentElement: v2 } = T(), y2 = ct(v2);
    Aa();
    const m2 = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), x = ref(0), P2 = ref(m2.value);
    function D2(R2) {
      const M = op(m2.value, R2);
      E(R2, M);
    }
    function g(R2) {
      E(R2, x.value);
    }
    function S() {
      const R2 = P2.value[x.value];
      m2.value[x.value] !== R2 && n("valueCommit", toRaw(m2.value));
    }
    function E(R2, M, { commit: V2 } = { commit: false }) {
      var W2;
      const O2 = ip(r.value), L = up(Math.round((R2 - l.value) / r.value) * r.value + l.value, O2), j2 = ss(L, [l.value, s.value]), J2 = ap(m2.value, j2, M);
      if (rp(J2, i.value * r.value)) {
        x.value = J2.indexOf(j2);
        const X2 = String(J2) !== String(m2.value);
        X2 && V2 && n("valueCommit", J2), X2 && ((W2 = $2.value[x.value]) == null || W2.focus(), m2.value = J2);
      }
    }
    const $2 = ref([]);
    return fp({
      modelValue: m2,
      valueIndexToChangeRef: x,
      thumbElements: $2,
      orientation: u,
      min: l,
      max: s,
      disabled: d
    }), (R2, M) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(Oa), null, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(unref(u) === "horizontal" ? dp : cp), mergeProps(R2.$attrs, {
            ref: unref(f),
            "as-child": R2.asChild,
            as: R2.as,
            min: unref(l),
            max: unref(s),
            dir: unref(p),
            inverted: R2.inverted,
            "aria-disabled": unref(d),
            "data-disabled": unref(d) ? "" : void 0,
            onPointerdown: M[0] || (M[0] = () => {
              unref(d) || (P2.value = unref(m2));
            }),
            onSlideStart: M[1] || (M[1] = (V2) => !unref(d) && D2(V2)),
            onSlideMove: M[2] || (M[2] = (V2) => !unref(d) && g(V2)),
            onSlideEnd: M[3] || (M[3] = (V2) => !unref(d) && S()),
            onHomeKeyDown: M[4] || (M[4] = (V2) => !unref(d) && E(unref(l), 0, { commit: true })),
            onEndKeyDown: M[5] || (M[5] = (V2) => !unref(d) && E(unref(s), unref(m2).length - 1, { commit: true })),
            onStepKeyDown: M[6] || (M[6] = (V2, O2) => {
              if (!unref(d)) {
                const J2 = unref(is).includes(V2.key) || V2.shiftKey && unref(us).includes(V2.key) ? 10 : 1, W2 = x.value, X2 = unref(m2)[W2], N = unref(r) * J2 * O2;
                E(X2 + N, W2, { commit: true });
              }
            })
          }), {
            default: withCtx(() => [
              renderSlot(R2.$slots, "default", { modelValue: unref(m2) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      unref(y2) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(m2), (V2, O2) => (openBlock(), createElementBlock("input", {
        key: O2,
        value: V2,
        type: "number",
        style: { display: "none" },
        name: R2.name ? R2.name + (unref(m2).length > 1 ? "[]" : "") : void 0,
        disabled: unref(d),
        step: unref(r)
      }, null, 8, pp))), 128)) : createCommentVNode("", true)
    ], 64));
  }
});
var vp = defineComponent({
  inheritAttrs: false,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Wa(), n = cs(), { forwardRef: l, currentElement: s } = T(), r = computed(() => {
      var v2, y2;
      return (y2 = (v2 = e.modelValue) == null ? void 0 : v2.value) == null ? void 0 : y2[t.index];
    }), i = computed(() => r.value === void 0 ? 0 : rs(r.value, e.min.value ?? 0, e.max.value ?? 100)), u = computed(() => {
      var v2, y2;
      return np(t.index, ((y2 = (v2 = e.modelValue) == null ? void 0 : v2.value) == null ? void 0 : y2.length) ?? 0);
    }), d = dl(s), c = computed(() => d[n.size].value), p = computed(() => c.value ? lp(c.value, i.value, n.direction) : 0), f = $a();
    return onMounted(() => {
      e.thumbElements.value.push(s.value);
    }), onUnmounted(() => {
      const v2 = e.thumbElements.value.findIndex((y2) => y2 === s.value) ?? -1;
      e.thumbElements.value.splice(v2, 1);
    }), (v2, y2) => (openBlock(), createBlock(unref(ka), null, {
      default: withCtx(() => [
        createVNode(unref(A), mergeProps(v2.$attrs, {
          ref: unref(l),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: unref(e).disabled.value ? void 0 : 0,
          "aria-label": v2.$attrs["aria-label"] || u.value,
          "data-disabled": unref(e).disabled.value ? "" : void 0,
          "data-orientation": unref(e).orientation.value,
          "aria-valuenow": r.value,
          "aria-valuemin": unref(e).min.value,
          "aria-valuemax": unref(e).max.value,
          "aria-orientation": unref(e).orientation.value,
          "as-child": v2.asChild,
          as: v2.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [unref(n).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !unref(f) && r.value === void 0 ? "none" : void 0
          },
          onFocus: y2[0] || (y2[0] = () => {
            unref(e).valueIndexToChangeRef.value = v2.index;
          })
        }), {
          default: withCtx(() => [
            renderSlot(v2.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
});
var Hh = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { getItems: e } = Hn(), { forwardRef: n, currentElement: l } = T(), s = computed(() => l.value ? e().findIndex((r) => r.ref === l.value) : -1);
    return (r, i) => (openBlock(), createBlock(vp, mergeProps({ ref: unref(n) }, t, { index: s.value }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
});
var Wh = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = Wa();
    return T(), (e, n) => (openBlock(), createBlock(unref(A), {
      "as-child": e.asChild,
      as: e.as,
      "data-disabled": unref(t).disabled.value ? "" : void 0,
      "data-orientation": unref(t).orientation.value
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
});
var jh = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = Wa(), e = cs();
    T();
    const n = computed(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (u) => rs(u, t.min.value, t.max.value)
      );
    }), l = computed(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = computed(() => 100 - Math.max(...n.value));
    return (r, i) => (openBlock(), createBlock(unref(A), {
      "data-disabled": unref(t).disabled.value ? "" : void 0,
      "data-orientation": unref(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: normalizeStyle({
        [unref(e).startEdge]: `${l.value}%`,
        [unref(e).endEdge]: `${s.value}%`
      })
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
var bn = null;
var bt = null;
function mp(a2, t) {
  if (t) {
    const e = (t & bs) !== 0, n = (t & Cs) !== 0, l = (t & ws) !== 0, s = (t & _s) !== 0;
    if (e)
      return l ? "se-resize" : s ? "ne-resize" : "e-resize";
    if (n)
      return l ? "sw-resize" : s ? "nw-resize" : "w-resize";
    if (l)
      return "s-resize";
    if (s)
      return "n-resize";
  }
  switch (a2) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function hp() {
  bt !== null && (document.head.removeChild(bt), bn = null, bt = null);
}
function un(a2, t) {
  const e = mp(a2, t);
  bn !== e && (bn = e, bt === null && (bt = document.createElement("style"), document.head.appendChild(bt)), bt.innerHTML = `*{cursor: ${e}!important;}`);
}
function yp({
  defaultSize: a2,
  dragState: t,
  layout: e,
  panelData: n,
  panelIndex: l,
  precision: s = 3
}) {
  const r = e[l];
  let i;
  return r == null ? i = a2 !== void 0 ? a2.toPrecision(s) : "1" : n.length === 1 ? i = "1" : i = r.toPrecision(s), {
    flexBasis: 0,
    flexGrow: i,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function vs(a2) {
  return a2.type === "keydown";
}
function ms(a2) {
  return a2.type.startsWith("mouse");
}
function hs(a2) {
  return a2.type.startsWith("touch");
}
function ja(a2) {
  if (ms(a2))
    return {
      x: a2.clientX,
      y: a2.clientY
    };
  if (hs(a2)) {
    const t = a2.touches[0];
    if (t && t.clientX && t.clientY)
      return {
        x: t.clientX,
        y: t.clientY
      };
  }
  return {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY
  };
}
function ys(a2, t) {
  const e = a2 === "horizontal", { x: n, y: l } = ja(t);
  return e ? n : l;
}
function gp(a2, t, e) {
  return e ? a2.x < t.x + t.width && a2.x + a2.width > t.x && a2.y < t.y + t.height && a2.y + a2.height > t.y : a2.x <= t.x + t.width && a2.x + a2.width >= t.x && a2.y <= t.y + t.height && a2.y + a2.height >= t.y;
}
function ie(a2, t = "Assertion failed!") {
  if (!a2)
    throw console.error(t), new Error(t);
}
function bp(a2, t) {
  if (a2 === t)
    throw new Error("Cannot compare node with itself");
  const e = {
    a: ko(a2),
    b: ko(t)
  };
  let n;
  for (; e.a.at(-1) === e.b.at(-1); )
    a2 = e.a.pop(), t = e.b.pop(), n = a2;
  ie(n);
  const l = {
    a: Oo(Ao(e.a)),
    b: Oo(Ao(e.b))
  };
  if (l.a === l.b) {
    const s = n.childNodes, r = {
      a: e.a.at(-1),
      b: e.b.at(-1)
    };
    let i = s.length;
    for (; i--; ) {
      const u = s[i];
      if (u === r.a)
        return 1;
      if (u === r.b)
        return -1;
    }
  }
  return Math.sign(l.a - l.b);
}
var Cp = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function wp(a2) {
  const t = getComputedStyle(gs(a2)).display;
  return t === "flex" || t === "inline-flex";
}
function _p(a2) {
  const t = getComputedStyle(a2);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || wp(a2)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || Cp.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Ao(a2) {
  let t = a2.length;
  for (; t--; ) {
    const e = a2[t];
    if (ie(e), _p(e))
      return e;
  }
  return null;
}
function Oo(a2) {
  return a2 && Number(getComputedStyle(a2).zIndex) || 0;
}
function ko(a2) {
  const t = [];
  for (; a2; )
    t.push(a2), a2 = gs(a2);
  return t;
}
function gs(a2) {
  var t;
  return ((t = a2.parentNode) == null ? void 0 : t.host) || a2.parentNode;
}
var bs = 1;
var Cs = 2;
var ws = 4;
var _s = 8;
function xp() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
var Sp = xp() === "coarse";
var ut = [];
var Ua = false;
var st = /* @__PURE__ */ new Map();
var Ga = /* @__PURE__ */ new Map();
var ta = /* @__PURE__ */ new Set();
function Pp(a2, t, e, n, l) {
  const { ownerDocument: s } = t, r = {
    direction: e,
    element: t,
    hitAreaMargins: n,
    setResizeHandlerState: l
  }, i = st.get(s) ?? 0;
  return st.set(s, i + 1), ta.add(r), xa(), function() {
    Ga.delete(a2), ta.delete(r);
    const d = st.get(s) ?? 1;
    st.set(s, d - 1), xa(), d === 1 && st.delete(s);
  };
}
function ma(a2) {
  const { target: t } = a2, { x: e, y: n } = ja(a2);
  Ua = true, ho({ target: t, x: e, y: n }), xa(), ut.length > 0 && (yo("down", a2), a2.preventDefault());
}
function nt(a2) {
  const { x: t, y: e } = ja(a2);
  if (!Ua) {
    const { target: n } = a2;
    ho({ target: n, x: t, y: e });
  }
  yo("move", a2), xs(), ut.length > 0 && a2.preventDefault();
}
function ot(a2) {
  const { target: t } = a2, { x: e, y: n } = ja(a2);
  Ga.clear(), Ua = false, ut.length > 0 && a2.preventDefault(), yo("up", a2), ho({ target: t, x: e, y: n }), xs(), xa();
}
function ho({
  target: a2,
  x: t,
  y: e
}) {
  ut.splice(0);
  let n = null;
  a2 instanceof HTMLElement && (n = a2), ta.forEach((l) => {
    const { element: s, hitAreaMargins: r } = l, i = s.getBoundingClientRect(), { bottom: u, left: d, right: c, top: p } = i, f = Sp ? r.coarse : r.fine;
    if (t >= d - f && t <= c + f && e >= p - f && e <= u + f) {
      if (n !== null && s !== n && !s.contains(n) && !n.contains(s) && bp(n, s) > 0) {
        let y2 = n, m2 = false;
        for (; y2 && !y2.contains(s); ) {
          if (gp(
            y2.getBoundingClientRect(),
            i,
            true
          )) {
            m2 = true;
            break;
          }
          y2 = y2.parentElement;
        }
        if (m2)
          return;
      }
      ut.push(l);
    }
  });
}
function dn(a2, t) {
  Ga.set(a2, t);
}
function xs() {
  let a2 = false, t = false;
  ut.forEach((n) => {
    const { direction: l } = n;
    l === "horizontal" ? a2 = true : t = true;
  });
  let e = 0;
  Ga.forEach((n) => {
    e |= n;
  }), a2 && t ? un("intersection", e) : a2 ? un("horizontal", e) : t ? un("vertical", e) : hp();
}
function xa() {
  st.forEach((a2, t) => {
    const { body: e } = t;
    e.removeEventListener("contextmenu", ot), e.removeEventListener("mousedown", ma), e.removeEventListener("mouseleave", nt), e.removeEventListener("mousemove", nt), e.removeEventListener("touchmove", nt), e.removeEventListener("touchstart", ma);
  }), window.removeEventListener("mouseup", ot), window.removeEventListener("touchcancel", ot), window.removeEventListener("touchend", ot), ta.size > 0 && (Ua ? (ut.length > 0 && st.forEach((a2, t) => {
    const { body: e } = t;
    a2 > 0 && (e.addEventListener("contextmenu", ot), e.addEventListener("mouseleave", nt), e.addEventListener("mousemove", nt), e.addEventListener("touchmove", nt, {
      passive: false
    }));
  }), window.addEventListener("mouseup", ot), window.addEventListener("touchcancel", ot), window.addEventListener("touchend", ot)) : st.forEach((a2, t) => {
    const { body: e } = t;
    a2 > 0 && (e.addEventListener("mousedown", ma), e.addEventListener("mousemove", nt), e.addEventListener("touchmove", nt, {
      passive: false
    }), e.addEventListener("touchstart", ma));
  }));
}
function yo(a2, t) {
  ta.forEach((e) => {
    const { setResizeHandlerState: n } = e, l = ut.includes(e);
    n(a2, l, t);
  });
}
var Ss = 10;
function aa(a2, t, e = Ss) {
  a2 = Number.parseFloat(a2.toFixed(e)), t = Number.parseFloat(t.toFixed(e));
  const n = a2 - t;
  return n === 0 ? 0 : n > 0 ? 1 : -1;
}
function Ve(a2, t, e) {
  return aa(a2, t, e) === 0;
}
function It({
  panelConstraints: a2,
  panelIndex: t,
  size: e
}) {
  const n = a2[t];
  ie(n != null);
  const { collapsedSize: l = 0, collapsible: s, maxSize: r = 100, minSize: i = 0 } = n;
  if (aa(e, i) < 0)
    if (s) {
      const u = (l + i) / 2;
      aa(e, u) < 0 ? e = l : e = i;
    } else
      e = i;
  return e = Math.min(r, e), e = Number.parseFloat(e.toFixed(Ss)), e;
}
function ha(a2, t) {
  if (a2.length !== t.length)
    return false;
  for (let e = 0; e < a2.length; e++)
    if (a2[e] !== t[e])
      return false;
  return true;
}
function qt({
  delta: a2,
  layout: t,
  panelConstraints: e,
  pivotIndices: n,
  trigger: l
}) {
  if (Ve(a2, 0))
    return t;
  const s = [...t], [r, i] = n;
  ie(r != null), ie(i != null);
  let u = 0;
  if (l === "keyboard") {
    {
      const c = a2 < 0 ? i : r, p = e[c];
      if (ie(p), p.collapsible) {
        const f = t[c];
        ie(f != null);
        const v2 = e[c];
        ie(v2);
        const { collapsedSize: y2 = 0, minSize: m2 = 0 } = v2;
        if (Ve(f, y2)) {
          const x = m2 - f;
          aa(x, Math.abs(a2)) > 0 && (a2 = a2 < 0 ? 0 - x : x);
        }
      }
    }
    {
      const c = a2 < 0 ? r : i, p = e[c];
      ie(p);
      const { collapsible: f } = p;
      if (f) {
        const v2 = t[c];
        ie(v2 != null);
        const y2 = e[c];
        ie(y2);
        const { collapsedSize: m2 = 0, minSize: x = 0 } = y2;
        if (Ve(v2, x)) {
          const P2 = v2 - m2;
          aa(P2, Math.abs(a2)) > 0 && (a2 = a2 < 0 ? 0 - P2 : P2);
        }
      }
    }
  }
  {
    const c = a2 < 0 ? 1 : -1;
    let p = a2 < 0 ? i : r, f = 0;
    for (; ; ) {
      const y2 = t[p];
      ie(y2 != null);
      const x = It({
        panelConstraints: e,
        panelIndex: p,
        size: 100
      }) - y2;
      if (f += x, p += c, p < 0 || p >= e.length)
        break;
    }
    const v2 = Math.min(Math.abs(a2), Math.abs(f));
    a2 = a2 < 0 ? 0 - v2 : v2;
  }
  {
    let p = a2 < 0 ? r : i;
    for (; p >= 0 && p < e.length; ) {
      const f = Math.abs(a2) - Math.abs(u), v2 = t[p];
      ie(v2 != null);
      const y2 = v2 - f, m2 = It({
        panelConstraints: e,
        panelIndex: p,
        size: y2
      });
      if (!Ve(v2, m2) && (u += v2 - m2, s[p] = m2, u.toPrecision(3).localeCompare(Math.abs(a2).toPrecision(3), void 0, {
        numeric: true
      }) >= 0))
        break;
      a2 < 0 ? p-- : p++;
    }
  }
  if (Ve(u, 0))
    return t;
  {
    const c = a2 < 0 ? i : r, p = t[c];
    ie(p != null);
    const f = p + u, v2 = It({
      panelConstraints: e,
      panelIndex: c,
      size: f
    });
    if (s[c] = v2, !Ve(v2, f)) {
      let y2 = f - v2, x = a2 < 0 ? i : r;
      for (; x >= 0 && x < e.length; ) {
        const P2 = s[x];
        ie(P2 != null);
        const D2 = P2 + y2, g = It({
          panelConstraints: e,
          panelIndex: x,
          size: D2
        });
        if (Ve(P2, g) || (y2 -= g - P2, s[x] = g), Ve(y2, 0))
          break;
        a2 > 0 ? x-- : x++;
      }
    }
  }
  const d = s.reduce((c, p) => p + c, 0);
  return Ve(d, 100) ? s : t;
}
function Ps(a2, t = document) {
  var n;
  if (!la)
    return null;
  if (t instanceof HTMLElement && ((n = t == null ? void 0 : t.dataset) == null ? void 0 : n.panelGroupId) === a2)
    return t;
  const e = t.querySelector(
    `[data-panel-group][data-panel-group-id="${a2}"]`
  );
  return e || null;
}
function qa(a2, t = document) {
  if (!la)
    return null;
  const e = t.querySelector(`[data-panel-resize-handle-id="${a2}"]`);
  return e || null;
}
function Es(a2, t, e = document) {
  return la ? na(a2, e).findIndex(
    (s) => s.getAttribute("data-panel-resize-handle-id") === t
  ) ?? null : null;
}
function na(a2, t = document) {
  return la ? Array.from(
    t.querySelectorAll(
      `[data-panel-resize-handle-id][data-panel-group-id="${a2}"]`
    )
  ) : [];
}
function Ep(a2, t, e, n = document) {
  var d, c;
  const l = qa(t, n), s = na(a2, n), r = l ? s.indexOf(l) : -1, i = ((d = e[r]) == null ? void 0 : d.id) ?? null, u = ((c = e[r + 1]) == null ? void 0 : c.id) ?? null;
  return [i, u];
}
function Dp(a2, t, e, n, l) {
  const s = e === "horizontal", r = qa(t, l);
  ie(r);
  const i = r.getAttribute("data-panel-group-id");
  ie(i);
  const { initialCursorPosition: u } = n, d = ys(e, a2), c = Ps(i, l);
  ie(c);
  const p = c.getBoundingClientRect(), f = s ? p.width : p.height;
  return (d - u) / f * 100;
}
function $p(a2, t, e, n, l, s) {
  if (vs(a2)) {
    const r = e === "horizontal";
    let i = 0;
    a2.shiftKey ? i = 100 : i = l ?? 10;
    let u = 0;
    switch (a2.key) {
      case "ArrowDown":
        u = r ? 0 : i;
        break;
      case "ArrowLeft":
        u = r ? -i : 0;
        break;
      case "ArrowRight":
        u = r ? i : 0;
        break;
      case "ArrowUp":
        u = r ? 0 : -i;
        break;
      case "End":
        u = 100;
        break;
      case "Home":
        u = -100;
        break;
    }
    return u;
  } else
    return n == null ? 0 : Dp(
      a2,
      t,
      e,
      n,
      s
    );
}
function Bp({
  layout: a2,
  panelsArray: t,
  pivotIndices: e
}) {
  let n = 0, l = 100, s = 0, r = 0;
  const i = e[0];
  ie(i != null), t.forEach((p, f) => {
    const { constraints: v2 } = p, { maxSize: y2 = 100, minSize: m2 = 0 } = v2;
    f === i ? (n = m2, l = y2) : (s += m2, r += y2);
  });
  const u = Math.min(l, 100 - s), d = Math.max(n, 100 - r), c = a2[i];
  return {
    valueMax: u,
    valueMin: d,
    valueNow: c
  };
}
function Tp({
  panelDataArray: a2
}) {
  const t = Array(a2.length), e = a2.map(
    (s) => s.constraints
  );
  let n = 0, l = 100;
  for (let s = 0; s < a2.length; s++) {
    const r = e[s];
    ie(r);
    const { defaultSize: i } = r;
    i != null && (n++, t[s] = i, l -= i);
  }
  for (let s = 0; s < a2.length; s++) {
    const r = e[s];
    ie(r);
    const { defaultSize: i } = r;
    if (i != null)
      continue;
    const u = a2.length - n, d = l / u;
    n++, t[s] = d, l -= d;
  }
  return t;
}
function Gt(a2, t, e) {
  t.forEach((n, l) => {
    const s = a2[l];
    ie(s);
    const { callbacks: r, constraints: i, id: u } = s, { collapsedSize: d = 0, collapsible: c } = i, p = e[u];
    if (p == null || n !== p) {
      e[u] = n;
      const { onCollapse: f, onExpand: v2, onResize: y2 } = r;
      y2 && y2(n, p), c && (f || v2) && (v2 && (p == null || p === d) && n !== d && v2(), f && (p == null || p !== d) && n === d && f());
    }
  });
}
function Ip(a2, t = 10) {
  let e = null;
  return (...l) => {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      a2(...l);
    }, t);
  };
}
function Ds(a2, t, e) {
  const n = Es(
    a2,
    t,
    e
  );
  return n != null ? [n, n + 1] : [-1, -1];
}
function Rp({
  layout: a2,
  panelConstraints: t
}) {
  const e = [...a2], n = e.reduce(
    (s, r) => s + r,
    0
  );
  if (e.length !== t.length)
    throw new Error(
      `Invalid ${t.length} panel layout: ${e.map((s) => `${s}%`).join(", ")}`
    );
  if (!Ve(n, 100)) {
    console.warn(
      `WARNING: Invalid layout total size: ${e.map((s) => `${s}%`).join(", ")}. Layout normalization will be applied.`
    );
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      ie(r != null);
      const i = 100 / n * r;
      e[s] = i;
    }
  }
  let l = 0;
  for (let s = 0; s < t.length; s++) {
    const r = e[s];
    ie(r != null);
    const i = It({
      panelConstraints: t,
      panelIndex: s,
      size: r
    });
    r !== i && (l += r - i, e[s] = i);
  }
  if (!Ve(l, 0))
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      ie(r != null);
      const i = r + l, u = It({
        panelConstraints: t,
        panelIndex: s,
        size: i
      });
      if (r !== u && (l -= u - r, e[s] = u, Ve(l, 0)))
        break;
    }
  return e;
}
function Mo(a2) {
  try {
    if (typeof localStorage < "u")
      a2.getItem = (t) => localStorage.getItem(t), a2.setItem = (t, e) => {
        localStorage.setItem(t, e);
      };
    else
      throw new TypeError("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), a2.getItem = () => null, a2.setItem = () => {
    };
  }
}
function $s(a2) {
  return `radix-vue:${a2}`;
}
function Bs(a2) {
  return a2.map((t) => {
    const { constraints: e, id: n, idIsFromProps: l, order: s } = t;
    return l ? n : s ? `${s}:${JSON.stringify(e)}` : JSON.stringify(e);
  }).sort((t, e) => t.localeCompare(e)).join(",");
}
function Ts(a2, t) {
  try {
    const e = $s(a2), n = t.getItem(e);
    if (n) {
      const l = JSON.parse(n);
      if (typeof l == "object" && l != null)
        return l;
    }
  } catch {
  }
  return null;
}
function Ap(a2, t, e) {
  const n = Ts(a2, e) ?? {}, l = Bs(t);
  return n[l] ?? null;
}
function Op(a2, t, e, n, l) {
  const s = $s(a2), r = Bs(t), i = Ts(a2, l) ?? {};
  i[r] = {
    expandToSizes: Object.fromEntries(e.entries()),
    layout: n
  };
  try {
    l.setItem(s, JSON.stringify(i));
  } catch (u) {
    console.error(u);
  }
}
function kp({
  eagerValuesRef: a2,
  groupId: t,
  layout: e,
  panelDataArray: n,
  panelGroupElement: l,
  setLayout: s
}) {
  watchEffect((r) => {
    const i = l.value;
    if (!i)
      return;
    const u = na(
      t,
      i
    );
    for (let d = 0; d < n.length - 1; d++) {
      const { valueMax: c, valueMin: p, valueNow: f } = Bp({
        layout: e.value,
        panelsArray: n,
        pivotIndices: [d, d + 1]
      }), v2 = u[d];
      if (v2 != null) {
        const y2 = n[d];
        ie(y2), v2.setAttribute("aria-controls", y2.id), v2.setAttribute(
          "aria-valuemax",
          `${Math.round(c)}`
        ), v2.setAttribute(
          "aria-valuemin",
          `${Math.round(p)}`
        ), v2.setAttribute(
          "aria-valuenow",
          f != null ? `${Math.round(f)}` : ""
        );
      }
    }
    r(() => {
      u.forEach((d) => {
        d.removeAttribute("aria-controls"), d.removeAttribute("aria-valuemax"), d.removeAttribute("aria-valuemin"), d.removeAttribute("aria-valuenow");
      });
    });
  }), watchEffect((r) => {
    const i = l.value;
    if (!i)
      return;
    const u = a2.value;
    ie(u);
    const { panelDataArray: d } = u, c = Ps(t, i);
    ie(c != null, `No group found for id "${t}"`);
    const p = na(t, i);
    ie(p);
    const f = p.map((v2) => {
      const y2 = v2.getAttribute("data-panel-resize-handle-id");
      ie(y2);
      const [m2, x] = Ep(
        t,
        y2,
        d,
        i
      );
      if (m2 == null || x == null)
        return () => {
        };
      const P2 = (D2) => {
        if (!D2.defaultPrevented)
          switch (D2.key) {
            case "Enter": {
              D2.preventDefault();
              const g = d.findIndex(
                (S) => S.id === m2
              );
              if (g >= 0) {
                const S = d[g];
                ie(S);
                const E = e.value[g], {
                  collapsedSize: $2 = 0,
                  collapsible: R2,
                  minSize: M = 0
                } = S.constraints;
                if (E != null && R2) {
                  const V2 = qt({
                    delta: Ve(E, $2) ? M - $2 : $2 - E,
                    layout: e.value,
                    panelConstraints: d.map(
                      (O2) => O2.constraints
                    ),
                    pivotIndices: Ds(
                      t,
                      y2,
                      i
                    ),
                    trigger: "keyboard"
                  });
                  e.value !== V2 && s(V2);
                }
              }
              break;
            }
          }
      };
      return v2.addEventListener("keydown", P2), () => {
        v2.removeEventListener("keydown", P2);
      };
    });
    r(() => {
      f.forEach((v2) => v2());
    });
  });
}
var Mp = 100;
var Yt = {
  getItem: (a2) => (Mo(Yt), Yt.getItem(a2)),
  setItem: (a2, t) => {
    Mo(Yt), Yt.setItem(a2, t);
  }
};
var [Is, Vp] = Q("PanelGroup");
var Uh = defineComponent({
  __name: "SplitterGroup",
  props: {
    id: {},
    autoSaveId: { default: null },
    direction: {},
    keyboardResizeBy: { default: 10 },
    storage: { default: () => Yt },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["layout"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = {}, s = me(e.id, "radix-vue-splitter-group"), r = be(), { forwardRef: i, currentElement: u } = T(), d = ref(null), c = ref([]), p = ref({}), f = ref(/* @__PURE__ */ new Map()), v2 = ref(0), y2 = computed(() => ({
      autoSaveId: e.autoSaveId,
      direction: e.direction,
      dragState: d.value,
      id: s,
      keyboardResizeBy: e.keyboardResizeBy,
      storage: e.storage
    })), m2 = ref({
      layout: c.value,
      panelDataArray: [],
      panelDataArrayChanged: false
    }), x = (N) => c.value = N;
    kp({
      eagerValuesRef: m2,
      groupId: s,
      layout: c,
      panelDataArray: m2.value.panelDataArray,
      setLayout: x,
      panelGroupElement: u
    }), watchEffect(() => {
      const { panelDataArray: N } = m2.value, { autoSaveId: q2 } = e;
      if (q2) {
        if (c.value.length === 0 || c.value.length !== N.length)
          return;
        let F = l[q2];
        F || (F = Ip(
          Op,
          Mp
        ), l[q2] = F);
        const Z = [...N], U = new Map(
          f.value
        );
        F(
          q2,
          Z,
          U,
          c.value,
          e.storage
        );
      }
    });
    function P2(N, q2) {
      const { panelDataArray: F } = m2.value, Z = W2(F, N);
      return yp({
        defaultSize: q2,
        dragState: d.value,
        layout: c.value,
        panelData: F,
        panelIndex: Z
      });
    }
    function D2(N) {
      const { panelDataArray: q2 } = m2.value;
      q2.push(N), q2.sort((F, Z) => {
        const U = F.order, Y = Z.order;
        return U == null && Y == null ? 0 : U == null ? -1 : Y == null ? 1 : U - Y;
      }), m2.value.panelDataArrayChanged = true;
    }
    watch(() => m2.value.panelDataArrayChanged, () => {
      if (m2.value.panelDataArrayChanged) {
        m2.value.panelDataArrayChanged = false;
        const { autoSaveId: N, storage: q2 } = y2.value, { layout: F, panelDataArray: Z } = m2.value;
        let U = null;
        if (N) {
          const te = Ap(N, Z, q2);
          te && (f.value = new Map(
            Object.entries(te.expandToSizes)
          ), U = te.layout);
        }
        U === null && (U = Tp({
          panelDataArray: Z
        }));
        const Y = Rp({
          layout: U,
          panelConstraints: Z.map(
            (te) => te.constraints
          )
        });
        lr(F, Y) || (x(Y), m2.value.layout = Y, n("layout", Y), Gt(
          Z,
          Y,
          p.value
        ));
      }
    });
    function g(N) {
      return function(F) {
        F.preventDefault();
        const Z = u.value;
        if (!Z)
          return () => null;
        const { direction: U, dragState: Y, id: te, keyboardResizeBy: de } = y2.value, { layout: H2, panelDataArray: oe } = m2.value, { initialLayout: ce } = Y ?? {}, xe = Ds(
          te,
          N,
          Z
        );
        let ae = $p(
          F,
          N,
          U,
          Y,
          de,
          Z
        );
        if (ae === 0)
          return;
        const we = U === "horizontal";
        r.value === "rtl" && we && (ae = -ae);
        const De = oe.map((Me) => Me.constraints), $e = qt({
          delta: ae,
          layout: ce ?? H2,
          panelConstraints: De,
          pivotIndices: xe,
          trigger: vs(F) ? "keyboard" : "mouse-or-touch"
        }), fe = !ha(H2, $e);
        (ms(F) || hs(F)) && v2.value !== ae && (v2.value = ae, fe ? dn(N, 0) : we ? dn(
          N,
          ae < 0 ? bs : Cs
        ) : dn(
          N,
          ae < 0 ? ws : _s
        )), fe && (x($e), m2.value.layout = $e, n("layout", $e), Gt(
          oe,
          $e,
          p.value
        ));
      };
    }
    function S(N, q2) {
      const { layout: F, panelDataArray: Z } = m2.value, U = Z.map((ce) => ce.constraints), { panelSize: Y, pivotIndices: te } = X2(
        Z,
        N,
        F
      );
      ie(Y != null);
      const H2 = W2(Z, N) === Z.length - 1 ? Y - q2 : q2 - Y, oe = qt({
        delta: H2,
        layout: F,
        panelConstraints: U,
        pivotIndices: te,
        trigger: "imperative-api"
      });
      ha(F, oe) || (x(oe), m2.value.layout = oe, n("layout", oe), Gt(
        Z,
        oe,
        p.value
      ));
    }
    function E(N, q2) {
      const { layout: F, panelDataArray: Z } = m2.value, {
        collapsedSize: U = 0,
        collapsible: Y
      } = q2, {
        collapsedSize: te = 0,
        collapsible: de,
        maxSize: H2 = 100,
        minSize: oe = 0
      } = N.constraints, { panelSize: ce } = X2(
        Z,
        N,
        F
      );
      ce !== null && (Y && de && ce === U ? U !== te && S(N, te) : ce < oe ? S(N, oe) : ce > H2 && S(N, H2));
    }
    function $2(N, q2) {
      const { direction: F } = y2.value, { layout: Z } = m2.value;
      if (!u.value)
        return;
      const U = qa(
        N,
        u.value
      );
      ie(U);
      const Y = ys(
        F,
        q2
      );
      d.value = {
        dragHandleId: N,
        dragHandleRect: U.getBoundingClientRect(),
        initialCursorPosition: Y,
        initialLayout: Z
      };
    }
    function R2() {
      d.value = null;
    }
    function M(N) {
      const { panelDataArray: q2 } = m2.value, F = W2(q2, N);
      F >= 0 && (q2.splice(F, 1), delete p.value[N.id], m2.value.panelDataArrayChanged = true);
    }
    function V2(N) {
      const { layout: q2, panelDataArray: F } = m2.value;
      if (N.constraints.collapsible) {
        const Z = F.map(
          (de) => de.constraints
        ), {
          collapsedSize: U = 0,
          panelSize: Y,
          pivotIndices: te
        } = X2(F, N, q2);
        if (ie(
          Y != null,
          `Panel size not found for panel "${N.id}"`
        ), Y !== U) {
          f.value.set(N.id, Y);
          const H2 = W2(F, N) === F.length - 1 ? Y - U : U - Y, oe = qt({
            delta: H2,
            layout: q2,
            panelConstraints: Z,
            pivotIndices: te,
            trigger: "imperative-api"
          });
          ha(q2, oe) || (x(oe), m2.value.layout = oe, n("layout", oe), Gt(
            F,
            oe,
            p.value
          ));
        }
      }
    }
    function O2(N) {
      const { layout: q2, panelDataArray: F } = m2.value;
      if (N.constraints.collapsible) {
        const Z = F.map(
          (H2) => H2.constraints
        ), {
          collapsedSize: U = 0,
          panelSize: Y,
          minSize: te = 0,
          pivotIndices: de
        } = X2(F, N, q2);
        if (Y === U) {
          const H2 = f.value.get(
            N.id
          ), oe = H2 != null && H2 >= te ? H2 : te, xe = W2(F, N) === F.length - 1 ? Y - oe : oe - Y, ae = qt({
            delta: xe,
            layout: q2,
            panelConstraints: Z,
            pivotIndices: de,
            trigger: "imperative-api"
          });
          ha(q2, ae) || (x(ae), m2.value.layout = ae, n("layout", ae), Gt(
            F,
            ae,
            p.value
          ));
        }
      }
    }
    function L(N) {
      const { layout: q2, panelDataArray: F } = m2.value, { panelSize: Z } = X2(F, N, q2);
      return ie(
        Z != null,
        `Panel size not found for panel "${N.id}"`
      ), Z;
    }
    function j2(N) {
      const { layout: q2, panelDataArray: F } = m2.value, {
        collapsedSize: Z = 0,
        collapsible: U,
        panelSize: Y
      } = X2(F, N, q2);
      return U === true && Y === Z;
    }
    function J2(N) {
      const { layout: q2, panelDataArray: F } = m2.value, {
        collapsedSize: Z = 0,
        collapsible: U,
        panelSize: Y
      } = X2(F, N, q2);
      return ie(
        Y != null,
        `Panel size not found for panel "${N.id}"`
      ), !U || Y > Z;
    }
    Vp({
      direction: e.direction,
      dragState: d.value,
      groupId: s,
      reevaluatePanelConstraints: E,
      registerPanel: D2,
      registerResizeHandle: g,
      resizePanel: S,
      startDragging: $2,
      stopDragging: R2,
      unregisterPanel: M,
      panelGroupElement: u,
      collapsePanel: V2,
      expandPanel: O2,
      isPanelCollapsed: j2,
      isPanelExpanded: J2,
      getPanelSize: L,
      getPanelStyle: P2
    });
    function W2(N, q2) {
      return N.findIndex(
        (F) => F === q2 || F.id === q2.id
      );
    }
    function X2(N, q2, F) {
      const Z = W2(N, q2), Y = Z === N.length - 1 ? [Z - 1, Z] : [Z, Z + 1], te = F[Z];
      return {
        ...q2.constraints,
        panelSize: te,
        pivotIndices: Y
      };
    }
    return (N, q2) => (openBlock(), createBlock(unref(A), {
      ref: unref(i),
      style: normalizeStyle({
        display: "flex",
        flexDirection: N.direction === "horizontal" ? "row" : "column",
        height: "100%",
        overflow: "hidden",
        width: "100%"
      }),
      "data-panel-group": "",
      "data-orientation": N.direction,
      "data-panel-group-id": unref(s)
    }, {
      default: withCtx(() => [
        renderSlot(N.$slots, "default", { layout: c.value })
      ]),
      _: 3
    }, 8, ["style", "data-orientation", "data-panel-group-id"]));
  }
});
var Gh = defineComponent({
  __name: "SplitterPanel",
  props: {
    collapsedSize: {},
    collapsible: { type: Boolean },
    defaultSize: {},
    id: {},
    maxSize: {},
    minSize: {},
    order: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["collapse", "expand", "resize"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, l = e, s = Is();
    if (s === null)
      throw new Error(
        "SplitterPanel components must be rendered within a SplitterGroup container"
      );
    const { collapsePanel: r, expandPanel: i, getPanelSize: u, getPanelStyle: d, isPanelCollapsed: c, resizePanel: p, groupId: f, reevaluatePanelConstraints: v2, registerPanel: y2, unregisterPanel: m2 } = s, x = me(n.id, "radix-vue-splitter-panel"), P2 = computed(() => ({
      callbacks: {
        onCollapse: () => l("collapse"),
        onExpand: () => l("expand"),
        onResize: (...E) => l("resize", ...E)
      },
      constraints: {
        collapsedSize: n.collapsedSize,
        collapsible: n.collapsible,
        defaultSize: n.defaultSize,
        /** Panel id (unique within group); falls back to useId when not provided */
        /** Panel id (unique within group); falls back to useId when not provided */
        maxSize: n.maxSize,
        minSize: n.minSize
      },
      id: x,
      idIsFromProps: n.id !== void 0,
      order: n.order
    }));
    watch(() => P2.value.constraints, (E, $2) => {
      (E.collapsedSize !== $2.collapsedSize || E.collapsible !== $2.collapsible || E.maxSize !== $2.maxSize || E.minSize !== $2.minSize) && v2(P2.value, E);
    }, { deep: true }), onMounted(() => {
      const E = P2.value;
      y2(E), onUnmounted(() => {
        m2(E);
      });
    });
    const D2 = computed(() => d(P2.value, n.defaultSize)), g = computed(() => c(P2.value)), S = computed(() => !g.value);
    return t({
      /** If panel is `collapsible`, collapse it fully. */
      collapse: () => {
        r(P2.value);
      },
      /** If panel is currently collapsed, expand it to its most recent size. */
      expand: () => {
        i(P2.value);
      },
      /** Gets the current size of the panel as a percentage (1 - 100). */
      getSize() {
        return u(P2.value);
      },
      /** Resize panel to the specified percentage (1 - 100). */
      resize: (E) => {
        p(P2.value, E);
      },
      /** Returns `true` if the panel is currently collapsed */
      isCollapsed: g,
      /** Returns `true` if the panel is currently not collapsed */
      isExpanded: S
    }), (E, $2) => (openBlock(), createBlock(unref(A), {
      id: unref(x),
      style: normalizeStyle(D2.value),
      "data-panel": "",
      "data-panel-collapsible": E.collapsible || void 0,
      "data-panel-group-id": unref(f),
      "data-panel-id": unref(x),
      "data-panel-size": Number.parseFloat(`${D2.value.flexGrow}`).toFixed(1),
      "data-state": E.collapsible ? g.value ? "collapsed" : "expanded" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(E.$slots, "default", {
          isCollapsed: g.value,
          isExpanded: S.value
        })
      ]),
      _: 3
    }, 8, ["id", "style", "data-panel-collapsible", "data-panel-group-id", "data-panel-id", "data-panel-size", "data-state"]));
  }
});
function Fp({
  disabled: a2,
  handleId: t,
  resizeHandler: e,
  panelGroupElement: n
}) {
  watchEffect((l) => {
    const s = n.value;
    if (a2.value || e.value === null || s === null)
      return;
    const r = qa(t, s);
    if (r == null)
      return;
    const i = (u) => {
      var d;
      if (!u.defaultPrevented)
        switch (u.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            u.preventDefault(), (d = e.value) == null || d.call(e, u);
            break;
          }
          case "F6": {
            u.preventDefault();
            const c = r.getAttribute("data-panel-group-id");
            ie(c);
            const p = na(
              c,
              s
            ), f = Es(
              c,
              t,
              s
            );
            ie(f !== null);
            const v2 = u.shiftKey ? f > 0 ? f - 1 : p.length - 1 : f + 1 < p.length ? f + 1 : 0;
            p[v2].focus();
            break;
          }
        }
    };
    r.addEventListener("keydown", i), l(() => {
      r.removeEventListener("keydown", i);
    });
  });
}
var qh = defineComponent({
  __name: "SplitterResizeHandle",
  props: {
    id: {},
    hitAreaMargins: {},
    tabindex: { default: 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["dragging"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = T(), { disabled: r } = toRefs(e), i = Is();
    if (i === null)
      throw new Error(
        "PanelResizeHandle components must be rendered within a PanelGroup container"
      );
    const {
      direction: u,
      groupId: d,
      registerResizeHandle: c,
      startDragging: p,
      stopDragging: f,
      panelGroupElement: v2
    } = i, y2 = me(e.id, "radix-vue-splitter-resize-handle"), m2 = ref("inactive"), x = ref(false), P2 = ref(null);
    return watch(r, () => {
      la && (r.value ? P2.value = null : P2.value = c(y2));
    }, { immediate: true }), watchEffect((D2) => {
      var E, $2;
      if (r.value || P2.value === null)
        return;
      const g = s.value;
      if (!g)
        return;
      ie(g);
      const S = (R2, M, V2) => {
        var O2;
        if (M)
          switch (R2) {
            case "down": {
              m2.value = "drag", p(y2, V2), n("dragging", true);
              break;
            }
            case "move": {
              m2.value !== "drag" && (m2.value = "hover"), (O2 = P2.value) == null || O2.call(P2, V2);
              break;
            }
            case "up": {
              m2.value = "hover", f(), n("dragging", false);
              break;
            }
          }
        else
          m2.value = "inactive";
      };
      D2(Pp(
        y2,
        g,
        u,
        {
          // Coarse inputs (e.g. finger/touch)
          coarse: ((E = e.hitAreaMargins) == null ? void 0 : E.coarse) ?? 15,
          // Fine inputs (e.g. mouse)
          fine: (($2 = e.hitAreaMargins) == null ? void 0 : $2.fine) ?? 5
        },
        S
      ));
    }), Fp({
      disabled: r,
      resizeHandler: P2,
      handleId: y2,
      panelGroupElement: v2
    }), (D2, g) => (openBlock(), createBlock(unref(A), {
      id: unref(y2),
      ref: unref(l),
      style: {
        touchAction: "none",
        userSelect: "none"
      },
      role: "separator",
      "data-resize-handle": "",
      tabindex: D2.tabindex,
      "data-state": m2.value,
      "data-disabled": unref(r) ? "" : void 0,
      "data-orientation": unref(u),
      "data-panel-group-id": unref(d),
      "data-resize-handle-active": m2.value === "drag" ? "pointer" : x.value ? "keyboard" : void 0,
      "data-resize-handle-state": m2.value,
      "data-panel-resize-handle-enabled": !unref(r),
      "data-panel-resize-handle-id": unref(y2),
      onBlur: g[0] || (g[0] = (S) => x.value = false),
      onFocus: g[1] || (g[1] = (S) => x.value = false)
    }, {
      default: withCtx(() => [
        renderSlot(D2.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "tabindex", "data-state", "data-disabled", "data-orientation", "data-panel-group-id", "data-resize-handle-active", "data-resize-handle-state", "data-panel-resize-handle-enabled", "data-panel-resize-handle-id"]));
  }
});
var Lp = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"];
var [Np, zp] = Q("SwitchRoot");
var Yh = defineComponent({
  __name: "SwitchRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: { default: "on" },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { disabled: l } = toRefs(e), s = ne(e, "checked", n, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    });
    function r() {
      l.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: u } = T(), d = ct(u), c = computed(() => {
      var p;
      return e.id && u.value ? (p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return zp({
      checked: s,
      toggleCheck: r,
      disabled: l
    }), (p, f) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(A), mergeProps(p.$attrs, {
        id: p.id,
        ref: unref(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || c.value,
        "aria-checked": unref(s),
        "aria-required": p.required,
        "data-state": unref(s) ? "checked" : "unchecked",
        "data-disabled": unref(l) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: unref(l),
        onClick: r,
        onKeydown: withKeys(withModifiers(r, ["prevent"]), ["enter"])
      }), {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      unref(d) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "",
        disabled: unref(l),
        required: p.required,
        value: p.value,
        checked: !!unref(s),
        "data-state": unref(s) ? "checked" : "unchecked",
        "data-disabled": unref(l) ? "" : void 0,
        style: normalizeStyle({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, Lp)) : createCommentVNode("", true)
    ], 64));
  }
});
var Xh = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = Np();
    return T(), (e, n) => {
      var l;
      return openBlock(), createBlock(unref(A), {
        "data-state": (l = unref(t).checked) != null && l.value ? "checked" : "unchecked",
        "data-disabled": unref(t).disabled.value ? "" : void 0,
        "as-child": e.asChild,
        as: e.as
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
});
var [Ya, Kp] = Q("TabsRoot");
var Zh = defineComponent({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {},
    activationMode: { default: "automatic" },
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { orientation: l, dir: s } = toRefs(e), r = be(s);
    T();
    const i = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), u = ref();
    return Kp({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: l,
      dir: r,
      activationMode: e.activationMode,
      baseId: me(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (openBlock(), createBlock(unref(A), {
      dir: unref(r),
      "data-orientation": unref(l),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
});
var Jh = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { loop: e } = toRefs(t), { forwardRef: n, currentElement: l } = T(), s = Ya();
    return s.tabsList = l, (r, i) => (openBlock(), createBlock(unref(zt), {
      "as-child": "",
      orientation: unref(s).orientation.value,
      dir: unref(s).dir.value,
      loop: unref(e)
    }, {
      default: withCtx(() => [
        createVNode(unref(A), {
          ref: unref(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": unref(s).orientation.value
        }, {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Rs(a2, t) {
  return `${a2}-trigger-${t}`;
}
function As(a2, t) {
  return `${a2}-content-${t}`;
}
var Qh = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T(), n = Ya(), l = computed(() => Rs(n.baseId, t.value)), s = computed(() => As(n.baseId, t.value)), r = computed(() => t.value === n.modelValue.value), i = ref(r.value);
    return onMounted(() => {
      requestAnimationFrame(() => {
        i.value = false;
      });
    }), (u, d) => (openBlock(), createBlock(unref(Ee), {
      present: r.value,
      "force-mount": ""
    }, {
      default: withCtx(({ present: c }) => [
        createVNode(unref(A), {
          id: s.value,
          ref: unref(e),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": unref(n).orientation.value,
          "aria-labelledby": l.value,
          hidden: !c.value,
          tabindex: "0",
          style: normalizeStyle({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: withCtx(() => [
            u.forceMount || r.value ? renderSlot(u.$slots, "default", { key: 0 }) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var ey = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T(), n = Ya(), l = computed(() => Rs(n.baseId, t.value)), s = computed(() => As(n.baseId, t.value)), r = computed(() => t.value === n.modelValue.value);
    return (i, u) => (openBlock(), createBlock(unref(Kt), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: withCtx(() => [
        createVNode(unref(A), {
          id: l.value,
          ref: unref(e),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": r.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": r.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": unref(n).orientation.value,
          onMousedown: u[0] || (u[0] = withModifiers((d) => {
            !i.disabled && d.ctrlKey === false ? unref(n).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = withKeys((d) => unref(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = unref(n).activationMode !== "manual";
            !r.value && !i.disabled && d && unref(n).changeModelValue(i.value);
          })
        }, {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
});
var ty = defineComponent({
  __name: "TabsIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Ya();
    T();
    const n = ref(), l = ref({
      size: null,
      position: null
    });
    watch(() => e.modelValue.value, async (r) => {
      await nextTick(), s();
    }, { immediate: true }), Ge([e.tabsList, n], s);
    function s() {
      var r;
      n.value = (r = e.tabsList.value) == null ? void 0 : r.querySelector('[role="tab"][data-state="active"]'), n.value && (e.orientation.value === "horizontal" ? l.value = {
        size: n.value.offsetWidth,
        position: n.value.offsetLeft
      } : l.value = {
        size: n.value.offsetHeight,
        position: n.value.offsetTop
      });
    }
    return (r, i) => typeof l.value.size == "number" ? (openBlock(), createBlock(unref(A), mergeProps({ key: 0 }, t, {
      style: {
        "--radix-tabs-indicator-size": `${l.value.size}px`,
        "--radix-tabs-indicator-position": `${l.value.position}px`
      }
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"])) : createCommentVNode("", true);
  }
});
var [Xa, Hp] = Q("TagsInputRoot");
var ay = defineComponent({
  __name: "TagsInputRoot",
  props: {
    modelValue: {},
    defaultValue: { default: () => [] },
    addOnPaste: { type: Boolean },
    addOnTab: { type: Boolean },
    addOnBlur: { type: Boolean },
    duplicate: { type: Boolean },
    disabled: { type: Boolean },
    delimiter: { default: "," },
    dir: {},
    max: { default: 0 },
    required: { type: Boolean },
    name: {},
    id: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "invalid"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { addOnPaste: l, disabled: s, delimiter: r, max: i, id: u, dir: d, addOnBlur: c, addOnTab: p } = toRefs(e), f = be(d), v2 = ne(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: true,
      deep: true
    }), { forwardRef: y2, currentElement: m2 } = T(), { focused: x } = Mr(m2), P2 = ct(m2), { getItems: D2 } = Aa(), g = ref(), S = ref(false);
    return Hp({
      modelValue: v2,
      onAddValue: (E) => {
        if (v2.value.length >= i.value && i.value)
          return n("invalid", E), false;
        if (e.duplicate)
          return v2.value.push(E), true;
        if (v2.value.includes(E))
          S.value = true;
        else
          return v2.value.push(E), true;
        return n("invalid", E), false;
      },
      onRemoveValue: (E) => {
        E !== -1 && v2.value.splice(E, 1);
      },
      onInputKeydown: (E) => {
        const $2 = E.target, R2 = D2().map((V2) => V2.ref).filter((V2) => V2.dataset.disabled !== "");
        if (!R2.length)
          return;
        const M = R2.at(-1);
        switch (E.key) {
          case "Delete":
          case "Backspace": {
            if ($2.selectionStart !== 0 || $2.selectionEnd !== 0)
              break;
            if (g.value) {
              const V2 = R2.findIndex((O2) => O2 === g.value);
              v2.value.splice(V2, 1), g.value = g.value === M ? R2.at(V2 - 1) : R2.at(V2 + 1), E.preventDefault();
            } else
              E.key === "Backspace" && (g.value = M, E.preventDefault());
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const V2 = E.key === "ArrowRight" && f.value === "ltr" || E.key === "ArrowLeft" && f.value === "rtl", O2 = !V2;
            if ($2.selectionStart !== 0 || $2.selectionEnd !== 0)
              break;
            if (O2 && !g.value)
              g.value = M, E.preventDefault();
            else if (V2 && M && g.value === M)
              g.value = void 0, E.preventDefault();
            else if (g.value) {
              const L = Vt(E, g.value, void 0, {
                itemsArray: R2,
                loop: false,
                dir: f.value
              });
              L && (g.value = L), E.preventDefault();
            }
            break;
          }
          case "ArrowUp":
          case "ArrowDown": {
            g.value && E.preventDefault();
            break;
          }
          default:
            g.value = void 0;
        }
      },
      selectedElement: g,
      isInvalidInput: S,
      addOnPaste: l,
      addOnBlur: c,
      addOnTab: p,
      dir: f,
      disabled: s,
      delimiter: r,
      max: i,
      id: u
    }), (E, $2) => (openBlock(), createBlock(unref(Oa), null, {
      default: withCtx(() => [
        createVNode(unref(A), {
          ref: unref(y2),
          dir: unref(f),
          as: E.as,
          "as-child": E.asChild,
          "data-invalid": S.value ? "" : void 0,
          "data-disabled": unref(s) ? "" : void 0,
          "data-focused": unref(x) ? "" : void 0
        }, {
          default: withCtx(() => [
            renderSlot(E.$slots, "default", { modelValue: unref(v2) }),
            unref(P2) && E.name ? (openBlock(), createBlock(unref(zn), {
              key: 0,
              name: E.name,
              value: unref(v2),
              required: E.required,
              disabled: unref(s)
            }, null, 8, ["name", "value", "required", "disabled"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["dir", "as", "as-child", "data-invalid", "data-disabled", "data-focused"])
      ]),
      _: 3
    }));
  }
});
var ny = defineComponent({
  __name: "TagsInputInput",
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, e = Xa(), { forwardRef: n, currentElement: l } = T();
    function s(c) {
      if (!e.addOnBlur.value)
        return;
      const p = c.target;
      if (!p.value)
        return;
      e.onAddValue(p.value) && (p.value = "");
    }
    function r(c) {
      e.addOnTab.value && i(c);
    }
    async function i(c) {
      if (await nextTick(), c.defaultPrevented)
        return;
      const p = c.target;
      if (!p.value)
        return;
      e.onAddValue(p.value) && (p.value = ""), c.preventDefault();
    }
    function u(c) {
      e.isInvalidInput.value = false;
      const p = e.delimiter.value;
      if (p === c.data) {
        const f = c.target;
        f.value = f.value.replaceAll(p, ""), e.onAddValue(f.value) && (f.value = "");
      }
    }
    function d(c) {
      if (e.addOnPaste.value) {
        c.preventDefault();
        const p = c.clipboardData;
        if (!p)
          return;
        const f = p.getData("text");
        e.delimiter.value ? f.split(e.delimiter.value).forEach((y2) => {
          e.onAddValue(y2);
        }) : e.onAddValue(f);
      }
    }
    return onMounted(() => {
      const c = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      c && setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1);
    }), (c, p) => {
      var f;
      return openBlock(), createBlock(unref(A), {
        id: (f = unref(e).id) == null ? void 0 : f.value,
        ref: unref(n),
        type: "text",
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        as: c.as,
        "as-child": c.asChild,
        maxlength: c.maxLength,
        placeholder: c.placeholder,
        disabled: unref(e).disabled.value,
        "data-invalid": unref(e).isInvalidInput.value ? "" : void 0,
        onInput: u,
        onKeydown: [
          withKeys(i, ["enter"]),
          withKeys(r, ["tab"]),
          unref(e).onInputKeydown
        ],
        onBlur: s,
        onPaste: d
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "as", "as-child", "maxlength", "placeholder", "disabled", "data-invalid", "onKeydown"]);
    };
  }
});
var [Os, Wp] = Q("TagsInputItem");
var oy = defineComponent({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { value: e } = toRefs(t), n = Xa(), { forwardRef: l, currentElement: s } = T(), r = computed(() => n.selectedElement.value === s.value), i = computed(() => t.disabled || n.disabled.value), u = Wp({
      value: e,
      isSelected: r,
      disabled: i,
      textId: ""
    });
    return (d, c) => (openBlock(), createBlock(unref(ka), null, {
      default: withCtx(() => [
        createVNode(unref(A), {
          ref: unref(l),
          as: d.as,
          "as-child": d.asChild,
          "aria-labelledby": unref(u).textId,
          "aria-current": r.value,
          "data-disabled": i.value ? "" : void 0,
          "data-state": r.value ? "active" : "inactive"
        }, {
          default: withCtx(() => [
            renderSlot(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-labelledby", "aria-current", "data-disabled", "data-state"])
      ]),
      _: 3
    }));
  }
});
var ly = defineComponent({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = Os();
    return T(), e.textId || (e.textId = me(void 0, "radix-vue-tags-input-item-text")), (n, l) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      id: unref(e).textId
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(unref(e).value.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var sy = defineComponent({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Xa(), n = Os(), l = computed(() => {
      var r;
      return ((r = n.disabled) == null ? void 0 : r.value) || e.disabled.value;
    });
    function s() {
      if (l.value)
        return;
      const r = e.modelValue.value.findIndex((i) => i === n.value.value);
      e.onRemoveValue(r);
    }
    return (r, i) => (openBlock(), createBlock(unref(A), mergeProps({ tabindex: "-1" }, t, {
      "aria-labelledby": unref(n).textId,
      "aria-current": unref(n).isSelected.value,
      "data-state": unref(n).isSelected.value ? "active" : "inactive",
      "data-disabled": l.value ? "" : void 0,
      type: r.as === "button" ? "button" : void 0,
      onClick: s
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby", "aria-current", "data-state", "data-disabled", "type"]));
  }
});
var ry = defineComponent({
  __name: "TagsInputClear",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    T();
    const e = Xa();
    function n() {
      e.disabled.value || (e.modelValue.value = []);
    }
    return (l, s) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      type: l.as === "button" ? "button" : void 0,
      "data-disabled": unref(e).disabled.value ? "" : void 0,
      onClick: n
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "data-disabled"]));
  }
});
var [Za, jp] = Q("ToastProvider");
var iy = defineComponent({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(a2) {
    const t = a2, { label: e, duration: n, swipeDirection: l, swipeThreshold: s } = toRefs(t), r = ref(), i = ref(0), u = ref(false), d = ref(false);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return jp({
      label: e,
      duration: n,
      swipeDirection: l,
      swipeThreshold: s,
      toastCount: i,
      viewport: r,
      onViewportChange(c) {
        r.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (c, p) => renderSlot(c.$slots, "default");
  }
});
var Up = "toast.swipeStart";
var Gp = "toast.swipeMove";
var qp = "toast.swipeCancel";
var Yp = "toast.swipeEnd";
var Cn = "toast.viewportPause";
var wn = "toast.viewportResume";
function ya(a2, t, e) {
  const n = e.originalEvent.currentTarget, l = new CustomEvent(a2, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && n.addEventListener(a2, t, { once: true }), n.dispatchEvent(l);
}
function Vo(a2, t, e = 0) {
  const n = Math.abs(a2.x), l = Math.abs(a2.y), s = n > l;
  return t === "left" || t === "right" ? s && n > e : !s && l > e;
}
function Xp(a2) {
  return a2.nodeType === a2.ELEMENT_NODE;
}
function ks(a2) {
  const t = [];
  return Array.from(a2.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Xp(n)) {
      const l = n.ariaHidden || n.hidden || n.style.display === "none", s = n.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (s) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...ks(n));
    }
  }), t;
}
var Zp = defineComponent({
  __name: "ToastAnnounce",
  setup(a2) {
    const t = Za(), e = Br(1e3), n = ref(false);
    return sl(() => {
      n.value = true;
    }), (l, s) => unref(e) || n.value ? (openBlock(), createBlock(unref(Nt), { key: 0 }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(unref(t).label.value) + " ", 1),
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    })) : createCommentVNode("", true);
  }
});
var [Jp, Qp] = Q("ToastRoot");
var ef = defineComponent({
  inheritAttrs: false,
  __name: "ToastRootImpl",
  props: {
    type: {},
    open: { type: Boolean, default: false },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["close", "escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = T(), r = Za(), i = ref(null), u = ref(null), d = computed(() => e.duration || r.duration.value), c = ref(0), p = ref(d.value), f = ref(0), v2 = ref(d.value), y2 = sl(() => {
      const D2 = (/* @__PURE__ */ new Date()).getTime() - c.value;
      v2.value = Math.max(p.value - D2, 0);
    }, { fpsLimit: 60 });
    function m2(D2) {
      !D2 || D2 === Number.POSITIVE_INFINITY || (window.clearTimeout(f.value), c.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(x, D2));
    }
    function x() {
      var g, S;
      ((g = s.value) == null ? void 0 : g.contains(document.activeElement)) && ((S = r.viewport.value) == null || S.focus()), r.isClosePausedRef.value = false, n("close");
    }
    const P2 = computed(() => s.value ? ks(s.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const D2 = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(D2);
    }
    return watchEffect((D2) => {
      const g = r.viewport.value;
      if (g) {
        const S = () => {
          m2(p.value), y2.resume(), n("resume");
        }, E = () => {
          const $2 = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - $2, window.clearTimeout(f.value), y2.pause(), n("pause");
        };
        return g.addEventListener(Cn, E), g.addEventListener(wn, S), () => {
          g.removeEventListener(Cn, E), g.removeEventListener(wn, S);
        };
      }
    }), watch(() => [e.open, d.value], () => {
      p.value = d.value, e.open && !r.isClosePausedRef.value && m2(d.value);
    }, { immediate: true }), In("Escape", (D2) => {
      n("escapeKeyDown", D2), D2.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = true, x());
    }), onMounted(() => {
      r.onToastAdd();
    }), onUnmounted(() => {
      r.onToastRemove();
    }), Qp({ onClose: x }), (D2, g) => (openBlock(), createElementBlock(Fragment, null, [
      P2.value ? (openBlock(), createBlock(Zp, {
        key: 0,
        role: "status",
        "aria-live": D2.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(P2.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : createCommentVNode("", true),
      (openBlock(), createBlock(Teleport, {
        to: unref(r).viewport.value
      }, [
        createVNode(unref(A), mergeProps({
          ref: unref(l),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, D2.$attrs, {
          as: D2.as,
          "as-child": D2.asChild,
          "data-state": D2.open ? "open" : "closed",
          "data-swipe-direction": unref(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: g[0] || (g[0] = withModifiers((S) => {
            i.value = { x: S.clientX, y: S.clientY };
          }, ["left"])),
          onPointermove: g[1] || (g[1] = (S) => {
            if (!i.value)
              return;
            const E = S.clientX - i.value.x, $2 = S.clientY - i.value.y, R2 = !!u.value, M = ["left", "right"].includes(unref(r).swipeDirection.value), V2 = ["left", "up"].includes(unref(r).swipeDirection.value) ? Math.min : Math.max, O2 = M ? V2(0, E) : 0, L = M ? 0 : V2(0, $2), j2 = S.pointerType === "touch" ? 10 : 2, J2 = { x: O2, y: L }, W2 = { originalEvent: S, delta: J2 };
            R2 ? (u.value = J2, unref(ya)(unref(Gp), (X2) => n("swipeMove", X2), W2)) : unref(Vo)(J2, unref(r).swipeDirection.value, j2) ? (u.value = J2, unref(ya)(unref(Up), (X2) => n("swipeStart", X2), W2), S.target.setPointerCapture(S.pointerId)) : (Math.abs(E) > j2 || Math.abs($2) > j2) && (i.value = null);
          }),
          onPointerup: g[2] || (g[2] = (S) => {
            const E = u.value, $2 = S.target;
            if ($2.hasPointerCapture(S.pointerId) && $2.releasePointerCapture(S.pointerId), u.value = null, i.value = null, E) {
              const R2 = S.currentTarget, M = { originalEvent: S, delta: E };
              unref(Vo)(E, unref(r).swipeDirection.value, unref(r).swipeThreshold.value) ? unref(ya)(unref(Yp), (V2) => n("swipeEnd", V2), M) : unref(ya)(unref(qp), (V2) => n("swipeCancel", V2), M), R2 == null || R2.addEventListener("click", (V2) => V2.preventDefault(), {
                once: true
              });
            }
          })
        }), {
          default: withCtx(() => [
            renderSlot(D2.$slots, "default", { remaining: v2.value })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"]))
    ], 64));
  }
});
var uy = defineComponent({
  __name: "ToastRoot",
  props: {
    defaultOpen: { type: Boolean, default: true },
    forceMount: { type: Boolean },
    type: { default: "foreground" },
    open: { type: Boolean, default: void 0 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l } = T(), s = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (r, i) => (openBlock(), createBlock(unref(Ee), {
      present: r.forceMount || unref(s)
    }, {
      default: withCtx(() => [
        createVNode(ef, mergeProps({
          ref: unref(l),
          open: unref(s),
          type: r.type,
          as: r.as,
          "as-child": r.asChild,
          duration: r.duration
        }, r.$attrs, {
          onClose: i[0] || (i[0] = (u) => s.value = false),
          onPause: i[1] || (i[1] = (u) => n("pause")),
          onResume: i[2] || (i[2] = (u) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => n("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            n("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), s.value = false;
          })
        }), {
          default: withCtx(({ remaining: u }) => [
            renderSlot(r.$slots, "default", { remaining: u })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Ms = defineComponent({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    return (t, e) => (openBlock(), createBlock(unref(A), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
});
var tf = defineComponent({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Jp(), { forwardRef: n } = T();
    return (l, s) => (openBlock(), createBlock(Ms, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(A), mergeProps(t, {
          ref: unref(n),
          type: l.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => unref(e).onClose())
        }), {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
});
var dy = defineComponent({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    if (!a2.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = T();
    return (n, l) => n.altText ? (openBlock(), createBlock(Ms, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: withCtx(() => [
        createVNode(tf, {
          ref: unref(e),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : createCommentVNode("", true);
  }
});
var Fo = defineComponent({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(a2, { emit: t }) {
    const e = t, n = Za();
    return (l, s) => (openBlock(), createBlock(unref(Nt), {
      "aria-hidden": "",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (r) => {
        var d;
        const i = r.relatedTarget;
        !((d = unref(n).viewport.value) != null && d.contains(i)) && e("focusFromOutsideViewport");
      })
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var cy = defineComponent({
  inheritAttrs: false,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(a2) {
    const t = a2, { hotkey: e, label: n } = toRefs(t), { forwardRef: l, currentElement: s } = T(), { createCollection: r } = Re(), i = r(s), u = Za(), d = computed(() => u.toastCount.value > 0), c = ref(), p = ref(), f = computed(() => e.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    In(e.value, () => {
      s.value.focus();
    }), onMounted(() => {
      u.onViewportChange(s.value);
    }), watchEffect((y2) => {
      const m2 = s.value;
      if (d.value && m2) {
        const x = () => {
          if (!u.isClosePausedRef.value) {
            const E = new CustomEvent(Cn);
            m2.dispatchEvent(E), u.isClosePausedRef.value = true;
          }
        }, P2 = () => {
          if (u.isClosePausedRef.value) {
            const E = new CustomEvent(wn);
            m2.dispatchEvent(E), u.isClosePausedRef.value = false;
          }
        }, D2 = (E) => {
          !m2.contains(E.relatedTarget) && P2();
        }, g = () => {
          m2.contains(document.activeElement) || P2();
        }, S = (E) => {
          var M, V2, O2;
          const $2 = E.altKey || E.ctrlKey || E.metaKey;
          if (E.key === "Tab" && !$2) {
            const L = document.activeElement, j2 = E.shiftKey;
            if (E.target === m2 && j2) {
              (M = c.value) == null || M.focus();
              return;
            }
            const X2 = v2({ tabbingDirection: j2 ? "backwards" : "forwards" }), N = X2.findIndex((q2) => q2 === L);
            ga(X2.slice(N + 1)) ? E.preventDefault() : j2 ? (V2 = c.value) == null || V2.focus() : (O2 = p.value) == null || O2.focus();
          }
        };
        m2.addEventListener("focusin", x), m2.addEventListener("focusout", D2), m2.addEventListener("pointermove", x), m2.addEventListener("pointerleave", g), m2.addEventListener("keydown", S), window.addEventListener("blur", x), window.addEventListener("focus", P2), y2(() => {
          m2.removeEventListener("focusin", x), m2.removeEventListener("focusout", D2), m2.removeEventListener("pointermove", x), m2.removeEventListener("pointerleave", g), m2.removeEventListener("keydown", S), window.removeEventListener("blur", x), window.removeEventListener("focus", P2);
        });
      }
    });
    function v2({ tabbingDirection: y2 }) {
      const x = i.value.map((P2) => {
        const D2 = [P2, ...Fn(P2)];
        return y2 === "forwards" ? D2 : D2.reverse();
      });
      return (y2 === "forwards" ? x.reverse() : x).flat();
    }
    return (y2, m2) => (openBlock(), createBlock(unref(Ci), {
      role: "region",
      "aria-label": typeof unref(n) == "string" ? unref(n).replace("{hotkey}", f.value) : unref(n)(f.value),
      tabindex: "-1",
      style: normalizeStyle({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: withCtx(() => [
        d.value ? (openBlock(), createBlock(Fo, {
          key: 0,
          ref: (x) => {
            c.value = unref(Be)(x);
          },
          onFocusFromOutsideViewport: m2[0] || (m2[0] = () => {
            const x = v2({
              tabbingDirection: "forwards"
            });
            unref(ga)(x);
          })
        }, null, 512)) : createCommentVNode("", true),
        createVNode(unref(A), mergeProps({
          ref: unref(l),
          tabindex: "-1",
          as: y2.as,
          "as-child": y2.asChild
        }, y2.$attrs), {
          default: withCtx(() => [
            renderSlot(y2.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (openBlock(), createBlock(Fo, {
          key: 1,
          ref: (x) => {
            p.value = unref(Be)(x);
          },
          onFocusFromOutsideViewport: m2[1] || (m2[1] = () => {
            const x = v2({
              tabbingDirection: "backwards"
            });
            unref(ga)(x);
          })
        }, null, 512)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
});
var py = defineComponent({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var fy = defineComponent({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var af = defineComponent({
  __name: "Toggle",
  props: {
    defaultValue: { type: Boolean },
    pressed: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:pressed"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    T();
    const l = ne(e, "pressed", n, {
      defaultValue: e.defaultValue,
      passive: e.pressed === void 0
    });
    function s() {
      l.value = !l.value;
    }
    const r = computed(() => l.value ? "on" : "off");
    return (i, u) => (openBlock(), createBlock(unref(A), {
      type: i.as === "button" ? "button" : void 0,
      "as-child": e.asChild,
      as: i.as,
      "aria-pressed": unref(l),
      "data-state": r.value,
      "data-disabled": i.disabled ? "" : void 0,
      disabled: i.disabled,
      onClick: s
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as-child", "as", "aria-pressed", "data-state", "data-disabled", "disabled"]));
  }
});
var [nf, of] = Q("ToggleGroupRoot");
var lf = defineComponent({
  __name: "ToggleGroupRoot",
  props: {
    rovingFocus: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    orientation: {},
    dir: {},
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {},
    type: { default: "single" },
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { loop: l, rovingFocus: s, disabled: r, dir: i } = toRefs(e), u = be(i), { forwardRef: d } = T(), { modelValue: c, changeModelValue: p, isSingle: f } = ml(e, n);
    return of({
      isSingle: f,
      modelValue: c,
      changeModelValue: p,
      dir: u,
      orientation: e.orientation,
      loop: l,
      rovingFocus: s,
      disabled: r
    }), (v2, y2) => (openBlock(), createBlock(resolveDynamicComponent(unref(s) ? unref(zt) : unref(A)), {
      "as-child": "",
      orientation: unref(s) ? v2.orientation : void 0,
      dir: unref(u),
      loop: unref(s) ? unref(l) : void 0
    }, {
      default: withCtx(() => [
        createVNode(unref(A), {
          ref: unref(d),
          role: "group",
          "as-child": v2.asChild,
          as: v2.as
        }, {
          default: withCtx(() => [
            renderSlot(v2.$slots, "default", { modelValue: unref(c) })
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var sf = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = nf(), n = computed(() => {
      var i;
      return ((i = e.disabled) == null ? void 0 : i.value) || t.disabled;
    }), l = computed(() => {
      var i;
      return (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), s = computed(() => {
      var i;
      return e.isSingle.value ? e.modelValue.value === t.value : (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), { forwardRef: r } = T();
    return (i, u) => (openBlock(), createBlock(resolveDynamicComponent(unref(e).rovingFocus.value ? unref(Kt) : unref(A)), {
      "as-child": "",
      focusable: !n.value,
      active: l.value
    }, {
      default: withCtx(() => [
        createVNode(unref(af), mergeProps(t, {
          ref: unref(r),
          disabled: n.value,
          pressed: s.value,
          "onUpdate:pressed": u[0] || (u[0] = (d) => unref(e).changeModelValue(i.value))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["disabled", "pressed"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
});
var [Vs, rf] = Q("ToolbarRoot");
var vy = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { orientation: e, dir: n } = toRefs(t), l = be(n), { forwardRef: s } = T();
    return rf({ orientation: e, dir: l }), (r, i) => (openBlock(), createBlock(unref(zt), {
      "as-child": "",
      orientation: unref(e),
      dir: unref(l),
      loop: r.loop
    }, {
      default: withCtx(() => [
        createVNode(unref(A), {
          ref: unref(s),
          role: "toolbar",
          "aria-orientation": unref(e),
          "as-child": r.asChild,
          as: r.as
        }, {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-orientation", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var uf = defineComponent({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T();
    return (n, l) => (openBlock(), createBlock(unref(Kt), {
      "as-child": "",
      focusable: !n.disabled
    }, {
      default: withCtx(() => [
        createVNode(unref(A), mergeProps({
          ref: unref(e),
          type: n.as === "button" ? "button" : void 0
        }, t), {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }, 8, ["focusable"]));
  }
});
var my = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T();
    return (n, l) => (openBlock(), createBlock(unref(Kt), {
      "as-child": "",
      focusable: ""
    }, {
      default: withCtx(() => [
        createVNode(unref(A), mergeProps(t, {
          ref: unref(e),
          onKeydown: l[0] || (l[0] = (s) => {
            var r;
            s.key === " " && ((r = s.currentTarget) == null || r.click());
          })
        }), {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
});
var hy = defineComponent({
  __name: "ToolbarToggleGroup",
  props: {
    rovingFocus: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Vs(), s = Ie(n);
    return T(), (r, i) => (openBlock(), createBlock(unref(lf), mergeProps({ ...e, ...unref(s) }, {
      "data-orientation": unref(l).orientation.value,
      dir: unref(l).dir.value,
      "roving-focus": false
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-orientation", "dir"]));
  }
});
var yy = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T();
    return (n, l) => (openBlock(), createBlock(uf, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(sf), mergeProps(t, { ref: unref(e) }), {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
});
var gy = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Vs();
    return T(), (n, l) => (openBlock(), createBlock(ls, {
      orientation: unref(e).orientation.value,
      "as-child": t.asChild,
      as: n.as
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["orientation", "as-child", "as"]));
  }
});
var Fs = "tooltip.open";
var [go, df] = Q("TooltipProvider");
var by = defineComponent({
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: false },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean, default: false }
  },
  setup(a2) {
    const t = a2, { delayDuration: e, skipDelayDuration: n, disableHoverableContent: l, disableClosingTrigger: s, ignoreNonKeyboardFocus: r, disabled: i } = toRefs(t);
    T();
    const u = ref(true), d = ref(false), { start: c, stop: p } = Tn(() => {
      u.value = true;
    }, n, { immediate: false });
    return df({
      isOpenDelayed: u,
      delayDuration: e,
      onOpen() {
        p(), u.value = false;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: l,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (f, v2) => renderSlot(f.$slots, "default");
  }
});
var [Ja, cf] = Q("TooltipRoot");
var Cy = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    ignoreNonKeyboardFocus: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    T();
    const l = go(), s = computed(() => e.disableHoverableContent ?? l.disableHoverableContent.value), r = computed(() => e.disableClosingTrigger ?? l.disableClosingTrigger.value), i = computed(() => e.disabled ?? l.disabled.value), u = computed(() => e.delayDuration ?? l.delayDuration.value), d = computed(() => e.ignoreNonKeyboardFocus ?? l.ignoreNonKeyboardFocus.value), c = ne(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    watch(c, (g) => {
      l.onClose && (g ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Fs))) : l.onClose());
    });
    const p = ref(false), f = ref(), v2 = computed(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: y2, stop: m2 } = Tn(() => {
      p.value = true, c.value = true;
    }, u, { immediate: false });
    function x() {
      m2(), p.value = false, c.value = true;
    }
    function P2() {
      m2(), c.value = false;
    }
    function D2() {
      y2();
    }
    return cf({
      contentId: "",
      open: c,
      stateAttribute: v2,
      trigger: f,
      onTriggerChange(g) {
        f.value = g;
      },
      onTriggerEnter() {
        l.isOpenDelayed.value ? D2() : x();
      },
      onTriggerLeave() {
        s.value ? P2() : m2();
      },
      onOpen: x,
      onClose: P2,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (g, S) => (openBlock(), createBlock(unref(xt), null, {
      default: withCtx(() => [
        renderSlot(g.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var wy = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Ja(), n = go();
    e.contentId || (e.contentId = me(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: l, currentElement: s } = T(), r = ref(false), i = ref(false), u = computed(() => e.disabled.value ? {} : {
      click: m2,
      focus: v2,
      pointermove: p,
      pointerleave: f,
      pointerdown: c,
      blur: y2
    });
    onMounted(() => {
      e.onTriggerChange(s.value);
    });
    function d() {
      r.value = false;
    }
    function c() {
      r.value = true, document.addEventListener("pointerup", d, { once: true });
    }
    function p(x) {
      x.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (e.onTriggerEnter(), i.value = true);
    }
    function f() {
      e.onTriggerLeave(), i.value = false;
    }
    function v2(x) {
      var P2, D2;
      r.value || e.ignoreNonKeyboardFocus.value && !((D2 = (P2 = x.target).matches) != null && D2.call(P2, ":focus-visible")) || e.onOpen();
    }
    function y2() {
      e.onClose();
    }
    function m2() {
      e.disableClosingTrigger.value || e.onClose();
    }
    return (x, P2) => (openBlock(), createBlock(unref(St), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(A), mergeProps({
          ref: unref(l),
          "aria-describedby": unref(e).open.value ? unref(e).contentId : void 0,
          "data-state": unref(e).stateAttribute.value,
          as: x.as,
          "as-child": t.asChild
        }, toHandlers(u.value)), {
          default: withCtx(() => [
            renderSlot(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
});
var Ls = defineComponent({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Ja(), { forwardRef: s } = T(), r = useSlots(), i = computed(() => {
      var c;
      return (c = r.default) == null ? void 0 : c.call(r);
    }), u = computed(() => {
      var f;
      if (e.ariaLabel)
        return e.ariaLabel;
      let c = "";
      function p(v2) {
        typeof v2.children == "string" ? c += v2.children : Array.isArray(v2.children) && v2.children.forEach((y2) => p(y2));
      }
      return (f = i.value) == null || f.forEach((v2) => p(v2)), c;
    }), d = computed(() => {
      const { ariaLabel: c, ...p } = e;
      return p;
    });
    return onMounted(() => {
      it(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(l.trigger.value) && l.onClose();
      }), it(window, Fs, l.onClose);
    }), (c, p) => (openBlock(), createBlock(unref(vt), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: p[0] || (p[0] = (f) => n("escapeKeyDown", f)),
      onPointerDownOutside: p[1] || (p[1] = (f) => {
        var v2;
        unref(l).disableClosingTrigger.value && ((v2 = unref(l).trigger.value) != null && v2.contains(f.target)) && f.preventDefault(), n("pointerDownOutside", f);
      }),
      onFocusOutside: p[2] || (p[2] = withModifiers(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (f) => unref(l).onClose())
    }, {
      default: withCtx(() => [
        createVNode(unref(Ct), mergeProps({
          ref: unref(s),
          "data-state": unref(l).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default"),
            createVNode(unref(Nt), {
              id: unref(l).contentId,
              role: "tooltip"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(u.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }));
  }
});
var pf = defineComponent({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  setup(a2) {
    const e = _t(a2), { forwardRef: n, currentElement: l } = T(), { trigger: s, onClose: r } = Ja(), i = go(), { isPointerInTransit: u, onPointerExit: d } = il(s, l);
    return i.isPointerInTransitRef = u, d(() => {
      r();
    }), (c, p) => (openBlock(), createBlock(Ls, mergeProps({ ref: unref(n) }, unref(e)), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _y = defineComponent({
  __name: "TooltipContent",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Ja(), s = _e(e, n), { forwardRef: r } = T();
    return (i, u) => unref(l).open.value ? (openBlock(), createBlock(resolveDynamicComponent(unref(l).disableHoverableContent.value ? Ls : pf), mergeProps({
      key: 0,
      ref: unref(r)
    }, unref(s)), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var xy = defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return T(), (e, n) => (openBlock(), createBlock(unref(Lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Sy = defineComponent({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ft), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Py = defineComponent({
  __name: "Viewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = T();
    return (n, l) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(A), mergeProps({ ...n.$attrs, ...t }, {
        ref: unref(e),
        "data-radix-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        }
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      createVNode(unref(A), {
        as: "style",
        nonce: n.nonce
      }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
export {
  wf as AccordionContent,
  _f as AccordionHeader,
  Cf as AccordionItem,
  bf as AccordionRoot,
  xf as AccordionTrigger,
  Af as AlertDialogAction,
  Tf as AlertDialogCancel,
  $f as AlertDialogContent,
  Rf as AlertDialogDescription,
  Bf as AlertDialogOverlay,
  Df as AlertDialogPortal,
  Pf as AlertDialogRoot,
  If as AlertDialogTitle,
  Ef as AlertDialogTrigger,
  Of as AspectRatio,
  Vf as AvatarFallback,
  Mf as AvatarImage,
  kf as AvatarRoot,
  eu as CalendarCell,
  ru as CalendarCellTrigger,
  Qi as CalendarGrid,
  lu as CalendarGridBody,
  ou as CalendarGridHead,
  su as CalendarGridRow,
  tu as CalendarHeadCell,
  Zi as CalendarHeader,
  Ji as CalendarHeading,
  au as CalendarNext,
  nu as CalendarPrev,
  Xi as CalendarRoot,
  Lf as CheckboxIndicator,
  Ff as CheckboxRoot,
  ii as CollapsibleContent,
  li as CollapsibleRoot,
  si as CollapsibleTrigger,
  Kf as ComboboxAnchor,
  Qf as ComboboxArrow,
  Wf as ComboboxCancel,
  Gf as ComboboxContent,
  qf as ComboboxEmpty,
  jf as ComboboxGroup,
  zf as ComboboxInput,
  Xf as ComboboxItem,
  Zf as ComboboxItemIndicator,
  Uf as ComboboxLabel,
  ev as ComboboxPortal,
  Nf as ComboboxRoot,
  Jf as ComboboxSeparator,
  Hf as ComboboxTrigger,
  Yf as ComboboxViewport,
  yf as ConfigProvider,
  lv as ContextMenuArrow,
  uv as ContextMenuCheckboxItem,
  ov as ContextMenuContent,
  rv as ContextMenuGroup,
  sv as ContextMenuItem,
  dv as ContextMenuItemIndicator,
  cv as ContextMenuLabel,
  nv as ContextMenuPortal,
  pv as ContextMenuRadioGroup,
  fv as ContextMenuRadioItem,
  tv as ContextMenuRoot,
  iv as ContextMenuSeparator,
  vv as ContextMenuSub,
  mv as ContextMenuSubContent,
  hv as ContextMenuSubTrigger,
  av as ContextMenuTrigger,
  ud as DateFieldInput,
  Ju as DateFieldRoot,
  Rv as DatePickerAnchor,
  Av as DatePickerArrow,
  Tv as DatePickerCalendar,
  Cv as DatePickerCell,
  Dv as DatePickerCellTrigger,
  Ov as DatePickerClose,
  Mv as DatePickerContent,
  Iv as DatePickerField,
  bv as DatePickerGrid,
  Pv as DatePickerGridBody,
  Sv as DatePickerGridHead,
  Ev as DatePickerGridRow,
  wv as DatePickerHeadCell,
  yv as DatePickerHeader,
  gv as DatePickerHeading,
  $v as DatePickerInput,
  _v as DatePickerNext,
  xv as DatePickerPrev,
  Bv as DatePickerRoot,
  kv as DatePickerTrigger,
  hd as DateRangeFieldInput,
  md as DateRangeFieldRoot,
  Jv as DateRangePickerAnchor,
  Qv as DateRangePickerArrow,
  Xv as DateRangePickerCalendar,
  Nv as DateRangePickerCell,
  Gv as DateRangePickerCellTrigger,
  em as DateRangePickerClose,
  am as DateRangePickerContent,
  Zv as DateRangePickerField,
  Lv as DateRangePickerGrid,
  jv as DateRangePickerGridBody,
  Wv as DateRangePickerGridHead,
  Uv as DateRangePickerGridRow,
  zv as DateRangePickerHeadCell,
  Vv as DateRangePickerHeader,
  Fv as DateRangePickerHeading,
  qv as DateRangePickerInput,
  Kv as DateRangePickerNext,
  Hv as DateRangePickerPrev,
  Yv as DateRangePickerRoot,
  tm as DateRangePickerTrigger,
  bl as DialogClose,
  Vi as DialogContent,
  zi as DialogDescription,
  Li as DialogOverlay,
  Sf as DialogPortal,
  vi as DialogRoot,
  Ni as DialogTitle,
  mi as DialogTrigger,
  rm as DropdownMenuArrow,
  cm as DropdownMenuCheckboxItem,
  sm as DropdownMenuContent,
  um as DropdownMenuGroup,
  im as DropdownMenuItem,
  pm as DropdownMenuItemIndicator,
  fm as DropdownMenuLabel,
  lm as DropdownMenuPortal,
  vm as DropdownMenuRadioGroup,
  mm as DropdownMenuRadioItem,
  nm as DropdownMenuRoot,
  dm as DropdownMenuSeparator,
  hm as DropdownMenuSub,
  ym as DropdownMenuSubContent,
  gm as DropdownMenuSubTrigger,
  om as DropdownMenuTrigger,
  xm as HoverCardArrow,
  _m as HoverCardContent,
  wm as HoverCardPortal,
  bm as HoverCardRoot,
  Cm as HoverCardTrigger,
  Sm as Label,
  Em as ListboxContent,
  Dm as ListboxFilter,
  Im as ListboxGroup,
  Rm as ListboxGroupLabel,
  $m as ListboxItem,
  Bm as ListboxItemIndicator,
  Pm as ListboxRoot,
  Tm as ListboxVirtualizer,
  Fm as MenubarArrow,
  Km as MenubarCheckboxItem,
  Vm as MenubarContent,
  Nm as MenubarGroup,
  Lm as MenubarItem,
  Hm as MenubarItemIndicator,
  Wm as MenubarLabel,
  Om as MenubarMenu,
  Mm as MenubarPortal,
  jm as MenubarRadioGroup,
  Um as MenubarRadioItem,
  Am as MenubarRoot,
  zm as MenubarSeparator,
  Gm as MenubarSub,
  qm as MenubarSubContent,
  Ym as MenubarSubTrigger,
  km as MenubarTrigger,
  Jm as NavigationMenuContent,
  Qm as NavigationMenuIndicator,
  Zm as NavigationMenuItem,
  eh as NavigationMenuLink,
  th as NavigationMenuList,
  Xm as NavigationMenuRoot,
  ah as NavigationMenuSub,
  nh as NavigationMenuTrigger,
  oh as NavigationMenuViewport,
  sh as PaginationEllipsis,
  rh as PaginationFirst,
  ih as PaginationLast,
  uh as PaginationList,
  dh as PaginationListItem,
  ch as PaginationNext,
  ph as PaginationPrev,
  lh as PaginationRoot,
  vh as PinInputInput,
  fh as PinInputRoot,
  Xl as PopoverAnchor,
  ql as PopoverArrow,
  Yl as PopoverClose,
  Gl as PopoverContent,
  jl as PopoverPortal,
  Hl as PopoverRoot,
  Wl as PopoverTrigger,
  A as Primitive,
  hh as ProgressIndicator,
  mh as ProgressRoot,
  bh as RadioGroupIndicator,
  gh as RadioGroupItem,
  yh as RadioGroupRoot,
  Cc as RangeCalendarCell,
  Dc as RangeCalendarCellTrigger,
  bc as RangeCalendarGrid,
  Pc as RangeCalendarGridBody,
  Sc as RangeCalendarGridHead,
  Ec as RangeCalendarGridRow,
  wc as RangeCalendarHeadCell,
  yc as RangeCalendarHeader,
  gc as RangeCalendarHeading,
  _c as RangeCalendarNext,
  xc as RangeCalendarPrev,
  hc as RangeCalendarRoot,
  Sh as ScrollAreaCorner,
  Ch as ScrollAreaRoot,
  _h as ScrollAreaScrollbar,
  xh as ScrollAreaThumb,
  wh as ScrollAreaViewport,
  Bh as SelectArrow,
  $h as SelectContent,
  Ah as SelectGroup,
  Nh as SelectIcon,
  Ih as SelectItem,
  Rh as SelectItemIndicator,
  kh as SelectItemText,
  Oh as SelectLabel,
  Dh as SelectPortal,
  Ph as SelectRoot,
  Fh as SelectScrollDownButton,
  Vh as SelectScrollUpButton,
  Th as SelectSeparator,
  Eh as SelectTrigger,
  Lh as SelectValue,
  Mh as SelectViewport,
  zh as Separator,
  jh as SliderRange,
  Kh as SliderRoot,
  Hh as SliderThumb,
  Wh as SliderTrack,
  Mn as Slot,
  Uh as SplitterGroup,
  Gh as SplitterPanel,
  qh as SplitterResizeHandle,
  Yh as SwitchRoot,
  Xh as SwitchThumb,
  Qh as TabsContent,
  ty as TabsIndicator,
  Jh as TabsList,
  Zh as TabsRoot,
  ey as TabsTrigger,
  ry as TagsInputClear,
  ny as TagsInputInput,
  oy as TagsInputItem,
  sy as TagsInputItemDelete,
  ly as TagsInputItemText,
  ay as TagsInputRoot,
  dy as ToastAction,
  tf as ToastClose,
  fy as ToastDescription,
  iy as ToastProvider,
  uy as ToastRoot,
  py as ToastTitle,
  cy as ToastViewport,
  af as Toggle,
  sf as ToggleGroupItem,
  lf as ToggleGroupRoot,
  uf as ToolbarButton,
  my as ToolbarLink,
  vy as ToolbarRoot,
  gy as ToolbarSeparator,
  hy as ToolbarToggleGroup,
  yy as ToolbarToggleItem,
  xy as TooltipArrow,
  _y as TooltipContent,
  Sy as TooltipPortal,
  by as TooltipProvider,
  Cy as TooltipRoot,
  wy as TooltipTrigger,
  Py as Viewport,
  Nt as VisuallyHidden,
  Q as createContext,
  sa as useBodyScrollLock,
  An as useDateFormatter,
  Ie as useEmitAsProps,
  T as useForwardExpose,
  _t as useForwardProps,
  _e as useForwardPropsEmits,
  me as useId,
  cl as useStateMachine,
  gf as withDefault
};
//# sourceMappingURL=radix-vue.js.map
