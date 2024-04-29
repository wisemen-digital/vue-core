import "./chunk-5VLIZV53.js";
import {
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
} from "./chunk-RG7C3B44.js";
import "./chunk-TDUMLE5V.js";

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
function $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2, b) {
  b = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(b, a2.calendar);
  return a2.era === b.era && a2.year === b.year && a2.month === b.month && a2.day === b.day;
}
function $14e0f24ef4ac5c92$export$a18c89cbd24170ff(a2, b) {
  b = (0, $11d87f3f76e88657$export$b4a036af3fc0b032)(b, a2.calendar);
  a2 = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(a2);
  b = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(b);
  return a2.era === b.era && a2.year === b.year && a2.month === b.month;
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
function $14e0f24ef4ac5c92$export$68781ddf31c0090f(a2, b) {
  return a2.calendar.toJulianDay(a2) - b.calendar.toJulianDay(b);
}
function $14e0f24ef4ac5c92$export$c19a80a9721b80f6(a2, b) {
  return $14e0f24ef4ac5c92$var$timeToMs(a2) - $14e0f24ef4ac5c92$var$timeToMs(b);
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
function $735220c2d4774dd3$var$nonNegativeMod(a2, b) {
  let result = a2 % b;
  if (result < 0)
    result += b;
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
  let m = value.match($fae977aafc393c5c$var$DATE_RE);
  if (!m)
    throw new Error("Invalid ISO 8601 date string: " + value);
  let date = new (0, $35ea8db9cb2ccb90$export$99faa760c7908e4f)($fae977aafc393c5c$var$parseNumber(m[1], 0, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1);
  date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
  return date;
}
function $fae977aafc393c5c$export$588937bcd60ade55(value) {
  let m = value.match($fae977aafc393c5c$var$DATE_TIME_RE);
  if (!m)
    throw new Error("Invalid ISO 8601 date time string: " + value);
  let date = new (0, $35ea8db9cb2ccb90$export$ca871e8dbb80966f)($fae977aafc393c5c$var$parseNumber(m[1], 1, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1, m[4] ? $fae977aafc393c5c$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $fae977aafc393c5c$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $fae977aafc393c5c$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $fae977aafc393c5c$var$parseNumber(m[7], 0, Infinity) * 1e3 : 0);
  date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
  return date;
}
function $fae977aafc393c5c$export$fd7893f06e92a6a4(value, disambiguation) {
  let m = value.match($fae977aafc393c5c$var$ZONED_DATE_TIME_RE);
  if (!m)
    throw new Error("Invalid ISO 8601 date time string: " + value);
  let date = new (0, $35ea8db9cb2ccb90$export$d3b7288e7994edea)($fae977aafc393c5c$var$parseNumber(m[1], 1, 9999), $fae977aafc393c5c$var$parseNumber(m[2], 1, 12), 1, m[10], 0, m[4] ? $fae977aafc393c5c$var$parseNumber(m[4], 0, 23) : 0, m[5] ? $fae977aafc393c5c$var$parseNumber(m[5], 0, 59) : 0, m[6] ? $fae977aafc393c5c$var$parseNumber(m[6], 0, 59) : 0, m[7] ? $fae977aafc393c5c$var$parseNumber(m[7], 0, Infinity) * 1e3 : 0);
  date.day = $fae977aafc393c5c$var$parseNumber(m[3], 0, date.calendar.getDaysInMonth(date));
  let plainDateTime = (0, $11d87f3f76e88657$export$b21e0b124e224484)(date);
  let ms2;
  if (m[8]) {
    var _m_;
    date.offset = $fae977aafc393c5c$var$parseNumber(m[8], -23, 23) * 36e5 + $fae977aafc393c5c$var$parseNumber((_m_ = m[9]) !== null && _m_ !== void 0 ? _m_ : "0", 0, 59) * 6e4;
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
  compare(b) {
    return (0, $14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b);
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
  compare(b) {
    let res = (0, $14e0f24ef4ac5c92$export$68781ddf31c0090f)(this, b);
    if (res === 0)
      return (0, $14e0f24ef4ac5c92$export$c19a80a9721b80f6)(this, (0, $11d87f3f76e88657$export$b21e0b124e224484)(b));
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
  compare(b) {
    return this.toDate().getTime() - (0, $11d87f3f76e88657$export$84c95a83c799e074)(b, this.timeZone).toDate().getTime();
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
  let cacheKey = locale + (options ? Object.entries(options).sort((a2, b) => a2[0] < b[0] ? -1 : 1).join() : "");
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

// ../../node_modules/.pnpm/@floating-ui+utils@0.2.1/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
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
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
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
    y = nextY != null ? nextY : y;
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
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
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
    y,
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
    y
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
      y,
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
      y
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
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a2, b) => a2.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b) => a2[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
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
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
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
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
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
          y: limitedCoords.y - y
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
        y,
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
        y
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
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
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
  let y = (clientRect.top + visualOffsets.y) / scale.y;
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
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
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
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
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
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
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
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
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

// ../../node_modules/.pnpm/@floating-ui+vue@1.0.6_vue@3.4.21/node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
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
  const y = ref(0);
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
    const yVal = roundByDPR(floatingElement.value, y.value);
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
      y.value = position.y;
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
    y: shallowReadonly(y),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    floatingStyles,
    update
  };
}

// ../../node_modules/.pnpm/radix-vue@1.5.3_vue@3.4.21/node_modules/radix-vue/dist/index.js
function X(a2, t) {
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
function hn(a2, t, e) {
  const n = e.originalEvent.target, l = new CustomEvent(a2, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && n.addEventListener(a2, t, { once: true }), n.dispatchEvent(l);
}
var ea = typeof document < "u";
function Zs(a2, t) {
  if (a2.length !== t.length)
    return false;
  for (let e = 0; e < a2.length; e++)
    if (a2[e] !== t[e])
      return false;
  return true;
}
function Js(a2, t) {
  const e = [];
  for (let n = 0; n < a2.length; n += t)
    e.push(a2.slice(n, n + t));
  return e;
}
function Qs(a2, t) {
  var e;
  const n = shallowRef();
  return watchEffect(() => {
    n.value = a2();
  }, {
    ...t,
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  }), readonly(n);
}
function ht(a2) {
  return getCurrentScope() ? (onScopeDispose(a2), true) : false;
}
function er(a2) {
  let t = false, e;
  const n = effectScope(true);
  return (...l) => (t || (e = n.run(() => a2(...l)), t = true), e);
}
function tr(a2) {
  let t = 0, e, n;
  const l = () => {
    t -= 1, n && t <= 0 && (n.stop(), e = void 0, n = void 0);
  };
  return (...s) => (t += 1, e || (n = effectScope(true), e = n.run(() => a2(...s))), ht(l), e);
}
function Le(a2) {
  return typeof a2 == "function" ? a2() : unref(a2);
}
var Ge = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var ar = (a2) => typeof a2 < "u";
var nr = (a2) => a2 != null;
var or = Object.prototype.toString;
var lr = (a2) => or.call(a2) === "[object Object]";
var vo = (a2, t, e) => Math.min(e, Math.max(t, a2));
var Gt = () => {
};
var mo = sr();
function sr() {
  var a2, t;
  return Ge && ((a2 = window == null ? void 0 : window.navigator) == null ? void 0 : a2.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function rr(a2, t) {
  function e(...n) {
    return new Promise((l, s) => {
      Promise.resolve(a2(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(l).catch(s);
    });
  }
  return e;
}
function ir(a2, t = {}) {
  let e, n, l = Gt;
  const s = (i) => {
    clearTimeout(i), l(), l = Gt;
  };
  return (i) => {
    const u = Le(a2), d = Le(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (n && (s(n), n = null), Promise.resolve(i())) : new Promise((p, c) => {
      l = t.rejectOnCancel ? c : p, d && !n && (n = setTimeout(() => {
        e && s(e), n = null, p(i());
      }, d)), e = setTimeout(() => {
        n && s(n), n = null, p(i());
      }, u);
    });
  };
}
function ur(a2) {
  return a2 || getCurrentInstance();
}
function dr(...a2) {
  if (a2.length !== 1)
    return toRef(...a2);
  const t = a2[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: Gt }))) : ref(t);
}
function xa(a2, t = 1e4) {
  return customRef((e, n) => {
    let l = Le(a2), s;
    const r = () => setTimeout(() => {
      l = Le(a2), n();
    }, Le(t));
    return ht(() => {
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
function yn(a2, t = 200, e = {}) {
  return rr(
    ir(t, e),
    a2
  );
}
function cr(a2, t) {
  ur(t) && onBeforeUnmount(a2, t);
}
function gn(a2, t, e = {}) {
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
    }, Le(t));
  }
  return n && (l.value = true, Ge && u()), ht(i), {
    isPending: readonly(l),
    start: u,
    stop: i
  };
}
function pr(a2 = 1e3, t = {}) {
  const {
    controls: e = false,
    callback: n
  } = t, l = gn(
    n ?? Gt,
    a2,
    t
  ), s = computed(() => !l.isPending.value);
  return e ? {
    ready: s,
    ...l
  } : s;
}
function fr(a2, t, e) {
  const n = watch(a2, (...l) => (nextTick(() => n()), t(...l)), e);
  return n;
}
function Re(a2) {
  var t;
  const e = Le(a2);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var Ot = Ge ? window : void 0;
function tt(...a2) {
  let t, e, n, l;
  if (typeof a2[0] == "string" || Array.isArray(a2[0]) ? ([e, n, l] = a2, t = Ot) : [t, e, n, l] = a2, !t)
    return Gt;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((p) => p()), s.length = 0;
  }, i = (p, c, f, v) => (p.addEventListener(c, f, v), () => p.removeEventListener(c, f, v)), u = watch(
    () => [Re(t), Le(l)],
    ([p, c]) => {
      if (r(), !p)
        return;
      const f = lr(c) ? { ...c } : c;
      s.push(
        ...e.flatMap((v) => n.map((y) => i(p, v, y, f)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), r();
  };
  return ht(d), d;
}
function vr(a2) {
  return typeof a2 == "function" ? a2 : typeof a2 == "string" ? (t) => t.key === a2 : Array.isArray(a2) ? (t) => a2.includes(t.key) : () => true;
}
function bn(...a2) {
  let t, e, n = {};
  a2.length === 3 ? (t = a2[0], e = a2[1], n = a2[2]) : a2.length === 2 ? typeof a2[1] == "object" ? (t = true, e = a2[0], n = a2[1]) : (t = a2[0], e = a2[1]) : (t = true, e = a2[0]);
  const {
    target: l = Ot,
    eventName: s = "keydown",
    passive: r = false,
    dedupe: i = false
  } = n, u = vr(t);
  return tt(l, s, (p) => {
    p.repeat && Le(i) || u(p) && e(p);
  }, r);
}
function mr(a2 = {}) {
  var t;
  const {
    window: e = Ot,
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
  return e && (tt(e, "blur", (u) => {
    u.relatedTarget === null && i();
  }, true), tt(e, "focus", i, true)), i(), r;
}
function Pa() {
  const a2 = ref(false), t = getCurrentInstance();
  return t && onMounted(() => {
    a2.value = true;
  }, t), a2;
}
function Uo(a2) {
  const t = Pa();
  return computed(() => (t.value, !!a2()));
}
function hr(a2, t = {}) {
  const {
    immediate: e = true,
    fpsLimit: n = void 0,
    window: l = Ot
  } = t, s = ref(false), r = n ? 1e3 / n : null;
  let i = 0, u = null;
  function d(f) {
    if (!s.value || !l)
      return;
    i || (i = f);
    const v = f - i;
    if (r && v < r) {
      u = l.requestAnimationFrame(d);
      return;
    }
    i = f, a2({ delta: v, timestamp: f }), u = l.requestAnimationFrame(d);
  }
  function p() {
    !s.value && l && (s.value = true, i = 0, u = l.requestAnimationFrame(d));
  }
  function c() {
    s.value = false, u != null && l && (l.cancelAnimationFrame(u), u = null);
  }
  return e && p(), ht(c), {
    isActive: readonly(s),
    pause: c,
    resume: p
  };
}
function yr(a2) {
  return JSON.parse(JSON.stringify(a2));
}
function gr(a2, t, e = {}) {
  const { window: n = Ot, ...l } = e;
  let s;
  const r = Uo(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = computed(() => {
    const f = Le(a2), v = (Array.isArray(f) ? f : [f]).map(Re).filter(nr);
    return new Set(v);
  }), d = watch(
    () => u.value,
    (f) => {
      i(), r.value && n && f.size && (s = new MutationObserver(t), f.forEach((v) => s.observe(v, l)));
    },
    { immediate: true, flush: "post" }
  ), p = () => s == null ? void 0 : s.takeRecords(), c = () => {
    i(), d();
  };
  return ht(c), {
    isSupported: r,
    stop: c,
    takeRecords: p
  };
}
function Ke(a2, t, e = {}) {
  const { window: n = Ot, ...l } = e;
  let s;
  const r = Uo(() => n && "ResizeObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = computed(() => Array.isArray(a2) ? a2.map((c) => Re(c)) : [Re(a2)]), d = watch(
    u,
    (c) => {
      if (i(), r.value && n) {
        s = new ResizeObserver(t);
        for (const f of c)
          f && s.observe(f, l);
      }
    },
    { immediate: true, flush: "post" }
  ), p = () => {
    i(), d();
  };
  return ht(p), {
    isSupported: r,
    stop: p
  };
}
function br(a2, t = {}) {
  const e = mr(t), n = computed(() => Re(a2));
  return { focused: computed(() => n.value && e.value ? n.value.contains(e.value) : false) };
}
function Cr(a2, t) {
  const e = shallowRef(t);
  return watch(
    dr(a2),
    (n, l) => {
      e.value = l;
    },
    { flush: "sync" }
  ), readonly(e);
}
function ee(a2, t, e, n = {}) {
  var l, s, r;
  const {
    clone: i = false,
    passive: u = false,
    eventName: d,
    deep: p = false,
    defaultValue: c,
    shouldEmit: f
  } = n, v = getCurrentInstance(), y = e || (v == null ? void 0 : v.emit) || ((l = v == null ? void 0 : v.$emit) == null ? void 0 : l.bind(v)) || ((r = (s = v == null ? void 0 : v.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(v == null ? void 0 : v.proxy));
  let h2 = d;
  t || (t = "modelValue"), h2 = h2 || `update:${t.toString()}`;
  const x = (S) => i ? typeof i == "function" ? i(S) : yr(S) : S, P = () => ar(a2[t]) ? x(a2[t]) : c, $ = (S) => {
    f ? f(S) && y(h2, S) : y(h2, S);
  };
  if (u) {
    const S = P(), w = ref(S);
    let D = false;
    return watch(
      () => a2[t],
      (A) => {
        D || (D = true, w.value = x(A), nextTick(() => D = false));
      }
    ), watch(
      w,
      (A) => {
        !D && (A !== a2[t] || p) && $(A);
      },
      { deep: p }
    ), w;
  } else
    return computed({
      get() {
        return P();
      },
      set(S) {
        $(S);
      }
    });
}
function Sa(a2) {
  return a2 ? a2.flatMap((t) => t.type === Fragment ? Sa(t.children) : [t]) : [];
}
var _r = ["INPUT", "TEXTAREA"];
function It(a2, t, e, n = {}) {
  if (!t || n.enableIgnoredElement && _r.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: l = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = true,
    dir: u = "ltr",
    preventScroll: d = true,
    focus: p = false
  } = n, [c, f, v, y, h2, x] = [
    a2.key === "ArrowRight",
    a2.key === "ArrowLeft",
    a2.key === "ArrowUp",
    a2.key === "ArrowDown",
    a2.key === "Home",
    a2.key === "End"
  ], P = v || y, $ = c || f;
  if (!h2 && !x && (!P && !$ || l === "vertical" && $ || l === "horizontal" && P))
    return null;
  const S = e ? Array.from(e.querySelectorAll(s)) : r;
  if (!S.length)
    return null;
  d && a2.preventDefault();
  let w = null;
  return $ || P ? w = Go(S, t, {
    goForward: P ? y : u === "ltr" ? c : f,
    loop: i
  }) : h2 ? w = S.at(0) || null : x && (w = S.at(-1) || null), p && (w == null || w.focus()), w;
}
function Go(a2, t, { goForward: e, loop: n }, l = a2.length) {
  if (--l === 0)
    return null;
  const s = a2.indexOf(t), r = e ? s + 1 : s - 1;
  if (!n && (r < 0 || r >= a2.length))
    return null;
  const i = (r + a2.length) % a2.length, u = a2[i];
  return u ? u.hasAttribute("disabled") && u.getAttribute("disabled") !== "false" ? Go(
    a2,
    u,
    { goForward: e, loop: n },
    l
  ) : u : null;
}
function Wa(a2) {
  if (a2 === null || typeof a2 != "object")
    return false;
  const t = Object.getPrototypeOf(a2);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in a2 ? false : Symbol.toStringTag in a2 ? Object.prototype.toString.call(a2) === "[object Module]" : true;
}
function tn(a2, t, e = ".", n) {
  if (!Wa(t))
    return tn(a2, {}, e, n);
  const l = Object.assign({}, t);
  for (const s in a2) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = a2[s];
    r != null && (n && n(l, s, r, e) || (Array.isArray(r) && Array.isArray(l[s]) ? l[s] = [...r, ...l[s]] : Wa(r) && Wa(l[s]) ? l[s] = tn(
      r,
      l[s],
      (e ? `${e}.` : "") + s.toString(),
      n
    ) : l[s] = r));
  }
  return l;
}
function wr(a2) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((e, n) => tn(e, n, "", a2), {})
  );
}
var xr = wr();
var [Cn, Pr] = X("ConfigProvider");
var Zp = defineComponent({
  __name: "ConfigProvider",
  props: {
    dir: { default: "ltr" },
    scrollBody: { type: [Boolean, Object], default: true },
    useId: { type: Function, default: void 0 }
  },
  setup(a2) {
    const t = a2, { dir: e, scrollBody: n } = toRefs(t);
    return Pr({
      dir: e,
      scrollBody: n,
      useId: t.useId
    }), (l, s) => renderSlot(l.$slots, "default");
  }
});
var Sr = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var Dr = (a2 = 21) => {
  let t = "", e = a2;
  for (; e--; )
    t += Sr[Math.random() * 64 | 0];
  return t;
};
var $r = tr(() => {
  const a2 = ref(/* @__PURE__ */ new Map()), t = ref(), e = computed(() => {
    for (const r of a2.value.values())
      if (r)
        return true;
    return false;
  }), n = Cn({
    scrollBody: ref(true)
  });
  let l = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", mo && (l == null || l()), t.value = void 0;
  };
  return watch(e, (r, i) => {
    var c;
    if (!Ge)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, p = (c = n.scrollBody) != null && c.value ? typeof n.scrollBody.value == "object" ? xr({
      padding: n.scrollBody.value.padding === true ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === true ? u : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), mo && (l = tt(
      document,
      "touchmove",
      (f) => {
        var v;
        f.target === document.documentElement && (f.touches.length > 1 || (v = f.preventDefault) == null || v.call(f));
      },
      { passive: false }
    )), nextTick(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: true, flush: "sync" }), a2;
});
function ta(a2) {
  const t = Dr(6), e = $r();
  e.value.set(t, a2 ?? false);
  const n = computed({
    get: () => e.value.get(t) ?? false,
    set: (l) => e.value.set(t, l)
  });
  return cr(() => {
    e.value.delete(t);
  }), n;
}
var Er = "data-radix-vue-collection-item";
function Ae(a2, t = Er) {
  const e = a2 ?? Symbol();
  return { createCollection: (s) => {
    const r = ref([]);
    function i() {
      const u = Re(s);
      return u ? r.value = Array.from(
        u.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return onBeforeUpdate(() => {
      r.value = [];
    }), onMounted(i), onUpdated(i), watch(() => s == null ? void 0 : s.value, i, { immediate: true }), provide(e, r), r;
  }, injectCollection: () => inject(e, ref([])) };
}
var Br = {
  defaultValue: void 0,
  defaultPlaceholder: void 0,
  granularity: "day"
};
function kt(a2) {
  const t = { ...Br, ...a2 }, { defaultValue: e, defaultPlaceholder: n, granularity: l } = t;
  if (Array.isArray(e) && e.length)
    return e[e.length - 1];
  if (e && !Array.isArray(e))
    return e;
  if (n)
    return n;
  {
    const s = /* @__PURE__ */ new Date(), r = s.getFullYear(), i = s.getMonth() + 1, u = s.getDate();
    return ["hour", "minute", "second"].includes(l ?? "day") ? new $35ea8db9cb2ccb90$export$ca871e8dbb80966f(r, i, u, 0, 0, 0) : new $35ea8db9cb2ccb90$export$99faa760c7908e4f(r, i, u);
  }
}
function ya(a2, t) {
  return t instanceof $35ea8db9cb2ccb90$export$d3b7288e7994edea ? $fae977aafc393c5c$export$fd7893f06e92a6a4(a2) : t instanceof $35ea8db9cb2ccb90$export$ca871e8dbb80966f ? $fae977aafc393c5c$export$588937bcd60ade55(a2) : $fae977aafc393c5c$export$6b862160d295c8e(a2);
}
function ke(a2, t = $14e0f24ef4ac5c92$export$aa8b41735afcabd2()) {
  return a2 instanceof $35ea8db9cb2ccb90$export$d3b7288e7994edea ? a2.toDate() : a2.toDate(t);
}
function Rr(a2) {
  return a2 instanceof $35ea8db9cb2ccb90$export$ca871e8dbb80966f;
}
function _n(a2) {
  return a2 instanceof $35ea8db9cb2ccb90$export$d3b7288e7994edea;
}
function wn(a2) {
  return Rr(a2) || _n(a2);
}
function ga(a2) {
  if (a2 instanceof Date) {
    const t = a2.getFullYear(), e = a2.getMonth() + 1;
    return new Date(t, e, 0).getDate();
  } else
    return a2.set({ day: 100 }).day;
}
function Be(a2, t) {
  return a2.compare(t) < 0;
}
function At(a2, t) {
  return a2.compare(t) > 0;
}
function Ar(a2, t) {
  return a2.compare(t) <= 0;
}
function Tr(a2, t) {
  return a2.compare(t) >= 0;
}
function Or(a2, t, e) {
  return Tr(a2, t) && Ar(a2, e);
}
function Ir(a2, t, e) {
  return At(a2, t) && Be(a2, e);
}
function kr(a2, t, e) {
  const n = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(a2, e);
  return t > n ? a2.subtract({ days: n + 7 - t }) : t === n ? a2 : a2.subtract({ days: n - t });
}
function Mr(a2, t, e) {
  const n = $14e0f24ef4ac5c92$export$2061056d06d7cdf7(a2, e), l = t === 0 ? 6 : t - 1;
  return n === l ? a2 : n > l ? a2.add({ days: 7 - n + l }) : a2.add({ days: l - n });
}
function qo(a2, t, e, n) {
  if (e === void 0 && n === void 0)
    return true;
  let l = a2.add({ days: 1 });
  if (n != null && n(l) || e != null && e(l))
    return false;
  const s = t;
  for (; l.compare(s) < 0; )
    if (l = l.add({ days: 1 }), n != null && n(l) || e != null && e(l))
      return false;
  return true;
}
function ho(a2, t) {
  const e = [];
  let n = a2.add({ days: 1 });
  const l = t;
  for (; n.compare(l) < 0; )
    e.push(n), n = n.add({ days: 1 });
  return e;
}
function ja(a2) {
  const { dateObj: t, weekStartsOn: e, fixedWeeks: n, locale: l } = a2, s = ga(t), r = Array.from({ length: s }, (x, P) => t.set({ day: P + 1 })), i = $14e0f24ef4ac5c92$export$a5a3b454ada2268e(t), u = $14e0f24ef4ac5c92$export$a2258d9c4118825c(t), d = kr(i, e, l), p = Mr(u, e, l), c = ho(d.subtract({ days: 1 }), i), f = ho(u, p.add({ days: 1 })), v = c.length + r.length + f.length;
  if (n && v < 42) {
    const x = 42 - v;
    let P = f[f.length - 1];
    P || (P = t.add({ months: 1 }).set({ day: 1 }));
    const $ = Array.from({ length: x }, (S, w) => {
      const D = w + 1;
      return P.add({ days: D });
    });
    f.push(...$);
  }
  const y = c.concat(r, f), h2 = Js(y, 7);
  return {
    value: t,
    cells: y,
    rows: h2
  };
}
function Yo(a2) {
  const { dateObj: t, startIndex: e, endIndex: n, minValue: l, maxValue: s } = a2;
  return Array.from({ length: Math.abs((e ?? 0) - n) }, (i, u) => u < Math.abs(e ?? 0) ? t.subtract({ years: u }).set({ day: 1, month: 1 }) : t.add({ years: u }).set({ day: 1, month: 1 })).toSorted((i, u) => i.year - u.year).filter((i) => !(l && Be(i, l) || s && At(i, s)));
}
function Xo(a2) {
  const { dateObj: t, numberOfMonths: e, pagedNavigation: n, minValue: l, maxValue: s } = a2;
  return e && n ? Array.from({ length: Math.floor(12 / e) }, (u, d) => $14e0f24ef4ac5c92$export$a5a3b454ada2268e(t.set({ month: d * e + 1 }))).filter((u) => !(l && Be(u, l) || s && At(u, s))) : Array.from({ length: 12 }, (i, u) => $14e0f24ef4ac5c92$export$a5a3b454ada2268e(t.set({ month: u + 1 }))).filter((i) => !(l && Be(i, l) || s && At(i, s)));
}
function la(a2) {
  const { numberOfMonths: t, dateObj: e, ...n } = a2, l = [];
  if (!t || t === 1)
    return l.push(
      ja({
        ...n,
        dateObj: e
      })
    ), l;
  l.push(
    ja({
      ...n,
      dateObj: e
    })
  );
  for (let s = 1; s < t; s++) {
    const r = e.add({ months: s });
    l.push(
      ja({
        ...n,
        dateObj: r
      })
    );
  }
  return l;
}
var Vr = [
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
var Fr = ["year", "month", "day"];
var Ua = {
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
function Lr(a2) {
  if (yo(a2))
    return Ua[a2];
  {
    const t = Hr(a2);
    return yo(t) ? Ua[t] : Ua.en;
  }
}
function Ga(a2, t, e) {
  return Nr(a2) ? Lr(e)[a2] : Kr(a2) ? t : zr(a2) ? "––" : "";
}
function yo(a2) {
  return Vr.includes(a2);
}
function Nr(a2) {
  return Fr.includes(a2);
}
function zr(a2) {
  return a2 === "hour" || a2 === "minute" || a2 === "second";
}
function Kr(a2) {
  return a2 === "era" || a2 === "dayPeriod";
}
function Hr(a2) {
  return Intl.Locale ? new Intl.Locale(a2).language : a2.split("-")[0];
}
var xn = ["day", "month", "year"];
var Zo = ["hour", "minute", "second", "dayPeriod"];
var Jo = [...xn, ...Zo];
function Wr(a2) {
  return xn.includes(a2);
}
function Qo(a2) {
  return Jo.includes(a2);
}
function jr(a2, t) {
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
function el(a2) {
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
function Pn(a2) {
  const t = ref(a2);
  function e() {
    return t.value;
  }
  function n(h2) {
    t.value = h2;
  }
  function l(h2, x) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, x).format(h2);
  }
  function s(h2, x = true) {
    return wn(h2) && x ? l(ke(h2), {
      dateStyle: "long",
      timeStyle: "long"
    }) : l(ke(h2), {
      dateStyle: "long"
    });
  }
  function r(h2) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { month: "long", year: "numeric" }).format(h2);
  }
  function i(h2) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { month: "long" }).format(h2);
  }
  function u() {
    const h2 = $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((P) => ({ label: i(ke(h2.set({ month: P }))), value: P }));
  }
  function d(h2) {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { year: "numeric" }).format(h2);
  }
  function p(h2, x) {
    return _n(h2) ? new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, {
      ...x,
      timeZone: h2.timeZone
    }).formatToParts(ke(h2)) : new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, x).formatToParts(ke(h2));
  }
  function c(h2, x = "narrow") {
    return new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, { weekday: x }).format(h2);
  }
  function f(h2) {
    var $;
    return (($ = new $fb18d541ea1ad717$export$ad991b66133851cf(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(h2).find((S) => S.type === "dayPeriod")) == null ? void 0 : $.value) === "PM" ? "PM" : "AM";
  }
  const v = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function y(h2, x, P = {}) {
    const $ = { ...v, ...P }, w = p(h2, $).find((D) => D.type === x);
    return w ? w.value : "";
  }
  return {
    setLocale: n,
    getLocale: e,
    fullMonth: i,
    fullYear: d,
    fullMonthAndYear: r,
    toParts: p,
    custom: l,
    part: y,
    dayPeriod: f,
    selectedDate: s,
    dayOfWeek: c,
    getMonths: u
  };
}
function Pe(a2) {
  const t = Cn({
    dir: ref("ltr")
  });
  return computed(() => {
    var e;
    return (a2 == null ? void 0 : a2.value) || ((e = t.dir) == null ? void 0 : e.value) || "ltr";
  });
}
function $e(a2) {
  const t = getCurrentInstance(), e = t == null ? void 0 : t.type.emits, n = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((l) => {
    n[toHandlerKey(camelize(l))] = (...s) => a2(l, ...s);
  }), n;
}
var qa = 0;
function Sn() {
  watchEffect((a2) => {
    if (!Ge)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? go()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? go()
    ), qa++, a2(() => {
      qa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), qa--;
    });
  });
}
function go() {
  const a2 = document.createElement("span");
  return a2.setAttribute("data-radix-focus-guard", ""), a2.tabIndex = 0, a2.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", a2;
}
function yt(a2) {
  return computed(() => {
    var t;
    return Le(a2) ? !!((t = Re(a2)) != null && t.closest("form")) : true;
  });
}
function gt(a2) {
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
function Ce(a2, t) {
  const e = gt(a2), n = t ? $e(t) : {};
  return computed(() => ({
    ...e.value,
    ...n
  }));
}
function R() {
  const a2 = getCurrentInstance(), t = ref(), e = computed(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Re(t);
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
var Ur = function(a2) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(a2) ? a2[0] : a2;
  return t.ownerDocument.body;
};
var Dt = /* @__PURE__ */ new WeakMap();
var sa = /* @__PURE__ */ new WeakMap();
var ra = {};
var Ya = 0;
var tl = function(a2) {
  return a2 && (a2.host || tl(a2.parentNode));
};
var Gr = function(a2, t) {
  return t.map(function(e) {
    if (a2.contains(e))
      return e;
    var n = tl(e);
    return n && a2.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", a2, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
};
var qr = function(a2, t, e, n) {
  var l = Gr(t, Array.isArray(a2) ? a2 : [a2]);
  ra[e] || (ra[e] = /* @__PURE__ */ new WeakMap());
  var s = ra[e], r = [], i = /* @__PURE__ */ new Set(), u = new Set(l), d = function(c) {
    !c || i.has(c) || (i.add(c), d(c.parentNode));
  };
  l.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (i.has(f))
        p(f);
      else {
        var v = f.getAttribute(n), y = v !== null && v !== "false", h2 = (Dt.get(f) || 0) + 1, x = (s.get(f) || 0) + 1;
        Dt.set(f, h2), s.set(f, x), r.push(f), h2 === 1 && y && sa.set(f, true), x === 1 && f.setAttribute(e, "true"), y || f.setAttribute(n, "true");
      }
    });
  };
  return p(t), i.clear(), Ya++, function() {
    r.forEach(function(c) {
      var f = Dt.get(c) - 1, v = s.get(c) - 1;
      Dt.set(c, f), s.set(c, v), f || (sa.has(c) || c.removeAttribute(n), sa.delete(c)), v || c.removeAttribute(e);
    }), Ya--, Ya || (Dt = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), ra = {});
  };
};
var Yr = function(a2, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var n = Array.from(Array.isArray(a2) ? a2 : [a2]), l = t || Ur(a2);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live]"))), qr(n, l, e, "aria-hidden")) : function() {
    return null;
  };
};
function aa(a2) {
  let t;
  watch(() => Re(a2), (e) => {
    e ? t = Yr(e) : t && t();
  }), onUnmounted(() => {
    t && t();
  });
}
var Xr = 0;
function me(a2, t = "radix") {
  if (a2)
    return a2;
  const { useId: e } = Cn({ useId: void 0 });
  return e && typeof e == "function" ? `${t}-${e()}` : `${t}-${++Xr}`;
}
function al(a2) {
  const t = ref(), e = computed(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.width) ?? 0;
  }), n = computed(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.height) ?? 0;
  });
  return onMounted(() => {
    const l = Re(a2);
    if (l) {
      t.value = { width: l.offsetWidth, height: l.offsetHeight };
      const s = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const p = i.borderBoxSize, c = Array.isArray(p) ? p[0] : p;
          u = c.inlineSize, d = c.blockSize;
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
function nl(a2, t) {
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
function Dn(a2) {
  const t = xa("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (l) => {
      var c, f;
      t.value = t.value + l;
      const s = a2.value, r = document.activeElement, i = ((f = (c = s.find((v) => v === r)) == null ? void 0 : c.textContent) == null ? void 0 : f.trim()) ?? "", u = s.map((v) => {
        var y;
        return ((y = v.textContent) == null ? void 0 : y.trim()) ?? "";
      }), d = Zr(u, t.value, i), p = s.find(
        (v) => {
          var y;
          return ((y = v.textContent) == null ? void 0 : y.trim()) === d;
        }
      );
      p && p.focus();
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function $n(a2, t) {
  return a2.map((e, n) => a2[(t + n) % a2.length]);
}
function Zr(a2, t, e) {
  const l = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? a2.indexOf(e) : -1;
  let r = $n(a2, Math.max(s, 0));
  l.length === 1 && (r = r.filter((d) => d !== e));
  const u = r.find(
    (d) => d.toLowerCase().startsWith(l.toLowerCase())
  );
  return u !== e ? u : void 0;
}
function Jp(a2, t) {
  return {
    inheritAttrs: false,
    name: `${a2.__name ?? ""}Wrapper`,
    setup(e, n) {
      return () => {
        const l = typeof (t == null ? void 0 : t.props) == "function" ? t == null ? void 0 : t.props(n.attrs) : t == null ? void 0 : t.props, { forwardRef: s } = R(), r = mergeProps(l, n.attrs);
        return h(a2, { ...r, ref: s }, n.slots);
      };
    }
  };
}
function bt() {
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
var En = defineComponent({
  name: "PrimitiveSlot",
  inheritAttrs: false,
  setup(a2, { attrs: t, slots: e }) {
    return () => {
      var r, i;
      if (!e.default)
        return null;
      const n = Sa(e.default()), [l, ...s] = n;
      if (l) {
        (r = l.props) == null || delete r.ref;
        const u = mergeProps(t, l.props ?? {});
        t.class && ((i = l.props) != null && i.class) && delete l.props.class;
        const d = cloneVNode(l, u);
        for (const p in u)
          p.startsWith("on") && (d.props || (d.props = {}), d.props[p] = u[p]);
        return n.length === 1 ? d : [d, ...s];
      }
      return n;
    };
  }
});
var I = defineComponent({
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
    return (a2.asChild ? "template" : a2.as) !== "template" ? () => h(a2.as, t, { default: e.default }) : () => h(En, t, { default: e.default });
  }
});
function ot() {
  const a2 = ref(), t = computed(() => {
    var e, n;
    return ["#text", "#comment"].includes((e = a2.value) == null ? void 0 : e.$el.nodeName) ? (n = a2.value) == null ? void 0 : n.$el.nextElementSibling : Re(a2);
  });
  return {
    primitiveElement: a2,
    currentElement: t
  };
}
var [ol, Jr] = X("CollapsibleRoot");
var Qr = defineComponent({
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
    const n = a2, s = ee(n, "open", e, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = ee(n, "disabled");
    return Jr({
      contentId: "",
      disabled: r,
      open: s,
      onOpenToggle: () => {
        s.value = !s.value;
      }
    }), t({ open: s }), R(), (i, u) => (openBlock(), createBlock(unref(I), {
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
var ei = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = ol();
    return (n, l) => {
      var s, r;
      return openBlock(), createBlock(unref(I), {
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
function ti(a2, t) {
  const e = ref({}), n = ref("none"), l = a2.value ? "mounted" : "unmounted", { state: s, dispatch: r } = nl(l, {
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
    async (f, v) => {
      var h2;
      const y = v !== f;
      if (await nextTick(), y) {
        const x = n.value, P = ia(t.value);
        f ? r("MOUNT") : P === "none" || ((h2 = e.value) == null ? void 0 : h2.display) === "none" ? r("UNMOUNT") : r(v && x !== P ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: true }
  );
  const i = (f) => {
    const v = ia(t.value), y = v.includes(
      f.animationName
    );
    f.target === t.value && y && r("ANIMATION_END"), f.target === t.value && v === "none" && r("ANIMATION_END");
  }, u = (f) => {
    f.target === t.value && (n.value = ia(t.value));
  }, d = watch(
    t,
    (f, v) => {
      f ? (e.value = getComputedStyle(f), f.addEventListener("animationstart", u), f.addEventListener("animationcancel", i), f.addEventListener("animationend", i)) : (r("ANIMATION_END"), v == null || v.removeEventListener("animationstart", u), v == null || v.removeEventListener("animationcancel", i), v == null || v.removeEventListener("animationend", i));
    },
    { immediate: true }
  ), p = watch(s, () => {
    const f = ia(t.value);
    n.value = s.value === "mounted" ? f : "none";
  });
  return onUnmounted(() => {
    d(), p();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function ia(a2) {
  return a2 && getComputedStyle(a2).animationName || "none";
}
var we = defineComponent({
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
    const { present: n, forceMount: l } = toRefs(a2), s = ref(), { isPresent: r } = ti(n, s);
    e({ present: r });
    let i = t.default({ present: r });
    i = Sa(i || []);
    const u = getCurrentInstance();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const p = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${p}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((c) => `  - ${c}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || n.value || r.value ? h(t.default({ present: r })[0], {
      ref: (p) => {
        const c = Re(p);
        return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-radix-popper-content-wrapper") ? s.value = c.firstElementChild : s.value = c), c;
      }
    }) : null;
  }
});
var ai = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = ol();
    e.contentId || (e.contentId = me(void 0, "radix-vue-collapsible-content"));
    const n = ref(), { forwardRef: l, currentElement: s } = R(), r = ref(0), i = ref(0), u = computed(() => e.open.value), d = ref(u.value), p = ref();
    return watch(
      () => {
        var c;
        return [u.value, (c = n.value) == null ? void 0 : c.present];
      },
      async () => {
        await nextTick();
        const c = s.value;
        if (!c)
          return;
        p.value = p.value || {
          transitionDuration: c.style.transitionDuration,
          animationName: c.style.animationName
        }, c.style.transitionDuration = "0s", c.style.animationName = "none";
        const f = c.getBoundingClientRect();
        i.value = f.height, r.value = f.width, d.value || (c.style.transitionDuration = p.value.transitionDuration, c.style.animationName = p.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (c, f) => (openBlock(), createBlock(unref(we), {
      ref_key: "presentRef",
      ref: n,
      present: c.forceMount || unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var v, y;
        return [
          createVNode(unref(I), mergeProps(c.$attrs, {
            id: unref(e).contentId,
            ref: unref(l),
            "as-child": t.asChild,
            as: c.as,
            "data-state": unref(e).open.value ? "open" : "closed",
            "data-disabled": (v = unref(e).disabled) != null && v.value ? "" : void 0,
            hidden: !((y = n.value) != null && y.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: withCtx(() => {
              var h2;
              return [
                (h2 = n.value) != null && h2.present ? renderSlot(c.$slots, "default", { key: 0 }) : createCommentVNode("", true)
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
function ll({ type: a2, defaultValue: t, modelValue: e }) {
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
function ni({ type: a2, defaultValue: t, modelValue: e }) {
  return a2 || ll({ type: a2, defaultValue: t, modelValue: e });
}
function oi({ type: a2, defaultValue: t }) {
  return t !== void 0 ? t : a2 === "single" ? void 0 : [];
}
function sl(a2, t) {
  const e = ref(ni(a2)), n = ee(a2, "modelValue", t, {
    defaultValue: oi(a2),
    passive: a2.modelValue === void 0
  });
  watch(
    () => [a2.type, a2.modelValue, a2.defaultValue],
    () => {
      const r = ll(a2);
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
var [Da, li] = X("AccordionRoot");
var Qp = defineComponent({
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
    const e = a2, n = t, { dir: l, disabled: s } = toRefs(e), r = Pe(l), { modelValue: i, changeModelValue: u, isSingle: d } = sl(e, n), { forwardRef: p, currentElement: c } = R();
    return li({
      disabled: s,
      direction: r,
      orientation: e.orientation,
      parentElement: c,
      isSingle: d,
      collapsible: e.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, v) => (openBlock(), createBlock(unref(I), {
      ref: unref(p),
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
var [Bn, si] = X("AccordionItem");
var ef = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2, { expose: t }) {
    const e = a2, n = Da(), l = computed(
      () => n.isSingle.value ? e.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(e.value)
    ), s = computed(() => n.disabled.value || e.disabled || n.isSingle.value && l.value && !n.collapsible), r = computed(() => s.value ? "" : void 0), i = computed(
      () => l.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: l, dataDisabled: r });
    const { currentRef: u, currentElement: d } = R();
    si({
      open: l,
      dataState: i,
      disabled: s,
      dataDisabled: r,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: computed(() => e.value)
    });
    function p(c) {
      It(
        c,
        d.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: true
        }
      );
    }
    return (c, f) => (openBlock(), createBlock(unref(Qr), {
      "data-orientation": unref(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: l.value,
      "as-child": e.asChild,
      onKeydown: withKeys(p, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default", { open: l.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as-child"]));
  }
});
var tf = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Da(), n = Bn();
    return R(), (l, s) => (openBlock(), createBlock(unref(ai), {
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
var af = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(a2) {
    const t = a2, e = Da(), n = Bn();
    return R(), (l, s) => (openBlock(), createBlock(unref(I), {
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
var nf = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Da(), n = Bn();
    n.triggerId || (n.triggerId = me(void 0, "radix-vue-accordion-trigger"));
    function l() {
      n.disabled.value || e.changeModelValue(n.value.value);
    }
    return (s, r) => (openBlock(), createBlock(unref(ei), {
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
var [ze, ri] = X("DialogRoot");
var ii = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, l = ee(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), s = ref(), r = ref(), { modal: i } = toRefs(e);
    return ri({
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
var ui = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = ze(), { forwardRef: n, currentElement: l } = R();
    return e.contentId || (e.contentId = me(void 0, "radix-vue-dialog-content")), onMounted(() => {
      e.triggerElement = l;
    }), (s, r) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var lt = defineComponent({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = Pa();
    return (e, n) => unref(t) || e.forceMount ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: e.to,
      disabled: e.disabled
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to", "disabled"])) : createCommentVNode("", true);
  }
});
var of = defineComponent({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var di = "dismissableLayer.pointerDownOutside";
var ci = "dismissableLayer.focusOutside";
function rl(a2, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), n = a2.querySelector(
    "[data-dismissable-layer]"
  ), l = Array.from(
    a2.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(e && n === e || l.indexOf(n) < l.indexOf(e));
}
function pi(a2, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(false), l = ref(() => {
  });
  return watchEffect((r) => {
    if (!Ge)
      return;
    const i = async (d) => {
      const p = d.target;
      if (t != null && t.value) {
        if (rl(t.value, p)) {
          n.value = false;
          return;
        }
        if (d.target && !n.value) {
          let c = function() {
            hn(
              di,
              a2,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", l.value), l.value = c, e.addEventListener("click", l.value, {
            once: true
          })) : c();
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
function fi(a2, t) {
  var l;
  const e = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(false);
  return watchEffect((s) => {
    if (!Ge)
      return;
    const r = async (i) => {
      t != null && t.value && (await nextTick(), !(!t.value || rl(t.value, i.target)) && i.target && !n.value && hn(
        ci,
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
var Fe = reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var st = defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R(), r = computed(
      () => {
        var y;
        return ((y = s.value) == null ? void 0 : y.ownerDocument) ?? globalThis.document;
      }
    ), i = computed(() => Fe.layersRoot), u = computed(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = computed(() => Fe.layersWithOutsidePointerEventsDisabled.size > 0), p = computed(() => {
      const y = Array.from(i.value), [h2] = [...Fe.layersWithOutsidePointerEventsDisabled].slice(-1), x = y.indexOf(h2);
      return u.value >= x;
    }), c = pi(async (y) => {
      const h2 = [...Fe.branches].some(
        (x) => x.contains(y.target)
      );
      !p.value || h2 || (n("pointerDownOutside", y), n("interactOutside", y), await nextTick(), y.defaultPrevented || n("dismiss"));
    }, s), f = fi((y) => {
      [...Fe.branches].some(
        (x) => x.contains(y.target)
      ) || (n("focusOutside", y), n("interactOutside", y), y.defaultPrevented || n("dismiss"));
    }, s);
    bn("Escape", (y) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", y), y.defaultPrevented || n("dismiss"));
    });
    let v;
    return watchEffect((y) => {
      s.value && (e.disableOutsidePointerEvents && (Fe.layersWithOutsidePointerEventsDisabled.size === 0 && (v = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Fe.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), y(() => {
        e.disableOutsidePointerEvents && Fe.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = v);
      }));
    }), watchEffect((y) => {
      y(() => {
        s.value && (i.value.delete(s.value), Fe.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (y, h2) => (openBlock(), createBlock(unref(I), {
      ref: unref(l),
      "as-child": y.asChild,
      as: y.as,
      "data-dismissable-layer": "",
      style: normalizeStyle({
        pointerEvents: d.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: unref(f).onFocusCapture,
      onBlurCapture: unref(f).onBlurCapture,
      onPointerdownCapture: unref(c).onPointerDownCapture
    }, {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
var vi = defineComponent({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e, currentElement: n } = R();
    return onMounted(() => {
      Fe.branches.add(n.value);
    }), onUnmounted(() => {
      Fe.branches.delete(n.value);
    }), (l, s) => (openBlock(), createBlock(unref(I), mergeProps({ ref: unref(e) }, t), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xa = "focusScope.autoFocusOnMount";
var Za = "focusScope.autoFocusOnUnmount";
var bo = { bubbles: false, cancelable: true };
function va(a2, { select: t = false } = {}) {
  const e = document.activeElement;
  for (const n of a2)
    if (Qe(n, { select: t }), document.activeElement !== e)
      return true;
}
function mi(a2) {
  const t = Rn(a2), e = Co(t, a2), n = Co(t.reverse(), a2);
  return [e, n];
}
function Rn(a2) {
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
function Co(a2, t) {
  for (const e of a2)
    if (!hi(e, { upTo: t }))
      return e;
}
function hi(a2, { upTo: t }) {
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
function yi(a2) {
  return a2 instanceof HTMLInputElement && "select" in a2;
}
function Qe(a2, { select: t = false } = {}) {
  if (a2 && a2.focus) {
    const e = document.activeElement;
    a2.focus({ preventScroll: true }), a2 !== e && yi(a2) && t && a2.select();
  }
}
var gi = er(() => ref([]));
function bi() {
  const a2 = gi();
  return {
    add(t) {
      const e = a2.value[0];
      t !== e && (e == null || e.pause()), a2.value = _o(a2.value, t), a2.value.unshift(t);
    },
    remove(t) {
      var e;
      a2.value = _o(a2.value, t), (e = a2.value[0]) == null || e.resume();
    }
  };
}
function _o(a2, t) {
  const e = [...a2], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function Ci(a2) {
  return a2.filter((t) => t.tagName !== "A");
}
var $a = defineComponent({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: false },
    trapped: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { currentRef: l, currentElement: s } = R(), r = ref(null), i = bi(), u = reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((p) => {
      if (!Ge)
        return;
      const c = s.value;
      if (!e.trapped)
        return;
      function f(x) {
        if (u.paused || !c)
          return;
        const P = x.target;
        c.contains(P) ? r.value = P : Qe(r.value, { select: true });
      }
      function v(x) {
        if (u.paused || !c)
          return;
        const P = x.relatedTarget;
        P !== null && (c.contains(P) || Qe(r.value, { select: true }));
      }
      function y(x) {
        c.contains(r.value) || Qe(c);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const h2 = new MutationObserver(y);
      c && h2.observe(c, { childList: true, subtree: true }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), h2.disconnect();
      });
    }), watchEffect(async (p) => {
      const c = s.value;
      if (await nextTick(), !c)
        return;
      i.add(u);
      const f = document.activeElement;
      if (!c.contains(f)) {
        const y = new CustomEvent(Xa, bo);
        c.addEventListener(
          Xa,
          (h2) => n("mountAutoFocus", h2)
        ), c.dispatchEvent(y), y.defaultPrevented || (va(Ci(Rn(c)), {
          select: true
        }), document.activeElement === f && Qe(c));
      }
      p(() => {
        c.removeEventListener(
          Xa,
          (x) => n("mountAutoFocus", x)
        );
        const y = new CustomEvent(Za, bo), h2 = (x) => {
          n("unmountAutoFocus", x);
        };
        c.addEventListener(Za, h2), c.dispatchEvent(y), setTimeout(() => {
          y.defaultPrevented || Qe(f ?? document.body, { select: true }), c.removeEventListener(Za, h2), i.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = document.activeElement;
      if (c && f) {
        const v = p.currentTarget, [y, h2] = mi(v);
        y && h2 ? !p.shiftKey && f === h2 ? (p.preventDefault(), e.loop && Qe(y, { select: true })) : p.shiftKey && f === y && (p.preventDefault(), e.loop && Qe(h2, { select: true })) : f === v && p.preventDefault();
      }
    }
    return (p, c) => (openBlock(), createBlock(unref(I), {
      ref_key: "currentRef",
      ref: l,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: d
    }, {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var _i = "menu.itemSelect";
var an = ["Enter", " "];
var wi = ["ArrowDown", "PageUp", "Home"];
var il = ["ArrowUp", "PageDown", "End"];
var xi = [...wi, ...il];
var Pi = {
  ltr: [...an, "ArrowRight"],
  rtl: [...an, "ArrowLeft"]
};
var Si = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function An(a2) {
  return a2 ? "open" : "closed";
}
function ba(a2) {
  return a2 === "indeterminate";
}
function Tn(a2) {
  return ba(a2) ? "indeterminate" : a2 ? "checked" : "unchecked";
}
function nn(a2) {
  const t = document.activeElement;
  for (const e of a2)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function Di(a2, t) {
  const { x: e, y: n } = a2;
  let l = false;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, p = t[r].y;
    u > n != p > n && e < (d - i) * (n - u) / (p - u) + i && (l = !l);
  }
  return l;
}
function $i(a2, t) {
  if (!t)
    return false;
  const e = { x: a2.clientX, y: a2.clientY };
  return Di(e, t);
}
function qt(a2) {
  return a2.pointerType === "mouse";
}
function Ei() {
  const a2 = "DialogContent", t = "DialogTitle", e = ze(), n = `Warning: \`${a2}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/dialog.html#title;`, l = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${a2}.`;
  onMounted(() => {
    var i;
    document.getElementById(e.titleId) || console.warn(n);
    const r = (i = e.contentElement.value) == null ? void 0 : i.getAttribute("aria-describedby");
    e.descriptionId && r && (document.getElementById(e.descriptionId) || console.warn(l));
  });
}
var ul = defineComponent({
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
    const e = a2, n = t, l = ze(), { forwardRef: s, currentElement: r } = R();
    return l.titleId || (l.titleId = me(void 0, "radix-vue-dialog-title")), l.descriptionId || (l.descriptionId = me(void 0, "radix-vue-dialog-description")), onMounted(() => {
      l.contentElement = r;
    }), Ei(), (i, u) => (openBlock(), createBlock(unref($a), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: withCtx(() => [
        createVNode(unref(st), mergeProps({
          id: unref(l).contentId,
          ref: unref(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": unref(l).descriptionId,
          "aria-labelledby": unref(l).titleId,
          "data-state": unref(An)(unref(l).open.value)
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
var Bi = defineComponent({
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
    const e = a2, n = t, l = ze(), s = $e(n), { forwardRef: r, currentElement: i } = R();
    return aa(i), (u, d) => (openBlock(), createBlock(ul, mergeProps({ ...e, ...unref(s) }, {
      ref: unref(r),
      "trap-focus": unref(l).open.value,
      "disable-outside-pointer-events": true,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        n("closeAutoFocus", p), p.defaultPrevented || (p.preventDefault(), (c = unref(l).triggerElement.value) == null || c.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (p) => {
        const c = p.detail.originalEvent, f = c.button === 0 && c.ctrlKey === true;
        (c.button === 2 || f) && p.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (p) => {
        p.preventDefault();
      }),
      onOpenAutoFocus: d[3] || (d[3] = (p) => n("openAutoFocus", p))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
});
var Ri = defineComponent({
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
    const e = a2, n = t, l = $e(n);
    R();
    const s = ze(), r = ref(false), i = ref(false);
    return (u, d) => (openBlock(), createBlock(ul, mergeProps({ ...e, ...unref(l) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        n("closeAutoFocus", p), p.defaultPrevented || (r.value || (c = unref(s).triggerElement.value) == null || c.focus(), p.preventDefault()), r.value = false, i.value = false;
      }),
      onInteractOutside: d[1] || (d[1] = (p) => {
        var v;
        p.defaultPrevented || (r.value = true, p.detail.originalEvent.type === "pointerdown" && (i.value = true));
        const c = p.target;
        ((v = unref(s).triggerElement.value) == null ? void 0 : v.contains(c)) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && i.value && p.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ai = defineComponent({
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
    const e = a2, n = t, l = ze(), s = $e(n), { forwardRef: r } = R();
    return (i, u) => (openBlock(), createBlock(unref(we), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        unref(l).modal.value ? (openBlock(), createBlock(Bi, mergeProps({
          key: 0,
          ref: unref(r)
        }, { ...e, ...unref(s), ...i.$attrs }, {
          onOpenAutoFocus: u[0] || (u[0] = (d) => n("openAutoFocus", d))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Ri, mergeProps({
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
var Ti = defineComponent({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = ze();
    return ta(true), R(), (e, n) => (openBlock(), createBlock(unref(I), {
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
var Oi = defineComponent({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = ze(), { forwardRef: e } = R();
    return (n, l) => {
      var s;
      return (s = unref(t)) != null && s.modal.value ? (openBlock(), createBlock(unref(we), {
        key: 0,
        present: n.forceMount || unref(t).open.value
      }, {
        default: withCtx(() => [
          createVNode(Ti, mergeProps(n.$attrs, {
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
var dl = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = ze();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var Ii = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a2) {
    const t = a2, e = ze();
    return R(), (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
      id: unref(e).titleId
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var ki = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = ze();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
      id: unref(e).descriptionId
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var lf = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const l = Ce(a2, t);
    return R(), (s, r) => (openBlock(), createBlock(unref(ii), mergeProps(unref(l), { modal: true }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var sf = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(ui), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var rf = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Mi, Vi] = X("AlertDialogContent");
var uf = defineComponent({
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
    const e = a2, l = $e(t);
    R();
    const s = ref();
    return Vi({
      onCancelElementChange: (r) => {
        s.value = r;
      }
    }), (r, i) => (openBlock(), createBlock(unref(Ai), mergeProps({ ...e, ...unref(l) }, {
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
var df = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Oi), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var cf = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Mi(), { forwardRef: n, currentElement: l } = R();
    return onMounted(() => {
      e.onCancelElementChange(l.value);
    }), (s, r) => (openBlock(), createBlock(unref(dl), mergeProps(t, { ref: unref(n) }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var pf = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Ii), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ff = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(ki), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vf = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(dl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var mf = defineComponent({
  inheritAttrs: false,
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R(), n = computed(() => 1 / t.ratio * 100);
    return (l, s) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: relative; width: 100%; padding-bottom: ${n.value}%`),
      "data-radix-aspect-ratio-wrapper": ""
    }, [
      createVNode(unref(I), mergeProps({
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
var [cl, Fi] = X("AvatarRoot");
var hf = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    return R(), Fi({
      imageLoadingStatus: ref("loading")
    }), (t, e) => (openBlock(), createBlock(unref(I), {
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
function Li(a2) {
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
var yf = defineComponent({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { src: l } = toRefs(e);
    R();
    const s = cl(), r = Li(l);
    return watch(
      r,
      (i) => {
        n("loadingStatusChange", i), i !== "idle" && (s.imageLoadingStatus.value = i);
      },
      { immediate: true }
    ), (i, u) => unref(r) === "loaded" ? (openBlock(), createBlock(unref(I), {
      key: 0,
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: unref(l)
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])) : createCommentVNode("", true);
  }
});
var gf = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = cl();
    R();
    const n = ref(false);
    let l;
    return watch(e.imageLoadingStatus, (s) => {
      s === "loading" && (n.value = false, t.delayMs ? l = setTimeout(() => {
        n.value = true, clearTimeout(l);
      }, t.delayMs) : n.value = true);
    }, { immediate: true }), (s, r) => n.value && unref(e).imageLoadingStatus.value !== "loaded" ? (openBlock(), createBlock(unref(I), {
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
function Ni(a2) {
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
function pl(a2) {
  var P, $;
  const t = Pn(a2.locale), e = a2.placeholder.value.copy(), n = (P = a2.minValue) != null && P.value ? e.set({ ...a2.minValue.value }) : void 0, l = ($ = a2.maxValue) != null && $.value ? e.set({ ...a2.maxValue.value }) : void 0, s = ref(la({
    dateObj: e,
    weekStartsOn: a2.weekStartsOn,
    locale: a2.locale,
    fixedWeeks: a2.fixedWeeks,
    numberOfMonths: a2.numberOfMonths
  })), r = computed(() => s.value.map((S) => S.value));
  function i(S) {
    return !r.value.some((w) => $14e0f24ef4ac5c92$export$a18c89cbd24170ff(S, w));
  }
  const u = computed(() => {
    if (!l || !s.value.length)
      return false;
    if (a2.disabled.value)
      return true;
    const w = s.value[s.value.length - 1].value.add({ months: 1 }).set({ day: 1 });
    return At(w, l);
  }), d = computed(() => {
    if (!n || !s.value.length)
      return false;
    if (a2.disabled.value)
      return true;
    const w = s.value[0].value.subtract({ months: 1 }).set({ day: 35 });
    return Be(w, n);
  });
  function p(S) {
    var w;
    return !!((w = a2.isDateDisabled) != null && w.call(a2, S) || a2.disabled.value || l && At(S, l) || n && Be(S, n));
  }
  const c = (S) => {
    var w;
    return !!((w = a2.isDateUnavailable) != null && w.call(a2, S));
  }, f = computed(() => s.value.length ? s.value[0].rows[0].map((S) => t.dayOfWeek(ke(S), a2.weekdayFormat)) : []), v = () => {
    const S = s.value[0].value, w = la({
      dateObj: S.add({ months: a2.pagedNavigation ? a2.numberOfMonths : 1 }),
      weekStartsOn: a2.weekStartsOn,
      locale: a2.locale,
      fixedWeeks: a2.fixedWeeks,
      numberOfMonths: a2.numberOfMonths
    });
    s.value = w, a2.placeholder.value = w[0].value.set({ day: 1 });
  }, y = () => {
    const S = s.value[0].value, w = la({
      dateObj: S.subtract({ months: a2.pagedNavigation ? a2.numberOfMonths : 1 }),
      weekStartsOn: a2.weekStartsOn,
      locale: a2.locale,
      fixedWeeks: a2.fixedWeeks,
      numberOfMonths: a2.numberOfMonths
    });
    a2.placeholder.value = w[0].value.set({ day: 1 });
  };
  watch(a2.placeholder, (S, w) => {
    $14e0f24ef4ac5c92$export$a18c89cbd24170ff(e.set({ ...S }), e.set({ ...w })) || (s.value = la({
      dateObj: e.set({ ...S }),
      weekStartsOn: a2.weekStartsOn,
      locale: a2.locale,
      fixedWeeks: a2.fixedWeeks,
      numberOfMonths: a2.numberOfMonths
    }));
  });
  const h2 = computed(() => {
    if (!s.value.length)
      return "";
    if (a2.locale !== t.getLocale() && t.setLocale(a2.locale), s.value.length === 1) {
      const O = ke(s.value[0].value);
      return `${t.fullMonthAndYear(O)}`;
    }
    const S = ke(s.value[0].value), w = ke(s.value[s.value.length - 1].value), D = t.fullMonth(S), A = t.fullMonth(w), E = t.fullYear(S), k = t.fullYear(w);
    return E === k ? `${D} - ${A} ${k}` : `${D} ${E} - ${A} ${k}`;
  }), x = computed(() => `${a2.calendarLabel ?? "Event Date"}, ${h2.value}`);
  return {
    isDateDisabled: p,
    isDateUnavailable: c,
    isNextButtonDisabled: u,
    isPrevButtonDisabled: d,
    grid: s,
    weekdays: f,
    visibleView: r,
    isOutsideVisibleView: i,
    formatter: t,
    nextPage: v,
    prevPage: y,
    headingValue: h2,
    fullCalendarLabel: x
  };
}
var zi = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } };
var Ki = {
  role: "heading",
  "aria-level": "2"
};
var [Mt, Hi] = X("CalendarRoot");
var Wi = defineComponent({
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
      weekdayFormat: p,
      fixedWeeks: c,
      multiple: f,
      minValue: v,
      maxValue: y,
      numberOfMonths: h2,
      preventDeselect: x,
      isDateDisabled: P,
      isDateUnavailable: $,
      calendarLabel: S
    } = toRefs(e), { primitiveElement: w, currentElement: D } = ot(), A = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? void 0,
      passive: e.modelValue === void 0
    }), E = kt({
      defaultPlaceholder: e.placeholder,
      defaultValue: A.value
    }), k = ee(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? E.copy(),
      passive: e.placeholder === void 0
    });
    function V(ue) {
      const se = E.set({ ...k.value });
      k.value = se.set({ ...ue });
    }
    const {
      fullCalendarLabel: O,
      headingValue: W,
      isDateDisabled: j,
      isDateUnavailable: Q,
      isNextButtonDisabled: z,
      isPrevButtonDisabled: K,
      weekdays: L,
      isOutsideVisibleView: Y,
      nextPage: q,
      prevPage: Z,
      formatter: F,
      grid: G
    } = pl({
      locale: e.locale,
      placeholder: k,
      weekStartsOn: e.weekStartsOn,
      fixedWeeks: e.fixedWeeks,
      numberOfMonths: e.numberOfMonths,
      minValue: v,
      maxValue: y,
      disabled: s,
      weekdayFormat: e.weekdayFormat,
      pagedNavigation: e.pagedNavigation,
      isDateDisabled: P.value,
      isDateUnavailable: $.value,
      calendarLabel: S.value
    }), {
      isInvalid: ae,
      isDateSelected: fe
    } = Ni({
      date: A,
      grid: G,
      isDateDisabled: j,
      isDateUnavailable: Q
    });
    watch(A, (ue) => {
      if (Array.isArray(ue) && ue.length) {
        const se = ue[ue.length - 1];
        se && k.value.toString() !== se.toString() && V(se);
      } else
        !Array.isArray(ue) && ue && k.toString() !== ue.toString() && V(ue);
    });
    function ve(ue) {
      const se = E;
      if (f.value) {
        if (Array.isArray(A.value)) {
          if (!A.value) {
            A.value = [se.set({ ...ue })];
            return;
          }
          if (A.value.findIndex((Ee) => $14e0f24ef4ac5c92$export$ea39ec197993aef0(Ee, ue)) === -1)
            A.value = [...A.value, ue];
          else if (!x.value) {
            const Ee = A.value.filter((re) => !$14e0f24ef4ac5c92$export$ea39ec197993aef0(re, ue));
            if (!Ee.length) {
              A.value = [];
              return;
            }
            A.value = Ee.map((re) => se.set({ ...re }));
          }
        }
      } else {
        if (!A.value) {
          A.value = se.set({ ...ue });
          return;
        }
        !x.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(A.value, ue) ? A.value = void 0 : A.value = se.set({ ...ue });
      }
    }
    const de = computed(() => {
      const ue = E.set({ ...k.value });
      return Xo({
        dateObj: ue,
        maxValue: E.set({ ...v.value }),
        minValue: E.set({ ...y.value }),
        numberOfMonths: h2.value,
        pagedNavigation: u.value
      });
    });
    function xe({ startIndex: ue, endIndex: se }) {
      return Yo({
        dateObj: E,
        startIndex: ue,
        endIndex: se,
        maxValue: E.set({ ...v.value }),
        minValue: E.set({ ...y.value })
      });
    }
    return onMounted(() => {
      i.value && el(D.value);
    }), Hi({
      isDateUnavailable: Q,
      isDateDisabled: j,
      locale: l,
      formatter: F,
      modelValue: A,
      placeholder: k,
      disabled: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: p,
      fixedWeeks: c,
      multiple: f,
      numberOfMonths: h2,
      readonly: r,
      preventDeselect: x,
      fullCalendarLabel: O,
      headingValue: W,
      isInvalid: ae,
      isDateSelected: fe,
      isNextButtonDisabled: z,
      isPrevButtonDisabled: K,
      isOutsideVisibleView: Y,
      nextPage: q,
      prevPage: Z,
      parentElement: D,
      onPlaceholderChange: V,
      onDateChange: ve,
      defaultDate: E
    }), (ue, se) => (openBlock(), createBlock(unref(I), {
      ref_key: "primitiveElement",
      ref: w,
      as: ue.as,
      "as-child": ue.asChild,
      role: "application",
      "aria-label": unref(O),
      "data-readonly": unref(r) ? "" : void 0,
      "data-disabled": unref(s) ? "" : void 0,
      "data-invalid": unref(ae) ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(ue.$slots, "default", {
          date: unref(E).set({ ...unref(k) }),
          grid: unref(G),
          weekDays: unref(L),
          formatter: unref(F),
          getMonths: de.value,
          getYears: xe
        }),
        createBaseVNode("div", zi, [
          createBaseVNode("div", Ki, toDisplayString(unref(O)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid"]));
  }
});
var ji = defineComponent({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ui = defineComponent({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Mt();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var Gi = defineComponent({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a2) {
    const t = a2, e = Mt();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var qi = defineComponent({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a2) {
    const t = a2, e = Mt();
    return (n, l) => {
      var s, r;
      return openBlock(), createBlock(unref(I), mergeProps(t, {
        role: "gridcell",
        "aria-selected": unref(e).isDateSelected(n.date) ? true : void 0,
        "aria-disabled": unref(e).isDateDisabled(n.date) || ((r = (s = unref(e)).isDateUnavailable) == null ? void 0 : r.call(s, n.date)),
        "data-disabled": unref(e).isDateDisabled(n.date) ? "" : void 0
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
});
var Yi = defineComponent({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xi = defineComponent({
  __name: "CalendarNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Mt();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
      "aria-label": "Next page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": unref(e).isNextButtonDisabled.value || void 0,
      "data-disabled": unref(e).isNextButtonDisabled.value || void 0,
      disabled: unref(e).isNextButtonDisabled.value,
      onClick: unref(e).nextPage
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled", "onClick"]));
  }
});
var Zi = defineComponent({
  __name: "CalendarPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Mt();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps({ "aria-label": "Previous page" }, t, {
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": unref(e).isPrevButtonDisabled.value || void 0,
      "data-disabled": unref(e).isPrevButtonDisabled.value || void 0,
      disabled: unref(e).isPrevButtonDisabled.value,
      onClick: unref(e).prevPage
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled", "onClick"]));
  }
});
var Ji = defineComponent({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), mergeProps(t, { "aria-hidden": "true" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qi = defineComponent({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var eu = defineComponent({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var tu = defineComponent({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = bt(), n = Mt(), { primitiveElement: l, currentElement: s } = ot(), r = computed(() => n.formatter.custom(ke(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = computed(() => n.isDateDisabled(t.day)), u = computed(
      () => {
        var S;
        return (S = n.isDateUnavailable) == null ? void 0 : S.call(n, t.day);
      }
    ), d = computed(() => $14e0f24ef4ac5c92$export$629b0a497aa65267(t.day, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())), p = computed(() => !$14e0f24ef4ac5c92$export$a18c89cbd24170ff(t.day, t.month)), c = computed(
      () => n.isOutsideVisibleView(t.day)
    ), f = computed(() => $14e0f24ef4ac5c92$export$ea39ec197993aef0(t.day, n.placeholder.value)), v = computed(() => n.isDateSelected(t.day)), y = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function h2(S) {
      var w;
      n.readonly.value || n.isDateDisabled(S) || (w = n.isDateUnavailable) != null && w.call(n, S) || n.onDateChange(S);
    }
    function x(S) {
      h2(
        ya(
          S.target.getAttribute("data-value"),
          n.defaultDate
        )
      );
    }
    function P(S) {
      const w = S.target;
      S.preventDefault(), S.stopPropagation();
      const D = n.parentElement.value, A = D ? Array.from(D.querySelectorAll(y)) : [];
      let k = A.indexOf(s.value);
      const V = 7;
      switch (S.code) {
        case e.ARROW_RIGHT:
          k++;
          break;
        case e.ARROW_LEFT:
          k--;
          break;
        case e.ARROW_UP:
          k -= V;
          break;
        case e.ARROW_DOWN:
          k += V;
          break;
        case e.ENTER:
        case e.SPACE_CODE:
          h2(
            ya(
              w.getAttribute("data-value"),
              n.defaultDate
            )
          );
          return;
        default:
          return;
      }
      if (k >= 0 && k < A.length) {
        A[k].focus();
        return;
      }
      if (k < 0) {
        if (n.isPrevButtonDisabled.value)
          return;
        n.prevPage(), nextTick(() => {
          const O = D ? Array.from(D.querySelectorAll(y)) : [];
          O[O.length - Math.abs(k)].focus();
        });
        return;
      }
      if (k >= A.length) {
        if (n.isNextButtonDisabled.value)
          return;
        n.nextPage(), nextTick(() => {
          (D ? Array.from(D.querySelectorAll(y)) : [])[k - A.length].focus();
        });
      }
    }
    const $ = computed(() => n.formatter.custom(t.day.toDate($14e0f24ef4ac5c92$export$aa8b41735afcabd2()), {
      day: "numeric"
    }));
    return (S, w) => (openBlock(), createBlock(unref(I), mergeProps({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || i.value || u.value ? true : void 0,
      "data-selected": v.value ? true : void 0,
      "data-value": S.day.toString(),
      "data-disabled": i.value || p.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": d.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": c.value ? "" : void 0,
      "data-focused": f.value ? "" : void 0,
      tabindex: f.value ? 0 : p.value || i.value ? void 0 : -1,
      onClick: x,
      onKeydown: [
        withKeys(P, ["up", "down", "left", "right", "space", "enter"]),
        w[0] || (w[0] = withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: withCtx(() => [
        renderSlot(S.$slots, "default", {}, () => [
          createTextVNode(toDisplayString($.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function Ca(a2) {
  return a2 === "indeterminate";
}
function fl(a2) {
  return Ca(a2) ? "indeterminate" : a2 ? "checked" : "unchecked";
}
var au = ["value", "checked", "name", "disabled", "required"];
var [nu, ou] = X("CheckboxRoot");
var bf = defineComponent({
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
    const e = a2, n = t, { disabled: l } = toRefs(e), s = ee(e, "checked", n, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    }), { forwardRef: r, currentElement: i } = R(), u = yt(i), d = computed(() => {
      var p;
      return e.id && i.value ? (p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return ou({
      disabled: l,
      state: s
    }), (p, c) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(I), mergeProps(p.$attrs, {
        id: p.id,
        ref: unref(r),
        role: "checkbox",
        "as-child": e.asChild,
        as: p.as,
        type: p.as === "button" ? "button" : void 0,
        "aria-checked": unref(Ca)(unref(s)) ? "mixed" : unref(s),
        "aria-required": false,
        "aria-label": p.$attrs["aria-label"] || d.value,
        "data-state": unref(fl)(unref(s)),
        "data-disabled": unref(l) ? "" : void 0,
        disabled: unref(l),
        onKeydown: withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c[0] || (c[0] = (f) => s.value = unref(Ca)(unref(s)) ? true : !unref(s))
      }), {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      unref(u) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: p.value,
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
      }, null, 12, au)) : createCommentVNode("", true)
    ], 64));
  }
});
var Cf = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const { forwardRef: t } = R(), e = nu();
    return (n, l) => (openBlock(), createBlock(unref(we), {
      present: n.forceMount || unref(Ca)(unref(e).state.value) || unref(e).state.value === true
    }, {
      default: withCtx(() => [
        createVNode(unref(I), mergeProps({
          ref: unref(t),
          "data-state": unref(fl)(unref(e).state.value),
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
var [vl, lu] = X("PopperRoot");
var Ct = defineComponent({
  __name: "PopperRoot",
  setup(a2) {
    const t = ref();
    return lu({
      anchor: t,
      onAnchorChange: (e) => t.value = e
    }), (e, n) => renderSlot(e.$slots, "default");
  }
});
var _t = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e, currentElement: n } = R(), l = vl();
    return watch(n, () => {
      l.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (openBlock(), createBlock(unref(I), {
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
function su(a2) {
  return a2 !== null;
}
function ru(a2) {
  return {
    name: "transformOrigin",
    options: a2,
    fn(t) {
      var x, P, $;
      const { placement: e, rects: n, middlewareData: l } = t, r = ((x = l.arrow) == null ? void 0 : x.centerOffset) !== 0, i = r ? 0 : a2.arrowWidth, u = r ? 0 : a2.arrowHeight, [d, p] = on(e), c = { start: "0%", center: "50%", end: "100%" }[p], f = (((P = l.arrow) == null ? void 0 : P.x) ?? 0) + i / 2, v = ((($ = l.arrow) == null ? void 0 : $.y) ?? 0) + u / 2;
      let y = "", h2 = "";
      return d === "bottom" ? (y = r ? c : `${f}px`, h2 = `${-u}px`) : d === "top" ? (y = r ? c : `${f}px`, h2 = `${n.floating.height + u}px`) : d === "right" ? (y = `${-u}px`, h2 = r ? c : `${v}px`) : d === "left" && (y = `${n.floating.width + u}px`, h2 = r ? c : `${v}px`), { data: { x: y, y: h2 } };
    }
  };
}
function on(a2) {
  const [t, e = "center"] = a2.split("-");
  return [t, e];
}
var ml = {
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
var [iu, uu] = X("PopperContent");
var vt = defineComponent({
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
    ...ml
  }),
  emits: ["placed"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = vl(), { forwardRef: s, currentElement: r } = R(), i = ref(), u = ref(), { width: d, height: p } = al(u), c = computed(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), f = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), v = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), y = computed(() => ({
      padding: f.value,
      boundary: v.value.filter(su),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), h2 = Qs(() => [
      offset({
        mainAxis: e.sideOffset + p.value,
        alignmentAxis: e.alignOffset
      }),
      e.prioritizePosition && e.avoidCollisions && flip2({
        ...y.value
      }),
      e.avoidCollisions && shift2({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? limitShift2() : void 0,
        ...y.value
      }),
      !e.prioritizePosition && e.avoidCollisions && flip2({
        ...y.value
      }),
      size2({
        ...y.value,
        apply: ({ elements: O, rects: W, availableWidth: j, availableHeight: Q }) => {
          const { width: z, height: K } = W.reference, L = O.floating.style;
          Object.assign(O.floating.style, {
            maxWidth: `${j}px`,
            maxHeight: `${Q}px`
          }), L.setProperty(
            "--radix-popper-available-width",
            `${j}px`
          ), L.setProperty(
            "--radix-popper-available-height",
            `${Q}px`
          ), L.setProperty(
            "--radix-popper-anchor-width",
            `${z}px`
          ), L.setProperty(
            "--radix-popper-anchor-height",
            `${K}px`
          );
        }
      }),
      u.value && arrow3({ element: u.value, padding: e.arrowPadding }),
      ru({
        arrowWidth: d.value,
        arrowHeight: p.value
      }),
      e.hideWhenDetached && hide2({ strategy: "referenceHidden", ...y.value })
    ]), { floatingStyles: x, placement: P, isPositioned: $, middlewareData: S } = useFloating(
      l.anchor,
      i,
      {
        strategy: "fixed",
        placement: c,
        whileElementsMounted: (...O) => autoUpdate(...O, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: h2
      }
    ), w = computed(
      () => on(P.value)[0]
    ), D = computed(
      () => on(P.value)[1]
    );
    watchEffect(() => {
      $.value && n("placed");
    });
    const A = computed(
      () => {
        var O;
        return ((O = S.value.arrow) == null ? void 0 : O.centerOffset) !== 0;
      }
    ), E = ref("");
    watchEffect(() => {
      r.value && (E.value = window.getComputedStyle(r.value).zIndex);
    });
    const k = computed(() => {
      var O;
      return ((O = S.value.arrow) == null ? void 0 : O.x) ?? 0;
    }), V = computed(() => {
      var O;
      return ((O = S.value.arrow) == null ? void 0 : O.y) ?? 0;
    });
    return uu({
      placedSide: w,
      onArrowChange: (O) => u.value = O,
      arrowX: k,
      arrowY: V,
      shouldHideArrow: A
    }), (O, W) => {
      var j, Q, z;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(x),
          transform: unref($) ? unref(x).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: E.value,
          "--radix-popper-transform-origin": [
            (j = unref(S).transformOrigin) == null ? void 0 : j.x,
            (Q = unref(S).transformOrigin) == null ? void 0 : Q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((z = unref(S).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        createVNode(unref(I), mergeProps({ ref: unref(s) }, O.$attrs, {
          "as-child": e.asChild,
          as: O.as,
          "data-side": w.value,
          "data-align": D.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref($) ? void 0 : "none"
          }
        }), {
          default: withCtx(() => [
            renderSlot(O.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
var du = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var cu = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(I), mergeProps(t, {
      width: e.width,
      height: e.height,
      viewBox: e.asChild ? void 0 : "0 0 30 10",
      preserveAspectRatio: e.asChild ? void 0 : "none"
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default", {}, () => [
          du
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
});
var pu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var Vt = defineComponent({
  inheritAttrs: false,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const { forwardRef: t } = R(), e = iu(), n = computed(() => pu[e.placedSide.value]);
    return (l, s) => {
      var r, i, u, d;
      return openBlock(), createElementBlock("span", {
        ref: (p) => {
          unref(e).onArrowChange(p);
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
        createVNode(cu, mergeProps(l.$attrs, {
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
var Ft = defineComponent({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    return R(), (t, e) => (openBlock(), createBlock(unref(I), {
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
var hl = defineComponent({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(a2) {
    const t = a2, e = computed(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, l) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${l}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${l}]`, value: n }) : typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, l]) => ({ name: `[${t.name}][${n}]`, value: l })) : []);
    return (n, l) => (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (s) => (openBlock(), createBlock(Ft, {
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
function fu(a2) {
  return a2 && a2.__esModule && Object.prototype.hasOwnProperty.call(a2, "default") ? a2.default : a2;
}
var vu = function a(t, e) {
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
var $t = fu(vu);
var mu = "data-radix-vue-collection-item";
var [On, hu] = X("CollectionProvider");
function In(a2 = mu) {
  const t = ref(/* @__PURE__ */ new Map()), e = ref(), n = hu({
    collectionRef: e,
    itemMap: t,
    attrName: a2
  }), { getItems: l } = yl(n), s = computed(() => Array.from(n.itemMap.value.values())), r = computed(() => n.itemMap.value.size);
  return { getItems: l, reactiveItems: s, itemMapSize: r };
}
var kn = defineComponent({
  name: "CollectionSlot",
  setup(a2, { slots: t }) {
    const e = On(), { primitiveElement: n, currentElement: l } = ot();
    return watch(l, () => {
      e.collectionRef.value = l.value;
    }), () => h(En, { ref: n }, t);
  }
});
var Mn = defineComponent({
  name: "CollectionItem",
  setup(a2, { slots: t, attrs: e }) {
    const n = On(), { primitiveElement: l, currentElement: s } = ot(), r = getCurrentInstance();
    return watchEffect((i) => {
      var u;
      if (s.value) {
        const d = markRaw(s.value);
        n.itemMap.value.set(d, { ref: s.value, ...markRaw(((u = r == null ? void 0 : r.parent) == null ? void 0 : u.props) ?? {}) }), i(() => n.itemMap.value.delete(d));
      }
    }), () => h(En, { ...e, [n.attrName]: "", ref: l }, t);
  }
});
function yl(a2) {
  const t = a2 ?? On();
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
var [qe, yu] = X("ComboboxRoot");
var _f = defineComponent({
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
    const e = a2, n = t, { multiple: l, disabled: s, dir: r } = toRefs(e), i = Pe(r), u = ee(e, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: e.searchTerm === void 0
    }), d = ee(e, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: e.defaultValue ?? l.value ? [] : void 0,
      passive: e.modelValue === void 0,
      deep: true
    }), p = ee(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), c = ref();
    async function f(z) {
      var K, L;
      p.value = z, await nextTick(), z ? (d.value && (Array.isArray(d.value) && l.value ? c.value = (K = S().find((Y) => {
        var q, Z;
        return ((Z = (q = Y.ref) == null ? void 0 : q.dataset) == null ? void 0 : Z.state) === "checked";
      })) == null ? void 0 : K.value : c.value = d.value), (L = h2.value) == null || L.focus(), Q()) : (y.value = false, k());
    }
    function v(z) {
      if (Array.isArray(d.value) && l.value) {
        const K = d.value.findIndex((L) => $t(L, z));
        K === -1 ? d.value.push(z) : d.value.splice(K, 1);
      } else
        d.value = z, f(false);
    }
    const y = ref(false), h2 = ref(), x = ref(), { forwardRef: P, currentElement: $ } = R(), { getItems: S, reactiveItems: w, itemMapSize: D } = In("data-radix-vue-combobox-item"), A = ref([]);
    watch(() => D.value, () => {
      A.value = S().map((z) => z.value);
    }, { immediate: true });
    const E = computed(() => {
      if (y.value) {
        if (e.filterFunction)
          return e.filterFunction(A.value, u.value);
        const z = A.value.filter((K) => typeof K == "string");
        if (z.length)
          return z.filter((K) => {
            var L;
            return K.toLowerCase().includes((L = u.value) == null ? void 0 : L.toLowerCase());
          });
      }
      return A.value;
    });
    function k() {
      !l.value && d.value && !Array.isArray(d.value) ? e.displayValue ? u.value = e.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const V = computed(() => E.value.findIndex((z) => $t(z, c.value))), O = computed(() => {
      var z;
      return (z = w.value.find((K) => K.value === c.value)) == null ? void 0 : z.ref;
    }), W = computed(() => JSON.stringify(d.value));
    watch(W, async () => {
      await nextTick(), await nextTick(), k();
    }, { immediate: true }), watch(() => E.value.length, async (z) => {
      await nextTick(), await nextTick(), z && V.value === -1 && (c.value = E.value[0]);
    });
    const j = yt($);
    function Q() {
      O.value instanceof Element && O.value.scrollIntoView({ block: "nearest" });
    }
    return yu({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error igoring
      onValueChange: v,
      isUserInputted: y,
      multiple: l,
      disabled: s,
      open: p,
      onOpenChange: f,
      filteredOptions: E,
      contentId: "",
      inputElement: h2,
      onInputElementChange: (z) => h2.value = z,
      onInputNavigation: async (z) => {
        const K = V.value;
        K === 0 && z === "up" || K === E.value.length - 1 && z === "down" || (K === -1 && E.value.length || z === "home" ? c.value = E.value[0] : z === "end" ? c.value = E.value[E.value.length - 1] : c.value = E.value[z === "up" ? K - 1 : K + 1], Q());
      },
      onInputEnter: async () => {
        var z;
        E.value.length && c.value && O.value instanceof Element && ((z = O.value) == null || z.click());
      },
      selectedValue: c,
      onSelectedValueChange: (z) => c.value = z,
      parentElement: $,
      contentElement: x,
      onContentElementChange: (z) => x.value = z
    }), (z, K) => (openBlock(), createBlock(unref(Ct), null, {
      default: withCtx(() => [
        createVNode(unref(I), mergeProps({
          ref: unref(P),
          style: {
            pointerEvents: unref(p) ? "auto" : void 0
          },
          as: z.as,
          "as-child": z.asChild,
          dir: unref(i)
        }, z.$attrs), {
          default: withCtx(() => [
            renderSlot(z.$slots, "default", {
              open: unref(p),
              modelValue: unref(d)
            }),
            unref(j) && e.name ? (openBlock(), createBlock(unref(hl), {
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
var wf = defineComponent({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, e = qe(), { forwardRef: n, currentElement: l } = R();
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
      var p;
      e.searchTerm.value = (p = d.target) == null ? void 0 : p.value, e.open.value || e.onOpenChange(true), e.isUserInputted.value = true;
    }
    return (d, p) => (openBlock(), createBlock(unref(I), {
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
var xf = defineComponent({
  __name: "ComboboxAnchor",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const { forwardRef: t } = R();
    return (e, n) => (openBlock(), createBlock(unref(_t), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(I), mergeProps({
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
var Pf = defineComponent({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = qe(), n = computed(() => t.disabled || e.disabled.value || false);
    return (l, s) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var Sf = defineComponent({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = qe();
    function n() {
      var l;
      e.searchTerm.value = "", (l = e.inputElement.value) == null || l.focus();
    }
    return (l, s) => (openBlock(), createBlock(unref(I), mergeProps({
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
var [gl, gu] = X("ComboboxGroup");
var Df = defineComponent({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { currentRef: e, currentElement: n } = R(), l = me(void 0, "radix-vue-combobox-group"), s = qe(), r = ref(false);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!u.length;
    }
    return gr(n, () => {
      i();
    }, { childList: true }), watch(() => s.searchTerm.value, () => {
      nextTick(() => {
        i();
      });
    }, { immediate: true }), gu({
      id: l
    }), (u, d) => withDirectives((openBlock(), createBlock(unref(I), mergeProps(t, {
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
var $f = defineComponent({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = gl({ id: "" });
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var [bu, Cu] = X("ComboboxContent");
var _u = defineComponent({
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
    const e = a2, n = t, { position: l } = toRefs(e), s = qe();
    ta(e.bodyLock);
    const { forwardRef: r, currentElement: i } = R();
    aa(i);
    const u = computed(() => e.position === "popper" ? e : {}), d = gt(u.value);
    function p(f) {
      s.onSelectedValueChange("");
    }
    onMounted(() => {
      s.onContentElementChange(i.value);
    });
    const c = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return Cu({ position: l }), (f, v) => (openBlock(), createBlock(unref(kn), null, {
      default: withCtx(() => [
        f.dismissable ? (openBlock(), createBlock(unref(st), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: v[0] || (v[0] = (y) => unref(s).onOpenChange(false)),
          onFocusOutside: v[1] || (v[1] = (y) => {
            var h2;
            (h2 = unref(s).parentElement.value) != null && h2.contains(y.target) && y.preventDefault(), n("focusOutside", y);
          }),
          onInteractOutside: v[2] || (v[2] = (y) => n("interactOutside", y)),
          onEscapeKeyDown: v[3] || (v[3] = (y) => n("escapeKeyDown", y)),
          onPointerDownOutside: v[4] || (v[4] = (y) => {
            var h2;
            (h2 = unref(s).parentElement.value) != null && h2.contains(y.target) && y.preventDefault(), n("pointerDownOutside", y);
          })
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(l) === "popper" ? unref(vt) : unref(I)), mergeProps({ ...f.$attrs, ...unref(d) }, {
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
                ...unref(l) === "popper" ? c : {}
              },
              onPointerleave: p
            }), {
              default: withCtx(() => [
                renderSlot(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (openBlock(), createBlock(resolveDynamicComponent(unref(l) === "popper" ? unref(vt) : unref(I)), mergeProps({ key: 1 }, { ...f.$attrs, ...u.value }, {
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
            ...unref(l) === "popper" ? c : {}
          },
          onPointerleave: p
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
var Ef = defineComponent({
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
    const l = Ce(a2, t), { forwardRef: s } = R(), r = qe();
    return r.contentId || (r.contentId = me(void 0, "radix-vue-combobox-content")), (i, u) => (openBlock(), createBlock(unref(we), {
      present: i.forceMount || unref(r).open.value
    }, {
      default: withCtx(() => [
        createVNode(_u, mergeProps({ ...unref(l), ...i.$attrs }, { ref: unref(s) }), {
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
var Bf = defineComponent({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    R();
    const e = qe(), n = computed(() => e.filteredOptions.value.length === 0);
    return (l, s) => n.value ? (openBlock(), createBlock(unref(I), normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", {}, () => [
          createTextVNode("No options")
        ])
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Rf = defineComponent({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R();
    return (n, l) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(I), mergeProps({ ...n.$attrs, ...t }, {
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
      createVNode(unref(I), {
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
var [wu, xu] = X("ComboboxItem");
var Pu = "combobox.select";
var Af = defineComponent({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { disabled: l } = toRefs(e), s = qe();
    gl({ id: "", options: ref([]) });
    const { forwardRef: r } = R(), i = computed(
      () => {
        var y, h2;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (y = s.modelValue.value) == null ? void 0 : y.some((x) => $t(x, e.value)) : $t((h2 = s.modelValue) == null ? void 0 : h2.value, e.value);
      }
    ), u = computed(() => $t(s.selectedValue.value, e.value)), d = me(void 0, "radix-vue-combobox-item"), p = computed(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((y) => $t(y, e.value)) : true);
    async function c(y) {
      n("select", y), !(y != null && y.defaultPrevented) && !l.value && y && s.onValueChange(e.value);
    }
    function f(y) {
      if (!y)
        return;
      const h2 = { originalEvent: y, value: e.value };
      hn(Pu, c, h2);
    }
    async function v(y) {
      await nextTick(), !y.defaultPrevented && s.onSelectedValueChange(e.value);
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return xu({
      isSelected: i
    }), (y, h2) => (openBlock(), createBlock(unref(Mn), null, {
      default: withCtx(() => [
        withDirectives(createVNode(unref(I), {
          ref: unref(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": unref(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": unref(l) || void 0,
          "data-disabled": unref(l) ? "" : void 0,
          as: y.as,
          "as-child": y.asChild,
          "data-hidden": p.value ? void 0 : true,
          onClick: f,
          onPointermove: v
        }, {
          default: withCtx(() => [
            renderSlot(y.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(y.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [vShow, p.value]
        ])
      ]),
      _: 3
    }));
  }
});
var Tf = defineComponent({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = wu();
    return (n, l) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(I), mergeProps({
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
var Of = defineComponent({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(I), mergeProps(t, { "aria-hidden": "" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var If = defineComponent({
  __name: "ComboboxArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2, e = qe(), n = bu();
    return R(), (l, s) => unref(e).open.value && unref(n).position.value === "popper" ? (openBlock(), createBlock(unref(Vt), normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var kf = defineComponent({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ea = defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(_t), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vn = defineComponent({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Vt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [wt, bl] = X(["MenuRoot", "MenuSub"], "MenuContext");
var [na, Su] = X("MenuRoot");
var Fn = defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { modal: l, dir: s } = toRefs(e), r = Pe(s), i = ee(e, "open", n), u = ref(), d = ref(false);
    return watchEffect((p) => {
      if (!Ge)
        return;
      const c = () => {
        d.value = true, document.addEventListener("pointerdown", f, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", f, {
          capture: true,
          once: true
        });
      }, f = () => d.value = false;
      document.addEventListener("keydown", c, { capture: true }), p(() => {
        document.removeEventListener("keydown", c, { capture: true }), document.removeEventListener("pointerdown", f, {
          capture: true
        }), document.removeEventListener("pointermove", f, {
          capture: true
        });
      });
    }), bl({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), Su({
      onClose: () => {
        i.value = false;
      },
      isUsingKeyboardRef: d,
      dir: r,
      modal: l
    }), (p, c) => (openBlock(), createBlock(unref(Ct), null, {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Du = "rovingFocusGroup.onEntryFocus";
var $u = { bubbles: false, cancelable: true };
var Eu = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Bu(a2, t) {
  return t !== "rtl" ? a2 : a2 === "ArrowLeft" ? "ArrowRight" : a2 === "ArrowRight" ? "ArrowLeft" : a2;
}
function Ru(a2, t, e) {
  const n = Bu(a2.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Eu[n];
}
function Cl(a2) {
  const t = document.activeElement;
  for (const e of a2)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function Au(a2, t) {
  return a2.map((e, n) => a2[(t + n) % a2.length]);
}
var [Tu, Ou] = X("RovingFocusGroup");
var Lt = defineComponent({
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
    const e = a2, n = t, { loop: l, orientation: s, dir: r } = toRefs(e), i = Pe(r), u = ee(e, "currentTabStopId", n, {
      defaultValue: e.defaultCurrentTabStopId,
      passive: e.currentTabStopId === void 0
    }), d = ref(false), p = ref(false), c = ref(0), { forwardRef: f, currentElement: v } = R(), { createCollection: y } = Ae("rovingFocus"), h2 = y(v);
    function x(P) {
      const $ = !p.value;
      if (P.currentTarget && P.target === P.currentTarget && $ && !d.value) {
        const S = new CustomEvent(Du, $u);
        if (P.currentTarget.dispatchEvent(S), n("entryFocus", S), !S.defaultPrevented) {
          const w = h2.value, D = w.find((k) => k.getAttribute("data-active") === "true"), A = w.find(
            (k) => k.id === u.value
          ), E = [D, A, ...w].filter(
            Boolean
          );
          Cl(E);
        }
      }
      p.value = false;
    }
    return Ou({
      loop: l,
      dir: i,
      orientation: s,
      currentTabStopId: u,
      onItemFocus: (P) => {
        u.value = P;
      },
      onItemShiftTab: () => {
        d.value = true;
      },
      onFocusableItemAdd: () => {
        c.value++;
      },
      onFocusableItemRemove: () => {
        c.value--;
      }
    }), (P, $) => (openBlock(), createBlock(unref(I), {
      ref: unref(f),
      tabindex: d.value || c.value === 0 ? -1 : 0,
      "data-orientation": unref(s),
      as: P.as,
      "as-child": P.asChild,
      dir: unref(i),
      style: { outline: "none" },
      onMousedown: $[0] || ($[0] = (S) => p.value = true),
      onFocus: x,
      onBlur: $[1] || ($[1] = (S) => d.value = false)
    }, {
      default: withCtx(() => [
        renderSlot(P.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"]));
  }
});
var Nt = defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: true },
    active: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = Tu(), n = computed(() => t.tabStopId || me()), l = computed(
      () => e.currentTabStopId.value === n.value
    ), { injectCollection: s } = Ae("rovingFocus"), r = s();
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
      const d = Ru(
        u,
        e.orientation.value,
        e.dir.value
      );
      if (d !== void 0) {
        if (u.metaKey || u.ctrlKey || u.altKey || u.shiftKey)
          return;
        u.preventDefault();
        let p = [...r.value];
        if (d === "last")
          p.reverse();
        else if (d === "prev" || d === "next") {
          d === "prev" && p.reverse();
          const c = p.indexOf(
            u.currentTarget
          );
          p = e.loop.value ? Au(p, c + 1) : p.slice(c + 1);
        }
        nextTick(() => Cl(p));
      }
    }
    return (u, d) => (openBlock(), createBlock(unref(I), {
      "data-radix-vue-collection-item": "",
      tabindex: l.value ? 0 : -1,
      "data-orientation": unref(e).orientation.value,
      "data-active": u.active,
      "data-disabled": !u.focusable || void 0,
      as: u.as,
      "as-child": u.asChild,
      onMousedown: d[0] || (d[0] = (p) => {
        u.focusable ? unref(e).onItemFocus(n.value) : p.preventDefault();
      }),
      onFocus: d[1] || (d[1] = (p) => unref(e).onItemFocus(n.value)),
      onKeydown: i
    }, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"]));
  }
});
var [Ln, Iu] = X("MenuContent");
var Nn = defineComponent({
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
    ...ml
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = wt(), s = na(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = toRefs(e);
    Sn(), ta(i.value);
    const d = ref(""), p = ref(0), c = ref(0), f = ref(null), v = ref("right"), y = ref(0), h2 = ref(null), { createCollection: x } = Ae(), { forwardRef: P, currentElement: $ } = R(), S = x($);
    watch($, (O) => {
      l.onContentChange(O);
    });
    const { handleTypeaheadSearch: w } = Dn(S);
    onUnmounted(() => {
      window.clearTimeout(p.value);
    });
    function D(O) {
      var j, Q;
      return v.value === ((j = f.value) == null ? void 0 : j.side) && $i(O, (Q = f.value) == null ? void 0 : Q.area);
    }
    async function A(O) {
      var W;
      n("openAutoFocus", O), !O.defaultPrevented && (O.preventDefault(), (W = $.value) == null || W.focus());
    }
    function E(O) {
      if (O.defaultPrevented)
        return;
      const j = O.target.closest("[data-radix-menu-content]") === O.currentTarget, Q = O.ctrlKey || O.altKey || O.metaKey, z = O.key.length === 1, K = It(
        O,
        document.activeElement,
        $.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: true,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (K)
        return K == null ? void 0 : K.focus();
      if (O.code === "Space" || (j && (O.key === "Tab" && O.preventDefault(), !Q && z && w(O.key)), O.target !== $.value) || !xi.includes(O.key))
        return;
      O.preventDefault();
      const L = S.value;
      il.includes(O.key) && L.reverse(), nn(L);
    }
    function k(O) {
      var W, j;
      (j = (W = O == null ? void 0 : O.currentTarget) == null ? void 0 : W.contains) != null && j.call(W, O.target) || (window.clearTimeout(p.value), d.value = "");
    }
    function V(O) {
      var Q;
      if (!qt(O))
        return;
      const W = O.target, j = y.value !== O.clientX;
      if ((Q = O == null ? void 0 : O.currentTarget) != null && Q.contains(W) && j) {
        const z = O.clientX > y.value ? "right" : "left";
        v.value = z, y.value = O.clientX;
      }
    }
    return Iu({
      onItemEnter: (O) => !!D(O),
      onItemLeave: (O) => {
        var W;
        D(O) || ((W = $.value) == null || W.focus(), h2.value = null);
      },
      onTriggerLeave: (O) => !!D(O),
      searchRef: d,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (O) => {
        f.value = O;
      }
    }), (O, W) => (openBlock(), createBlock(unref($a), {
      "as-child": "",
      trapped: unref(r),
      onMountAutoFocus: A,
      onUnmountAutoFocus: W[7] || (W[7] = (j) => n("closeAutoFocus", j))
    }, {
      default: withCtx(() => [
        createVNode(unref(st), {
          "as-child": "",
          "disable-outside-pointer-events": unref(i),
          onEscapeKeyDown: W[2] || (W[2] = (j) => n("escapeKeyDown", j)),
          onPointerDownOutside: W[3] || (W[3] = (j) => n("pointerDownOutside", j)),
          onFocusOutside: W[4] || (W[4] = (j) => n("focusOutside", j)),
          onInteractOutside: W[5] || (W[5] = (j) => n("interactOutside", j)),
          onDismiss: W[6] || (W[6] = (j) => n("dismiss"))
        }, {
          default: withCtx(() => [
            createVNode(unref(Lt), {
              "current-tab-stop-id": h2.value,
              "onUpdate:currentTabStopId": W[0] || (W[0] = (j) => h2.value = j),
              "as-child": "",
              orientation: "vertical",
              dir: unref(s).dir.value,
              loop: unref(u),
              onEntryFocus: W[1] || (W[1] = (j) => {
                n("entryFocus", j), unref(s).isUsingKeyboardRef.value || j.preventDefault();
              })
            }, {
              default: withCtx(() => [
                createVNode(unref(vt), {
                  ref: unref(P),
                  role: "menu",
                  as: O.as,
                  "as-child": O.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": unref(An)(unref(l).open.value),
                  dir: unref(s).dir.value,
                  side: O.side,
                  "side-offset": O.sideOffset,
                  align: O.align,
                  "align-offset": O.alignOffset,
                  "avoid-collisions": O.avoidCollisions,
                  "collision-boundary": O.collisionBoundary,
                  "collision-padding": O.collisionPadding,
                  "arrow-padding": O.arrowPadding,
                  "prioritize-position": O.prioritizePosition,
                  sticky: O.sticky,
                  "hide-when-detached": O.hideWhenDetached,
                  onKeydown: E,
                  onBlur: k,
                  onPointermove: V
                }, {
                  default: withCtx(() => [
                    renderSlot(O.$slots, "default")
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
var _l = defineComponent({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Ln(), n = ref(false);
    async function l(r) {
      if (!r.defaultPrevented && qt(r)) {
        if (t.disabled)
          e.onItemLeave(r);
        else if (!e.onItemEnter(r)) {
          const u = r.currentTarget;
          u == null || u.focus();
        }
      }
    }
    async function s(r) {
      await nextTick(), !r.defaultPrevented && qt(r) && e.onItemLeave(r);
    }
    return (r, i) => (openBlock(), createBlock(unref(I), {
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
var oa = defineComponent({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R(), r = na(), i = Ln(), u = ref(false);
    async function d() {
      const p = s.value;
      if (!e.disabled && p) {
        const c = new CustomEvent(_i, {
          bubbles: true,
          cancelable: true
        });
        n("select", c), await nextTick(), c.defaultPrevented ? u.value = false : r.onClose();
      }
    }
    return (p, c) => (openBlock(), createBlock(_l, mergeProps(e, {
      ref: unref(l),
      onClick: d,
      onPointerdown: c[0] || (c[0] = () => {
        u.value = true;
      }),
      onPointerup: c[1] || (c[1] = async (f) => {
        var v;
        await nextTick(), !f.defaultPrevented && (u.value || (v = f.currentTarget) == null || v.click());
      }),
      onKeydown: c[2] || (c[2] = async (f) => {
        const v = unref(i).searchRef.value !== "";
        p.disabled || v && f.key === " " || unref(an).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [ku, wl] = X(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
);
var zn = defineComponent({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = ku({
      checked: ref(false)
    });
    return (e, n) => (openBlock(), createBlock(unref(we), {
      present: e.forceMount || unref(ba)(unref(t).checked.value) || unref(t).checked.value === true
    }, {
      default: withCtx(() => [
        createVNode(unref(I), {
          as: e.as,
          "as-child": e.asChild,
          "data-state": unref(Tn)(unref(t).checked.value)
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
var Kn = defineComponent({
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
    const e = a2, n = t, l = ee(e, "checked", n);
    return wl({ checked: l }), (s, r) => (openBlock(), createBlock(oa, mergeProps({ role: "menuitemcheckbox" }, e, {
      "aria-checked": unref(ba)(unref(l)) ? "mixed" : unref(l),
      "data-state": unref(Tn)(unref(l)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), unref(ba)(unref(l)) ? l.value = true : l.value = !unref(l);
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var Mu = defineComponent({
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
    const e = a2, n = t, l = Ce(e, n), s = wt(), { forwardRef: r, currentElement: i } = R();
    return aa(i), (u, d) => (openBlock(), createBlock(Nn, mergeProps(unref(l), {
      ref: unref(r),
      "trap-focus": unref(s).open.value,
      "disable-outside-pointer-events": unref(s).open.value,
      "disable-outside-scroll": true,
      onDismiss: d[0] || (d[0] = (p) => unref(s).onOpenChange(false)),
      onFocusOutside: d[1] || (d[1] = withModifiers((p) => n("focusOutside", p), ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
});
var Vu = defineComponent({
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
    const l = Ce(a2, t), s = wt();
    return (r, i) => (openBlock(), createBlock(Nn, mergeProps(unref(l), {
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
var Hn = defineComponent({
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
    const l = Ce(a2, t), s = wt(), r = na();
    return (i, u) => (openBlock(), createBlock(unref(we), {
      present: i.forceMount || unref(s).open.value
    }, {
      default: withCtx(() => [
        unref(r).modal.value ? (openBlock(), createBlock(Mu, normalizeProps(mergeProps({ key: 0 }, { ...i.$attrs, ...unref(l) })), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Vu, normalizeProps(mergeProps({ key: 1 }, { ...i.$attrs, ...unref(l) })), {
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
var Ba = defineComponent({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wn = defineComponent({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jn = defineComponent({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Fu, Lu] = X("MenuRadioGroup");
var Un = defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = ee(e, "modelValue", t);
    return Lu({
      modelValue: l,
      onValueChange: (s) => {
        l.value = s;
      }
    }), (s, r) => (openBlock(), createBlock(Ba, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gn = defineComponent({
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
    const e = a2, n = t, { value: l } = toRefs(e), s = Fu(), r = computed(
      () => s.modelValue.value === (l == null ? void 0 : l.value)
    );
    return wl({ checked: r }), (i, u) => (openBlock(), createBlock(oa, mergeProps({ role: "menuitemradio" }, e, {
      "aria-checked": r.value,
      "data-state": unref(Tn)(r.value),
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
var qn = defineComponent({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var [xl, Nu] = X("MenuSub");
var Yn = defineComponent({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, l = ee(e, "open", t, {
      defaultValue: false,
      passive: e.open === void 0
    }), s = wt(), r = ref(), i = ref();
    return watchEffect((u) => {
      (s == null ? void 0 : s.open.value) === false && (l.value = false), u(() => l.value = false);
    }), bl({
      open: l,
      onOpenChange: (u) => {
        l.value = u;
      },
      content: i,
      onContentChange: (u) => {
        i.value = u;
      }
    }), Nu({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (u) => {
        r.value = u;
      }
    }), (u, d) => (openBlock(), createBlock(unref(Ct), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Xn = defineComponent({
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
    const l = Ce(a2, t), s = wt(), r = na(), i = xl(), { forwardRef: u, currentElement: d } = R();
    return i.contentId || (i.contentId = me(void 0, "radix-vue-menu-sub-content")), (p, c) => (openBlock(), createBlock(unref(we), {
      present: p.forceMount || unref(s).open.value
    }, {
      default: withCtx(() => [
        createVNode(Nn, mergeProps(unref(l), {
          id: unref(i).contentId,
          ref: unref(u),
          "aria-labelledby": unref(i).triggerId,
          align: "start",
          side: unref(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": false,
          "disable-outside-scroll": false,
          "trap-focus": false,
          onOpenAutoFocus: c[0] || (c[0] = withModifiers((f) => {
            var v;
            unref(r).isUsingKeyboardRef.value && ((v = unref(d)) == null || v.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = withModifiers(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (f) => {
            f.defaultPrevented || f.target !== unref(i).trigger.value && unref(s).onOpenChange(false);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (f) => {
            unref(r).onClose(), f.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (f) => {
            var h2, x;
            const v = (h2 = f.currentTarget) == null ? void 0 : h2.contains(f.target), y = unref(Si)[unref(r).dir.value].includes(f.key);
            v && y && (unref(s).onOpenChange(false), (x = unref(i).trigger.value) == null || x.focus(), f.preventDefault());
          })
        }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Zn = defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = wt(), n = na(), l = xl(), s = Ln(), r = ref(null);
    l.triggerId || (l.triggerId = me(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    onUnmounted(() => {
      i();
    });
    function u(c) {
      !qt(c) || s.onItemEnter(c) || !t.disabled && !e.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        e.onOpenChange(true), i();
      }, 100));
    }
    async function d(c) {
      var v, y;
      if (!qt(c))
        return;
      i();
      const f = (v = e.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (f != null && f.width) {
        const h2 = (y = e.content.value) == null ? void 0 : y.dataset.side, x = h2 === "right", P = x ? -5 : 5, $ = f[x ? "left" : "right"], S = f[x ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: c.clientX + P, y: c.clientY },
            { x: $, y: f.top },
            { x: S, y: f.top },
            { x: S, y: f.bottom },
            { x: $, y: f.bottom }
          ],
          side: h2
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(c))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function p(c) {
      var v;
      const f = s.searchRef.value !== "";
      t.disabled || f && c.key === " " || Pi[n.dir.value].includes(c.key) && (e.onOpenChange(true), await nextTick(), (v = e.content.value) == null || v.focus(), c.preventDefault());
    }
    return (c, f) => (openBlock(), createBlock(Ea, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(_l, mergeProps(t, {
          id: unref(l).triggerId,
          ref: (v) => {
            var y;
            (y = unref(l)) == null || y.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(l).contentId,
          "data-state": unref(An)(unref(e).open.value),
          onClick: f[0] || (f[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), unref(e).open.value || unref(e).onOpenChange(true));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: p
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
});
var [Pl, zu] = X("ContextMenuRoot");
var Mf = defineComponent({
  inheritAttrs: false,
  __name: "ContextMenuRoot",
  props: {
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { dir: l, modal: s } = toRefs(e);
    R();
    const r = Pe(l), i = ref(false);
    return zu({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      dir: r,
      modal: s
    }), watch(i, (u) => {
      n("update:open", u);
    }), (u, d) => (openBlock(), createBlock(unref(Fn), {
      open: i.value,
      "onUpdate:open": d[0] || (d[0] = (p) => i.value = p),
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
function wo(a2) {
  return a2.pointerType !== "mouse";
}
var Vf = defineComponent({
  inheritAttrs: false,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, { disabled: e } = toRefs(t), { forwardRef: n } = R(), l = Pl(), s = ref({ x: 0, y: 0 }), r = computed(() => ({
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
    function d(v) {
      s.value = { x: v.clientX, y: v.clientY }, l.onOpenChange(true);
    }
    async function p(v) {
      e.value || (await nextTick(), v.defaultPrevented || (u(), d(v), v.preventDefault()));
    }
    async function c(v) {
      e.value || (await nextTick(), wo(v) && !v.defaultPrevented && (u(), i.value = window.setTimeout(() => d(v), 700)));
    }
    async function f(v) {
      e.value || (await nextTick(), wo(v) && !v.defaultPrevented && u());
    }
    return (v, y) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(Ea), {
        as: "template",
        element: r.value
      }, null, 8, ["element"]),
      createVNode(unref(I), mergeProps({
        ref: unref(n),
        as: v.as,
        "as-child": v.asChild,
        "data-state": unref(l).open.value ? "open" : "closed",
        "data-disabled": unref(e) ? "" : void 0,
        style: {
          WebkitTouchCallout: "none"
        }
      }, v.$attrs, {
        onContextmenu: p,
        onPointerdown: c,
        onPointermove: f,
        onPointercancel: f,
        onPointerup: f
      }), {
        default: withCtx(() => [
          renderSlot(v.$slots, "default")
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-state", "data-disabled"])
    ], 64));
  }
});
var Ff = defineComponent({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(jn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Lf = defineComponent({
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
    const l = Ce(a2, t);
    R();
    const s = Pl(), r = ref(false);
    return (i, u) => (openBlock(), createBlock(unref(Hn), mergeProps(unref(l), {
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
var Nf = defineComponent({
  __name: "ContextMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Vn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var zf = defineComponent({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = $e(t);
    return R(), (s, r) => (openBlock(), createBlock(unref(oa), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Kf = defineComponent({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Ba), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Hf = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wf = defineComponent({
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
    const e = a2, l = $e(t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Kn), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jf = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(zn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Uf = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Wn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gf = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = $e(t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Un), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var qf = defineComponent({
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
    const e = a2, l = $e(t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Gn), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Yf = defineComponent({
  __name: "ContextMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R();
    const l = ee(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (s, r) => (openBlock(), createBlock(unref(Yn), {
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
var Xf = defineComponent({
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
    const l = Ce(a2, t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Xn), mergeProps(unref(l), { style: {
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
var Zf = defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Zn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ku = ["hour", "minute", "second"];
function Et(a2) {
  const { formatter: t } = a2, e = xn.map((n) => [n, a2.value[n]]);
  if ("hour" in a2.value) {
    const n = Zo.map((s) => s === "dayPeriod" ? [s, t.dayPeriod(ke(a2.value))] : [s, a2.value[s]]), l = [...e, ...n];
    return Object.fromEntries(l);
  }
  return Object.fromEntries(e);
}
function Sl(a2) {
  const t = Jo.map((e) => e === "dayPeriod" ? [e, "AM"] : [e, null]).filter(([e]) => e === "literal" || e === null ? false : a2 === "day" ? !Ku.includes(e) : true);
  return Object.fromEntries(t);
}
function Hu(a2) {
  const { segmentValues: t, formatter: e, locale: n } = a2;
  function l(r) {
    if ("hour" in t) {
      const i = t[r];
      return i !== null ? r === "day" && t.month !== null ? e.part(a2.dateRef.set({ [r]: i, month: t.month }), r, {
        hourCycle: a2.hourCycle === 24 ? "h24" : void 0
      }) : e.part(a2.dateRef.set({ [r]: i }), r, {
        hourCycle: a2.hourCycle === 24 ? "h24" : void 0
      }) : Ga(r, "", n);
    } else {
      if (Wr(r)) {
        const i = t[r];
        return i !== null ? r === "day" && t.month !== null ? e.part(a2.dateRef.set({ [r]: i, month: t.month }), r) : e.part(a2.dateRef.set({ [r]: i }), r) : Ga(r, "", n);
      }
      return "";
    }
  }
  return Object.keys(t).reduce((r, i) => {
    if (!Qo(i))
      return r;
    if ("hour" in t && i === "dayPeriod") {
      const u = t[i];
      u !== null ? r[i] = u : r[i] = Ga(i, "AM", n);
    } else
      r[i] = l(i);
    return r;
  }, {});
}
function Wu(a2) {
  const { granularity: t, formatter: e, contentObj: n, hideTimeZone: l, hourCycle: s } = a2;
  return e.toParts(a2.dateRef, jr(t, s)).map((u) => ["literal", "timeZoneName", null].includes(u.type) || !Qo(u.type) ? {
    part: u.type,
    value: u.value
  } : {
    part: u.type,
    value: n[u.type]
  }).filter((u) => !(u.part === null || u.value === null || u.part === "timeZoneName" && (!_n(a2.dateRef) || l)));
}
function ln(a2) {
  const t = Hu(a2), e = Wu({
    contentObj: t,
    ...a2
  });
  return {
    obj: t,
    arr: e
  };
}
function We(a2) {
  const t = bt();
  return a2 === t.ARROW_RIGHT || a2 === t.ARROW_LEFT;
}
function ct(a2) {
  return !Number.isNaN(Number.parseInt(a2));
}
function dt(a2) {
  const t = bt();
  return !!([
    t.ENTER,
    t.ARROW_UP,
    t.ARROW_DOWN,
    t.ARROW_LEFT,
    t.ARROW_RIGHT,
    t.BACKSPACE,
    t.SPACE
  ].includes(a2) || ct(a2));
}
var ju = ["id", "value", "name", "disabled", "required"];
var [Uu, Gu] = X("DateFieldRoot");
var qu = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, granularity: d } = toRefs(n), p = Pn(n.locale), { primitiveElement: c, currentElement: f } = ot(), v = ref(/* @__PURE__ */ new Set());
    onMounted(() => {
      Array.from(f.value.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((K) => K.getAttribute("data-radix-vue-date-field-segment") !== "literal").forEach((K) => v.value.add(K));
    });
    const y = ee(n, "modelValue", l, {
      defaultValue: n.defaultValue ?? void 0,
      passive: n.modelValue === void 0
    }), h2 = kt({
      defaultPlaceholder: n.placeholder,
      granularity: d.value,
      defaultValue: y.value
    }), x = ee(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? h2.copy(),
      passive: n.placeholder === void 0
    }), P = computed(() => n.granularity ? n.granularity : wn(x.value) ? "minute" : "day"), $ = computed(() => {
      var K;
      return y.value ? !!((K = u.value) != null && K.call(u, y.value) || n.minValue && Be(y.value, n.minValue) || n.maxValue && Be(n.maxValue, y.value)) : false;
    }), S = Sl(P.value), w = ref(y.value ? { ...Et({ value: y.value, formatter: p }) } : { ...S }), D = computed(() => ln({
      granularity: P.value,
      dateRef: x.value,
      formatter: p,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: w.value,
      locale: n.locale
    })), A = computed(() => D.value.arr), E = computed(() => A.value.filter(({ part: K }) => K !== "literal"));
    watch(w, (K) => {
      if (Object.values(K).every((L) => L !== null)) {
        let L = { ...K };
        "dayPeriod" in K && (L = {
          ...L,
          hour: K.dayPeriod === "PM" && !y.value ? K.hour + 12 : K.hour
        });
        let Y = h2.set({ ...x.value });
        if (Object.keys(L).forEach((q) => {
          const Z = L[q];
          Y = Y.set({ [q]: Z });
        }), y.value && y.value.toString() === Y.toString())
          return;
        y.value = h2.set({ ...Y });
      }
    }, { deep: true }), watch(y, (K) => {
      K !== void 0 && x.value.toString() !== K.toString() && (x.value = h2.set({ ...K }));
    }), watch(y, (K) => {
      K !== void 0 ? w.value = { ...Et({ value: K, formatter: p }) } : w.value = { ...S };
    });
    const k = ref(null), V = computed(() => Array.from(v.value).findIndex((K) => {
      var L;
      return K.getAttribute("data-radix-vue-date-field-segment") === ((L = k.value) == null ? void 0 : L.getAttribute("data-radix-vue-date-field-segment"));
    })), O = computed(() => V.value > v.value.size - 1 ? null : Array.from(v.value)[V.value + 1]), W = computed(() => V.value < 0 ? null : Array.from(v.value)[V.value - 1]), j = bt();
    function Q(K) {
      var L, Y;
      We(K.key) && (K.key === j.ARROW_LEFT && ((L = W.value) == null || L.focus()), K.key === j.ARROW_RIGHT && ((Y = O.value) == null || Y.focus()));
    }
    function z(K) {
      k.value = K;
    }
    return Gu({
      isDateUnavailable: u.value,
      locale: s,
      modelValue: y,
      placeholder: x,
      disabled: r,
      formatter: p,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: w,
      isInvalid: $,
      segmentContents: E,
      elements: v,
      setFocusedElement: z,
      defaultDate: h2,
      focusNext() {
        var K;
        (K = O.value) == null || K.focus();
      }
    }), t({
      /** Helper to set the focused element inside the DateField */
      setFocusedElement: z
    }), (K, L) => {
      var Y;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(I), mergeProps(K.$attrs, {
          ref_key: "primitiveElement",
          ref: c,
          role: "group",
          "aria-disabled": unref(r) ? true : void 0,
          "data-disabled": unref(r) ? "" : void 0,
          "data-readonly": unref(i) ? "" : void 0,
          "data-invalid": $.value ? "" : void 0,
          onKeydown: withKeys(Q, ["left", "right"])
        }), {
          default: withCtx(() => [
            renderSlot(K.$slots, "default", {
              modelValue: unref(h2).set({ ...unref(y) }),
              segments: A.value,
              isInvalid: $.value
            })
          ]),
          _: 3
        }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid"]),
        createBaseVNode("input", {
          id: K.id,
          type: "text",
          tabindex: "-1",
          "aria-hidden": "",
          value: (Y = unref(y)) == null ? void 0 : Y.toString(),
          name: K.name,
          disabled: unref(r),
          required: K.required,
          style: normalizeStyle({
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }),
          onFocus: L[0] || (L[0] = (q) => {
            var Z, F;
            return (F = (Z = Array.from(v.value)) == null ? void 0 : Z[0]) == null ? void 0 : F.focus();
          })
        }, null, 44, ju)
      ], 64);
    };
  }
});
var xt = {
  role: "spinbutton",
  contenteditable: true,
  tabindex: 0,
  spellcheck: false,
  inputmode: "numeric",
  autocorrect: "off",
  enterkeyhint: "next",
  style: "caret-color: transparent;"
};
function Yu(a2) {
  const { segmentValues: t, placeholder: e } = a2, n = t.day === null, l = t.day ? e.set({ day: t.day }) : e, s = l.day, r = 1, i = ga(ke(l)), u = n ? "Empty" : `${s}`;
  return {
    ...xt,
    "aria-label": "day,",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u
  };
}
function Xu(a2) {
  const { segmentValues: t, placeholder: e, formatter: n } = a2, l = t.month === null, s = t.month ? e.set({ month: t.month }) : e, r = s.month, i = 1, u = 12, d = l ? "Empty" : `${r} - ${n.fullMonth(ke(s))}`;
  return {
    ...xt,
    "aria-label": "month, ",
    contenteditable: true,
    "aria-valuemin": i,
    "aria-valuemax": u,
    "aria-valuenow": r,
    "aria-valuetext": d
  };
}
function Zu(a2) {
  const { segmentValues: t, placeholder: e } = a2, n = t.year === null, l = t.year ? e.set({ year: t.year }) : e, s = 1, r = 9999, i = l.year, u = n ? "Empty" : `${i}`;
  return {
    ...xt,
    "aria-label": "year, ",
    "aria-valuemin": s,
    "aria-valuemax": r,
    "aria-valuenow": i,
    "aria-valuetext": u
  };
}
function Ju(a2) {
  const { segmentValues: t, hourCycle: e, placeholder: n } = a2;
  if (!("hour" in t) || !("hour" in n))
    return {};
  const l = t.hour === null, s = t.hour ? n.set({ hour: t.hour }) : n, r = e === 12 ? 1 : 0, i = e === 12 ? 12 : 23, u = s.hour, d = l ? "Empty" : `${u} ${t.dayPeriod ?? ""}`;
  return {
    ...xt,
    "aria-label": "hour, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": u,
    "aria-valuetext": d
  };
}
function Qu(a2) {
  const { segmentValues: t, placeholder: e } = a2;
  if (!("minute" in t) || !("minute" in e))
    return {};
  const n = t.minute === null, s = (t.minute ? e.set({ minute: t.minute }) : e).minute, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...xt,
    "aria-label": "minute, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u
  };
}
function ed(a2) {
  const { segmentValues: t, placeholder: e } = a2;
  if (!("second" in t) || !("second" in e))
    return {};
  const n = t.second === null, s = (t.second ? e.set({ second: t.second }) : e).second, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...xt,
    "aria-label": "second, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u
  };
}
function td(a2) {
  const { segmentValues: t } = a2;
  if (!("dayPeriod" in t))
    return {};
  const e = 0, n = 12, l = t.hour ? t.hour > 12 ? t.hour - 12 : t.hour : 0, s = t.dayPeriod ?? "AM";
  return {
    ...xt,
    inputmode: "text",
    "aria-label": "AM/PM",
    "aria-valuemin": e,
    "aria-valuemax": n,
    "aria-valuenow": l,
    "aria-valuetext": s
  };
}
function ad(a2) {
  return {
    "aria-hidden": true,
    "data-segment": "literal"
  };
}
function nd(a2) {
  return {
    role: "textbox",
    "aria-label": "timezone, ",
    "data-readonly": true,
    "data-segment": "timeZoneName",
    tabindex: 0,
    style: "caret-color: transparent;"
  };
}
var od = {
  day: {
    attrs: Yu
  },
  month: {
    attrs: Xu
  },
  year: {
    attrs: Zu
  },
  hour: {
    attrs: Ju
  },
  minute: {
    attrs: Qu
  },
  second: {
    attrs: ed
  },
  dayPeriod: {
    attrs: td
  },
  literal: {
    attrs: ad
  },
  timeZoneName: {
    attrs: nd
  }
};
function Dl(a2) {
  const t = bt(), e = a2.defaultDate.set({ ...a2.placeholder.value });
  function n({ e: w, part: D, dateRef: A, prevValue: E }) {
    const k = w.key === t.ARROW_UP ? 1 : -1, V = 0, O = 59;
    if (E === null)
      return k > 0 ? V : O;
    const W = [D, k];
    return A.set({ [D]: E }).cycle(...W)[D];
  }
  function l(w) {
    if (a2.hasLeftFocus.value = false, w === null)
      return w;
    const D = w.toString();
    return D.length === 1 ? null : Number.parseInt(D.slice(0, -1));
  }
  function s({ e: w, part: D, dateRef: A, prevValue: E, hourCycle: k }) {
    const V = w.key === t.ARROW_UP ? 1 : -1;
    if (E === null)
      return A[D];
    if (D === "hour" && "hour" in A) {
      const W = [D, V, { hourCycle: k }];
      return A.set({ [D]: E }).cycle(...W)[D];
    }
    const O = [D, V];
    return D === "day" && a2.segmentValues.value.month !== null ? A.set({ [D]: E, month: a2.segmentValues.value.month }).cycle(...O)[D] : A.set({ [D]: E }).cycle(...O)[D];
  }
  function r(w, D, A) {
    let E = false;
    const k = Math.floor(w / 10);
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, A = null), A === null)
      return D === 0 ? (a2.lastKeyZero.value = true, { value: null, moveToNext: E }) : ((a2.lastKeyZero.value || D > k) && (E = true), a2.lastKeyZero.value = false, { value: D, moveToNext: E });
    const V = A.toString().length, O = Number.parseInt(A.toString() + D.toString());
    return V === 2 || O > w ? ((D > k || O > w) && (E = true), { value: D, moveToNext: E }) : (E = true, { value: O, moveToNext: E });
  }
  function i(w, D) {
    let E = false;
    const k = Math.floor(59 / 10);
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, D = null), D === null)
      return w === 0 ? (a2.lastKeyZero.value = true, { value: 0, moveToNext: E }) : ((a2.lastKeyZero.value || w > k) && (E = true), a2.lastKeyZero.value = false, { value: w, moveToNext: E });
    const V = D.toString().length, O = Number.parseInt(D.toString() + w.toString());
    return V === 2 || O > 59 ? (w > k && (E = true), { value: w, moveToNext: E }) : (E = true, { value: O, moveToNext: E });
  }
  function u(w, D) {
    let E = false;
    const k = Math.floor(24 / 10);
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, D = null), D === null)
      return w === 0 ? (a2.lastKeyZero.value = true, { value: null, moveToNext: E }) : ((a2.lastKeyZero.value || w > k) && (E = true), a2.lastKeyZero.value = false, { value: w, moveToNext: E });
    const V = D.toString().length, O = Number.parseInt(D.toString() + w.toString());
    return V === 2 || O > 24 ? (w > k && (E = true), { value: w, moveToNext: E }) : (E = true, { value: O, moveToNext: E });
  }
  function d(w, D) {
    let A = false;
    if (a2.hasLeftFocus.value && (a2.hasLeftFocus.value = false, D = null), D === null)
      return { value: w === 0 ? 1 : w, moveToNext: A };
    const E = D.toString() + w.toString();
    return E.length > 4 ? { value: w === 0 ? 1 : w, moveToNext: A } : (E.length === 4 && (A = true), { value: Number.parseInt(E), moveToNext: A });
  }
  const p = computed(() => od[a2.part].attrs({
    placeholder: e,
    hourCycle: a2.hourCycle,
    segmentValues: a2.segmentValues.value,
    formatter: a2.formatter
  }));
  function c(w) {
    if (!dt(w.key) || We(w.key))
      return;
    const D = a2.segmentValues.value.day;
    if (w.key === t.ARROW_DOWN || w.key === t.ARROW_UP) {
      a2.segmentValues.value.day = s({ e: w, part: "day", dateRef: e, prevValue: D });
      return;
    }
    if (ct(w.key)) {
      const A = Number.parseInt(w.key), E = a2.segmentValues.value.month, k = ga(E ? e.set({ month: E }) : e), { value: V, moveToNext: O } = r(k, A, D);
      a2.segmentValues.value.day = V, O && a2.focusNext();
    }
    w.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.day = l(D));
  }
  function f(w) {
    if (!dt(w.key) || We(w.key))
      return;
    const D = a2.segmentValues.value.month;
    if (w.key === t.ARROW_DOWN || w.key === t.ARROW_UP) {
      a2.segmentValues.value.month = s({ e: w, part: "month", dateRef: e, prevValue: D });
      return;
    }
    if (ct(w.key)) {
      const A = Number.parseInt(w.key), { value: E, moveToNext: k } = r(12, A, D);
      a2.segmentValues.value.month = E, k && a2.focusNext();
    }
    w.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.month = l(D));
  }
  function v(w) {
    if (!dt(w.key) || We(w.key))
      return;
    const D = a2.segmentValues.value.year;
    if (w.key === t.ARROW_DOWN || w.key === t.ARROW_UP) {
      a2.segmentValues.value.year = s({ e: w, part: "year", dateRef: e, prevValue: D });
      return;
    }
    if (ct(w.key)) {
      const A = Number.parseInt(w.key), { value: E, moveToNext: k } = d(A, D);
      a2.segmentValues.value.year = E, k && a2.focusNext();
    }
    w.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.year = l(D));
  }
  function y(w) {
    const D = e;
    if (!dt(w.key) || We(w.key) || !("hour" in D) || !("hour" in a2.segmentValues.value))
      return;
    const A = a2.segmentValues.value.hour, E = a2.hourCycle;
    if (w.key === t.ARROW_UP || w.key === t.ARROW_DOWN) {
      a2.segmentValues.value.hour = s({ e: w, part: "hour", dateRef: e, prevValue: A, hourCycle: E }), "dayPeriod" in a2.segmentValues.value && (a2.segmentValues.value.hour < 12 ? a2.segmentValues.value.dayPeriod = "AM" : a2.segmentValues.value.hour && (a2.segmentValues.value.dayPeriod = "PM"));
      return;
    }
    if (ct(w.key)) {
      const k = Number.parseInt(w.key), { value: V, moveToNext: O } = u(k, A);
      "dayPeriod" in a2.segmentValues.value && V && V > 12 ? a2.segmentValues.value.dayPeriod = "PM" : "dayPeriod" in a2.segmentValues.value && V && (a2.segmentValues.value.dayPeriod = "AM"), a2.segmentValues.value.hour = V, O && a2.focusNext();
    }
    w.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.hour = l(A));
  }
  function h2(w) {
    const D = e;
    if (!dt(w.key) || We(w.key) || !("minute" in D) || !("minute" in a2.segmentValues.value))
      return;
    const A = a2.segmentValues.value.minute;
    if (a2.segmentValues.value.minute = n({ e: w, part: "minute", dateRef: e, prevValue: A }), ct(w.key)) {
      const E = Number.parseInt(w.key), { value: k, moveToNext: V } = i(E, A);
      a2.segmentValues.value.minute = k, V && a2.focusNext();
    }
    w.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.minute = l(A));
  }
  function x(w) {
    const D = e;
    if (!dt(w.key) || We(w.key) || !("second" in D) || !("second" in a2.segmentValues.value))
      return;
    const A = a2.segmentValues.value.second;
    if (a2.segmentValues.value.second = n({ e: w, part: "second", dateRef: e, prevValue: A }), ct(w.key)) {
      const E = Number.parseInt(w.key), { value: k, moveToNext: V } = i(E, A);
      a2.segmentValues.value.second = k, V && a2.focusNext();
    }
    w.key === t.BACKSPACE && (a2.hasLeftFocus.value = false, a2.segmentValues.value.second = l(A));
  }
  function P(w) {
    if (!((!dt(w.key) || We(w.key)) && w.key !== "a" && w.key !== "p" || !("hour" in e) || !("dayPeriod" in a2.segmentValues.value))) {
      if (w.key === t.ARROW_UP || w.key === t.ARROW_DOWN) {
        if (a2.segmentValues.value.dayPeriod === "AM") {
          a2.segmentValues.value.dayPeriod = "PM", a2.segmentValues.value.hour = a2.segmentValues.value.hour + 12;
          return;
        }
        a2.segmentValues.value.dayPeriod = "AM", a2.segmentValues.value.hour = a2.segmentValues.value.hour - 12;
        return;
      }
      if (w.key === "a") {
        a2.segmentValues.value.dayPeriod = "AM", a2.segmentValues.value.hour = a2.segmentValues.value.hour - 12;
        return;
      }
      w.key === "p" && (a2.segmentValues.value.dayPeriod = "PM", a2.segmentValues.value.hour = a2.segmentValues.value.hour + 12);
    }
  }
  function $(w) {
    a2.disabled.value && w.preventDefault();
  }
  function S(w) {
    const D = a2.disabled.value, A = a2.readonly.value;
    if (w.key !== t.TAB && w.preventDefault(), D || A)
      return;
    ({
      day: c,
      month: f,
      year: v,
      hour: y,
      minute: h2,
      second: x,
      dayPeriod: P,
      timeZoneName: () => {
      }
    })[a2.part](w);
  }
  return {
    handleSegmentClick: $,
    handleSegmentKeydown: S,
    attributes: p
  };
}
var ld = defineComponent({
  __name: "DateFieldInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Uu(), n = ref(true), l = ref(false), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = Dl({
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
      defaultDate: e.defaultDate
    }), u = computed(() => e.disabled.value), d = computed(() => e.readonly.value), p = computed(() => e.isInvalid.value);
    return (c, f) => (openBlock(), createBlock(unref(I), mergeProps({
      as: c.as,
      "as-child": c.asChild
    }, unref(i), {
      contenteditable: u.value || d.value ? false : c.part !== "literal",
      "data-radix-vue-date-field-segment": c.part,
      "aria-disabled": u.value ? true : void 0,
      "aria-readonly": d.value ? true : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-invalid": p.value ? "" : void 0,
      "aria-invalid": p.value ? true : void 0
    }, toHandlers(c.part !== "literal" ? {
      mousedown: unref(s),
      keydown: unref(r),
      focusout: () => {
        n.value = true;
      },
      focusin: (v) => {
        unref(e).setFocusedElement(v.target);
      }
    } : {})), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-invalid", "aria-invalid"]));
  }
});
var Jf = defineComponent({
  __name: "DatePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ji), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qf = defineComponent({
  __name: "DatePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Ui), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(({ headingValue: l }) => [
        renderSlot(e.$slots, "default", { headingValue: l }, () => [
          createTextVNode(toDisplayString(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
var ev = defineComponent({
  __name: "DatePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Gi), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var tv = defineComponent({
  __name: "DatePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(qi), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var av = defineComponent({
  __name: "DatePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Yi), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var nv = defineComponent({
  __name: "DatePickerNext",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Xi), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ov = defineComponent({
  __name: "DatePickerPrev",
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
var lv = defineComponent({
  __name: "DatePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Ji), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var sv = defineComponent({
  __name: "DatePickerGridBody",
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
var rv = defineComponent({
  __name: "DatePickerGridRow",
  props: {
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
var iv = defineComponent({
  __name: "DatePickerCellTrigger",
  props: {
    day: {},
    month: {},
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
var uv = defineComponent({
  __name: "DatePickerInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ld), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Jn, sd] = X("DatePickerRoot");
var dv = defineComponent({
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
      fixedWeeks: p,
      numberOfMonths: c,
      preventDeselect: f,
      isDateDisabled: v,
      isDateUnavailable: y,
      defaultOpen: h2,
      modal: x,
      id: P,
      name: $,
      required: S,
      minValue: w,
      maxValue: D,
      granularity: A,
      hideTimeZone: E,
      hourCycle: k
    } = toRefs(e), V = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), O = kt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: V.value
    }), W = ee(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? O.copy(),
      passive: e.placeholder === void 0
    }), j = ee(e, "open", n, {
      defaultValue: h2.value,
      passive: e.open === void 0
    }), Q = ref();
    return sd({
      isDateUnavailable: y.value,
      isDateDisabled: v.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: p,
      numberOfMonths: c,
      readonly: r,
      preventDeselect: f,
      modelValue: V,
      placeholder: W,
      defaultOpen: h2,
      modal: x,
      open: j,
      id: P,
      name: $,
      required: S,
      minValue: w,
      maxValue: D,
      granularity: A,
      hideTimeZone: E,
      hourCycle: k,
      dateFieldRef: Q,
      onDateChange(z) {
        !z || !V.value ? V.value = z : !f.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(V.value, z) ? V.value = void 0 : V.value = O.set({ ...z });
      },
      onPlaceholderChange(z) {
        W.value = O.set({ ...z });
      }
    }), (z, K) => (openBlock(), createBlock(unref(Tl), {
      open: unref(j),
      "onUpdate:open": K[0] || (K[0] = (L) => isRef(j) ? j.value = L : null),
      "default-open": unref(h2),
      modal: unref(x)
    }, {
      default: withCtx(() => [
        renderSlot(z.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
});
var cv = defineComponent({
  __name: "DatePickerCalendar",
  setup(a2) {
    const t = Jn();
    return (e, n) => (openBlock(), createBlock(unref(Wi), mergeProps({
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
      preventDeselect: unref(t).preventDeselect.value
    }, {
      "initial-focus": "",
      multiple: false,
      "model-value": unref(t).modelValue.value,
      placeholder: unref(t).placeholder.value,
      "onUpdate:modelValue": unref(t).onDateChange,
      "onUpdate:placeholder": unref(t).onPlaceholderChange
    }), {
      default: withCtx(({ weekDays: l, grid: s, date: r, formatter: i }) => [
        renderSlot(e.$slots, "default", {
          date: r,
          grid: s,
          weekDays: l,
          formatter: i
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder", "onUpdate:modelValue", "onUpdate:placeholder"]));
  }
});
var pv = defineComponent({
  __name: "DatePickerField",
  setup(a2) {
    const t = Jn();
    return (e, n) => (openBlock(), createBlock(unref(qu), mergeProps({
      ref: unref(t).dateFieldRef,
      multiple: false,
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
      required: unref(t).required.value
    }, {
      "onUpdate:modelValue": unref(t).onDateChange,
      "onUpdate:placeholder": unref(t).onPlaceholderChange
    }), {
      default: withCtx(({ segments: l }) => [
        renderSlot(e.$slots, "default", { segments: l })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder", "onUpdate:modelValue", "onUpdate:placeholder"]));
  }
});
var fv = defineComponent({
  __name: "DatePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Ll), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vv = defineComponent({
  __name: "DatePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Vl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var mv = defineComponent({
  __name: "DatePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Fl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var hv = defineComponent({
  __name: "DatePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Jn();
    return (n, l) => (openBlock(), createBlock(unref(Ol), mergeProps({ "data-radix-vue-date-field-segment": "trigger" }, t, {
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
var yv = defineComponent({
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
    const l = Ce(a2, t);
    return (s, r) => (openBlock(), createBlock(unref(Il), null, {
      default: withCtx(() => [
        createVNode(unref(Ml), normalizeProps(guardReactiveProps({ ...unref(l), ...s.$attrs })), {
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
var gv = defineComponent({
  __name: "DateRangePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(qd), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var bv = defineComponent({
  __name: "DateRangePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Yd), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(({ headingValue: l }) => [
        renderSlot(e.$slots, "default", { headingValue: l }, () => [
          createTextVNode(toDisplayString(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
var Cv = defineComponent({
  __name: "DateRangePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Xd), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _v = defineComponent({
  __name: "DateRangePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Zd), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wv = defineComponent({
  __name: "DateRangePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Jd), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var xv = defineComponent({
  __name: "DateRangePickerNext",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Qd), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pv = defineComponent({
  __name: "DateRangePickerPrev",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ec), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Sv = defineComponent({
  __name: "DateRangePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(tc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Dv = defineComponent({
  __name: "DateRangePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(ac), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $v = defineComponent({
  __name: "DateRangePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(nc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ev = defineComponent({
  __name: "DateRangePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(oc), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Bv = defineComponent({
  __name: "DateRangePickerInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(pd), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Qn, rd] = X("DateRangePickerRoot");
var Rv = defineComponent({
  inheritAttrs: false,
  __name: "DateRangePickerRoot",
  props: {
    defaultValue: {},
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
      fixedWeeks: p,
      numberOfMonths: c,
      preventDeselect: f,
      isDateDisabled: v,
      isDateUnavailable: y,
      defaultOpen: h2,
      modal: x,
      id: P,
      name: $,
      required: S,
      minValue: w,
      maxValue: D,
      granularity: A,
      hideTimeZone: E,
      hourCycle: k
    } = toRefs(e), V = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? { start: void 0, end: void 0 },
      passive: e.modelValue === void 0
    }), O = kt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: V.value.start
    }), W = ee(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? O.copy(),
      passive: e.placeholder === void 0
    }), j = ee(e, "open", n, {
      defaultValue: h2.value,
      passive: e.open === void 0
    }), Q = ref();
    return rd({
      isDateUnavailable: y.value,
      isDateDisabled: v.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: p,
      numberOfMonths: c,
      readonly: r,
      preventDeselect: f,
      modelValue: V,
      placeholder: W,
      defaultOpen: h2,
      modal: x,
      open: j,
      id: P,
      name: $,
      required: S,
      minValue: w,
      maxValue: D,
      granularity: A,
      hideTimeZone: E,
      hourCycle: k,
      dateFieldRef: Q,
      onDateChange(z) {
        V.value = { start: z.start ? O.set({ ...z.start }) : void 0, end: z.end ? O.set({ ...z.end }) : void 0 };
      },
      onPlaceholderChange(z) {
        W.value = O.set({ ...z });
      }
    }), (z, K) => (openBlock(), createBlock(unref(Tl), {
      open: unref(j),
      "onUpdate:open": K[0] || (K[0] = (L) => isRef(j) ? j.value = L : null),
      "default-open": unref(h2),
      modal: unref(x)
    }, {
      default: withCtx(() => [
        renderSlot(z.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
});
var Av = defineComponent({
  __name: "DateRangePickerCalendar",
  setup(a2) {
    const t = Qn();
    return (e, n) => (openBlock(), createBlock(unref(Gd), mergeProps({
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
      maxValue: unref(t).maxValue.value
    }, {
      "initial-focus": "",
      "model-value": unref(t).modelValue.value,
      placeholder: unref(t).placeholder.value,
      "onUpdate:modelValue": unref(t).onDateChange,
      "onUpdate:placeholder": unref(t).onPlaceholderChange
    }), {
      default: withCtx(({ weekDays: l, grid: s, date: r, formatter: i }) => [
        renderSlot(e.$slots, "default", {
          date: r,
          grid: s,
          weekDays: l,
          formatter: i
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder", "onUpdate:modelValue", "onUpdate:placeholder"]));
  }
});
var Tv = defineComponent({
  __name: "DateRangePickerField",
  setup(a2) {
    const t = Qn();
    return (e, n) => (openBlock(), createBlock(unref(cd), mergeProps({
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
      required: unref(t).required.value
    }, {
      "onUpdate:modelValue": unref(t).onDateChange,
      "onUpdate:placeholder": unref(t).onPlaceholderChange
    }), {
      default: withCtx(({ segments: l, modelValue: s }) => [
        renderSlot(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder", "onUpdate:modelValue", "onUpdate:placeholder"]));
  }
});
var Ov = defineComponent({
  __name: "DateRangePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Ll), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Iv = defineComponent({
  __name: "DateRangePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Vl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var kv = defineComponent({
  __name: "DateRangePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(Fl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Mv = defineComponent({
  __name: "DateRangePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Qn();
    return (n, l) => (openBlock(), createBlock(unref(Ol), mergeProps({ "data-radix-vue-date-field-segment": "trigger" }, t, {
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
var Vv = defineComponent({
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
    const l = Ce(a2, t);
    return (s, r) => (openBlock(), createBlock(unref(Il), null, {
      default: withCtx(() => [
        createVNode(unref(Ml), normalizeProps(guardReactiveProps({ ...unref(l), ...s.$attrs })), {
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
var id = ["id", "value", "name", "disabled", "required"];
var [ud, dd] = X("DateRangeFieldRoot");
var cd = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a2, { expose: t, emit: e }) {
    const n = a2, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u } = toRefs(n), d = Pn(n.locale), { primitiveElement: p, currentElement: c } = ot(), f = ref(/* @__PURE__ */ new Set());
    onMounted(() => {
      Array.from(c.value.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((F) => F.getAttribute("data-radix-vue-date-field-segment") !== "literal").forEach((F) => f.value.add(F));
    });
    const v = ee(n, "modelValue", l, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), y = kt({
      defaultPlaceholder: n.placeholder,
      granularity: n.granularity,
      defaultValue: v.value.start
    }), h2 = ee(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? y.copy(),
      passive: n.placeholder === void 0
    }), x = computed(() => n.granularity ? n.granularity : wn(h2.value) ? "minute" : "day"), P = computed(() => {
      var F;
      return v.value.start ? !!((F = u.value) != null && F.call(u, v.value.start) || n.minValue && Be(v.value.start, n.minValue) || n.maxValue && Be(n.maxValue, v.value.start)) : false;
    }), $ = computed(() => {
      var F;
      return v.value.end ? !!((F = u.value) != null && F.call(u, v.value.end) || n.minValue && Be(v.value.end, n.minValue) || n.maxValue && Be(n.maxValue, v.value.end)) : false;
    }), S = computed(() => P.value || $.value ? true : !v.value.start || !v.value.end ? false : !Be(v.value.start, v.value.end) || u.value !== void 0 && !qo(
      v.value.start,
      v.value.end,
      u.value,
      void 0
    )), w = Sl(x.value), D = ref(v.value.start ? { ...Et({ value: v.value.start, formatter: d }) } : { ...w }), A = ref(v.value.end ? { ...Et({ value: v.value.end, formatter: d }) } : { ...w }), E = computed(() => ln({
      granularity: x.value,
      dateRef: h2.value,
      formatter: d,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: D.value,
      locale: n.locale
    })), k = computed(() => ln({
      granularity: x.value,
      dateRef: h2.value,
      formatter: d,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: A.value,
      locale: n.locale
    })), V = computed(() => ({
      start: E.value.arr,
      end: k.value.arr
    })), O = computed(() => ({ start: V.value.start.filter(({ part: F }) => F !== "literal"), end: V.value.end.filter(({ part: F }) => F !== "literal") })), W = ref(y.set({ ...v.value.start })), j = ref(y.set({ ...v.value.end }));
    watch([W, j], ([F, G]) => {
      if (!(v.value.start && v.value.end && F && G && v.value.start.toString() === F.toString() && v.value.end.toString() === G.toString())) {
        if (F && G) {
          v.value = { start: y.set({ ...F }), end: y.set({ ...G }) };
          return;
        }
        v.value = { start: void 0, end: void 0 };
      }
    }), watch(D, (F) => {
      if (Object.values(F).every((G) => G !== null)) {
        let G = { ...F };
        "dayPeriod" in F && (G = {
          ...G,
          hour: F.dayPeriod === "PM" && !W.value ? F.hour + 12 : F.hour
        });
        let ae = y.set({ ...h2.value });
        if (Object.keys(G).forEach((fe) => {
          const ve = G[fe];
          ae = ae.set({ [fe]: ve });
        }), W.value && W.value.toString() === ae.toString())
          return;
        W.value = y.set({ ...ae });
      }
    }, { deep: true }), watch(A, (F) => {
      if (Object.values(F).every((G) => G !== null)) {
        let G = { ...F };
        "dayPeriod" in F && (G = {
          ...G,
          hour: F.dayPeriod === "PM" && !j.value ? F.hour + 12 : F.hour
        });
        let ae = y.set({ ...h2.value });
        if (Object.keys(G).forEach((fe) => {
          const ve = G[fe];
          ae = ae.set({ [fe]: ve });
        }), j.value && j.value.toString() === ae.toString())
          return;
        j.value = y.set({ ...ae });
      }
    }, { deep: true }), watch(v, (F) => {
      F.start && (W.value = y.set({ ...F.start })), F.end && (j.value = y.set({ ...F.end })), F.start !== void 0 && h2.value.toString() !== F.start.toString() && (h2.value = y.set({ ...F.start }));
    }), watch(W, (F) => {
      F !== void 0 ? D.value = { ...Et({ value: F, formatter: d }) } : D.value = { ...w };
    }), watch(v, (F) => {
      F.start !== void 0 && h2.value.toString() !== F.start.toString() && (h2.value = y.set({ ...F.start }));
    }), watch(j, (F) => {
      F !== void 0 ? A.value = { ...Et({ value: F, formatter: d }) } : A.value = { ...w };
    });
    const Q = ref(null), z = computed(() => Array.from(f.value).findIndex((F) => {
      var G, ae;
      return F.getAttribute("data-radix-vue-date-field-segment") === ((G = Q.value) == null ? void 0 : G.getAttribute("data-radix-vue-date-field-segment")) && F.getAttribute("data-radix-vue-date-range-field-segment-type") === ((ae = Q.value) == null ? void 0 : ae.getAttribute("data-radix-vue-date-range-field-segment-type"));
    })), K = computed(() => z.value > f.value.size - 1 ? null : Array.from(f.value)[z.value + 1]), L = computed(() => z.value < 0 ? null : Array.from(f.value)[z.value - 1]), Y = bt();
    function q(F) {
      var G, ae;
      We(F.key) && (F.key === Y.ARROW_LEFT && ((G = L.value) == null || G.focus()), F.key === Y.ARROW_RIGHT && ((ae = K.value) == null || ae.focus()));
    }
    function Z(F) {
      Q.value = F;
    }
    return dd({
      isDateUnavailable: u.value,
      locale: s,
      modelValue: v,
      placeholder: h2,
      disabled: r,
      formatter: d,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: { start: D, end: A },
      isInvalid: S,
      segmentContents: O,
      elements: f,
      setFocusedElement: Z,
      defaultDate: y,
      focusNext() {
        var F;
        (F = K.value) == null || F.focus();
      }
    }), t({
      setFocusedElement: Z
    }), (F, G) => {
      var ae, fe;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(I), mergeProps(F.$attrs, {
          ref_key: "primitiveElement",
          ref: p,
          role: "group",
          "aria-disabled": unref(r) ? true : void 0,
          "data-disabled": unref(r) ? "" : void 0,
          "data-readonly": unref(i) ? "" : void 0,
          "data-invalid": S.value ? "" : void 0,
          onKeydown: withKeys(q, ["left", "right"])
        }), {
          default: withCtx(() => [
            renderSlot(F.$slots, "default", {
              modelValue: unref(v),
              segments: V.value
            })
          ]),
          _: 3
        }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid"]),
        createBaseVNode("input", {
          id: F.id,
          type: "text",
          tabindex: "-1",
          "aria-hidden": "",
          value: `${(ae = unref(v).start) == null ? void 0 : ae.toString()} - ${(fe = unref(v).end) == null ? void 0 : fe.toString()}`,
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
          onFocus: G[0] || (G[0] = (ve) => {
            var de, xe;
            return (xe = (de = Array.from(f.value)) == null ? void 0 : de[0]) == null ? void 0 : xe.focus();
          })
        }, null, 44, id)
      ], 64);
    };
  }
});
var pd = defineComponent({
  __name: "DateRangeFieldInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = ud(), n = ref(true), l = ref(false), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = Dl({
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
      defaultDate: e.defaultDate
    }), u = computed(() => e.disabled.value), d = computed(() => e.readonly.value), p = computed(() => e.isInvalid.value);
    return (c, f) => (openBlock(), createBlock(unref(I), mergeProps({
      as: c.as,
      "as-child": c.asChild
    }, unref(i), {
      contenteditable: u.value || d.value ? false : c.part !== "literal",
      "data-radix-vue-date-field-segment": c.part,
      "aria-disabled": u.value ? true : void 0,
      "aria-readonly": d.value ? true : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-radix-vue-date-range-field-segment-type": c.type,
      "data-invalid": p.value ? "" : void 0,
      "aria-invalid": p.value ? true : void 0
    }, toHandlers(c.part !== "literal" ? {
      mousedown: unref(s),
      keydown: unref(r),
      focusout: () => {
        n.value = true;
      },
      focusin: (v) => {
        unref(e).setFocusedElement(v.target);
      }
    } : {})), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-radix-vue-date-range-field-segment-type", "data-invalid", "aria-invalid"]));
  }
});
var [$l, fd] = X("DropdownMenuRoot");
var Fv = defineComponent({
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
    R();
    const l = ee(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), s = ref(), { modal: r, dir: i } = toRefs(e), u = Pe(i);
    return fd({
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
    }), (d, p) => (openBlock(), createBlock(unref(Fn), {
      open: unref(l),
      "onUpdate:open": p[0] || (p[0] = (c) => isRef(l) ? l.value = c : null),
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
var Lv = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = $l(), { forwardRef: n, currentElement: l } = R();
    return onMounted(() => {
      e.triggerElement = l;
    }), e.triggerId || (e.triggerId = me(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (openBlock(), createBlock(unref(Ea), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(I), {
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
var Nv = defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(jn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var zv = defineComponent({
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
    const l = Ce(a2, t);
    R();
    const s = $l(), r = ref(false);
    function i(u) {
      u.defaultPrevented || (r.value || setTimeout(() => {
        var d;
        (d = s.triggerElement.value) == null || d.focus();
      }, 0), r.value = false, u.preventDefault());
    }
    return s.contentId || (s.contentId = me(void 0, "radix-vue-dropdown-menu-content")), (u, d) => {
      var p;
      return openBlock(), createBlock(unref(Hn), mergeProps(unref(l), {
        id: unref(s).contentId,
        "aria-labelledby": (p = unref(s)) == null ? void 0 : p.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: d[0] || (d[0] = (c) => {
          var h2;
          if (c.defaultPrevented)
            return;
          const f = c.detail.originalEvent, v = f.button === 0 && f.ctrlKey === true, y = f.button === 2 || v;
          (!unref(s).modal.value || y) && (r.value = true), (h2 = unref(s).triggerElement.value) != null && h2.contains(c.target) && c.preventDefault();
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
var Kv = defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Vn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Hv = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = $e(t);
    return R(), (s, r) => (openBlock(), createBlock(unref(oa), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wv = defineComponent({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Ba), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jv = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Uv = defineComponent({
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
    const e = a2, l = $e(t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Kn), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gv = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(zn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var qv = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Wn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Yv = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = $e(t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Un), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xv = defineComponent({
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
    const l = Ce(a2, t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Gn), normalizeProps(guardReactiveProps(unref(l))), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zv = defineComponent({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, l = ee(e, "open", t, {
      passive: e.open === void 0,
      defaultValue: e.defaultOpen ?? false
    });
    return R(), (s, r) => (openBlock(), createBlock(unref(Yn), {
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
var Jv = defineComponent({
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
    const l = Ce(a2, t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Xn), mergeProps(unref(l), { style: {
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
var Qv = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Zn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [eo, vd] = X("HoverCardRoot");
var em = defineComponent({
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
    R();
    const r = ee(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), i = ref(0), u = ref(0), d = ref(false), p = ref(false);
    function c() {
      clearTimeout(u.value), i.value = window.setTimeout(() => r.value = true, l.value);
    }
    function f() {
      clearTimeout(i.value), !d.value && !p.value && (u.value = window.setTimeout(() => r.value = false, s.value));
    }
    function v() {
      r.value = false;
    }
    return vd({
      open: r,
      onOpenChange(y) {
        r.value = y;
      },
      onOpen: c,
      onClose: f,
      onDismiss: v,
      hasSelectionRef: d,
      isPointerDownOnContentRef: p
    }), (y, h2) => (openBlock(), createBlock(unref(Ct), null, {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    }));
  }
});
function _a(a2) {
  return (t) => t.pointerType === "touch" ? void 0 : a2();
}
function md(a2) {
  const t = [], e = document.createTreeWalker(a2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
var tm = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a2) {
    const { forwardRef: t } = R(), e = eo();
    return (n, l) => (openBlock(), createBlock(unref(_t), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(I), {
          ref: unref(t),
          "as-child": n.asChild,
          as: n.as,
          "data-state": unref(e).open.value ? "open" : "closed",
          onPointerenter: l[0] || (l[0] = (s) => unref(_a)(unref(e).onOpen)(s)),
          onPointerleave: l[1] || (l[1] = (s) => unref(_a)(unref(e).onClose)(s)),
          onFocus: l[2] || (l[2] = (s) => unref(e).onOpen()),
          onBlur: unref(e).onClose,
          onTouchstart: withModifiers(() => {
          }, ["prevent"])
        }, {
          default: withCtx(() => [
            renderSlot(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "data-state", "onBlur"])
      ]),
      _: 3
    }));
  }
});
var am = defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var hd = defineComponent({
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
    const e = a2, n = t, l = gt(e), { forwardRef: s, currentElement: r } = R(), i = eo(), u = ref(false);
    let d;
    watchEffect((c) => {
      if (u.value) {
        const f = document.body;
        d = f.style.userSelect || f.style.webkitUserSelect, f.style.userSelect = "none", f.style.webkitUserSelect = "none", c(() => {
          f.style.userSelect = d, f.style.webkitUserSelect = d;
        });
      }
    });
    function p() {
      u.value = false, i.isPointerDownOnContentRef.value = false, nextTick(() => {
        var f;
        ((f = document.getSelection()) == null ? void 0 : f.toString()) !== "" && (i.hasSelectionRef.value = true);
      });
    }
    return onMounted(() => {
      r.value && (document.addEventListener("pointerup", p), md(r.value).forEach((f) => f.setAttribute("tabindex", "-1")));
    }), onUnmounted(() => {
      document.removeEventListener("pointerup", p), i.hasSelectionRef.value = false, i.isPointerDownOnContentRef.value = false;
    }), (c, f) => (openBlock(), createBlock(unref(st), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: f[1] || (f[1] = (v) => n("escapeKeyDown", v)),
      onPointerDownOutside: f[2] || (f[2] = (v) => n("pointerDownOutside", v)),
      onFocusOutside: f[3] || (f[3] = withModifiers((v) => n("focusOutside", v), ["prevent"])),
      onDismiss: unref(i).onDismiss
    }, {
      default: withCtx(() => [
        createVNode(unref(vt), mergeProps({ ...unref(l), ...c.$attrs }, {
          ref: unref(s),
          "data-state": unref(i).open.value ? "open" : "closed",
          style: {
            userSelect: u.value ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: u.value ? "text" : void 0,
            // re-namespace exposed content custom properties
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          },
          onPointerdown: f[0] || (f[0] = (v) => {
            v.currentTarget.contains(v.target) && (u.value = true), unref(i).hasSelectionRef.value = false, unref(i).isPointerDownOnContentRef.value = true;
          })
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }, 8, ["onDismiss"]));
  }
});
var nm = defineComponent({
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
    const l = Ce(a2, t), { forwardRef: s } = R(), r = eo();
    return (i, u) => (openBlock(), createBlock(unref(we), {
      present: i.forceMount || unref(r).open.value
    }, {
      default: withCtx(() => [
        createVNode(hd, mergeProps(unref(l), {
          ref: unref(s),
          onPointerenter: u[0] || (u[0] = (d) => unref(_a)(unref(r).onOpen)(d)),
          onPointerleave: u[1] || (u[1] = (d) => unref(_a)(unref(r).onClose)(d))
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
var om = defineComponent({
  __name: "HoverCardArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Vt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var lm = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var [Ra, yd] = X("MenubarRoot");
var sm = defineComponent({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R(), { createCollection: r } = Ae("menubar");
    r(s);
    const i = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), u = ref(null), { dir: d, loop: p } = toRefs(e), c = Pe(d);
    return yd({
      modelValue: i,
      dir: c,
      loop: p,
      onMenuOpen: (f) => {
        i.value = f, u.value = f;
      },
      onMenuClose: () => {
        i.value = "";
      },
      onMenuToggle: (f) => {
        i.value = i.value ? "" : f, u.value = f;
      }
    }), (f, v) => (openBlock(), createBlock(unref(Lt), {
      "current-tab-stop-id": u.value,
      "onUpdate:currentTabStopId": v[0] || (v[0] = (y) => u.value = y),
      orientation: "horizontal",
      loop: unref(p),
      dir: unref(c),
      "as-child": ""
    }, {
      default: withCtx(() => [
        createVNode(unref(I), {
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
var [to, gd] = X("MenubarMenu");
var rm = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a2) {
    const e = me(a2.value), n = Ra();
    R();
    const l = ref(), s = ref(false), r = computed(() => n.modelValue.value === e);
    return watch(r, () => {
      r.value || (s.value = false);
    }), gd({
      value: e,
      triggerElement: l,
      triggerId: e,
      contentId: "",
      wasKeyboardTriggerOpenRef: s
    }), (i, u) => (openBlock(), createBlock(unref(Fn), {
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
var im = defineComponent({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = Ra(), e = to(), { forwardRef: n, currentElement: l } = R(), s = ref(false), r = computed(() => t.modelValue.value === e.value);
    return onMounted(() => {
      e.triggerElement = l;
    }), (i, u) => (openBlock(), createBlock(unref(Nt), {
      "as-child": "",
      focusable: !i.disabled,
      "tab-stop-id": unref(e).value
    }, {
      default: withCtx(() => [
        createVNode(unref(Ea), { "as-child": "" }, {
          default: withCtx(() => [
            createVNode(unref(I), {
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
                var p;
                !!unref(t).modelValue.value && !r.value && (unref(t).onMenuOpen(unref(e).value), (p = unref(l)) == null || p.focus());
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
var um = defineComponent({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(jn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var dm = defineComponent({
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
    const l = Ce(a2, t);
    R();
    const s = Ra(), r = to();
    r.contentId || (r.contentId = me(void 0, "radix-vue-menubar-content"));
    const { injectCollection: i } = Ae("menubar"), u = i(), d = ref(false);
    function p(c) {
      const v = c.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), h2 = (s.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === c.key;
      if (!h2 && v)
        return;
      let P = u.value.map((w) => w.dataset.value);
      h2 && P.reverse();
      const $ = P.indexOf(r.value);
      P = s.loop.value ? $n(P, $ + 1) : P.slice($ + 1);
      const [S] = P;
      S && s.onMenuOpen(S);
    }
    return (c, f) => (openBlock(), createBlock(unref(Hn), mergeProps(unref(l), {
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
      onCloseAutoFocus: f[0] || (f[0] = (v) => {
        var h2;
        !!!unref(s).modelValue.value && !d.value && ((h2 = unref(r).triggerElement.value) == null || h2.focus()), d.value = false, v.preventDefault();
      }),
      onFocusOutside: f[1] || (f[1] = (v) => {
        const y = v.target;
        unref(u).some((x) => x.contains(y)) && v.preventDefault();
      }),
      onInteractOutside: f[2] || (f[2] = (v) => {
        d.value = true;
      }),
      onEntryFocus: f[3] || (f[3] = (v) => {
        unref(r).wasKeyboardTriggerOpenRef.value || v.preventDefault();
      }),
      onKeydown: withKeys(p, ["arrow-right", "arrow-left"])
    }), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "style"]));
  }
});
var cm = defineComponent({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Vn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var pm = defineComponent({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, l = $e(t);
    return R(), (s, r) => (openBlock(), createBlock(unref(oa), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var fm = defineComponent({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Ba), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vm = defineComponent({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var mm = defineComponent({
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
    const e = a2, l = $e(t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Kn), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var hm = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(zn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ym = defineComponent({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Wn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gm = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = $e(t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Un), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var bm = defineComponent({
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
    const l = Ce(a2, t);
    return R(), (s, r) => (openBlock(), createBlock(unref(Gn), normalizeProps(guardReactiveProps(unref(l))), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Cm = defineComponent({
  __name: "MenubarSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R();
    const l = ee(e, "open", n, {
      defaultValue: e.defaultOpen ?? false,
      passive: e.open === void 0
    });
    return (s, r) => (openBlock(), createBlock(unref(Yn), {
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
var _m = defineComponent({
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
    const l = Ce(a2, t);
    R();
    const { injectCollection: s } = Ae("menubar"), r = Ra(), i = to(), u = s();
    function d(p) {
      if (p.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let v = u.value.map((x) => x.dataset.value);
      const y = v.indexOf(i.value);
      v = r.loop.value ? $n(v, y + 1) : v.slice(y + 1);
      const [h2] = v;
      h2 && r.onMenuOpen(h2);
    }
    return (p, c) => (openBlock(), createBlock(unref(Xn), mergeProps(unref(l), {
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
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var wm = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Zn), mergeProps(t, { "data-radix-menubar-subtrigger": "" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [rt, El] = X(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext");
var xm = defineComponent({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: { default: void 0 },
    defaultValue: {},
    dir: {},
    orientation: { default: "horizontal" },
    delayDuration: { default: 200 },
    skipDelayDuration: { default: 300 },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:modelValue"],
  setup(a2, { emit: t }) {
    const e = a2, l = ee(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), s = ref(""), { forwardRef: r, currentElement: i } = R(), u = ref(), d = ref(), { createCollection: p } = Ae("nav");
    p(u);
    const { delayDuration: c, skipDelayDuration: f, dir: v } = toRefs(e), y = Pe(v), h2 = xa(false, f), x = computed(() => l.value !== "" || h2.value ? 150 : c.value), P = yn(($) => {
      s.value = l.value, l.value = $;
    }, x);
    return El({
      isRootMenu: true,
      modelValue: l,
      previousValue: s,
      baseId: me(void 0, "radix-navigation-menu"),
      dir: y,
      orientation: e.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      onIndicatorTrackChange: ($) => {
        u.value = $;
      },
      viewport: d,
      onViewportChange: ($) => {
        d.value = $;
      },
      onTriggerEnter: ($) => {
        P($);
      },
      onTriggerLeave: () => {
        h2.value = true, P("");
      },
      onContentEnter: ($) => {
        P($);
      },
      onContentLeave: () => {
        P("");
      },
      onItemSelect: ($) => {
        s.value = l.value, l.value = $;
      },
      onItemDismiss: () => {
        s.value = l.value, l.value = "";
      }
    }), ($, S) => (openBlock(), createBlock(unref(I), {
      ref: unref(r),
      "aria-label": "Main",
      as: $.as,
      "as-child": $.asChild,
      "data-orientation": $.orientation,
      dir: unref(y)
    }, {
      default: withCtx(() => [
        renderSlot($.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function Aa(a2) {
  return a2 ? "open" : "closed";
}
function Bl(a2, t) {
  return `${a2}-trigger-${t}`;
}
function ao(a2, t) {
  return `${a2}-content-${t}`;
}
var ma = "navigationMenu.rootContentDismiss";
function sn(a2) {
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
function Rl(a2) {
  const t = document.activeElement;
  return a2.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function bd(a2) {
  return a2.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    a2.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
function Al(a2) {
  return (t) => t.pointerType === "mouse" ? a2(t) : void 0;
}
var [no, Cd] = X("NavigationMenuItem");
var Pm = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(a2) {
    const t = a2;
    R();
    const { injectCollection: e } = Ae("nav"), n = e(), l = rt(), s = me(t.value), r = ref(), i = ref(), u = ao(l.baseId, s);
    let d = () => ({});
    const p = ref(false);
    async function c(h2 = "start") {
      const x = document.getElementById(u);
      if (x) {
        d();
        const P = sn(x);
        P.length && Rl(h2 === "start" ? P : P.reverse());
      }
    }
    function f() {
      const h2 = document.getElementById(u);
      if (h2) {
        const x = sn(h2);
        x.length && (d = bd(x));
      }
    }
    Cd({
      value: s,
      contentId: u,
      triggerRef: r,
      focusProxyRef: i,
      wasEscapeCloseRef: p,
      onEntryKeyDown: c,
      onFocusProxyEnter: c,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function v() {
      var h2;
      l.onItemDismiss(), (h2 = r.value) == null || h2.focus();
    }
    function y(h2) {
      const x = document.activeElement;
      if (h2.keyCode === 32 || h2.key === "Enter")
        if (l.modelValue.value === s) {
          v(), h2.preventDefault();
          return;
        } else {
          h2.target.click(), h2.preventDefault();
          return;
        }
      const P = n.value.filter(
        (S) => {
          var w;
          return (w = S.parentElement) == null ? void 0 : w.hasAttribute("data-menu-item");
        }
      ), $ = It(h2, x, void 0, {
        itemsArray: P,
        loop: false
      });
      $ && ($ == null || $.focus()), h2.preventDefault(), h2.stopPropagation();
    }
    return (h2, x) => (openBlock(), createBlock(unref(I), {
      "as-child": h2.asChild,
      as: h2.as,
      "data-menu-item": "",
      onKeydown: withKeys(y, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var _d = defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { injectCollection: l } = Ae("nav"), s = l(), { forwardRef: r, currentElement: i } = R(), u = rt(), d = no(), p = Bl(u.baseId, d.value), c = ao(u.baseId, d.value), f = ref(null), v = computed(() => {
      const w = s.value.map((O) => O.id.split("trigger-")[1]);
      u.dir.value === "rtl" && w.reverse();
      const D = w.indexOf(u.modelValue.value), A = w.indexOf(u.previousValue.value), E = d.value === u.modelValue.value, k = A === w.indexOf(d.value);
      if (!E && !k)
        return f.value;
      const V = (() => {
        if (D !== A) {
          if (E && A !== -1)
            return D > A ? "from-end" : "from-start";
          if (k && D !== -1)
            return D > A ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = V, V;
    });
    function y(S) {
      var w, D;
      if (n("focusOutside", S), n("interactOutside", S), !S.defaultPrevented) {
        d.onContentFocusOutside();
        const A = S.target;
        (D = (w = u.rootNavigationMenu) == null ? void 0 : w.value) != null && D.contains(A) && S.preventDefault();
      }
    }
    function h2(S) {
      var w;
      if (n("pointerDownOutside", S), !S.defaultPrevented) {
        const D = S.target, A = s.value.some(
          (k) => k.contains(D)
        ), E = u.isRootMenu && ((w = u.viewport.value) == null ? void 0 : w.contains(D));
        (A || E || !u.isRootMenu) && S.preventDefault();
      }
    }
    watchEffect((S) => {
      const w = i.value;
      if (u.isRootMenu && w) {
        const D = () => {
          var A;
          u.onItemDismiss(), d.onRootContentClose(), w.contains(document.activeElement) && ((A = d.triggerRef.value) == null || A.focus());
        };
        w.addEventListener(ma, D), S(
          () => w.removeEventListener(ma, D)
        );
      }
    });
    function x(S) {
      var w, D;
      n("escapeKeyDown", S), S.defaultPrevented || (u.onItemDismiss(), (D = (w = d.triggerRef) == null ? void 0 : w.value) == null || D.focus(), d.wasEscapeCloseRef.value = true);
    }
    function P(S) {
      var k;
      const w = S.altKey || S.ctrlKey || S.metaKey, D = S.key === "Tab" && !w, A = sn(S.currentTarget);
      if (D) {
        const V = document.activeElement, O = A.findIndex(
          (Q) => Q === V
        ), j = S.shiftKey ? A.slice(0, O).reverse() : A.slice(O + 1, A.length);
        if (Rl(j))
          S.preventDefault();
        else {
          (k = d.focusProxyRef.value) == null || k.focus();
          return;
        }
      }
      const E = It(
        S,
        document.activeElement,
        void 0,
        { itemsArray: A, loop: false, enableIgnoredElement: true }
      );
      E == null || E.focus();
    }
    function $() {
      var w;
      const S = new Event(ma, {
        bubbles: true,
        cancelable: true
      });
      (w = i.value) == null || w.dispatchEvent(S);
    }
    return (S, w) => (openBlock(), createBlock(unref(st), mergeProps({
      id: unref(c),
      ref: unref(r),
      "aria-labelledby": unref(p),
      "data-motion": v.value,
      "data-state": unref(Aa)(unref(u).modelValue.value === unref(d).value),
      "data-orientation": unref(u).orientation
    }, e, {
      onKeydown: P,
      onEscapeKeyDown: x,
      onPointerDownOutside: h2,
      onFocusOutside: y,
      onDismiss: $
    }), {
      default: withCtx(() => [
        renderSlot(S.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
});
var Sm = defineComponent({
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
    const e = a2, n = t, l = $e(n), { forwardRef: s } = R(), r = Pa(), i = rt(), u = no(), d = computed(() => u.value === i.modelValue.value), p = computed(() => i.viewport.value && !i.modelValue.value && i.previousValue.value ? i.previousValue.value === u.value : false);
    return (c, f) => unref(r) ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(i).viewport.value,
      disabled: !unref(i).viewport.value
    }, [
      createVNode(unref(we), {
        present: c.forceMount || d.value || p.value
      }, {
        default: withCtx(() => [
          createVNode(_d, mergeProps({
            ref: unref(s),
            "data-state": unref(Aa)(d.value),
            style: {
              pointerEvents: !d.value && unref(i).isRootMenu ? "none" : void 0
            }
          }, { ...c.$attrs, ...e, ...unref(l) }, {
            onPointerenter: f[0] || (f[0] = (v) => unref(i).onContentEnter(unref(u).value)),
            onPointerleave: f[1] || (f[1] = (v) => unref(Al)(() => unref(i).onContentLeave())(v)),
            onPointerDownOutside: f[2] || (f[2] = (v) => n("pointerDownOutside", v)),
            onFocusOutside: f[3] || (f[3] = (v) => n("focusOutside", v)),
            onInteractOutside: f[4] || (f[4] = (v) => n("interactOutside", v))
          }), {
            default: withCtx(() => [
              renderSlot(c.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "style"])
        ]),
        _: 3
      }, 8, ["present"])
    ], 8, ["to", "disabled"])) : createCommentVNode("", true);
  }
});
var Dm = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R(), { injectCollection: n } = Ae("nav"), l = n(), s = rt(), r = ref(), i = computed(() => s.orientation === "horizontal"), u = computed(() => !!s.modelValue.value), d = ref();
    function p() {
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
      const c = l.value;
      d.value = c.find(
        (f) => f.id.includes(s.modelValue.value)
      ), p();
    }), Ke(d, p), Ke(s.indicatorTrack, p), (c, f) => unref(s).indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(s).indicatorTrack.value
    }, [
      createVNode(unref(we), {
        present: c.forceMount || u.value
      }, {
        default: withCtx(() => {
          var v, y, h2, x;
          return [
            createVNode(unref(I), mergeProps({
              ref: unref(e),
              "aria-hidden": "",
              "data-state": u.value ? "visible" : "hidden",
              "data-orientation": unref(s).orientation,
              "as-child": t.asChild,
              as: c.as,
              style: {
                position: "absolute",
                ...i.value ? {
                  left: 0,
                  width: `${(v = r.value) == null ? void 0 : v.size}px`,
                  transform: `translateX(${(y = r.value) == null ? void 0 : y.offset}px)`
                } : {
                  top: 0,
                  height: `${(h2 = r.value) == null ? void 0 : h2.size}px`,
                  transform: `translateY(${(x = r.value) == null ? void 0 : x.offset}px)`
                }
              }
            }, c.$attrs), {
              default: withCtx(() => [
                renderSlot(c.$slots, "default")
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
var $m = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R();
    async function l(s) {
      var r;
      if (n("select", s), await nextTick(), !s.defaultPrevented && !s.metaKey) {
        const i = new CustomEvent(
          ma,
          {
            bubbles: true,
            cancelable: true
          }
        );
        (r = s.target) == null || r.dispatchEvent(i);
      }
    }
    return (s, r) => (openBlock(), createBlock(unref(I), {
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
var Em = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(a2) {
    const t = a2, e = rt(), { forwardRef: n, currentElement: l } = R();
    return onMounted(() => {
      e.onIndicatorTrackChange(l.value);
    }), (s, r) => (openBlock(), createBlock(unref(I), {
      ref: unref(n),
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        createVNode(unref(I), mergeProps(s.$attrs, {
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
var Bm = defineComponent({
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
    const e = a2, l = ee(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), s = ref(""), r = rt(), { forwardRef: i, currentElement: u } = R(), d = ref(), p = ref(), { createCollection: c } = Ae("nav");
    return c(d), El({
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
      viewport: p,
      onViewportChange: (f) => {
        p.value = f;
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
    }), (f, v) => (openBlock(), createBlock(unref(I), {
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
var wd = ["aria-owns"];
var Rm = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = rt(), n = no(), { forwardRef: l, currentElement: s } = R(), r = ref(""), i = ref(""), u = xa(false, 300), d = ref(false), p = computed(() => n.value === e.modelValue.value);
    onMounted(() => {
      n.triggerRef = s, r.value = Bl(e.baseId, n.value), i.value = ao(e.baseId, n.value);
    });
    function c() {
      d.value = false, n.wasEscapeCloseRef.value = false;
    }
    function f($) {
      if ($.pointerType === "mouse") {
        if (t.disabled || d.value || n.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(n.value), u.value = true;
      }
    }
    function v($) {
      if ($.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = false;
      }
    }
    function y() {
      u.value || (p.value ? e.onItemSelect("") : e.onItemSelect(n.value), d.value = p.value);
    }
    function h2($) {
      const w = { horizontal: "ArrowDown", vertical: e.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      p.value && $.key === w && (n.onEntryKeyDown(), $.preventDefault(), $.stopPropagation());
    }
    function x($) {
      n.focusProxyRef.value = Re($);
    }
    function P($) {
      const S = document.getElementById(n.contentId), w = $.relatedTarget, D = w === s.value, A = S == null ? void 0 : S.contains(w);
      (D || !A) && n.onFocusProxyEnter(D ? "start" : "end");
    }
    return ($, S) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(I), mergeProps({
        id: r.value,
        ref: unref(l),
        disabled: $.disabled,
        "data-disabled": $.disabled ? "" : void 0,
        "data-state": unref(Aa)(p.value),
        "aria-expanded": p.value,
        "aria-controls": i.value,
        "as-child": t.asChild,
        as: $.as
      }, $.$attrs, {
        "data-radix-vue-collection-item": "",
        onPointerenter: c,
        onPointermove: f,
        onPointerleave: v,
        onClick: y,
        onKeydown: h2
      }), {
        default: withCtx(() => [
          renderSlot($.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
      p.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(unref(Ft), {
          ref: x,
          "aria-hidden": "",
          tabindex: 0,
          onFocus: P
        }),
        unref(e).viewport ? (openBlock(), createElementBlock("span", {
          key: 0,
          "aria-owns": i.value
        }, null, 8, wd)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true)
    ], 64));
  }
});
var Am = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const { forwardRef: t, currentElement: e } = R(), n = rt(), l = ref(), s = computed(() => !!n.modelValue.value), r = computed(() => n.modelValue.value);
    watch(e, () => {
      e.value && n.onViewportChange(e.value);
    });
    const i = ref();
    return watch([r, s], async () => {
      var d, p;
      if (await nextTick(), !e.value)
        return;
      const u = (p = (d = e.value.querySelector("[data-state=open]")) == null ? void 0 : d.children) == null ? void 0 : p[0];
      i.value = u;
    }, { immediate: true }), Ke(i, () => {
      i.value && (l.value = {
        width: i.value.offsetWidth,
        height: i.value.offsetHeight
      });
    }), (u, d) => (openBlock(), createBlock(unref(we), {
      present: u.forceMount || s.value
    }, {
      default: withCtx(() => {
        var p, c;
        return [
          createVNode(unref(I), mergeProps(u.$attrs, {
            ref: unref(t),
            as: u.as,
            "as-child": u.asChild,
            "data-state": unref(Aa)(s.value),
            "data-orientation": unref(n).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && unref(n).isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": l.value ? `${(p = l.value) == null ? void 0 : p.width}px` : void 0,
              "--radix-navigation-menu-viewport-height": l.value ? `${(c = l.value) == null ? void 0 : c.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (f) => unref(n).onContentEnter(unref(n).modelValue.value)),
            onPointerleave: d[1] || (d[1] = (f) => unref(Al)(() => unref(n).onContentLeave())(f))
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
var [zt, xd] = X("PaginationRoot");
var Tm = defineComponent({
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
    R();
    const i = ee(e, "page", n, {
      defaultValue: e.defaultPage,
      passive: e.page === void 0
    }), u = computed(() => Math.ceil(e.total / e.itemsPerPage));
    return xd({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: l,
      disabled: s,
      showEdges: r
    }), (d, p) => (openBlock(), createBlock(unref(I), {
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
var Om = defineComponent({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(I), mergeProps(t, { "data-type": "ellipsis" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default", {}, () => [
          createTextVNode("…")
        ])
      ]),
      _: 3
    }, 16));
  }
});
var Im = defineComponent({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = zt();
    return R(), (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var km = defineComponent({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = zt();
    return R(), (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
function Xe(a2, t) {
  const e = t - a2 + 1;
  return Array.from({ length: e }, (n, l) => l + a2);
}
function Pd(a2) {
  return a2.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
var ua = "ellipsis";
function Sd(a2, t, e, n) {
  const s = t, r = Math.max(a2 - e, 1), i = Math.min(a2 + e, s), u = r > 1 + 2, d = i < s - 2;
  if (n) {
    const c = Math.min(2 * e + 5, t) - 2;
    if (!u && d)
      return [...Xe(1, c), ua, s];
    if (u && !d) {
      const v = Xe(s - c + 1, s);
      return [1, ua, ...v];
    }
    if (u && d) {
      const v = Xe(r, i);
      return [1, ua, ...v, ua, s];
    }
    return Xe(1, s);
  } else {
    const p = e * 2 + 1;
    return t < p ? Xe(1, s) : a2 <= e + 1 ? Xe(1, p) : t - a2 <= e ? Xe(t - p + 1, s) : Xe(r, i);
  }
}
var Mm = defineComponent({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    R();
    const e = zt(), n = computed(() => Pd(
      Sd(
        e.page.value,
        e.pageCount.value,
        e.siblingCount.value,
        e.showEdges.value
      )
    ));
    return (l, s) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
});
var Vm = defineComponent({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = zt(), n = computed(() => e.page.value === t.value);
    return (l, s) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var Fm = defineComponent({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = zt();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var Lm = defineComponent({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = zt();
    return (n, l) => {
      var s;
      return openBlock(), createBlock(unref(I), mergeProps(t, {
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
var Dd = ["id", "value", "name", "disabled", "required"];
var [$d, Ed] = X("PinInputRoot");
var Nm = defineComponent({
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
    const e = a2, n = t, { mask: l, otp: s, placeholder: r, type: i, disabled: u, dir: d } = toRefs(e), { forwardRef: p } = R(), c = Pe(d), f = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? [],
      passive: e.modelValue === void 0
    }), v = ref(/* @__PURE__ */ new Set());
    function y(x) {
      v.value.add(x);
    }
    const h2 = computed(() => f.value.filter((P) => !!P).length === v.value.size);
    return watch(f, () => {
      h2.value && n("complete", f.value);
    }, { deep: true }), Ed({
      modelValue: f,
      mask: l,
      otp: s,
      placeholder: r,
      type: i,
      dir: c,
      disabled: u,
      isCompleted: h2,
      inputElements: v,
      onInputElementChange: y
    }), (x, P) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(I), mergeProps(x.$attrs, {
        ref: unref(p),
        dir: unref(c),
        "data-complete": h2.value ? "" : void 0,
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
        onFocus: P[0] || (P[0] = ($) => {
          var S, w;
          return (w = (S = Array.from(v.value)) == null ? void 0 : S[0]) == null ? void 0 : w.focus();
        })
      }, null, 44, Dd)
    ], 64));
  }
});
var Bd = ["autocomplete", "type", "inputmode", "pattern", "placeholder", "value", "disabled", "data-disabled", "data-complete", "aria-label"];
var zm = defineComponent({
  __name: "PinInputInput",
  props: {
    index: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, e = $d(), n = computed(() => Array.from(e.inputElements.value)), l = computed(() => t.disabled || e.disabled.value), s = computed(() => e.otp.value), r = computed(() => e.type.value === "number"), i = computed(() => e.mask.value), u = ref();
    function d($) {
      var D;
      const S = $.target;
      if ((((D = $.data) == null ? void 0 : D.length) ?? 0) > 1) {
        x(S.value);
        return;
      }
      if (r.value && !/^[0-9]*$/.test(S.value)) {
        S.value = S.value.replace(/\D/g, "");
        return;
      }
      S.value = S.value.slice(-1), P(t.index, S.value);
      const w = n.value[t.index + 1];
      w && w.focus();
    }
    function p($) {
      It($, document.activeElement, void 0, {
        itemsArray: n.value,
        focus: true,
        loop: false,
        arrowKeyOptions: "horizontal",
        dir: e.dir.value
      });
    }
    function c($) {
      if ($.preventDefault(), $.target.value)
        P(t.index, "");
      else {
        const D = n.value[t.index - 1];
        D && (D.focus(), P(t.index - 1, ""));
      }
    }
    function f($) {
      $.key === "Delete" && ($.preventDefault(), P(t.index, ""));
    }
    function v($) {
      const S = $.target;
      S.setSelectionRange(1, 1), S.value || (S.placeholder = "");
    }
    function y($) {
      const S = $.target;
      nextTick(() => {
        S.value || (S.placeholder = e.placeholder.value);
      });
    }
    function h2($) {
      $.preventDefault();
      const S = $.clipboardData;
      if (!S)
        return;
      const w = S.getData("text");
      x(w);
    }
    function x($) {
      var A;
      const S = [...e.modelValue.value], w = $.length >= n.value.length ? 0 : t.index, D = Math.min(w + $.length, n.value.length);
      for (let E = w; E < D; E++) {
        const k = n.value[E], V = $[E - w];
        r.value && !/^[0-9]*$/.test(V) || (S[E] = V, k.focus());
      }
      e.modelValue.value = S, (A = n.value[D]) == null || A.focus();
    }
    function P($, S) {
      const w = [...e.modelValue.value];
      w[$] = S, e.modelValue.value = w;
    }
    return onMounted(() => {
      e.onInputElementChange(u.value);
    }), onUnmounted(() => {
      var $;
      ($ = e.inputElements) == null || $.value.delete(u.value);
    }), ($, S) => (openBlock(), createElementBlock("input", {
      ref_key: "inputRef",
      ref: u,
      autocapitalize: "none",
      autocomplete: s.value ? "one-time-code" : "false",
      type: i.value ? "password" : "text",
      inputmode: r.value ? "numeric" : "text",
      pattern: r.value ? "[0-9]*" : void 0,
      placeholder: unref(e).placeholder.value,
      value: unref(e).modelValue.value.at($.index),
      disabled: l.value,
      "data-disabled": l.value ? "" : void 0,
      "data-complete": unref(e).isCompleted.value ? "" : void 0,
      "aria-label": `pin input ${$.index + 1} of ${n.value.length}`,
      onInput: S[0] || (S[0] = (w) => d(w)),
      onKeydown: [
        withKeys(p, ["left", "right", "up", "down", "home", "end"]),
        withKeys(c, ["backspace"]),
        withKeys(f, ["delete"])
      ],
      onFocus: v,
      onBlur: y,
      onPaste: h2
    }, null, 40, Bd));
  }
});
var [Pt, Rd] = X("PopoverRoot");
var Tl = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { modal: l } = toRefs(e), s = ee(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = ref(), i = ref(false);
    return Rd({
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
    }), (u, d) => (openBlock(), createBlock(unref(Ct), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ol = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Pt(), { forwardRef: n, currentElement: l } = R();
    return onMounted(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (openBlock(), createBlock(resolveDynamicComponent(unref(e).hasCustomAnchor.value ? unref(I) : unref(_t)), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(I), {
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
var Il = defineComponent({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var kl = defineComponent({
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
    const e = a2, n = t, l = gt(e), { forwardRef: s } = R(), r = Pt();
    return Sn(), (i, u) => (openBlock(), createBlock(unref($a), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: withCtx(() => [
        createVNode(unref(st), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => unref(r).onOpenChange(false))
        }, {
          default: withCtx(() => [
            createVNode(unref(vt), mergeProps(unref(l), {
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
var Ad = defineComponent({
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
    const e = a2, n = t, l = Pt(), s = ref(false);
    ta(true);
    const r = Ce(e, n), { forwardRef: i, currentElement: u } = R();
    return aa(u), (d, p) => (openBlock(), createBlock(kl, mergeProps(unref(r), {
      ref: unref(i),
      "trap-focus": unref(l).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: p[0] || (p[0] = withModifiers(
        (c) => {
          var f;
          n("closeAutoFocus", c), s.value || (f = unref(l).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: p[1] || (p[1] = (c) => {
        n("pointerDownOutside", c);
        const f = c.detail.originalEvent, v = f.button === 0 && f.ctrlKey === true, y = f.button === 2 || v;
        s.value = y;
      }),
      onFocusOutside: p[2] || (p[2] = withModifiers(() => {
      }, ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
});
var Td = defineComponent({
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
    const e = a2, n = t, l = Pt(), s = ref(false), r = ref(false), i = Ce(e, n);
    return (u, d) => (openBlock(), createBlock(kl, mergeProps(unref(i), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        n("closeAutoFocus", p), p.defaultPrevented || (s.value || (c = unref(l).triggerElement.value) == null || c.focus(), p.preventDefault()), s.value = false, r.value = false;
      }),
      onInteractOutside: d[1] || (d[1] = async (p) => {
        var v;
        n("interactOutside", p), p.defaultPrevented || (s.value = true, p.detail.originalEvent.type === "pointerdown" && (r.value = true));
        const c = p.target;
        ((v = unref(l).triggerElement.value) == null ? void 0 : v.contains(c)) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && r.value && p.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ml = defineComponent({
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
    const e = a2, n = t, l = Pt(), s = Ce(e, n), { forwardRef: r } = R();
    return l.contentId || (l.contentId = me(void 0, "radix-vue-popover-content")), (i, u) => (openBlock(), createBlock(unref(we), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        unref(l).modal.value ? (openBlock(), createBlock(Ad, mergeProps({ key: 0 }, unref(s), { ref: unref(r) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Td, mergeProps({ key: 1 }, unref(s), { ref: unref(r) }), {
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
var Vl = defineComponent({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Vt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Fl = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = Pt();
    return (n, l) => (openBlock(), createBlock(unref(I), {
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
var Ll = defineComponent({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    R();
    const e = Pt();
    return onBeforeMount(() => {
      e.hasCustomAnchor.value = true;
    }), onUnmounted(() => {
      e.hasCustomAnchor.value = false;
    }), (n, l) => (openBlock(), createBlock(unref(_t), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Yt = 100;
var [Od, Id] = X("ProgressRoot");
var oo = (a2) => typeof a2 == "number";
function kd(a2, t) {
  return a2 === null || oo(a2) && !Number.isNaN(a2) && a2 <= t && a2 >= 0 ? a2 : (console.error(`Invalid prop \`value\` of value \`${a2}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Yt} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Md(a2) {
  return oo(a2) && !Number.isNaN(a2) && a2 > 0 ? a2 : (console.error(
    `Invalid prop \`max\` of value \`${a2}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Yt}\`.`
  ), Yt);
}
var Km = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: Yt },
    getValueLabel: { type: Function, default: (a2, t) => `${Math.round(a2 / t * Yt)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R();
    const l = ee(e, "modelValue", n, {
      passive: e.modelValue === void 0
    }), s = ee(e, "max", n, {
      passive: e.max === void 0
    });
    watch(
      () => l.value,
      async (i) => {
        const u = kd(i, e.max);
        u !== i && (await nextTick(), l.value = u);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (i) => {
        const u = Md(e.max);
        u !== i && (s.value = u);
      },
      { immediate: true }
    );
    const r = computed(() => l.value ? l.value === s.value ? "complete" : "loading" : "indeterminate");
    return Id({
      modelValue: l,
      max: s,
      progressState: r
    }), (i, u) => (openBlock(), createBlock(unref(I), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": unref(s),
      "aria-valuemin": 0,
      "aria-valuenow": oo(unref(l)) ? unref(l) : void 0,
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
var Hm = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Od();
    return R(), (n, l) => {
      var s;
      return openBlock(), createBlock(unref(I), mergeProps(t, {
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
var [Vd, Fd] = X("RadioGroupRoot");
var Wm = defineComponent({
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
    const e = a2, n = t, { forwardRef: l } = R(), s = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { disabled: r, loop: i, orientation: u, name: d, required: p, dir: c } = toRefs(e), f = Pe(c);
    return Fd({
      modelValue: s,
      changeModelValue: (v) => {
        s.value = v;
      },
      disabled: r,
      loop: i,
      orientation: u,
      name: d == null ? void 0 : d.value,
      required: p
    }), (v, y) => (openBlock(), createBlock(unref(Lt), {
      "as-child": "",
      orientation: unref(u),
      dir: unref(f),
      loop: unref(i)
    }, {
      default: withCtx(() => [
        createVNode(unref(I), {
          ref: unref(l),
          role: "radiogroup",
          "data-disabled": unref(r) ? "" : void 0,
          "as-child": v.asChild,
          as: v.as,
          required: unref(p),
          "aria-orientation": unref(u),
          "aria-required": unref(p),
          dir: unref(f),
          name: unref(d)
        }, {
          default: withCtx(() => [
            renderSlot(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var Ld = ["value", "checked", "name", "disabled", "required"];
var Nd = defineComponent({
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
    const e = a2, l = ee(e, "checked", t, {
      passive: e.checked === void 0
    }), { value: s } = toRefs(e), { forwardRef: r, currentElement: i } = R(), u = yt(i), d = computed(() => {
      var c;
      return e.id && i.value ? ((c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText) ?? e.value : void 0;
    });
    function p(c) {
      l.value = true, u.value && c.stopPropagation();
    }
    return (c, f) => (openBlock(), createBlock(unref(I), mergeProps(c.$attrs, {
      id: c.id,
      ref: unref(r),
      role: "radio",
      type: c.as === "button" ? "button" : void 0,
      as: c.as,
      "aria-checked": unref(l),
      "aria-label": d.value,
      "as-child": c.asChild,
      disabled: c.disabled ? true : void 0,
      "data-state": unref(l) ? "checked" : "unchecked",
      "data-disabled": c.disabled ? "" : void 0,
      value: unref(s),
      required: c.required,
      name: c.name,
      onClick: withModifiers(p, ["stop"])
    }), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default"),
        unref(u) ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "",
          value: unref(s),
          checked: !!unref(l),
          name: c.name,
          disabled: c.disabled,
          required: c.required,
          style: normalizeStyle({
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          })
        }, null, 12, Ld)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
});
var [zd, Kd] = X("RadioGroupItem");
var jm = defineComponent({
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
    const t = a2, { forwardRef: e, currentElement: n } = R(), l = Vd(), s = computed(() => l.disabled.value || t.disabled), r = computed(() => l.required.value || t.required), i = computed(() => {
      var c;
      return ((c = l.modelValue) == null ? void 0 : c.value) === t.value;
    });
    Kd({ disabled: s, checked: i });
    const u = ref(false), d = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    tt("keydown", (c) => {
      d.includes(c.key) && (u.value = true);
    }), tt("keyup", () => {
      u.value = false;
    });
    function p() {
      setTimeout(() => {
        var c;
        u.value && ((c = n.value) == null || c.click());
      }, 0);
    }
    return (c, f) => (openBlock(), createBlock(unref(Nt), {
      checked: i.value,
      disabled: s.value,
      "as-child": "",
      focusable: !s.value,
      active: i.value
    }, {
      default: withCtx(() => [
        createVNode(Nd, mergeProps({ ...c.$attrs, ...t }, {
          ref: unref(e),
          checked: i.value,
          required: r.value,
          "onUpdate:checked": f[0] || (f[0] = (v) => unref(l).changeModelValue(c.value)),
          onKeydown: f[1] || (f[1] = withKeys(withModifiers(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: p
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["checked", "required"])
      ]),
      _: 3
    }, 8, ["checked", "disabled", "focusable", "active"]));
  }
});
var Um = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const { forwardRef: t } = R(), e = zd();
    return (n, l) => (openBlock(), createBlock(unref(we), {
      present: n.forceMount || unref(e).checked.value
    }, {
      default: withCtx(() => [
        createVNode(unref(I), mergeProps({
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
function Hd(a2) {
  const t = computed(() => a2.start.value ? !!a2.isDateDisabled(a2.start.value) : false), e = computed(() => a2.end.value ? !!a2.isDateDisabled(a2.end.value) : false), n = computed(
    () => t.value || e.value ? false : !!(a2.start.value && a2.end.value && Be(a2.end.value, a2.start.value))
  ), l = (u) => !a2.start.value || !a2.end.value ? false : $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.start.value, u), s = (u) => !a2.end.value || !a2.start.value ? false : $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.end.value, u), r = (u) => a2.start.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.start.value, u) || a2.end.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(a2.end.value, u) ? true : a2.end.value && a2.start.value ? Ir(u, a2.start.value, a2.end.value) : false, i = computed(() => {
    if (a2.start.value && a2.end.value || !a2.start.value || !a2.focusedValue.value)
      return null;
    const u = Be(a2.start.value, a2.focusedValue.value), d = u ? a2.start.value : a2.focusedValue.value, p = u ? a2.focusedValue.value : a2.start.value;
    return $14e0f24ef4ac5c92$export$ea39ec197993aef0(d.add({ days: 1 }), p) ? {
      start: d,
      end: p
    } : qo(d, p, a2.isDateUnavailable, a2.isDateDisabled) ? {
      start: d,
      end: p
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
var Wd = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } };
var jd = {
  role: "heading",
  "aria-level": "2"
};
var [Kt, Ud] = X("RangeCalendarRoot");
var Gd = defineComponent({
  __name: "RangeCalendarRoot",
  props: {
    defaultPlaceholder: {},
    defaultValue: { default: void 0 },
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
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, {
      disabled: l,
      readonly: s,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: p,
      numberOfMonths: c,
      preventDeselect: f,
      isDateUnavailable: v,
      isDateDisabled: y,
      calendarLabel: h2,
      maxValue: x,
      minValue: P
    } = toRefs(e), { primitiveElement: $, currentElement: S } = ot(), w = ref(), D = ref(), A = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? { start: void 0, end: void 0 },
      passive: e.modelValue === void 0
    }), E = kt({
      defaultPlaceholder: e.placeholder,
      defaultValue: A.value.start
    }), k = ref(A.value.start), V = ref(A.value.end), O = ee(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? E.copy(),
      passive: e.placeholder === void 0
    });
    function W(re) {
      O.value = E.set({ ...re });
    }
    const {
      fullCalendarLabel: j,
      headingValue: Q,
      isDateDisabled: z,
      isDateUnavailable: K,
      isNextButtonDisabled: L,
      isPrevButtonDisabled: Y,
      grid: q,
      weekdays: Z,
      isOutsideVisibleView: F,
      nextPage: G,
      prevPage: ae,
      formatter: fe
    } = pl({
      locale: e.locale,
      placeholder: O,
      weekStartsOn: e.weekStartsOn,
      fixedWeeks: e.fixedWeeks,
      numberOfMonths: e.numberOfMonths,
      minValue: P,
      maxValue: x,
      disabled: l,
      weekdayFormat: e.weekdayFormat,
      pagedNavigation: e.pagedNavigation,
      isDateDisabled: y.value,
      isDateUnavailable: v.value,
      calendarLabel: h2.value
    }), {
      isInvalid: ve,
      isSelected: de,
      highlightedRange: xe,
      isSelectionStart: ue,
      isSelectionEnd: se
    } = Hd({
      start: k,
      end: V,
      grid: q,
      isDateDisabled: z,
      isDateUnavailable: K,
      focusedValue: D
    });
    watch(A, () => {
      var re, Oe;
      A.value.start && A.value.end && (A.value.start.toString() !== ((re = k.value) == null ? void 0 : re.toString()) && (k.value = E.set({ ...A.value.start })), A.value.end.toString() !== ((Oe = V.value) == null ? void 0 : Oe.toString()) && (V.value = E.set({ ...A.value.end })));
    }), watch(k, (re) => {
      re && !$14e0f24ef4ac5c92$export$ea39ec197993aef0(re, O.value) && W(re);
    }), watch([k, V], () => {
      var re, Oe, He, St;
      A.value && ((re = A.value.start) == null ? void 0 : re.toString()) === ((Oe = k.value) == null ? void 0 : Oe.toString()) && ((He = A.value.end) == null ? void 0 : He.toString()) === ((St = V.value) == null ? void 0 : St.toString()) || k.value && V.value && (Be(V.value, k.value) ? A.value = {
        start: E.set({ ...V.value }),
        end: E.set({ ...k.value })
      } : A.value = {
        start: E.set({ ...k.value }),
        end: E.set({ ...V.value })
      });
    });
    const Te = computed(() => {
      const re = E.set({ ...O.value });
      return Xo({
        dateObj: re,
        minValue: P.value,
        maxValue: x.value,
        numberOfMonths: c.value,
        pagedNavigation: i.value
      });
    });
    function Ee({ startIndex: re, endIndex: Oe }) {
      return Yo({
        dateObj: E,
        startIndex: re,
        endIndex: Oe,
        minValue: P.value,
        maxValue: x.value
      });
    }
    return Ud({
      isDateUnavailable: K,
      startValue: k,
      endValue: V,
      formatter: fe,
      modelValue: A,
      placeholder: O,
      disabled: l,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: p,
      numberOfMonths: c,
      readonly: s,
      preventDeselect: f,
      fullCalendarLabel: j,
      headingValue: Q,
      isInvalid: ve,
      isDateDisabled: z,
      highlightedRange: xe,
      focusedValue: D,
      lastPressedDateValue: w,
      isSelected: de,
      isSelectionEnd: se,
      isSelectionStart: ue,
      isNextButtonDisabled: L,
      isPrevButtonDisabled: Y,
      isOutsideVisibleView: F,
      nextPage: G,
      prevPage: ae,
      parentElement: S,
      defaultDate: E,
      onPlaceholderChange: W
    }), onMounted(() => {
      r.value && el(S.value);
    }), (re, Oe) => (openBlock(), createBlock(unref(I), {
      ref_key: "primitiveElement",
      ref: $,
      as: re.as,
      "as-child": re.asChild,
      role: "application",
      "aria-label": unref(j),
      "data-readonly": unref(s) ? "" : void 0,
      "data-disabled": unref(l) ? "" : void 0,
      "data-invalid": unref(ve) ? "" : void 0
    }, {
      default: withCtx(() => [
        createBaseVNode("div", Wd, [
          createBaseVNode("div", jd, toDisplayString(unref(j)), 1)
        ]),
        renderSlot(re.$slots, "default", {
          date: unref(E).set({ ...unref(O) }),
          grid: unref(q),
          weekDays: unref(Z),
          formatter: unref(fe),
          getMonths: Te.value,
          getYears: Ee
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid"]));
  }
});
var qd = defineComponent({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Yd = defineComponent({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Kt();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var Xd = defineComponent({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a2) {
    const t = a2, e = Kt();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var Zd = defineComponent({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a2) {
    const t = a2, e = Kt();
    return (n, l) => {
      var s, r;
      return openBlock(), createBlock(unref(I), mergeProps(t, {
        role: "gridcell",
        "aria-selected": unref(e).isSelected(n.date) ? true : void 0,
        "aria-disabled": unref(e).isDateDisabled(n.date) || ((r = (s = unref(e)).isDateUnavailable) == null ? void 0 : r.call(s, n.date)),
        "data-disabled": unref(e).isDateDisabled(n.date) ? "" : void 0
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
});
var Jd = defineComponent({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qd = defineComponent({
  __name: "RangeCalendarNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Kt();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
      "aria-label": "Next page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": unref(e).isNextButtonDisabled.value || void 0,
      "data-disabled": unref(e).isNextButtonDisabled.value || void 0,
      disabled: unref(e).isNextButtonDisabled.value,
      onClick: unref(e).nextPage
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled", "onClick"]));
  }
});
var ec = defineComponent({
  __name: "RangeCalendarPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Kt();
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
      "aria-label": "Previous page",
      type: n.as === "button" ? "button" : void 0,
      "aria-disabled": unref(e).isPrevButtonDisabled.value || void 0,
      "data-disabled": unref(e).isPrevButtonDisabled.value || void 0,
      disabled: unref(e).isPrevButtonDisabled.value,
      onClick: unref(e).prevPage
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled", "onClick"]));
  }
});
var tc = defineComponent({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), mergeProps(t, { "aria-hidden": "true" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ac = defineComponent({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var nc = defineComponent({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var oc = defineComponent({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Kt(), n = bt(), { primitiveElement: l, currentElement: s } = ot(), r = computed(() => e.formatter.custom(ke(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = computed(() => e.isDateDisabled(t.day)), u = computed(() => {
      var E;
      return (E = e.isDateUnavailable) == null ? void 0 : E.call(e, t.day);
    }), d = computed(() => e.isSelected(t.day)), p = computed(() => e.isSelectionStart(t.day)), c = computed(() => e.isSelectionEnd(t.day)), f = computed(() => e.highlightedRange.value ? Or(t.day, e.highlightedRange.value.start, e.highlightedRange.value.end) : false), v = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", y = computed(() => $14e0f24ef4ac5c92$export$629b0a497aa65267(t.day, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())), h2 = computed(() => !$14e0f24ef4ac5c92$export$a18c89cbd24170ff(t.day, t.month)), x = computed(
      () => e.isOutsideVisibleView(t.day)
    ), P = computed(() => $14e0f24ef4ac5c92$export$ea39ec197993aef0(t.day, e.placeholder.value));
    function $(E) {
      var k;
      if (!e.readonly.value && !(e.isDateDisabled(E) || (k = e.isDateUnavailable) != null && k.call(e, E))) {
        if (e.lastPressedDateValue.value = e.defaultDate.set({ ...E }), e.startValue.value && e.highlightedRange.value === null) {
          if ($14e0f24ef4ac5c92$export$ea39ec197993aef0(E, e.startValue.value) && !e.preventDeselect.value && !e.endValue.value) {
            e.startValue.value = void 0, e.onPlaceholderChange(E);
            return;
          } else if (!e.endValue.value) {
            e.lastPressedDateValue.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(e.lastPressedDateValue.value, E) && (e.startValue.value = e.defaultDate.set({ ...E }));
            return;
          }
        }
        if (e.startValue.value && $14e0f24ef4ac5c92$export$ea39ec197993aef0(e.startValue.value, E) && !e.preventDeselect.value && !e.endValue.value) {
          e.startValue.value = void 0, e.onPlaceholderChange(E);
          return;
        }
        e.startValue.value ? e.endValue.value ? e.endValue.value && e.startValue.value && (e.endValue.value = void 0, e.startValue.value = e.defaultDate.set({ ...E })) : e.endValue.value = e.defaultDate.set({ ...E }) : e.startValue.value = e.defaultDate.set({ ...E });
      }
    }
    function S(E) {
      E.preventDefault(), $(ya(E.target.getAttribute("data-value"), e.defaultDate));
    }
    function w(E) {
      e.focusedValue.value = e.defaultDate.set({ ...E });
    }
    function D(E) {
      const k = E.target;
      E.preventDefault(), E.stopPropagation();
      const V = e.parentElement.value, O = V ? Array.from(V.querySelectorAll(v)) : [];
      let j = O.indexOf(s.value);
      const Q = 7;
      switch (E.code) {
        case n.ARROW_RIGHT:
          j++;
          break;
        case n.ARROW_LEFT:
          j--;
          break;
        case n.ARROW_UP:
          j -= Q;
          break;
        case n.ARROW_DOWN:
          j += Q;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          $(ya(k.getAttribute("data-value"), e.defaultDate));
          return;
        default:
          return;
      }
      if (j >= 0 && j < O.length) {
        O[j].focus();
        return;
      }
      if (j < 0) {
        if (e.isPrevButtonDisabled.value)
          return;
        e.prevPage(), nextTick(() => {
          const z = V ? Array.from(V.querySelectorAll(v)) : [];
          z[z.length - Math.abs(j)].focus();
        });
        return;
      }
      if (j >= O.length) {
        if (e.isNextButtonDisabled.value)
          return;
        e.nextPage(), nextTick(() => {
          (V ? Array.from(V.querySelectorAll(v)) : [])[j - O.length].focus();
        });
      }
    }
    const A = computed(() => e.formatter.custom(t.day.toDate($14e0f24ef4ac5c92$export$aa8b41735afcabd2()), {
      day: "numeric"
    }));
    return (E, k) => (openBlock(), createBlock(unref(I), mergeProps({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": d.value ? true : void 0,
      "aria-disabled": h2.value || i.value || u.value ? true : void 0,
      "data-highlighted": f.value ? "" : void 0,
      "data-selection-start": p.value ? true : void 0,
      "data-selection-end": c.value ? true : void 0,
      "data-selected": d.value ? true : void 0,
      "data-outside-visible-view": x.value ? "" : void 0,
      "data-value": E.day.toString(),
      "data-disabled": i.value || h2.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": y.value ? "" : void 0,
      "data-outside-month": h2.value ? "" : void 0,
      "data-focused": P.value ? "" : void 0,
      tabindex: P.value ? 0 : h2.value || i.value ? void 0 : -1,
      onClick: S,
      onFocus: k[0] || (k[0] = (V) => w(E.day)),
      onMouseenter: k[1] || (k[1] = (V) => w(E.day)),
      onKeydown: withKeys(D, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: withCtx(() => [
        renderSlot(E.$slots, "default", { text: A.value }, () => [
          createTextVNode(toDisplayString(A.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
});
var [Ve, lc] = X("ScrollAreaRoot");
var Gm = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: {},
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e, currentElement: n } = R(), l = ref(0), s = ref(0), r = ref(), i = ref(), u = ref(), d = ref(), p = ref(false), c = ref(false), { type: f, dir: v, scrollHideDelay: y } = toRefs(t), h2 = Pe(v);
    return lc({
      type: f,
      dir: h2,
      scrollHideDelay: y,
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
      scrollbarXEnabled: p,
      scrollbarY: d,
      scrollbarYEnabled: c,
      onScrollbarXChange: (x) => {
        u.value = x || void 0;
      },
      onScrollbarYChange: (x) => {
        d.value = x || void 0;
      },
      onScrollbarXEnabledChange: (x) => {
        p.value = x;
      },
      onScrollbarYEnabledChange: (x) => {
        c.value = x;
      },
      onCornerWidthChange: (x) => {
        l.value = x;
      },
      onCornerHeightChange: (x) => {
        s.value = x;
      }
    }), (x, P) => (openBlock(), createBlock(unref(I), {
      ref: unref(e),
      "as-child": t.asChild,
      as: x.as,
      dir: unref(h2),
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
var qm = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2, { expose: t }) {
    const e = a2, n = Ve(), l = ref();
    onMounted(() => {
      n.onViewportChange(l.value), n.onContentChange(r.value);
    }), t({
      viewportElement: l
    });
    const { forwardRef: s, currentElement: r } = R();
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
        createVNode(unref(I), {
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
      createVNode(unref(I), {
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
function sc(a2, [t, e]) {
  return Math.min(e, Math.max(t, a2));
}
function Nl(a2, t) {
  return (e) => {
    if (a2[0] === a2[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a2[1] - a2[0]);
    return t[0] + n * (e - a2[0]);
  };
}
function Ta(a2) {
  const t = zl(a2.viewport, a2.content), e = a2.scrollbar.paddingStart + a2.scrollbar.paddingEnd, n = (a2.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function zl(a2, t) {
  const e = a2 / t;
  return Number.isNaN(e) ? 0 : e;
}
function rc(a2, t = () => {
}) {
  let e = { left: a2.scrollLeft, top: a2.scrollTop }, n = 0;
  return function l() {
    const s = { left: a2.scrollLeft, top: a2.scrollTop }, r = e.left !== s.left, i = e.top !== s.top;
    (r || i) && t(), e = s, n = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(n);
}
function xo(a2, t, e = "ltr") {
  const n = Ta(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - l, r = t.content - t.viewport, i = s - n, u = e === "ltr" ? [0, r] : [r * -1, 0], d = sc(
    a2,
    u
  );
  return Nl([0, r], [0, i])(d);
}
function da(a2) {
  return a2 ? Number.parseInt(a2, 10) : 0;
}
function ic(a2, t, e, n = "ltr") {
  const l = Ta(e), s = l / 2, r = t || s, i = l - r, u = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, p = e.content - e.viewport, c = n === "ltr" ? [0, p] : [p * -1, 0];
  return Nl(
    [u, d],
    c
  )(a2);
}
function Po(a2, t) {
  return a2 > 0 && a2 < t;
}
var Kl = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = Ve(), s = Oa(), r = Ia(), { forwardRef: i, currentElement: u } = R(), d = ref(""), p = ref();
    function c(P) {
      var $, S;
      if (p.value) {
        const w = P.clientX - (($ = p.value) == null ? void 0 : $.left), D = P.clientY - ((S = p.value) == null ? void 0 : S.top);
        n("onDragScroll", { x: w, y: D });
      }
    }
    function f(P) {
      P.button === 0 && (P.target.setPointerCapture(P.pointerId), p.value = u.value.getBoundingClientRect(), d.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", l.viewport && (l.viewport.value.style.scrollBehavior = "auto"), c(P));
    }
    function v(P) {
      c(P);
    }
    function y(P) {
      const $ = P.target;
      $.hasPointerCapture(P.pointerId) && $.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = d.value, l.viewport && (l.viewport.value.style.scrollBehavior = ""), p.value = void 0;
    }
    function h2(P) {
      var D;
      const $ = P.target, S = (D = u.value) == null ? void 0 : D.contains($), w = s.sizes.value.content - s.sizes.value.viewport;
      S && s.handleWheelScroll(P, w);
    }
    onMounted(() => {
      document.addEventListener("wheel", h2, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", h2);
    });
    function x() {
      var P, $, S, w, D;
      u.value && (e.isHorizontal ? s.handleSizeChange({
        content: ((P = l.viewport.value) == null ? void 0 : P.scrollWidth) ?? 0,
        viewport: (($ = l.viewport.value) == null ? void 0 : $.offsetWidth) ?? 0,
        scrollbar: {
          size: u.value.clientWidth ?? 0,
          paddingStart: da(getComputedStyle(u.value).paddingLeft),
          paddingEnd: da(getComputedStyle(u.value).paddingRight)
        }
      }) : s.handleSizeChange({
        content: ((S = l.viewport.value) == null ? void 0 : S.scrollHeight) ?? 0,
        viewport: ((w = l.viewport.value) == null ? void 0 : w.offsetHeight) ?? 0,
        scrollbar: {
          size: ((D = u.value) == null ? void 0 : D.clientHeight) ?? 0,
          paddingStart: da(getComputedStyle(u.value).paddingLeft),
          paddingEnd: da(getComputedStyle(u.value).paddingRight)
        }
      }));
    }
    return Ke(u, x), Ke(l.content, x), (P, $) => (openBlock(), createBlock(unref(I), {
      ref: unref(i),
      style: { position: "absolute" },
      "data-scrollbarimpl": "",
      as: unref(r).as.value,
      "as-child": unref(r).asChild.value,
      onPointerdown: f,
      onPointermove: v,
      onPointerup: y
    }, {
      default: withCtx(() => [
        renderSlot(P.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var uc = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(a2) {
    const t = Ve(), e = Oa(), { forwardRef: n, currentElement: l } = R();
    onMounted(() => {
      l.value && t.onScrollbarXChange(l.value);
    });
    const s = computed(() => e.sizes.value);
    return (r, i) => (openBlock(), createBlock(Kl, {
      ref: unref(n),
      "is-horizontal": true,
      "data-orientation": "horizontal",
      style: normalizeStyle({
        bottom: 0,
        left: unref(t).dir.value === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: unref(t).dir.value === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": s.value ? `${unref(Ta)(s.value)}px` : void 0
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
var dc = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(a2) {
    const t = Ve(), e = Oa(), { forwardRef: n, currentElement: l } = R();
    onMounted(() => {
      l.value && t.onScrollbarYChange(l.value);
    });
    const s = computed(() => e.sizes.value);
    return (r, i) => (openBlock(), createBlock(Kl, {
      ref: unref(n),
      "is-horizontal": false,
      "data-orientation": "vertical",
      style: normalizeStyle({
        top: 0,
        right: unref(t).dir.value === "ltr" ? 0 : void 0,
        left: unref(t).dir.value === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": s.value ? `${unref(Ta)(s.value)}px` : void 0
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
var [Oa, cc] = X("ScrollAreaScrollbarVisible");
var lo = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(a2) {
    const t = Ve(), e = Ia(), { forwardRef: n } = R(), l = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), s = computed(() => {
      const P = zl(l.value.viewport, l.value.content);
      return P > 0 && P < 1;
    }), r = ref(), i = ref(0);
    function u(P, $) {
      if (v.value) {
        const S = t.viewport.value.scrollLeft + P.deltaY;
        t.viewport.value.scrollLeft = S, Po(S, $) && P.preventDefault();
      } else {
        const S = t.viewport.value.scrollTop + P.deltaY;
        t.viewport.value.scrollTop = S, Po(S, $) && P.preventDefault();
      }
    }
    function d(P, $) {
      v.value ? i.value = $.x : i.value = $.y;
    }
    function p(P) {
      i.value = 0;
    }
    function c(P) {
      l.value = P;
    }
    function f(P, $) {
      return ic(
        P,
        i.value,
        l.value,
        $
      );
    }
    const v = computed(
      () => e.isHorizontal.value
    );
    function y(P) {
      v.value ? t.viewport.value.scrollLeft = f(
        P,
        t.dir.value
      ) : t.viewport.value.scrollTop = f(P);
    }
    function h2() {
      if (v.value) {
        if (t.viewport.value && r.value) {
          const P = t.viewport.value.scrollLeft, $ = xo(
            P,
            l.value,
            t.dir.value
          );
          r.value.style.transform = `translate3d(${$}px, 0, 0)`;
        }
      } else if (t.viewport.value && r.value) {
        const P = t.viewport.value.scrollTop, $ = xo(P, l.value);
        r.value.style.transform = `translate3d(0, ${$}px, 0)`;
      }
    }
    function x(P) {
      r.value = P;
    }
    return cc({
      sizes: l,
      hasThumb: s,
      handleWheelScroll: u,
      handleThumbDown: d,
      handleThumbUp: p,
      handleSizeChange: c,
      onThumbPositionChange: h2,
      onThumbChange: x,
      onDragScroll: y
    }), (P, $) => v.value ? (openBlock(), createBlock(uc, mergeProps({ key: 0 }, P.$attrs, { ref: unref(n) }), {
      default: withCtx(() => [
        renderSlot(P.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(dc, mergeProps({ key: 1 }, P.$attrs, { ref: unref(n) }), {
      default: withCtx(() => [
        renderSlot(P.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Hl = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = Ve(), e = Ia(), { forwardRef: n } = R(), l = ref(false), s = yn(() => {
      if (t.viewport.value) {
        const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, i = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
        l.value = e.isHorizontal.value ? r : i;
      }
    }, 10);
    return onMounted(() => s()), Ke(t.viewport, s), Ke(t.content, s), (r, i) => (openBlock(), createBlock(unref(we), {
      present: r.forceMount || l.value
    }, {
      default: withCtx(() => [
        createVNode(lo, mergeProps(r.$attrs, {
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
var pc = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaScrollbarHover",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = Ve(), { forwardRef: e } = R();
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
    }), (i, u) => (openBlock(), createBlock(unref(we), {
      present: i.forceMount || l.value
    }, {
      default: withCtx(() => [
        createVNode(Hl, mergeProps(i.$attrs, {
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
var fc = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = Ve(), e = Ia(), { forwardRef: n } = R(), { state: l, dispatch: s } = nl("hidden", {
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
    const r = yn(() => s("SCROLL_END"), 100);
    return watchEffect((i) => {
      const u = t.viewport.value, d = e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (u) {
        let p = u[d];
        const c = () => {
          const f = u[d];
          p !== f && (s("SCROLL"), r()), p = f;
        };
        u.addEventListener("scroll", c), i(() => {
          u.removeEventListener("scroll", c);
        });
      }
    }), (i, u) => (openBlock(), createBlock(unref(we), {
      present: i.forceMount || unref(l) !== "hidden"
    }, {
      default: withCtx(() => [
        createVNode(lo, mergeProps(i.$attrs, { ref: unref(n) }), {
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
var [Ia, vc] = X("ScrollAreaScrollbar");
var Ym = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R(), n = Ve(), l = computed(() => t.orientation === "horizontal");
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
    return vc({
      orientation: s,
      forceMount: r,
      isHorizontal: l,
      as: u,
      asChild: i
    }), (d, p) => unref(n).type.value === "hover" ? (openBlock(), createBlock(pc, mergeProps({ key: 0 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(r)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(n).type.value === "scroll" ? (openBlock(), createBlock(fc, mergeProps({ key: 1 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(r)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(n).type.value === "auto" ? (openBlock(), createBlock(Hl, mergeProps({ key: 2 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(r)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(n).type.value === "always" ? (openBlock(), createBlock(lo, mergeProps({ key: 3 }, d.$attrs, {
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
var Xm = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Ve(), n = Oa();
    function l(f) {
      const y = f.target.getBoundingClientRect(), h2 = f.clientX - y.left, x = f.clientY - y.top;
      n.handleThumbDown(f, { x: h2, y: x });
    }
    function s(f) {
      n.handleThumbUp(f);
    }
    const { forwardRef: r, currentElement: i } = R(), u = ref(), d = computed(() => e.viewport.value);
    function p() {
      if (!u.value) {
        const f = rc(
          d.value,
          n.onThumbPositionChange
        );
        u.value = f, n.onThumbPositionChange();
      }
    }
    const c = computed(() => n.sizes.value);
    return fr(c, () => {
      n.onThumbChange(i.value), d.value && (n.onThumbPositionChange(), d.value.addEventListener("scroll", p));
    }), onUnmounted(() => {
      var f;
      d.value.removeEventListener("scroll", p), (f = e.viewport.value) == null || f.removeEventListener("scroll", p);
    }), (f, v) => (openBlock(), createBlock(unref(I), {
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
var mc = defineComponent({
  __name: "ScrollAreaCornerImpl",
  setup(a2) {
    const t = Ve(), e = ref(0), n = ref(0), l = computed(() => !!e.value && !!n.value);
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
    return Ke(t.scrollbarX.value, s), Ke(t.scrollbarY.value, r), watch(() => t.scrollbarX.value, s), watch(() => t.scrollbarY.value, r), (i, u) => {
      var d;
      return l.value ? (openBlock(), createBlock(unref(I), mergeProps({
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
var Zm = defineComponent({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R(), n = Ve(), l = computed(
      () => !!n.scrollbarX.value && !!n.scrollbarY.value
    ), s = computed(
      () => n.type.value !== "scroll" && l.value
    );
    return (r, i) => s.value ? (openBlock(), createBlock(mc, mergeProps({ key: 0 }, t, { ref: unref(e) }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var hc = ["default-value"];
var yc = defineComponent({
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
    Cr(e);
    const n = ref();
    return (l, s) => (openBlock(), createBlock(unref(Ft), { "as-child": "" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => isRef(e) ? e.value = r : null),
          "default-value": unref(e)
        }), [
          renderSlot(l.$slots, "default")
        ], 16, hc), [
          [vModelSelect, unref(e)]
        ])
      ]),
      _: 3
    }));
  }
});
var gc = {
  key: 0,
  value: ""
};
var [it, Wl] = X("SelectRoot");
var [bc, Cc] = X("SelectRoot");
var Jm = defineComponent({
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
    const e = a2, n = t, l = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), s = ee(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = ref(), i = ref(), u = ref({
      x: 0,
      y: 0
    }), d = ref(false), { required: p, disabled: c, dir: f } = toRefs(e), v = Pe(f);
    Wl({
      triggerElement: r,
      onTriggerChange: (P) => {
        r.value = P;
      },
      valueElement: i,
      onValueElementChange: (P) => {
        i.value = P;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (P) => {
        d.value = P;
      },
      contentId: "",
      modelValue: l,
      onValueChange: (P) => {
        l.value = P;
      },
      open: s,
      required: p,
      onOpenChange: (P) => {
        s.value = P;
      },
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: c
    });
    const y = yt(r), h2 = ref(/* @__PURE__ */ new Set()), x = computed(() => Array.from(h2.value).map((P) => {
      var $;
      return ($ = P.props) == null ? void 0 : $.value;
    }).join(";"));
    return Cc({
      onNativeOptionAdd: (P) => {
        h2.value.add(P);
      },
      onNativeOptionRemove: (P) => {
        h2.value.delete(P);
      }
    }), (P, $) => (openBlock(), createBlock(unref(Ct), null, {
      default: withCtx(() => [
        renderSlot(P.$slots, "default"),
        unref(y) ? (openBlock(), createBlock(yc, mergeProps({ key: x.value }, P.$attrs, {
          "aria-hidden": "",
          tabindex: "-1",
          required: unref(p),
          name: P.name,
          autocomplete: P.autocomplete,
          disabled: unref(c),
          value: unref(l),
          onChange: $[0] || ($[0] = (S) => l.value = S.target.value)
        }), {
          default: withCtx(() => [
            unref(l) === void 0 ? (openBlock(), createElementBlock("option", gc)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(h2.value), (S) => (openBlock(), createBlock(resolveDynamicComponent(S), mergeProps(S.props, {
              key: S.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var _c = [" ", "Enter", "ArrowUp", "ArrowDown"];
var wc = [" ", "Enter"];
var je = 10;
function jl(a2) {
  return a2 === "" || a2 === void 0;
}
var Qm = defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = it(), n = computed(() => {
      var f;
      return ((f = e.disabled) == null ? void 0 : f.value) || t.disabled;
    }), { forwardRef: l, currentElement: s } = R();
    e.contentId || (e.contentId = me(void 0, "radix-vue-select-content")), onMounted(() => {
      e.triggerElement = s;
    });
    const { injectCollection: r } = Ae(), i = r(), { search: u, handleTypeaheadSearch: d, resetTypeahead: p } = Dn(i);
    function c() {
      n.value || (e.onOpenChange(true), p());
    }
    return (f, v) => (openBlock(), createBlock(unref(_t), { "as-child": "" }, {
      default: withCtx(() => {
        var y, h2, x, P;
        return [
          createVNode(unref(I), {
            ref: unref(l),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": unref(e).contentId,
            "aria-expanded": unref(e).open.value || false,
            "aria-required": (y = unref(e).required) == null ? void 0 : y.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (h2 = unref(e)) == null ? void 0 : h2.dir.value,
            "data-state": (x = unref(e)) != null && x.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": unref(jl)((P = unref(e).modelValue) == null ? void 0 : P.value) ? "" : void 0,
            "as-child": f.asChild,
            as: f.as,
            onClick: v[0] || (v[0] = ($) => {
              var S;
              (S = $ == null ? void 0 : $.currentTarget) == null || S.focus();
            }),
            onPointerdown: v[1] || (v[1] = ($) => {
              const S = $.target;
              S.hasPointerCapture($.pointerId) && S.releasePointerCapture($.pointerId), $.button === 0 && $.ctrlKey === false && (c(), unref(e).triggerPointerDownPosRef.value = {
                x: Math.round($.pageX),
                y: Math.round($.pageY)
              }, $.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = withModifiers(() => {
            }, ["prevent"])),
            onKeydown: v[3] || (v[3] = ($) => {
              const S = unref(u) !== "";
              !($.ctrlKey || $.altKey || $.metaKey) && $.key.length === 1 && S && $.key === " " || (unref(d)($.key), unref(_c).includes($.key) && (c(), $.preventDefault()));
            })
          }, {
            default: withCtx(() => [
              renderSlot(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
});
var eh = defineComponent({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [so, xc] = X("SelectItemAlignedPosition");
var Pc = defineComponent({
  inheritAttrs: false,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { injectCollection: l } = Ae(), s = it(), r = ut(), i = l(), u = ref(false), d = ref(true), p = ref(), { forwardRef: c, currentElement: f } = R(), { viewport: v, selectedItem: y, selectedItemText: h2, focusSelectedItem: x } = r;
    function P() {
      if (s.triggerElement.value && s.valueElement.value && p.value && f.value && (v != null && v.value) && (y != null && y.value) && (h2 != null && h2.value)) {
        const w = s.triggerElement.value.getBoundingClientRect(), D = f.value.getBoundingClientRect(), A = s.valueElement.value.getBoundingClientRect(), E = h2.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const se = E.left - D.left, Te = A.left - se, Ee = w.left - Te, re = w.width + Ee, Oe = Math.max(re, D.width), He = window.innerWidth - je, St = vo(Te, je, He - Oe);
          p.value.style.minWidth = `${re}px`, p.value.style.left = `${St}px`;
        } else {
          const se = D.right - E.right, Te = window.innerWidth - A.right - se, Ee = window.innerWidth - w.right - Te, re = w.width + Ee, Oe = Math.max(re, D.width), He = window.innerWidth - je, St = vo(
            Te,
            je,
            He - Oe
          );
          p.value.style.minWidth = `${re}px`, p.value.style.right = `${St}px`;
        }
        const k = i.value, V = window.innerHeight - je * 2, O = v.value.scrollHeight, W = window.getComputedStyle(f.value), j = Number.parseInt(
          W.borderTopWidth,
          10
        ), Q = Number.parseInt(W.paddingTop, 10), z = Number.parseInt(
          W.borderBottomWidth,
          10
        ), K = Number.parseInt(
          W.paddingBottom,
          10
        ), L = j + Q + O + K + z, Y = Math.min(
          y.value.offsetHeight * 5,
          L
        ), q = window.getComputedStyle(v.value), Z = Number.parseInt(q.paddingTop, 10), F = Number.parseInt(
          q.paddingBottom,
          10
        ), G = w.top + w.height / 2 - je, ae = V - G, fe = y.value.offsetHeight / 2, ve = y.value.offsetTop + fe, de = j + Q + ve, xe = L - de;
        if (de <= G) {
          const se = y.value === k[k.length - 1];
          p.value.style.bottom = "0px";
          const Te = f.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, Ee = Math.max(
            ae,
            fe + (se ? F : 0) + Te + z
          ), re = de + Ee;
          p.value.style.height = `${re}px`;
        } else {
          const se = y.value === k[0];
          p.value.style.top = "0px";
          const Ee = Math.max(
            G,
            j + v.value.offsetTop + (se ? Z : 0) + fe
          ) + xe;
          p.value.style.height = `${Ee}px`, v.value.scrollTop = de - G + v.value.offsetTop;
        }
        p.value.style.margin = `${je}px 0`, p.value.style.minHeight = `${Y}px`, p.value.style.maxHeight = `${V}px`, n("placed"), requestAnimationFrame(() => u.value = true);
      }
    }
    const $ = ref("");
    onMounted(async () => {
      await nextTick(), P(), f.value && ($.value = window.getComputedStyle(f.value).zIndex);
    });
    function S(w) {
      w && d.value === true && (P(), x == null || x(), d.value = false);
    }
    return xc({
      contentWrapper: p,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: S
    }), (w, D) => (openBlock(), createElementBlock("div", {
      ref_key: "contentWrapperElement",
      ref: p,
      style: normalizeStyle({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: $.value
      })
    }, [
      createVNode(unref(I), mergeProps({
        ref: unref(c),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...w.$attrs, ...e }), {
        default: withCtx(() => [
          renderSlot(w.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])
    ], 4));
  }
});
var Sc = defineComponent({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: je },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const e = gt(a2);
    return (n, l) => (openBlock(), createBlock(unref(vt), mergeProps(unref(e), { style: {
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
var Ht = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
};
var [ut, Dc] = X("SelectContent");
var $c = defineComponent({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
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
    const e = a2, n = t, l = it();
    Sn(), ta(true);
    const { createCollection: s } = Ae(), r = ref();
    aa(r);
    const i = s(r), { search: u, handleTypeaheadSearch: d } = Dn(i), p = ref(), c = ref(), f = ref(), v = ref(false), y = ref(false);
    function h2() {
      c.value && r.value && nn([c.value, r.value]);
    }
    watch(v, () => {
      h2();
    });
    const { onOpenChange: x, triggerPointerDownPosRef: P } = l;
    watchEffect((D) => {
      if (!r.value)
        return;
      let A = { x: 0, y: 0 };
      const E = (V) => {
        var O, W;
        A = {
          x: Math.abs(
            Math.round(V.pageX) - (((O = P.value) == null ? void 0 : O.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((W = P.value) == null ? void 0 : W.y) ?? 0)
          )
        };
      }, k = (V) => {
        var O;
        A.x <= 10 && A.y <= 10 ? V.preventDefault() : (O = r.value) != null && O.contains(V.target) || x(false), document.removeEventListener("pointermove", E), P.value = null;
      };
      P.value !== null && (document.addEventListener("pointermove", E), document.addEventListener("pointerup", k, {
        capture: true,
        once: true
      })), D(() => {
        document.removeEventListener("pointermove", E), document.removeEventListener("pointerup", k, {
          capture: true
        });
      });
    });
    function $(D) {
      const A = D.ctrlKey || D.altKey || D.metaKey;
      if (D.key === "Tab" && D.preventDefault(), !A && D.key.length === 1 && d(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
        let E = i.value;
        if (["ArrowUp", "End"].includes(D.key) && (E = E.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
          const k = D.target, V = E.indexOf(k);
          E = E.slice(V + 1);
        }
        setTimeout(() => nn(E)), D.preventDefault();
      }
    }
    const S = computed(() => e.position === "popper" ? e : {}), w = gt(S.value);
    return Dc({
      content: r,
      viewport: p,
      onViewportChange: (D) => {
        p.value = D;
      },
      itemRefCallback: (D, A, E) => {
        var O, W;
        const k = !y.value && !E;
        (((O = l.modelValue) == null ? void 0 : O.value) !== void 0 && ((W = l.modelValue) == null ? void 0 : W.value) === A || k) && (c.value = D, k && (y.value = true));
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var D;
        (D = r.value) == null || D.focus();
      },
      itemTextRefCallback: (D, A, E) => {
        var O, W;
        const k = !y.value && !E;
        (((O = l.modelValue) == null ? void 0 : O.value) !== void 0 && ((W = l.modelValue) == null ? void 0 : W.value) === A || k) && (f.value = D);
      },
      focusSelectedItem: h2,
      position: e.position,
      isPositioned: v,
      searchRef: u
    }), (D, A) => (openBlock(), createBlock(unref($a), {
      "as-child": "",
      onMountAutoFocus: A[6] || (A[6] = withModifiers(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: A[7] || (A[7] = (E) => {
        var k;
        n("closeAutoFocus", E), !E.defaultPrevented && ((k = unref(l).triggerElement.value) == null || k.focus({ preventScroll: true }), E.preventDefault());
      })
    }, {
      default: withCtx(() => [
        createVNode(unref(st), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: A[2] || (A[2] = withModifiers(() => {
          }, ["prevent"])),
          onDismiss: A[3] || (A[3] = (E) => unref(l).onOpenChange(false)),
          onEscapeKeyDown: A[4] || (A[4] = (E) => n("escapeKeyDown", E)),
          onPointerDownOutside: A[5] || (A[5] = (E) => n("pointerDownOutside", E))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(
              D.position === "popper" ? Sc : Pc
            ), mergeProps({ ...D.$attrs, ...unref(w) }, {
              id: unref(l).contentId,
              ref: (E) => {
                r.value = unref(Re)(E);
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
              onContextmenu: A[0] || (A[0] = withModifiers(() => {
              }, ["prevent"])),
              onPlaced: A[1] || (A[1] = (E) => v.value = true),
              onKeydown: $
            }), {
              default: withCtx(() => [
                renderSlot(D.$slots, "default")
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
var Ec = defineComponent({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(a2) {
    return Wl(a2.context), (e, n) => renderSlot(e.$slots, "default");
  }
});
var th = defineComponent({
  inheritAttrs: false,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
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
    const l = Ce(a2, t), s = it(), r = ref();
    onMounted(() => {
      r.value = new DocumentFragment();
    });
    const i = ref();
    return (u, d) => {
      var p;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(we), {
          ref_key: "presenceRef",
          ref: i,
          present: u.forceMount || unref(s).open.value
        }, {
          default: withCtx(() => [
            createVNode($c, normalizeProps(guardReactiveProps({ ...unref(l), ...u.$attrs })), {
              default: withCtx(() => [
                renderSlot(u.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }, 8, ["present"]),
        !((p = i.value) != null && p.present) && r.value ? (openBlock(), createBlock(Teleport, {
          key: 0,
          to: r.value
        }, [
          createVNode(Ec, { context: unref(s) }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                renderSlot(u.$slots, "default")
              ])
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var ah = defineComponent({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2, e = it(), n = ut();
    return (l, s) => unref(e).open.value && unref(n).position === "popper" ? (openBlock(), createBlock(unref(Vt), normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var nh = defineComponent({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(I), mergeProps({ "aria-hidden": "" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var [Ul, Bc] = X("SelectItem");
var oh = defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { disabled: e } = toRefs(t), n = it(), l = ut(Ht), { forwardRef: s, currentElement: r } = R(), i = computed(() => {
      var h2;
      return ((h2 = n.modelValue) == null ? void 0 : h2.value) === t.value;
    }), u = ref(false), d = ref(t.textValue ?? ""), p = me(void 0, "radix-vue-select-item-text");
    async function c(h2) {
      await nextTick(), !(h2 != null && h2.defaultPrevented) && (e.value || (n.onValueChange(t.value), n.onOpenChange(false)));
    }
    async function f(h2) {
      var x;
      await nextTick(), !h2.defaultPrevented && (e.value ? (x = l.onItemLeave) == null || x.call(l) : h2.currentTarget.focus({ preventScroll: true }));
    }
    async function v(h2) {
      var x;
      await nextTick(), !h2.defaultPrevented && h2.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l));
    }
    async function y(h2) {
      var P;
      await nextTick(), !(h2.defaultPrevented || ((P = l.searchRef) == null ? void 0 : P.value) !== "" && h2.key === " ") && (wc.includes(h2.key) && c(), h2.key === " " && h2.preventDefault());
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
    }), Bc({
      value: t.value,
      disabled: e,
      textId: p,
      isSelected: i,
      onItemTextChange: (h2) => {
        d.value = ((d.value || (h2 == null ? void 0 : h2.textContent)) ?? "").trim();
      }
    }), (h2, x) => (openBlock(), createBlock(unref(I), {
      ref: unref(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": unref(p),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value && u.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": unref(e) || void 0,
      "data-disabled": unref(e) ? "" : void 0,
      tabindex: unref(e) ? void 0 : -1,
      as: h2.as,
      "as-child": h2.asChild,
      onFocus: x[0] || (x[0] = (P) => u.value = true),
      onBlur: x[1] || (x[1] = (P) => u.value = false),
      onPointerup: c,
      onTouchend: x[2] || (x[2] = withModifiers(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: v,
      onKeydown: y
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
});
var lh = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = Ul();
    return (n, l) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(I), mergeProps({
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
var [Rc, Ac] = X("SelectGroup");
var sh = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = me(void 0, "radix-vue-select-group");
    return Ac({ id: e }), (n, l) => (openBlock(), createBlock(unref(I), mergeProps({ role: "group" }, t, { "aria-labelledby": unref(e) }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
});
var rh = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a2) {
    const t = a2, e = Rc({ id: "" });
    return (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var ih = defineComponent({
  inheritAttrs: false,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = it(), n = ut(Ht), l = bc(), s = Ul(), { forwardRef: r, currentElement: i } = R(), u = computed(() => {
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
    }), (d, p) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(I), mergeProps({
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
var uh = defineComponent({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = ut(Ht), n = e.position === "item-aligned" ? so() : void 0, { forwardRef: l, currentElement: s } = R();
    onMounted(() => {
      e == null || e.onViewportChange(s.value);
    });
    const r = ref(0);
    function i(u) {
      const d = u.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: c } = n ?? {};
      if (p != null && p.value && (c != null && c.value)) {
        const f = Math.abs(r.value - d.scrollTop);
        if (f > 0) {
          const v = window.innerHeight - je * 2, y = Number.parseFloat(
            c.value.style.minHeight
          ), h2 = Number.parseFloat(c.value.style.height), x = Math.max(y, h2);
          if (x < v) {
            const P = x + f, $ = Math.min(v, P), S = P - $;
            c.value.style.height = `${$}px`, c.value.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0, c.value.style.justifyContent = "flex-end");
          }
        }
      }
      r.value = d.scrollTop;
    }
    return (u, d) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(I), mergeProps({
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
      createVNode(unref(I), {
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
var Gl = defineComponent({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(a2, { emit: t }) {
    const e = t, { injectCollection: n } = Ae(), l = n(), s = ut(Ht), r = ref(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    watchEffect(() => {
      const p = l.value.find(
        (c) => c === document.activeElement
      );
      p == null || p.scrollIntoView({ block: "nearest" });
    });
    function u() {
      r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    function d() {
      var p;
      (p = s.onItemLeave) == null || p.call(s), r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    return onBeforeUnmount(() => i()), (p, c) => {
      var f;
      return openBlock(), createBlock(unref(I), mergeProps({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (f = p.$parent) == null ? void 0 : f.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: c[0] || (c[0] = () => {
          i();
        })
      }), {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
var dh = defineComponent({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = ut(Ht), e = t.position === "item-aligned" ? so() : void 0, { forwardRef: n, currentElement: l } = R(), s = ref(false);
    return watchEffect((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          s.value = p.scrollTop > 0;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), r(() => p.removeEventListener("scroll", d));
      }
    }), watch(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (openBlock(), createBlock(Gl, {
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
var ch = defineComponent({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = ut(Ht), e = t.position === "item-aligned" ? so() : void 0, { forwardRef: n, currentElement: l } = R(), s = ref(false);
    return watchEffect((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const c = p.scrollHeight - p.clientHeight;
          s.value = Math.ceil(p.scrollTop) < c;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), r(() => p.removeEventListener("scroll", d));
      }
    }), watch(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (openBlock(), createBlock(Gl, {
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
var ph = defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const { forwardRef: t, currentElement: e } = R(), n = it(), l = useSlots();
    return onBeforeMount(() => {
      var r;
      const s = !!Sa((r = l == null ? void 0 : l.default) == null ? void 0 : r.call(l)).length;
      n.onValueElementHasChildrenChange(s);
    }), onMounted(() => {
      n.valueElement = e;
    }), (s, r) => (openBlock(), createBlock(unref(I), {
      ref: unref(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: withCtx(() => {
        var i;
        return [
          unref(jl)((i = unref(n).modelValue) == null ? void 0 : i.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(s.placeholder), 1)
          ], 64)) : renderSlot(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var fh = defineComponent({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    return (t, e) => (openBlock(), createBlock(unref(I), {
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
var ql = defineComponent({
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
    return (i, u) => (openBlock(), createBlock(unref(I), mergeProps({
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
var vh = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(ql, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Yl(a2, [t, e]) {
  return Math.min(e, Math.max(t, a2));
}
function Tc(a2 = [], t, e) {
  const n = [...a2];
  return n[e] = t, n.sort((l, s) => l - s);
}
function Xl(a2, t, e) {
  const s = 100 / (e - t) * (a2 - t);
  return Yl(s, [0, 100]);
}
function Oc(a2, t) {
  return t > 2 ? `Value ${a2 + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][a2] : void 0;
}
function Ic(a2, t) {
  if (a2.length === 1)
    return 0;
  const e = a2.map((l) => Math.abs(l - t)), n = Math.min(...e);
  return e.indexOf(n);
}
function kc(a2, t, e) {
  const n = a2 / 2, s = ro([0, 50], [0, n]);
  return (n - s(t) * e) * e;
}
function Mc(a2) {
  return a2.slice(0, -1).map((t, e) => a2[e + 1] - t);
}
function Vc(a2, t) {
  if (t > 0) {
    const e = Mc(a2);
    return Math.min(...e) >= t;
  }
  return true;
}
function ro(a2, t) {
  return (e) => {
    if (a2[0] === a2[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a2[1] - a2[0]);
    return t[0] + n * (e - a2[0]);
  };
}
function Fc(a2) {
  return (String(a2).split(".")[1] || "").length;
}
function Lc(a2, t) {
  const e = 10 ** t;
  return Math.round(a2 * e) / e;
}
var Zl = ["PageUp", "PageDown"];
var Jl = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var Ql = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
};
var [es, ts] = X(["SliderVertical", "SliderHorizontal"]);
var as = defineComponent({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = ka();
    return (s, r) => (openBlock(), createBlock(unref(I), mergeProps({ "data-slider-impl": "" }, e, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : unref(Zl).concat(unref(Jl)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
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
var Nc = defineComponent({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { max: l, min: s, dir: r, inverted: i } = toRefs(e), { forwardRef: u, currentElement: d } = R(), p = ref(), c = computed(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function f(v) {
      const y = p.value || d.value.getBoundingClientRect(), h2 = [0, y.width], x = c.value ? [s.value, l.value] : [l.value, s.value], P = ro(h2, x);
      return p.value = y, P(v - y.left);
    }
    return ts({
      startEdge: c.value ? "left" : "right",
      endEdge: c.value ? "right" : "left",
      direction: c.value ? 1 : -1,
      size: "width"
    }), (v, y) => (openBlock(), createBlock(as, {
      ref: unref(u),
      dir: unref(r),
      "data-orientation": "horizontal",
      style: normalizeStyle({
        "--radix-slider-thumb-transform": "translateX(-50%)"
      }),
      onSlideStart: y[0] || (y[0] = (h2) => {
        const x = f(h2.clientX);
        n("slideStart", x);
      }),
      onSlideMove: y[1] || (y[1] = (h2) => {
        const x = f(h2.clientX);
        n("slideMove", x);
      }),
      onSlideEnd: y[2] || (y[2] = () => {
        p.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: y[3] || (y[3] = (h2) => {
        const x = c.value ? "from-left" : "from-right", P = unref(Ql)[x].includes(h2.key);
        n("stepKeyDown", h2, P ? -1 : 1);
      }),
      onEndKeyDown: y[4] || (y[4] = (h2) => n("endKeyDown", h2)),
      onHomeKeyDown: y[5] || (y[5] = (h2) => n("homeKeyDown", h2))
    }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "style"]));
  }
});
var zc = defineComponent({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, { max: l, min: s, inverted: r } = toRefs(e), { forwardRef: i, currentElement: u } = R(), d = ref(), p = computed(() => !r.value);
    function c(f) {
      const v = d.value || u.value.getBoundingClientRect(), y = [0, v.height], h2 = p.value ? [l.value, s.value] : [s.value, l.value], x = ro(y, h2);
      return d.value = v, x(f - v.top);
    }
    return ts({
      startEdge: p.value ? "bottom" : "top",
      endEdge: p.value ? "top" : "bottom",
      size: "height",
      direction: p.value ? 1 : -1
    }), (f, v) => (openBlock(), createBlock(as, {
      ref: unref(i),
      "data-orientation": "vertical",
      style: normalizeStyle({
        "--radix-slider-thumb-transform": "translateY(50%)"
      }),
      onSlideStart: v[0] || (v[0] = (y) => {
        const h2 = c(y.clientY);
        n("slideStart", h2);
      }),
      onSlideMove: v[1] || (v[1] = (y) => {
        const h2 = c(y.clientY);
        n("slideMove", h2);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (y) => {
        const h2 = p.value ? "from-bottom" : "from-top", x = unref(Ql)[h2].includes(y.key);
        n("stepKeyDown", y, x ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (y) => n("endKeyDown", y)),
      onHomeKeyDown: v[5] || (v[5] = (y) => n("homeKeyDown", y))
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
});
var Kc = ["value", "name", "disabled", "step"];
var [ka, Hc] = X("SliderRoot");
var mh = defineComponent({
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
    const e = a2, n = t, { min: l, max: s, step: r, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: p } = toRefs(e), c = Pe(p), { forwardRef: f, currentElement: v } = R(), y = yt(v);
    In();
    const h2 = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), x = ref(0), P = ref(h2.value);
    function $(E) {
      const k = Ic(h2.value, E);
      D(E, k);
    }
    function S(E) {
      D(E, x.value);
    }
    function w() {
      const E = P.value[x.value];
      h2.value[x.value] !== E && n("valueCommit", toRaw(h2.value));
    }
    function D(E, k, { commit: V } = { commit: false }) {
      var z;
      const O = Fc(r.value), W = Lc(Math.round((E - l.value) / r.value) * r.value + l.value, O), j = Yl(W, [l.value, s.value]), Q = Tc(h2.value, j, k);
      if (Vc(Q, i.value * r.value)) {
        x.value = Q.indexOf(j);
        const K = String(Q) !== String(h2.value);
        K && V && n("valueCommit", Q), K && ((z = A.value[x.value]) == null || z.focus(), h2.value = Q);
      }
    }
    const A = ref([]);
    return Hc({
      modelValue: h2,
      valueIndexToChangeRef: x,
      thumbElements: A,
      orientation: u,
      min: l,
      max: s,
      disabled: d
    }), (E, k) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(kn), null, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(unref(u) === "horizontal" ? Nc : zc), mergeProps(E.$attrs, {
            ref: unref(f),
            "as-child": E.asChild,
            as: E.as,
            min: unref(l),
            max: unref(s),
            dir: unref(c),
            inverted: E.inverted,
            "aria-disabled": unref(d),
            "data-disabled": unref(d) ? "" : void 0,
            onPointerdown: k[0] || (k[0] = () => {
              unref(d) || (P.value = unref(h2));
            }),
            onSlideStart: k[1] || (k[1] = (V) => !unref(d) && $(V)),
            onSlideMove: k[2] || (k[2] = (V) => !unref(d) && S(V)),
            onSlideEnd: k[3] || (k[3] = (V) => !unref(d) && w()),
            onHomeKeyDown: k[4] || (k[4] = (V) => !unref(d) && D(unref(l), 0, { commit: true })),
            onEndKeyDown: k[5] || (k[5] = (V) => !unref(d) && D(unref(s), unref(h2).length - 1, { commit: true })),
            onStepKeyDown: k[6] || (k[6] = (V, O) => {
              if (!unref(d)) {
                const Q = unref(Zl).includes(V.key) || V.shiftKey && unref(Jl).includes(V.key) ? 10 : 1, z = x.value, K = unref(h2)[z], L = unref(r) * Q * O;
                D(K + L, z, { commit: true });
              }
            })
          }), {
            default: withCtx(() => [
              renderSlot(E.$slots, "default", { modelValue: unref(h2) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      unref(y) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(h2), (V, O) => (openBlock(), createElementBlock("input", {
        key: O,
        value: V,
        type: "number",
        style: { display: "none" },
        name: E.name ? E.name + (unref(h2).length > 1 ? "[]" : "") : void 0,
        disabled: unref(d),
        step: unref(r)
      }, null, 8, Kc))), 128)) : createCommentVNode("", true)
    ], 64));
  }
});
var Wc = defineComponent({
  inheritAttrs: false,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = ka(), n = es(), { forwardRef: l, currentElement: s } = R(), r = computed(() => {
      var v, y;
      return (y = (v = e.modelValue) == null ? void 0 : v.value) == null ? void 0 : y[t.index];
    }), i = computed(() => r.value === void 0 ? 0 : Xl(r.value, e.min.value ?? 0, e.max.value ?? 100)), u = computed(() => {
      var v, y;
      return Oc(t.index, ((y = (v = e.modelValue) == null ? void 0 : v.value) == null ? void 0 : y.length) ?? 0);
    }), d = al(s), p = computed(() => d[n.size].value), c = computed(() => p.value ? kc(p.value, i.value, n.direction) : 0), f = Pa();
    return onMounted(() => {
      e.thumbElements.value.push(s.value);
    }), onUnmounted(() => {
      const v = e.thumbElements.value.findIndex((y) => y === s.value) ?? -1;
      e.thumbElements.value.splice(v, 1);
    }), (v, y) => (openBlock(), createBlock(unref(Mn), null, {
      default: withCtx(() => [
        createVNode(unref(I), mergeProps(v.$attrs, {
          ref: unref(l),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: unref(e).disabled.value ? void 0 : 0,
          "aria-label": v.$attrs["aria-label"] || u.value,
          "data-disabled": unref(e).disabled.value ? "" : void 0,
          "data-orientation": unref(e).orientation.value,
          "aria-valuenow": r.value,
          "aria-valuemin": unref(e).min.value,
          "aria-valuemax": unref(e).max.value,
          "aria-orientation": unref(e).orientation.value,
          "as-child": v.asChild,
          as: v.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [unref(n).startEdge]: `calc(${i.value}% + ${c.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !unref(f) && r.value === void 0 ? "none" : void 0
          },
          onFocus: y[0] || (y[0] = () => {
            unref(e).valueIndexToChangeRef.value = v.index;
          })
        }), {
          default: withCtx(() => [
            renderSlot(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
});
var hh = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { getItems: e } = yl(), { forwardRef: n, currentElement: l } = R(), s = computed(() => l.value ? e().findIndex((r) => r.ref === l.value) : -1);
    return (r, i) => (openBlock(), createBlock(Wc, mergeProps({ ref: unref(n) }, t, { index: s.value }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
});
var yh = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = ka();
    return R(), (e, n) => (openBlock(), createBlock(unref(I), {
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
var gh = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = ka(), e = es();
    R();
    const n = computed(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (u) => Xl(u, t.min.value, t.max.value)
      );
    }), l = computed(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = computed(() => 100 - Math.max(...n.value));
    return (r, i) => (openBlock(), createBlock(unref(I), {
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
var rn = null;
var pt = null;
function jc(a2, t) {
  if (t) {
    const e = (t & is) !== 0, n = (t & us) !== 0, l = (t & ds) !== 0, s = (t & cs) !== 0;
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
function Uc() {
  pt !== null && (document.head.removeChild(pt), rn = null, pt = null);
}
function Ja(a2, t) {
  const e = jc(a2, t);
  rn !== e && (rn = e, pt === null && (pt = document.createElement("style"), document.head.appendChild(pt)), pt.innerHTML = `*{cursor: ${e}!important;}`);
}
function Gc({
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
function ns(a2) {
  return a2.type === "keydown";
}
function os(a2) {
  return a2.type.startsWith("mouse");
}
function ls(a2) {
  return a2.type.startsWith("touch");
}
function Ma(a2) {
  if (os(a2))
    return {
      x: a2.clientX,
      y: a2.clientY
    };
  if (ls(a2)) {
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
function ss(a2, t) {
  const e = a2 === "horizontal", { x: n, y: l } = Ma(t);
  return e ? n : l;
}
function qc(a2, t, e) {
  return e ? a2.x < t.x + t.width && a2.x + a2.width > t.x && a2.y < t.y + t.height && a2.y + a2.height > t.y : a2.x <= t.x + t.width && a2.x + a2.width >= t.x && a2.y <= t.y + t.height && a2.y + a2.height >= t.y;
}
function le(a2, t = "Assertion failed!") {
  if (!a2)
    throw console.error(t), new Error(t);
}
function Yc(a2, t) {
  if (a2 === t)
    throw new Error("Cannot compare node with itself");
  const e = {
    a: $o(a2),
    b: $o(t)
  };
  let n;
  for (; e.a.at(-1) === e.b.at(-1); )
    a2 = e.a.pop(), t = e.b.pop(), n = a2;
  le(n);
  const l = {
    a: Do(So(e.a)),
    b: Do(So(e.b))
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
var Xc = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function Zc(a2) {
  const t = getComputedStyle(rs(a2)).display;
  return t === "flex" || t === "inline-flex";
}
function Jc(a2) {
  const t = getComputedStyle(a2);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || Zc(a2)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || Xc.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function So(a2) {
  let t = a2.length;
  for (; t--; ) {
    const e = a2[t];
    if (le(e), Jc(e))
      return e;
  }
  return null;
}
function Do(a2) {
  return a2 && Number(getComputedStyle(a2).zIndex) || 0;
}
function $o(a2) {
  const t = [];
  for (; a2; )
    t.push(a2), a2 = rs(a2);
  return t;
}
function rs(a2) {
  var t;
  return ((t = a2.parentNode) == null ? void 0 : t.host) || a2.parentNode;
}
var is = 1;
var us = 2;
var ds = 4;
var cs = 8;
function Qc() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
var ep = Qc() === "coarse";
var at = [];
var Va = false;
var et = /* @__PURE__ */ new Map();
var Fa = /* @__PURE__ */ new Map();
var Xt = /* @__PURE__ */ new Set();
function tp(a2, t, e, n, l) {
  const { ownerDocument: s } = t, r = {
    direction: e,
    element: t,
    hitAreaMargins: n,
    setResizeHandlerState: l
  }, i = et.get(s) ?? 0;
  return et.set(s, i + 1), Xt.add(r), wa(), function() {
    Fa.delete(a2), Xt.delete(r);
    const d = et.get(s) ?? 1;
    et.set(s, d - 1), wa(), d === 1 && et.delete(s);
  };
}
function ca(a2) {
  const { target: t } = a2, { x: e, y: n } = Ma(a2);
  Va = true, io({ target: t, x: e, y: n }), wa(), at.length > 0 && (uo("down", a2), a2.preventDefault());
}
function Ze(a2) {
  const { x: t, y: e } = Ma(a2);
  if (!Va) {
    const { target: n } = a2;
    io({ target: n, x: t, y: e });
  }
  uo("move", a2), ps(), at.length > 0 && a2.preventDefault();
}
function Je(a2) {
  const { target: t } = a2, { x: e, y: n } = Ma(a2);
  Fa.clear(), Va = false, at.length > 0 && a2.preventDefault(), uo("up", a2), io({ target: t, x: e, y: n }), ps(), wa();
}
function io({
  target: a2,
  x: t,
  y: e
}) {
  at.splice(0);
  let n = null;
  a2 instanceof HTMLElement && (n = a2), Xt.forEach((l) => {
    const { element: s, hitAreaMargins: r } = l, i = s.getBoundingClientRect(), { bottom: u, left: d, right: p, top: c } = i, f = ep ? r.coarse : r.fine;
    if (t >= d - f && t <= p + f && e >= c - f && e <= u + f) {
      if (n !== null && s !== n && !s.contains(n) && !n.contains(s) && Yc(n, s) > 0) {
        let y = n, h2 = false;
        for (; y && !y.contains(s); ) {
          if (qc(
            y.getBoundingClientRect(),
            i,
            true
          )) {
            h2 = true;
            break;
          }
          y = y.parentElement;
        }
        if (h2)
          return;
      }
      at.push(l);
    }
  });
}
function Qa(a2, t) {
  Fa.set(a2, t);
}
function ps() {
  let a2 = false, t = false;
  at.forEach((n) => {
    const { direction: l } = n;
    l === "horizontal" ? a2 = true : t = true;
  });
  let e = 0;
  Fa.forEach((n) => {
    e |= n;
  }), a2 && t ? Ja("intersection", e) : a2 ? Ja("horizontal", e) : t ? Ja("vertical", e) : Uc();
}
function wa() {
  et.forEach((a2, t) => {
    const { body: e } = t;
    e.removeEventListener("contextmenu", Je), e.removeEventListener("mousedown", ca), e.removeEventListener("mouseleave", Ze), e.removeEventListener("mousemove", Ze), e.removeEventListener("touchmove", Ze), e.removeEventListener("touchstart", ca);
  }), window.removeEventListener("mouseup", Je), window.removeEventListener("touchcancel", Je), window.removeEventListener("touchend", Je), Xt.size > 0 && (Va ? (at.length > 0 && et.forEach((a2, t) => {
    const { body: e } = t;
    a2 > 0 && (e.addEventListener("contextmenu", Je), e.addEventListener("mouseleave", Ze), e.addEventListener("mousemove", Ze), e.addEventListener("touchmove", Ze, {
      passive: false
    }));
  }), window.addEventListener("mouseup", Je), window.addEventListener("touchcancel", Je), window.addEventListener("touchend", Je)) : et.forEach((a2, t) => {
    const { body: e } = t;
    a2 > 0 && (e.addEventListener("mousedown", ca), e.addEventListener("mousemove", Ze), e.addEventListener("touchmove", Ze, {
      passive: false
    }), e.addEventListener("touchstart", ca));
  }));
}
function uo(a2, t) {
  Xt.forEach((e) => {
    const { setResizeHandlerState: n } = e, l = at.includes(e);
    n(a2, l, t);
  });
}
var fs = 10;
function Zt(a2, t, e = fs) {
  a2 = Number.parseFloat(a2.toFixed(e)), t = Number.parseFloat(t.toFixed(e));
  const n = a2 - t;
  return n === 0 ? 0 : n > 0 ? 1 : -1;
}
function Me(a2, t, e) {
  return Zt(a2, t, e) === 0;
}
function Bt({
  panelConstraints: a2,
  panelIndex: t,
  size: e
}) {
  const n = a2[t];
  le(n != null);
  const { collapsedSize: l = 0, collapsible: s, maxSize: r = 100, minSize: i = 0 } = n;
  if (Zt(e, i) < 0)
    if (s) {
      const u = (l + i) / 2;
      Zt(e, u) < 0 ? e = l : e = i;
    } else
      e = i;
  return e = Math.min(r, e), e = Number.parseFloat(e.toFixed(fs)), e;
}
function pa(a2, t) {
  if (a2.length !== t.length)
    return false;
  for (let e = 0; e < a2.length; e++)
    if (a2[e] !== t[e])
      return false;
  return true;
}
function jt({
  delta: a2,
  layout: t,
  panelConstraints: e,
  pivotIndices: n,
  trigger: l
}) {
  if (Me(a2, 0))
    return t;
  const s = [...t], [r, i] = n;
  le(r != null), le(i != null);
  let u = 0;
  if (l === "keyboard") {
    {
      const p = a2 < 0 ? i : r, c = e[p];
      if (le(c), c.collapsible) {
        const f = t[p];
        le(f != null);
        const v = e[p];
        le(v);
        const { collapsedSize: y = 0, minSize: h2 = 0 } = v;
        if (Me(f, y)) {
          const x = h2 - f;
          Zt(x, Math.abs(a2)) > 0 && (a2 = a2 < 0 ? 0 - x : x);
        }
      }
    }
    {
      const p = a2 < 0 ? r : i, c = e[p];
      le(c);
      const { collapsible: f } = c;
      if (f) {
        const v = t[p];
        le(v != null);
        const y = e[p];
        le(y);
        const { collapsedSize: h2 = 0, minSize: x = 0 } = y;
        if (Me(v, x)) {
          const P = v - h2;
          Zt(P, Math.abs(a2)) > 0 && (a2 = a2 < 0 ? 0 - P : P);
        }
      }
    }
  }
  {
    const p = a2 < 0 ? 1 : -1;
    let c = a2 < 0 ? i : r, f = 0;
    for (; ; ) {
      const y = t[c];
      le(y != null);
      const x = Bt({
        panelConstraints: e,
        panelIndex: c,
        size: 100
      }) - y;
      if (f += x, c += p, c < 0 || c >= e.length)
        break;
    }
    const v = Math.min(Math.abs(a2), Math.abs(f));
    a2 = a2 < 0 ? 0 - v : v;
  }
  {
    let c = a2 < 0 ? r : i;
    for (; c >= 0 && c < e.length; ) {
      const f = Math.abs(a2) - Math.abs(u), v = t[c];
      le(v != null);
      const y = v - f, h2 = Bt({
        panelConstraints: e,
        panelIndex: c,
        size: y
      });
      if (!Me(v, h2) && (u += v - h2, s[c] = h2, u.toPrecision(3).localeCompare(Math.abs(a2).toPrecision(3), void 0, {
        numeric: true
      }) >= 0))
        break;
      a2 < 0 ? c-- : c++;
    }
  }
  if (Me(u, 0))
    return t;
  {
    const p = a2 < 0 ? i : r, c = t[p];
    le(c != null);
    const f = c + u, v = Bt({
      panelConstraints: e,
      panelIndex: p,
      size: f
    });
    if (s[p] = v, !Me(v, f)) {
      let y = f - v, x = a2 < 0 ? i : r;
      for (; x >= 0 && x < e.length; ) {
        const P = s[x];
        le(P != null);
        const $ = P + y, S = Bt({
          panelConstraints: e,
          panelIndex: x,
          size: $
        });
        if (Me(P, S) || (y -= S - P, s[x] = S), Me(y, 0))
          break;
        a2 > 0 ? x-- : x++;
      }
    }
  }
  const d = s.reduce((p, c) => c + p, 0);
  return Me(d, 100) ? s : t;
}
function vs(a2, t = document) {
  var n;
  if (!ea)
    return null;
  if (t instanceof HTMLElement && ((n = t == null ? void 0 : t.dataset) == null ? void 0 : n.panelGroupId) === a2)
    return t;
  const e = t.querySelector(
    `[data-panel-group][data-panel-group-id="${a2}"]`
  );
  return e || null;
}
function La(a2, t = document) {
  if (!ea)
    return null;
  const e = t.querySelector(`[data-panel-resize-handle-id="${a2}"]`);
  return e || null;
}
function ms(a2, t, e = document) {
  return ea ? Jt(a2, e).findIndex(
    (s) => s.getAttribute("data-panel-resize-handle-id") === t
  ) ?? null : null;
}
function Jt(a2, t = document) {
  return ea ? Array.from(
    t.querySelectorAll(
      `[data-panel-resize-handle-id][data-panel-group-id="${a2}"]`
    )
  ) : [];
}
function ap(a2, t, e, n = document) {
  var d, p;
  const l = La(t, n), s = Jt(a2, n), r = l ? s.indexOf(l) : -1, i = ((d = e[r]) == null ? void 0 : d.id) ?? null, u = ((p = e[r + 1]) == null ? void 0 : p.id) ?? null;
  return [i, u];
}
function np(a2, t, e, n, l) {
  const s = e === "horizontal", r = La(t, l);
  le(r);
  const i = r.getAttribute("data-panel-group-id");
  le(i);
  const { initialCursorPosition: u } = n, d = ss(e, a2), p = vs(i, l);
  le(p);
  const c = p.getBoundingClientRect(), f = s ? c.width : c.height;
  return (d - u) / f * 100;
}
function op(a2, t, e, n, l, s) {
  if (ns(a2)) {
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
    return n == null ? 0 : np(
      a2,
      t,
      e,
      n,
      s
    );
}
function lp({
  layout: a2,
  panelsArray: t,
  pivotIndices: e
}) {
  let n = 0, l = 100, s = 0, r = 0;
  const i = e[0];
  le(i != null), t.forEach((c, f) => {
    const { constraints: v } = c, { maxSize: y = 100, minSize: h2 = 0 } = v;
    f === i ? (n = h2, l = y) : (s += h2, r += y);
  });
  const u = Math.min(l, 100 - s), d = Math.max(n, 100 - r), p = a2[i];
  return {
    valueMax: u,
    valueMin: d,
    valueNow: p
  };
}
function sp({
  panelDataArray: a2
}) {
  const t = Array(a2.length), e = a2.map(
    (s) => s.constraints
  );
  let n = 0, l = 100;
  for (let s = 0; s < a2.length; s++) {
    const r = e[s];
    le(r);
    const { defaultSize: i } = r;
    i != null && (n++, t[s] = i, l -= i);
  }
  for (let s = 0; s < a2.length; s++) {
    const r = e[s];
    le(r);
    const { defaultSize: i } = r;
    if (i != null)
      continue;
    const u = a2.length - n, d = l / u;
    n++, t[s] = d, l -= d;
  }
  return t;
}
function Wt(a2, t, e) {
  t.forEach((n, l) => {
    const s = a2[l];
    le(s);
    const { callbacks: r, constraints: i, id: u } = s, { collapsedSize: d = 0, collapsible: p } = i, c = e[u];
    if (c == null || n !== c) {
      e[u] = n;
      const { onCollapse: f, onExpand: v, onResize: y } = r;
      y && y(n, c), p && (f || v) && (v && (c == null || c === d) && n !== d && v(), f && (c == null || c !== d) && n === d && f());
    }
  });
}
function rp(a2, t = 10) {
  let e = null;
  return (...l) => {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      a2(...l);
    }, t);
  };
}
function hs(a2, t, e) {
  const n = ms(
    a2,
    t,
    e
  );
  return n != null ? [n, n + 1] : [-1, -1];
}
function ip({
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
  if (!Me(n, 100)) {
    console.warn(
      `WARNING: Invalid layout total size: ${e.map((s) => `${s}%`).join(", ")}. Layout normalization will be applied.`
    );
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      le(r != null);
      const i = 100 / n * r;
      e[s] = i;
    }
  }
  let l = 0;
  for (let s = 0; s < t.length; s++) {
    const r = e[s];
    le(r != null);
    const i = Bt({
      panelConstraints: t,
      panelIndex: s,
      size: r
    });
    r !== i && (l += r - i, e[s] = i);
  }
  if (!Me(l, 0))
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      le(r != null);
      const i = r + l, u = Bt({
        panelConstraints: t,
        panelIndex: s,
        size: i
      });
      if (r !== u && (l -= u - r, e[s] = u, Me(l, 0)))
        break;
    }
  return e;
}
function Eo(a2) {
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
function ys(a2) {
  return `radix-vue:${a2}`;
}
function gs(a2) {
  return a2.map((t) => {
    const { constraints: e, id: n, idIsFromProps: l, order: s } = t;
    return l ? n : s ? `${s}:${JSON.stringify(e)}` : JSON.stringify(e);
  }).sort((t, e) => t.localeCompare(e)).join(",");
}
function bs(a2, t) {
  try {
    const e = ys(a2), n = t.getItem(e);
    if (n) {
      const l = JSON.parse(n);
      if (typeof l == "object" && l != null)
        return l;
    }
  } catch {
  }
  return null;
}
function up(a2, t, e) {
  const n = bs(a2, e) ?? {}, l = gs(t);
  return n[l] ?? null;
}
function dp(a2, t, e, n, l) {
  const s = ys(a2), r = gs(t), i = bs(a2, l) ?? {};
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
function cp({
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
    const u = Jt(
      t,
      i
    );
    for (let d = 0; d < n.length - 1; d++) {
      const { valueMax: p, valueMin: c, valueNow: f } = lp({
        layout: e.value,
        panelsArray: n,
        pivotIndices: [d, d + 1]
      }), v = u[d];
      if (v != null) {
        const y = n[d];
        le(y), v.setAttribute("aria-controls", y.id), v.setAttribute(
          "aria-valuemax",
          `${Math.round(p)}`
        ), v.setAttribute(
          "aria-valuemin",
          `${Math.round(c)}`
        ), v.setAttribute(
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
    le(u);
    const { panelDataArray: d } = u, p = vs(t, i);
    le(p != null, `No group found for id "${t}"`);
    const c = Jt(t, i);
    le(c);
    const f = c.map((v) => {
      const y = v.getAttribute("data-panel-resize-handle-id");
      le(y);
      const [h2, x] = ap(
        t,
        y,
        d,
        i
      );
      if (h2 == null || x == null)
        return () => {
        };
      const P = ($) => {
        if (!$.defaultPrevented)
          switch ($.key) {
            case "Enter": {
              $.preventDefault();
              const S = d.findIndex(
                (w) => w.id === h2
              );
              if (S >= 0) {
                const w = d[S];
                le(w);
                const D = e.value[S], {
                  collapsedSize: A = 0,
                  collapsible: E,
                  minSize: k = 0
                } = w.constraints;
                if (D != null && E) {
                  const V = jt({
                    delta: Me(D, A) ? k - A : A - D,
                    layout: e.value,
                    panelConstraints: d.map(
                      (O) => O.constraints
                    ),
                    pivotIndices: hs(
                      t,
                      y,
                      i
                    ),
                    trigger: "keyboard"
                  });
                  e.value !== V && s(V);
                }
              }
              break;
            }
          }
      };
      return v.addEventListener("keydown", P), () => {
        v.removeEventListener("keydown", P);
      };
    });
    r(() => {
      f.forEach((v) => v());
    });
  });
}
var pp = 100;
var Ut = {
  getItem: (a2) => (Eo(Ut), Ut.getItem(a2)),
  setItem: (a2, t) => {
    Eo(Ut), Ut.setItem(a2, t);
  }
};
var [Cs, fp] = X("PanelGroup");
var bh = defineComponent({
  __name: "SplitterGroup",
  props: {
    id: {},
    autoSaveId: { default: null },
    direction: {},
    keyboardResizeBy: { default: 10 },
    storage: { default: () => Ut },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["layout"],
  setup(a2, { emit: t }) {
    const e = a2, n = t, l = {}, s = me(e.id, "radix-vue-splitter-group"), r = Pe(), { forwardRef: i, currentElement: u } = R(), d = ref(null), p = ref([]), c = ref({}), f = ref(/* @__PURE__ */ new Map()), v = ref(0), y = computed(() => ({
      autoSaveId: e.autoSaveId,
      direction: e.direction,
      dragState: d.value,
      id: s,
      keyboardResizeBy: e.keyboardResizeBy,
      storage: e.storage
    })), h2 = ref({
      layout: p.value,
      panelDataArray: [],
      panelDataArrayChanged: false
    }), x = (L) => p.value = L;
    cp({
      eagerValuesRef: h2,
      groupId: s,
      layout: p,
      panelDataArray: h2.value.panelDataArray,
      setLayout: x,
      panelGroupElement: u
    }), watchEffect(() => {
      const { panelDataArray: L } = h2.value, { autoSaveId: Y } = e;
      if (Y) {
        if (p.value.length === 0 || p.value.length !== L.length)
          return;
        let q = l[Y];
        q || (q = rp(
          dp,
          pp
        ), l[Y] = q);
        const Z = [...L], F = new Map(
          f.value
        );
        q(
          Y,
          Z,
          F,
          p.value,
          e.storage
        );
      }
    });
    function P(L, Y) {
      const { panelDataArray: q } = h2.value, Z = z(q, L);
      return Gc({
        defaultSize: Y,
        dragState: d.value,
        layout: p.value,
        panelData: q,
        panelIndex: Z
      });
    }
    function $(L) {
      const { panelDataArray: Y } = h2.value;
      Y.push(L), Y.sort((q, Z) => {
        const F = q.order, G = Z.order;
        return F == null && G == null ? 0 : F == null ? -1 : G == null ? 1 : F - G;
      }), h2.value.panelDataArrayChanged = true;
    }
    watch(() => h2.value.panelDataArrayChanged, () => {
      if (h2.value.panelDataArrayChanged) {
        h2.value.panelDataArrayChanged = false;
        const { autoSaveId: L, storage: Y } = y.value, { layout: q, panelDataArray: Z } = h2.value;
        let F = null;
        if (L) {
          const ae = up(L, Z, Y);
          ae && (f.value = new Map(
            Object.entries(ae.expandToSizes)
          ), F = ae.layout);
        }
        F === null && (F = sp({
          panelDataArray: Z
        }));
        const G = ip({
          layout: F,
          panelConstraints: Z.map(
            (ae) => ae.constraints
          )
        });
        Zs(q, G) || (x(G), h2.value.layout = G, n("layout", G), Wt(
          Z,
          G,
          c.value
        ));
      }
    });
    function S(L) {
      return function(q) {
        q.preventDefault();
        const Z = u.value;
        if (!Z)
          return () => null;
        const { direction: F, dragState: G, id: ae, keyboardResizeBy: fe } = y.value, { layout: ve, panelDataArray: de } = h2.value, { initialLayout: xe } = G ?? {}, ue = hs(
          ae,
          L,
          Z
        );
        let se = op(
          q,
          L,
          F,
          G,
          fe,
          Z
        );
        if (se === 0)
          return;
        const Te = F === "horizontal";
        r.value === "rtl" && Te && (se = -se);
        const Ee = de.map((He) => He.constraints), re = jt({
          delta: se,
          layout: xe ?? ve,
          panelConstraints: Ee,
          pivotIndices: ue,
          trigger: ns(q) ? "keyboard" : "mouse-or-touch"
        }), Oe = !pa(ve, re);
        (os(q) || ls(q)) && v.value !== se && (v.value = se, Oe ? Qa(L, 0) : Te ? Qa(
          L,
          se < 0 ? is : us
        ) : Qa(
          L,
          se < 0 ? ds : cs
        )), Oe && (x(re), h2.value.layout = re, n("layout", re), Wt(
          de,
          re,
          c.value
        ));
      };
    }
    function w(L, Y) {
      const { layout: q, panelDataArray: Z } = h2.value, F = Z.map((xe) => xe.constraints), { panelSize: G, pivotIndices: ae } = K(
        Z,
        L,
        q
      );
      le(G != null);
      const ve = z(Z, L) === Z.length - 1 ? G - Y : Y - G, de = jt({
        delta: ve,
        layout: q,
        panelConstraints: F,
        pivotIndices: ae,
        trigger: "imperative-api"
      });
      pa(q, de) || (x(de), h2.value.layout = de, n("layout", de), Wt(
        Z,
        de,
        c.value
      ));
    }
    function D(L, Y) {
      const { layout: q, panelDataArray: Z } = h2.value, {
        collapsedSize: F = 0,
        collapsible: G
      } = Y, {
        collapsedSize: ae = 0,
        collapsible: fe,
        maxSize: ve = 100,
        minSize: de = 0
      } = L.constraints, { panelSize: xe } = K(
        Z,
        L,
        q
      );
      xe !== null && (G && fe && xe === F ? F !== ae && w(L, ae) : xe < de ? w(L, de) : xe > ve && w(L, ve));
    }
    function A(L, Y) {
      const { direction: q } = y.value, { layout: Z } = h2.value;
      if (!u.value)
        return;
      const F = La(
        L,
        u.value
      );
      le(F);
      const G = ss(
        q,
        Y
      );
      d.value = {
        dragHandleId: L,
        dragHandleRect: F.getBoundingClientRect(),
        initialCursorPosition: G,
        initialLayout: Z
      };
    }
    function E() {
      d.value = null;
    }
    function k(L) {
      const { panelDataArray: Y } = h2.value, q = z(Y, L);
      q >= 0 && (Y.splice(q, 1), delete c.value[L.id], h2.value.panelDataArrayChanged = true);
    }
    function V(L) {
      const { layout: Y, panelDataArray: q } = h2.value;
      if (L.constraints.collapsible) {
        const Z = q.map(
          (fe) => fe.constraints
        ), {
          collapsedSize: F = 0,
          panelSize: G,
          pivotIndices: ae
        } = K(q, L, Y);
        if (le(
          G != null,
          `Panel size not found for panel "${L.id}"`
        ), G !== F) {
          f.value.set(L.id, G);
          const ve = z(q, L) === q.length - 1 ? G - F : F - G, de = jt({
            delta: ve,
            layout: Y,
            panelConstraints: Z,
            pivotIndices: ae,
            trigger: "imperative-api"
          });
          pa(Y, de) || (x(de), h2.value.layout = de, n("layout", de), Wt(
            q,
            de,
            c.value
          ));
        }
      }
    }
    function O(L) {
      const { layout: Y, panelDataArray: q } = h2.value;
      if (L.constraints.collapsible) {
        const Z = q.map(
          (ve) => ve.constraints
        ), {
          collapsedSize: F = 0,
          panelSize: G,
          minSize: ae = 0,
          pivotIndices: fe
        } = K(q, L, Y);
        if (G === F) {
          const ve = f.value.get(
            L.id
          ), de = ve != null && ve >= ae ? ve : ae, ue = z(q, L) === q.length - 1 ? G - de : de - G, se = jt({
            delta: ue,
            layout: Y,
            panelConstraints: Z,
            pivotIndices: fe,
            trigger: "imperative-api"
          });
          pa(Y, se) || (x(se), h2.value.layout = se, n("layout", se), Wt(
            q,
            se,
            c.value
          ));
        }
      }
    }
    function W(L) {
      const { layout: Y, panelDataArray: q } = h2.value, { panelSize: Z } = K(q, L, Y);
      return le(
        Z != null,
        `Panel size not found for panel "${L.id}"`
      ), Z;
    }
    function j(L) {
      const { layout: Y, panelDataArray: q } = h2.value, {
        collapsedSize: Z = 0,
        collapsible: F,
        panelSize: G
      } = K(q, L, Y);
      return F === true && G === Z;
    }
    function Q(L) {
      const { layout: Y, panelDataArray: q } = h2.value, {
        collapsedSize: Z = 0,
        collapsible: F,
        panelSize: G
      } = K(q, L, Y);
      return le(
        G != null,
        `Panel size not found for panel "${L.id}"`
      ), !F || G > Z;
    }
    fp({
      direction: e.direction,
      dragState: d.value,
      groupId: s,
      reevaluatePanelConstraints: D,
      registerPanel: $,
      registerResizeHandle: S,
      resizePanel: w,
      startDragging: A,
      stopDragging: E,
      unregisterPanel: k,
      panelGroupElement: u,
      collapsePanel: V,
      expandPanel: O,
      isPanelCollapsed: j,
      isPanelExpanded: Q,
      getPanelSize: W,
      getPanelStyle: P
    });
    function z(L, Y) {
      return L.findIndex(
        (q) => q === Y || q.id === Y.id
      );
    }
    function K(L, Y, q) {
      const Z = z(L, Y), G = Z === L.length - 1 ? [Z - 1, Z] : [Z, Z + 1], ae = q[Z];
      return {
        ...Y.constraints,
        panelSize: ae,
        pivotIndices: G
      };
    }
    return (L, Y) => (openBlock(), createBlock(unref(I), {
      ref: unref(i),
      style: normalizeStyle({
        display: "flex",
        flexDirection: L.direction === "horizontal" ? "row" : "column",
        height: "100%",
        overflow: "hidden",
        width: "100%"
      }),
      "data-panel-group": "",
      "data-orientation": L.direction,
      "data-panel-group-id": unref(s)
    }, {
      default: withCtx(() => [
        renderSlot(L.$slots, "default", { layout: p.value })
      ]),
      _: 3
    }, 8, ["style", "data-orientation", "data-panel-group-id"]));
  }
});
var Ch = defineComponent({
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
    const n = a2, l = e, s = Cs();
    if (s === null)
      throw new Error(
        "SplitterPanel components must be rendered within a SplitterGroup container"
      );
    const { collapsePanel: r, expandPanel: i, getPanelSize: u, getPanelStyle: d, isPanelCollapsed: p, resizePanel: c, groupId: f, reevaluatePanelConstraints: v, registerPanel: y, unregisterPanel: h2 } = s, x = me(n.id, "radix-vue-splitter-panel"), P = computed(() => ({
      callbacks: {
        onCollapse: () => l("collapse"),
        onExpand: () => l("expand"),
        onResize: (...D) => l("resize", ...D)
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
    watch(() => P.value.constraints, (D, A) => {
      (D.collapsedSize !== A.collapsedSize || D.collapsible !== A.collapsible || D.maxSize !== A.maxSize || D.minSize !== A.minSize) && v(P.value, D);
    }, { deep: true }), onMounted(() => {
      const D = P.value;
      y(D), onUnmounted(() => {
        h2(D);
      });
    });
    const $ = computed(() => d(P.value, n.defaultSize)), S = computed(() => p(P.value)), w = computed(() => !S.value);
    return t({
      /** If panel is `collapsible`, collapse it fully. */
      collapse: () => {
        r(P.value);
      },
      /** If panel is currently collapsed, expand it to its most recent size. */
      expand: () => {
        i(P.value);
      },
      /** Gets the current size of the panel as a percentage (1 - 100). */
      getSize() {
        return u(P.value);
      },
      /** Resize panel to the specified percentage (1 - 100). */
      resize: (D) => {
        c(P.value, D);
      },
      /** Returns `true` if the panel is currently collapsed */
      isCollapsed: S,
      /** Returns `true` if the panel is currently not collapsed */
      isExpanded: w
    }), (D, A) => (openBlock(), createBlock(unref(I), {
      id: unref(x),
      style: normalizeStyle($.value),
      "data-panel": "",
      "data-panel-collapsible": D.collapsible || void 0,
      "data-panel-group-id": unref(f),
      "data-panel-id": unref(x),
      "data-panel-size": Number.parseFloat(`${$.value.flexGrow}`).toFixed(1),
      "data-state": D.collapsible ? S.value ? "collapsed" : "expanded" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(D.$slots, "default", {
          isCollapsed: S.value,
          isExpanded: w.value
        })
      ]),
      _: 3
    }, 8, ["id", "style", "data-panel-collapsible", "data-panel-group-id", "data-panel-id", "data-panel-size", "data-state"]));
  }
});
function vp({
  disabled: a2,
  handleId: t,
  resizeHandler: e,
  panelGroupElement: n
}) {
  watchEffect((l) => {
    const s = n.value;
    if (a2.value || e.value === null || s === null)
      return;
    const r = La(t, s);
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
            const p = r.getAttribute("data-panel-group-id");
            le(p);
            const c = Jt(
              p,
              s
            ), f = ms(
              p,
              t,
              s
            );
            le(f !== null);
            const v = u.shiftKey ? f > 0 ? f - 1 : c.length - 1 : f + 1 < c.length ? f + 1 : 0;
            c[v].focus();
            break;
          }
        }
    };
    r.addEventListener("keydown", i), l(() => {
      r.removeEventListener("keydown", i);
    });
  });
}
var _h = defineComponent({
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
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R(), { disabled: r } = toRefs(e), i = Cs();
    if (i === null)
      throw new Error(
        "PanelResizeHandle components must be rendered within a PanelGroup container"
      );
    const {
      direction: u,
      groupId: d,
      registerResizeHandle: p,
      startDragging: c,
      stopDragging: f,
      panelGroupElement: v
    } = i, y = me(e.id, "radix-vue-splitter-resize-handle"), h2 = ref("inactive"), x = ref(false), P = ref(null);
    return watch(r, () => {
      ea && (r.value ? P.value = null : P.value = p(y));
    }, { immediate: true }), watchEffect(($) => {
      var D, A;
      if (r.value || P.value === null)
        return;
      const S = s.value;
      if (!S)
        return;
      le(S);
      const w = (E, k, V) => {
        var O;
        if (k)
          switch (E) {
            case "down": {
              h2.value = "drag", c(y, V), n("dragging", true);
              break;
            }
            case "move": {
              h2.value !== "drag" && (h2.value = "hover"), (O = P.value) == null || O.call(P, V);
              break;
            }
            case "up": {
              h2.value = "hover", f(), n("dragging", false);
              break;
            }
          }
        else
          h2.value = "inactive";
      };
      $(tp(
        y,
        S,
        u,
        {
          // Coarse inputs (e.g. finger/touch)
          coarse: ((D = e.hitAreaMargins) == null ? void 0 : D.coarse) ?? 15,
          // Fine inputs (e.g. mouse)
          fine: ((A = e.hitAreaMargins) == null ? void 0 : A.fine) ?? 5
        },
        w
      ));
    }), vp({
      disabled: r,
      resizeHandler: P,
      handleId: y,
      panelGroupElement: v
    }), ($, S) => (openBlock(), createBlock(unref(I), {
      id: unref(y),
      ref: unref(l),
      style: {
        touchAction: "none",
        userSelect: "none"
      },
      role: "separator",
      "data-resize-handle": "",
      tabindex: $.tabindex,
      "data-state": h2.value,
      "data-disabled": unref(r) ? "" : void 0,
      "data-orientation": unref(u),
      "data-panel-group-id": unref(d),
      "data-resize-handle-active": h2.value === "drag" ? "pointer" : x.value ? "keyboard" : void 0,
      "data-resize-handle-state": h2.value,
      "data-panel-resize-handle-enabled": !unref(r),
      "data-panel-resize-handle-id": unref(y),
      onBlur: S[0] || (S[0] = (w) => x.value = false),
      onFocus: S[1] || (S[1] = (w) => x.value = false)
    }, {
      default: withCtx(() => [
        renderSlot($.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "tabindex", "data-state", "data-disabled", "data-orientation", "data-panel-group-id", "data-resize-handle-active", "data-resize-handle-state", "data-panel-resize-handle-enabled", "data-panel-resize-handle-id"]));
  }
});
var mp = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"];
var [hp, yp] = X("SwitchRoot");
var wh = defineComponent({
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
    const e = a2, n = t, { disabled: l } = toRefs(e), s = ee(e, "checked", n, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    });
    function r() {
      l.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: u } = R(), d = yt(u), p = computed(() => {
      var c;
      return e.id && u.value ? (c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return yp({
      checked: s,
      toggleCheck: r,
      disabled: l
    }), (c, f) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(I), mergeProps(c.$attrs, {
        id: c.id,
        ref: unref(i),
        role: "switch",
        type: c.as === "button" ? "button" : void 0,
        value: c.value,
        "aria-label": c.$attrs["aria-label"] || p.value,
        "aria-checked": unref(s),
        "aria-required": c.required,
        "data-state": unref(s) ? "checked" : "unchecked",
        "data-disabled": unref(l) ? "" : void 0,
        "as-child": c.asChild,
        as: c.as,
        disabled: unref(l),
        onClick: r,
        onKeydown: withKeys(withModifiers(r, ["prevent"]), ["enter"])
      }), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      unref(d) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "checkbox",
        name: c.name,
        tabindex: "-1",
        "aria-hidden": "",
        disabled: unref(l),
        required: c.required,
        value: c.value,
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
      }, null, 12, mp)) : createCommentVNode("", true)
    ], 64));
  }
});
var xh = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = hp();
    return R(), (e, n) => {
      var l;
      return openBlock(), createBlock(unref(I), {
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
var [Na, gp] = X("TabsRoot");
var Ph = defineComponent({
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
    const e = a2, n = t, { orientation: l, dir: s } = toRefs(e), r = Pe(s);
    R();
    const i = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), u = ref();
    return gp({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: l,
      dir: r,
      activationMode: e.activationMode,
      baseId: me(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, p) => (openBlock(), createBlock(unref(I), {
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
var Sh = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { loop: e } = toRefs(t), { forwardRef: n, currentElement: l } = R(), s = Na();
    return s.tabsList = l, (r, i) => (openBlock(), createBlock(unref(Lt), {
      "as-child": "",
      orientation: unref(s).orientation.value,
      dir: unref(s).dir.value,
      loop: unref(e)
    }, {
      default: withCtx(() => [
        createVNode(unref(I), {
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
function _s(a2, t) {
  return `${a2}-trigger-${t}`;
}
function ws(a2, t) {
  return `${a2}-content-${t}`;
}
var Dh = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R(), n = Na(), l = computed(() => _s(n.baseId, t.value)), s = computed(() => ws(n.baseId, t.value)), r = computed(() => t.value === n.modelValue.value), i = ref(r.value);
    return onMounted(() => {
      requestAnimationFrame(() => {
        i.value = false;
      });
    }), (u, d) => (openBlock(), createBlock(unref(we), {
      present: r.value,
      "force-mount": ""
    }, {
      default: withCtx(({ present: p }) => [
        createVNode(unref(I), {
          id: s.value,
          ref: unref(e),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": unref(n).orientation.value,
          "aria-labelledby": l.value,
          hidden: !p.value,
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
var $h = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R(), n = Na(), l = computed(() => _s(n.baseId, t.value)), s = computed(() => ws(n.baseId, t.value)), r = computed(() => t.value === n.modelValue.value);
    return (i, u) => (openBlock(), createBlock(unref(Nt), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: withCtx(() => [
        createVNode(unref(I), {
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
var Eh = defineComponent({
  __name: "TabsIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Na();
    R();
    const n = ref(), l = ref({
      size: null,
      position: null
    });
    watch(() => e.modelValue.value, async (r) => {
      await nextTick(), s();
    }, { immediate: true }), Ke([e.tabsList, n], s);
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
    return (r, i) => typeof l.value.size == "number" ? (openBlock(), createBlock(unref(I), mergeProps({ key: 0 }, t, {
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
var [za, bp] = X("TagsInputRoot");
var Bh = defineComponent({
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
    const e = a2, n = t, { addOnPaste: l, disabled: s, delimiter: r, max: i, id: u, dir: d, addOnBlur: p, addOnTab: c } = toRefs(e), f = Pe(d), v = ee(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: true,
      deep: true
    }), { forwardRef: y, currentElement: h2 } = R(), { focused: x } = br(h2), P = yt(h2), { getItems: $ } = In(), S = ref(), w = ref(false);
    return bp({
      modelValue: v,
      onAddValue: (D) => {
        if (v.value.length >= i.value && i.value)
          return n("invalid", D), false;
        if (e.duplicate)
          return v.value.push(D), true;
        if (v.value.includes(D))
          w.value = true;
        else
          return v.value.push(D), true;
        return n("invalid", D), false;
      },
      onRemoveValue: (D) => {
        D !== -1 && v.value.splice(D, 1);
      },
      onInputKeydown: (D) => {
        const A = D.target, E = $().map((V) => V.ref).filter((V) => V.dataset.disabled !== "");
        if (!E.length)
          return;
        const k = E.at(-1);
        switch (D.key) {
          case "Delete":
          case "Backspace": {
            if (A.selectionStart !== 0 || A.selectionEnd !== 0)
              break;
            if (S.value) {
              const V = E.findIndex((O) => O === S.value);
              v.value.splice(V, 1), S.value = S.value === k ? E.at(V - 1) : E.at(V + 1), D.preventDefault();
            } else
              D.key === "Backspace" && (S.value = k, D.preventDefault());
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const V = D.key === "ArrowRight" && f.value === "ltr" || D.key === "ArrowLeft" && f.value === "rtl", O = !V;
            if (A.selectionStart !== 0 || A.selectionEnd !== 0)
              break;
            if (O && !S.value)
              S.value = k, D.preventDefault();
            else if (V && k && S.value === k)
              S.value = void 0, D.preventDefault();
            else if (S.value) {
              const W = It(D, S.value, void 0, {
                itemsArray: E,
                loop: false,
                dir: f.value
              });
              W && (S.value = W), D.preventDefault();
            }
            break;
          }
          case "ArrowUp":
          case "ArrowDown": {
            S.value && D.preventDefault();
            break;
          }
          default:
            S.value = void 0;
        }
      },
      selectedElement: S,
      isInvalidInput: w,
      addOnPaste: l,
      addOnBlur: p,
      addOnTab: c,
      dir: f,
      disabled: s,
      delimiter: r,
      max: i,
      id: u
    }), (D, A) => (openBlock(), createBlock(unref(kn), null, {
      default: withCtx(() => [
        createVNode(unref(I), {
          ref: unref(y),
          dir: unref(f),
          as: D.as,
          "as-child": D.asChild,
          "data-invalid": w.value ? "" : void 0,
          "data-disabled": unref(s) ? "" : void 0,
          "data-focused": unref(x) ? "" : void 0
        }, {
          default: withCtx(() => [
            renderSlot(D.$slots, "default", { modelValue: unref(v) }),
            unref(P) && D.name ? (openBlock(), createBlock(unref(hl), {
              key: 0,
              name: D.name,
              value: unref(v),
              required: D.required,
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
var Rh = defineComponent({
  __name: "TagsInputInput",
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a2) {
    const t = a2, e = za(), { forwardRef: n, currentElement: l } = R();
    function s(p) {
      if (!e.addOnBlur.value)
        return;
      const c = p.target;
      if (!c.value)
        return;
      e.onAddValue(c.value) && (c.value = "");
    }
    function r(p) {
      e.addOnTab.value && i(p);
    }
    async function i(p) {
      if (await nextTick(), p.defaultPrevented)
        return;
      const c = p.target;
      if (!c.value)
        return;
      e.onAddValue(c.value) && (c.value = ""), p.preventDefault();
    }
    function u(p) {
      e.isInvalidInput.value = false;
      const c = e.delimiter.value;
      if (c === p.data) {
        const f = p.target;
        f.value = f.value.replaceAll(c, ""), e.onAddValue(f.value) && (f.value = "");
      }
    }
    function d(p) {
      if (e.addOnPaste.value) {
        p.preventDefault();
        const c = p.clipboardData;
        if (!c)
          return;
        const f = c.getData("text");
        e.delimiter.value ? f.split(e.delimiter.value).forEach((y) => {
          e.onAddValue(y);
        }) : e.onAddValue(f);
      }
    }
    return onMounted(() => {
      const p = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      p && setTimeout(() => {
        t.autoFocus && (p == null || p.focus());
      }, 1);
    }), (p, c) => {
      var f;
      return openBlock(), createBlock(unref(I), {
        id: (f = unref(e).id) == null ? void 0 : f.value,
        ref: unref(n),
        type: "text",
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        as: p.as,
        "as-child": p.asChild,
        maxlength: p.maxLength,
        placeholder: p.placeholder,
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
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "as", "as-child", "maxlength", "placeholder", "disabled", "data-invalid", "onKeydown"]);
    };
  }
});
var [xs, Cp] = X("TagsInputItem");
var Ah = defineComponent({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { value: e } = toRefs(t), n = za(), { forwardRef: l, currentElement: s } = R(), r = computed(() => n.selectedElement.value === s.value), i = computed(() => t.disabled || n.disabled.value), u = Cp({
      value: e,
      isSelected: r,
      disabled: i,
      textId: ""
    });
    return (d, p) => (openBlock(), createBlock(unref(Mn), null, {
      default: withCtx(() => [
        createVNode(unref(I), {
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
var Th = defineComponent({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a2) {
    const t = a2, e = xs();
    return R(), e.textId || (e.textId = me(void 0, "radix-vue-tags-input-item-text")), (n, l) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var Oh = defineComponent({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = za(), n = xs(), l = computed(() => {
      var r;
      return ((r = n.disabled) == null ? void 0 : r.value) || e.disabled.value;
    });
    function s() {
      if (l.value)
        return;
      const r = e.modelValue.value.findIndex((i) => i === n.value.value);
      e.onRemoveValue(r);
    }
    return (r, i) => (openBlock(), createBlock(unref(I), mergeProps({ tabindex: "-1" }, t, {
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
var Ih = defineComponent({
  __name: "TagsInputClear",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2;
    R();
    const e = za();
    function n() {
      e.disabled.value || (e.modelValue.value = []);
    }
    return (l, s) => (openBlock(), createBlock(unref(I), mergeProps(t, {
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
var [Ka, _p] = X("ToastProvider");
var kh = defineComponent({
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
      const p = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(p);
    }
    return _p({
      label: e,
      duration: n,
      swipeDirection: l,
      swipeThreshold: s,
      toastCount: i,
      viewport: r,
      onViewportChange(p) {
        r.value = p;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (p, c) => renderSlot(p.$slots, "default");
  }
});
var wp = "toast.swipeStart";
var xp = "toast.swipeMove";
var Pp = "toast.swipeCancel";
var Sp = "toast.swipeEnd";
var un = "toast.viewportPause";
var dn = "toast.viewportResume";
function fa(a2, t, e) {
  const n = e.originalEvent.currentTarget, l = new CustomEvent(a2, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && n.addEventListener(a2, t, { once: true }), n.dispatchEvent(l);
}
function Bo(a2, t, e = 0) {
  const n = Math.abs(a2.x), l = Math.abs(a2.y), s = n > l;
  return t === "left" || t === "right" ? s && n > e : !s && l > e;
}
function Dp(a2) {
  return a2.nodeType === a2.ELEMENT_NODE;
}
function Ps(a2) {
  const t = [];
  return Array.from(a2.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Dp(n)) {
      const l = n.ariaHidden || n.hidden || n.style.display === "none", s = n.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (s) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...Ps(n));
    }
  }), t;
}
var $p = defineComponent({
  __name: "ToastAnnounce",
  setup(a2) {
    const t = Ka(), e = pr(1e3), n = ref(false);
    return hr(() => {
      n.value = true;
    }), (l, s) => unref(e) || n.value ? (openBlock(), createBlock(unref(Ft), { key: 0 }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(unref(t).label.value) + " ", 1),
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    })) : createCommentVNode("", true);
  }
});
var [Ep, Bp] = X("ToastRoot");
var Rp = defineComponent({
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
    const e = a2, n = t, { forwardRef: l, currentElement: s } = R(), r = Ka(), i = ref(null), u = ref(null), d = computed(() => e.duration || r.duration.value), p = ref(0), c = ref(d.value), f = ref(0);
    function v(x) {
      !x || x === Number.POSITIVE_INFINITY || (window.clearTimeout(f.value), p.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(y, x));
    }
    function y() {
      var P, $;
      ((P = s.value) == null ? void 0 : P.contains(document.activeElement)) && (($ = r.viewport.value) == null || $.focus()), n("close");
    }
    const h2 = computed(() => s.value ? Ps(s.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const x = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(x);
    }
    return watchEffect((x) => {
      const P = r.viewport.value;
      if (P) {
        const $ = () => {
          v(c.value), n("resume");
        }, S = () => {
          const w = (/* @__PURE__ */ new Date()).getTime() - p.value;
          c.value = c.value - w, window.clearTimeout(f.value), n("pause");
        };
        return P.addEventListener(un, S), P.addEventListener(dn, $), () => {
          P.removeEventListener(un, S), P.removeEventListener(dn, $);
        };
      }
    }), watchEffect(() => {
      e.open && !r.isClosePausedRef.value && v(d.value);
    }), bn("Escape", (x) => {
      n("escapeKeyDown", x), x.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = true, y());
    }), onMounted(() => {
      r.onToastAdd();
    }), onUnmounted(() => {
      r.onToastRemove();
    }), Bp({ onClose: y }), (x, P) => (openBlock(), createElementBlock(Fragment, null, [
      h2.value ? (openBlock(), createBlock($p, {
        key: 0,
        role: "status",
        "aria-live": x.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(h2.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : createCommentVNode("", true),
      (openBlock(), createBlock(Teleport, {
        to: unref(r).viewport.value
      }, [
        createVNode(unref(I), mergeProps({
          ref: unref(l),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, x.$attrs, {
          as: x.as,
          "as-child": x.asChild,
          "data-state": x.open ? "open" : "closed",
          "data-swipe-direction": unref(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: P[0] || (P[0] = withModifiers(($) => {
            i.value = { x: $.clientX, y: $.clientY };
          }, ["left"])),
          onPointermove: P[1] || (P[1] = ($) => {
            if (!i.value)
              return;
            const S = $.clientX - i.value.x, w = $.clientY - i.value.y, D = !!u.value, A = ["left", "right"].includes(unref(r).swipeDirection.value), E = ["left", "up"].includes(unref(r).swipeDirection.value) ? Math.min : Math.max, k = A ? E(0, S) : 0, V = A ? 0 : E(0, w), O = $.pointerType === "touch" ? 10 : 2, W = { x: k, y: V }, j = { originalEvent: $, delta: W };
            D ? (u.value = W, unref(fa)(unref(xp), (Q) => n("swipeMove", Q), j)) : unref(Bo)(W, unref(r).swipeDirection.value, O) ? (u.value = W, unref(fa)(unref(wp), (Q) => n("swipeStart", Q), j), $.target.setPointerCapture($.pointerId)) : (Math.abs(S) > O || Math.abs(w) > O) && (i.value = null);
          }),
          onPointerup: P[2] || (P[2] = ($) => {
            const S = u.value, w = $.target;
            if (w.hasPointerCapture($.pointerId) && w.releasePointerCapture($.pointerId), u.value = null, i.value = null, S) {
              const D = $.currentTarget, A = { originalEvent: $, delta: S };
              unref(Bo)(S, unref(r).swipeDirection.value, unref(r).swipeThreshold.value) ? unref(fa)(unref(Sp), (E) => n("swipeEnd", E), A) : unref(fa)(unref(Pp), (E) => n("swipeCancel", E), A), D == null || D.addEventListener("click", (E) => E.preventDefault(), {
                once: true
              });
            }
          })
        }), {
          default: withCtx(() => [
            renderSlot(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"]))
    ], 64));
  }
});
var Mh = defineComponent({
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
    const e = a2, n = t, { forwardRef: l } = R(), s = ee(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (r, i) => (openBlock(), createBlock(unref(we), {
      present: r.forceMount || unref(s)
    }, {
      default: withCtx(() => [
        createVNode(Rp, mergeProps({
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
            const { x: d, y: p } = u.detail.delta, c = u.currentTarget;
            c.setAttribute("data-swipe", "move"), c.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), c.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: p } = u.detail.delta, c = u.currentTarget;
            c.setAttribute("data-swipe", "end"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), c.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), s.value = false;
          })
        }), {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Ss = defineComponent({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    return (t, e) => (openBlock(), createBlock(unref(I), {
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
var Ap = defineComponent({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Ep(), { forwardRef: n } = R();
    return (l, s) => (openBlock(), createBlock(Ss, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(I), mergeProps(t, {
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
var Vh = defineComponent({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    if (!a2.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = R();
    return (n, l) => n.altText ? (openBlock(), createBlock(Ss, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: withCtx(() => [
        createVNode(Ap, {
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
var Ro = defineComponent({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(a2, { emit: t }) {
    const e = t, n = Ka();
    return (l, s) => (openBlock(), createBlock(unref(Ft), {
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
var Fh = defineComponent({
  inheritAttrs: false,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(a2) {
    const t = a2, { hotkey: e, label: n } = toRefs(t), { forwardRef: l, currentElement: s } = R(), { createCollection: r } = Ae(), i = r(s), u = Ka(), d = computed(() => u.toastCount.value > 0), p = ref(), c = ref(), f = computed(() => e.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    bn(e.value, () => {
      s.value.focus();
    }), onMounted(() => {
      u.onViewportChange(s.value);
    }), watchEffect((y) => {
      const h2 = s.value;
      if (d.value && h2) {
        const x = () => {
          if (!u.isClosePausedRef.value) {
            const D = new CustomEvent(un);
            h2.dispatchEvent(D), u.isClosePausedRef.value = true;
          }
        }, P = () => {
          if (u.isClosePausedRef.value) {
            const D = new CustomEvent(dn);
            h2.dispatchEvent(D), u.isClosePausedRef.value = false;
          }
        }, $ = (D) => {
          !h2.contains(D.relatedTarget) && P();
        }, S = () => {
          h2.contains(document.activeElement) || P();
        }, w = (D) => {
          var k, V, O;
          const A = D.altKey || D.ctrlKey || D.metaKey;
          if (D.key === "Tab" && !A) {
            const W = document.activeElement, j = D.shiftKey;
            if (D.target === h2 && j) {
              (k = p.value) == null || k.focus();
              return;
            }
            const K = v({ tabbingDirection: j ? "backwards" : "forwards" }), L = K.findIndex((Y) => Y === W);
            va(K.slice(L + 1)) ? D.preventDefault() : j ? (V = p.value) == null || V.focus() : (O = c.value) == null || O.focus();
          }
        };
        h2.addEventListener("focusin", x), h2.addEventListener("focusout", $), h2.addEventListener("pointermove", x), h2.addEventListener("pointerleave", S), h2.addEventListener("keydown", w), window.addEventListener("blur", x), window.addEventListener("focus", P), y(() => {
          h2.removeEventListener("focusin", x), h2.removeEventListener("focusout", $), h2.removeEventListener("pointermove", x), h2.removeEventListener("pointerleave", S), h2.removeEventListener("keydown", w), window.removeEventListener("blur", x), window.removeEventListener("focus", P);
        });
      }
    });
    function v({ tabbingDirection: y }) {
      const x = i.value.map((P) => {
        const $ = [P, ...Rn(P)];
        return y === "forwards" ? $ : $.reverse();
      });
      return (y === "forwards" ? x.reverse() : x).flat();
    }
    return (y, h2) => (openBlock(), createBlock(unref(vi), {
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
        d.value ? (openBlock(), createBlock(Ro, {
          key: 0,
          ref: (x) => {
            p.value = unref(Re)(x);
          },
          onFocusFromOutsideViewport: h2[0] || (h2[0] = () => {
            const x = v({
              tabbingDirection: "forwards"
            });
            unref(va)(x);
          })
        }, null, 512)) : createCommentVNode("", true),
        createVNode(unref(I), mergeProps({
          ref: unref(l),
          tabindex: "-1",
          as: y.as,
          "as-child": y.asChild
        }, y.$attrs), {
          default: withCtx(() => [
            renderSlot(y.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (openBlock(), createBlock(Ro, {
          key: 1,
          ref: (x) => {
            c.value = unref(Re)(x);
          },
          onFocusFromOutsideViewport: h2[1] || (h2[1] = () => {
            const x = v({
              tabbingDirection: "backwards"
            });
            unref(va)(x);
          })
        }, null, 512)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
});
var Lh = defineComponent({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Nh = defineComponent({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(I), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Tp = defineComponent({
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
    R();
    const l = ee(e, "pressed", n, {
      defaultValue: e.defaultValue,
      passive: e.pressed === void 0
    });
    function s() {
      l.value = !l.value;
    }
    const r = computed(() => l.value ? "on" : "off");
    return (i, u) => (openBlock(), createBlock(unref(I), {
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
var [Op, Ip] = X("ToggleGroupRoot");
var kp = defineComponent({
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
    const e = a2, n = t, { loop: l, rovingFocus: s, disabled: r, dir: i } = toRefs(e), u = Pe(i), { forwardRef: d } = R(), { modelValue: p, changeModelValue: c, isSingle: f } = sl(e, n);
    return Ip({
      isSingle: f,
      modelValue: p,
      changeModelValue: c,
      dir: u,
      orientation: e.orientation,
      loop: l,
      rovingFocus: s,
      disabled: r
    }), (v, y) => (openBlock(), createBlock(resolveDynamicComponent(unref(s) ? unref(Lt) : unref(I)), {
      "as-child": "",
      orientation: unref(s) ? v.orientation : void 0,
      dir: unref(u),
      loop: unref(s) ? unref(l) : void 0
    }, {
      default: withCtx(() => [
        createVNode(unref(I), {
          ref: unref(d),
          role: "group",
          "as-child": v.asChild,
          as: v.as
        }, {
          default: withCtx(() => [
            renderSlot(v.$slots, "default", { modelValue: unref(p) })
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var Mp = defineComponent({
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
    const t = a2, e = Op(), n = computed(() => {
      var i;
      return ((i = e.disabled) == null ? void 0 : i.value) || t.disabled;
    }), l = computed(() => {
      var i;
      return (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), s = computed(() => {
      var i;
      return e.isSingle.value ? e.modelValue.value === t.value : (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), { forwardRef: r } = R();
    return (i, u) => (openBlock(), createBlock(resolveDynamicComponent(unref(e).rovingFocus.value ? unref(Nt) : unref(I)), {
      "as-child": "",
      focusable: !n.value,
      active: l.value
    }, {
      default: withCtx(() => [
        createVNode(unref(Tp), mergeProps(t, {
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
var [Ds, Vp] = X("ToolbarRoot");
var zh = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, { orientation: e, dir: n } = toRefs(t), l = Pe(n), { forwardRef: s } = R();
    return Vp({ orientation: e, dir: l }), (r, i) => (openBlock(), createBlock(unref(Lt), {
      "as-child": "",
      orientation: unref(e),
      dir: unref(l),
      loop: r.loop
    }, {
      default: withCtx(() => [
        createVNode(unref(I), {
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
var Fp = defineComponent({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R();
    return (n, l) => (openBlock(), createBlock(unref(Nt), {
      "as-child": "",
      focusable: !n.disabled
    }, {
      default: withCtx(() => [
        createVNode(unref(I), mergeProps({
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
var Kh = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a2) {
    const t = a2, { forwardRef: e } = R();
    return (n, l) => (openBlock(), createBlock(unref(Nt), {
      "as-child": "",
      focusable: ""
    }, {
      default: withCtx(() => [
        createVNode(unref(I), mergeProps(t, {
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
var Hh = defineComponent({
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
    const e = a2, n = t, l = Ds(), s = $e(n);
    return R(), (r, i) => (openBlock(), createBlock(unref(kp), mergeProps({ ...e, ...unref(s) }, {
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
var Wh = defineComponent({
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
    const t = a2, { forwardRef: e } = R();
    return (n, l) => (openBlock(), createBlock(Fp, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(Mp), mergeProps(t, { ref: unref(e) }), {
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
var jh = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t = a2, e = Ds();
    return R(), (n, l) => (openBlock(), createBlock(ql, {
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
var $s = "tooltip.open";
function Lp(a2, t) {
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
function Np(a2, t, e = 5) {
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
function zp(a2) {
  const { top: t, right: e, bottom: n, left: l } = a2;
  return [
    { x: l, y: t },
    { x: e, y: t },
    { x: e, y: n },
    { x: l, y: n }
  ];
}
function Kp(a2, t) {
  const { x: e, y: n } = a2;
  let l = false;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, p = t[r].y;
    u > n != p > n && e < (d - i) * (n - u) / (p - u) + i && (l = !l);
  }
  return l;
}
function Hp(a2) {
  const t = a2.slice();
  return t.sort((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0), Wp(t);
}
function Wp(a2) {
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
var [co, jp] = X("TooltipProvider");
var Uh = defineComponent({
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: false },
    disableClosingTrigger: { type: Boolean }
  },
  setup(a2) {
    const t = a2, { delayDuration: e, skipDelayDuration: n, disableHoverableContent: l, disableClosingTrigger: s } = toRefs(t);
    R();
    const r = ref(true), i = xa(false, 300), { start: u, stop: d } = gn(() => {
      r.value = true;
    }, n, { immediate: false });
    return jp({
      isOpenDelayed: r,
      delayDuration: e,
      onOpen() {
        d(), r.value = false;
      },
      onClose() {
        u();
      },
      isPointerInTransitRef: i,
      onPointerInTransitChange(p) {
        i.value = p;
      },
      disableHoverableContent: l,
      disableClosingTrigger: s
    }), (p, c) => renderSlot(p.$slots, "default");
  }
});
var [Ha, Up] = X("TooltipRoot");
var Gh = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a2, { emit: t }) {
    const e = a2, n = t;
    R();
    const l = co(), s = computed(() => e.disableHoverableContent ?? l.disableHoverableContent.value), r = computed(() => e.disableClosingTrigger ?? l.disableClosingTrigger.value), i = computed(() => e.delayDuration ?? l.delayDuration.value), u = ee(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    watch(u, (P) => {
      l.onClose && (P ? (l.onOpen(), document.dispatchEvent(new CustomEvent($s))) : l.onClose());
    });
    const d = ref(false), p = ref(), c = computed(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: f, stop: v } = gn(() => {
      d.value = true, u.value = true;
    }, i, { immediate: false });
    function y() {
      v(), d.value = false, u.value = true;
    }
    function h2() {
      v(), u.value = false;
    }
    function x() {
      f();
    }
    return Up({
      contentId: "",
      open: u,
      stateAttribute: c,
      trigger: p,
      onTriggerChange(P) {
        p.value = P;
      },
      onTriggerEnter() {
        l.isOpenDelayed.value ? x() : y();
      },
      onTriggerLeave() {
        s.value ? h2() : v();
      },
      onOpen: y,
      onClose: h2,
      disableHoverableContent: s,
      disableClosingTrigger: r
    }), (P, $) => (openBlock(), createBlock(unref(Ct), null, {
      default: withCtx(() => [
        renderSlot(P.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var qh = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t = a2, e = Ha(), n = co();
    e.contentId || (e.contentId = me(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: l, currentElement: s } = R(), r = ref(false), i = ref(false);
    function u() {
      r.value = false;
    }
    function d() {
      r.value = true, document.addEventListener("pointerup", u, { once: true });
    }
    return onMounted(() => {
      e.onTriggerChange(s.value);
    }), (p, c) => (openBlock(), createBlock(unref(_t), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(I), {
          ref: unref(l),
          "aria-describedby": unref(e).open.value ? unref(e).contentId : void 0,
          "data-state": unref(e).stateAttribute.value,
          as: p.as,
          "as-child": t.asChild,
          onPointermove: c[0] || (c[0] = (f) => {
            f.pointerType !== "touch" && !i.value && !unref(n).isPointerInTransitRef.value && (unref(e).onTriggerEnter(), i.value = true);
          }),
          onPointerleave: c[1] || (c[1] = (f) => {
            unref(e).onTriggerLeave(), i.value = false;
          }),
          onPointerdown: d,
          onFocus: c[2] || (c[2] = () => {
            r.value || unref(e).onOpen();
          }),
          onBlur: c[3] || (c[3] = (f) => unref(e).onClose()),
          onClick: c[4] || (c[4] = () => {
            unref(e).disableClosingTrigger.value || unref(e).onClose();
          })
        }, {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
});
var Es = defineComponent({
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
    const e = a2, n = t, l = Ha(), { forwardRef: s } = R(), r = useSlots(), i = computed(() => {
      var p;
      return (p = r.default) == null ? void 0 : p.call(r);
    }), u = computed(() => {
      var f;
      if (e.ariaLabel)
        return e.ariaLabel;
      let p = "";
      function c(v) {
        typeof v.children == "string" ? p += v.children : Array.isArray(v.children) && v.children.forEach((y) => c(y));
      }
      return (f = i.value) == null || f.forEach((v) => c(v)), p;
    }), d = computed(() => {
      const { ariaLabel: p, ...c } = e;
      return c;
    });
    return onMounted(() => {
      tt(window, "scroll", (p) => {
        const c = p.target;
        c != null && c.contains(l.trigger.value) && l.onClose();
      }), tt(window, $s, l.onClose);
    }), (p, c) => (openBlock(), createBlock(unref(st), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: c[0] || (c[0] = (f) => n("escapeKeyDown", f)),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        var v;
        unref(l).disableClosingTrigger.value && ((v = unref(l).trigger.value) != null && v.contains(f.target)) && f.preventDefault(), n("pointerDownOutside", f);
      }),
      onFocusOutside: c[2] || (c[2] = withModifiers(() => {
      }, ["prevent"])),
      onDismiss: c[3] || (c[3] = (f) => unref(l).onClose())
    }, {
      default: withCtx(() => [
        createVNode(unref(vt), mergeProps({
          ref: unref(s),
          "data-state": unref(l).stateAttribute.value
        }, { ...p.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default"),
            createVNode(unref(Ft), {
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
var Gp = defineComponent({
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
    const e = gt(a2), { forwardRef: n, currentElement: l } = R(), { trigger: s, onClose: r } = Ha(), i = co(), u = ref(null);
    function d() {
      u.value = null, i.onPointerInTransitChange(false);
    }
    function p(c, f) {
      const v = c.currentTarget, y = { x: c.clientX, y: c.clientY }, h2 = Lp(y, v.getBoundingClientRect()), x = Np(y, h2), P = zp(f.getBoundingClientRect()), $ = Hp([...x, ...P]);
      u.value = $, i.onPointerInTransitChange(true);
    }
    return watchEffect((c) => {
      if (s.value && l.value) {
        const f = (y) => p(y, l.value), v = (y) => p(y, s.value);
        s.value.addEventListener("pointerleave", f), l.value.addEventListener("pointerleave", v), c(() => {
          var y, h2;
          (y = s.value) == null || y.removeEventListener("pointerleave", f), (h2 = l.value) == null || h2.removeEventListener("pointerleave", v);
        });
      }
    }), watchEffect((c) => {
      if (u.value) {
        const f = (v) => {
          var $, S;
          if (!u.value)
            return;
          const y = v.target, h2 = { x: v.clientX, y: v.clientY }, x = (($ = s.value) == null ? void 0 : $.contains(y)) || ((S = l.value) == null ? void 0 : S.contains(y)), P = !Kp(h2, u.value);
          x ? d() : P && (d(), r());
        };
        document.addEventListener("pointermove", f), c(() => document.removeEventListener("pointermove", f));
      }
    }), (c, f) => (openBlock(), createBlock(Es, mergeProps({ ref: unref(n) }, unref(e)), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Yh = defineComponent({
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
    const e = a2, n = t, l = Ha(), s = Ce(e, n), { forwardRef: r } = R();
    return (i, u) => unref(l).open.value ? (openBlock(), createBlock(resolveDynamicComponent(unref(l).disableHoverableContent.value ? Es : Gp), mergeProps({
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
var Xh = defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a2) {
    const t = a2;
    return R(), (e, n) => (openBlock(), createBlock(unref(Vt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zh = defineComponent({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a2) {
    const t = a2;
    return (e, n) => (openBlock(), createBlock(unref(lt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  tf as AccordionContent,
  af as AccordionHeader,
  ef as AccordionItem,
  Qp as AccordionRoot,
  nf as AccordionTrigger,
  vf as AlertDialogAction,
  cf as AlertDialogCancel,
  uf as AlertDialogContent,
  ff as AlertDialogDescription,
  df as AlertDialogOverlay,
  rf as AlertDialogPortal,
  lf as AlertDialogRoot,
  pf as AlertDialogTitle,
  sf as AlertDialogTrigger,
  mf as AspectRatio,
  gf as AvatarFallback,
  yf as AvatarImage,
  hf as AvatarRoot,
  qi as CalendarCell,
  tu as CalendarCellTrigger,
  Gi as CalendarGrid,
  Qi as CalendarGridBody,
  Ji as CalendarGridHead,
  eu as CalendarGridRow,
  Yi as CalendarHeadCell,
  ji as CalendarHeader,
  Ui as CalendarHeading,
  Xi as CalendarNext,
  Zi as CalendarPrev,
  Wi as CalendarRoot,
  Cf as CheckboxIndicator,
  bf as CheckboxRoot,
  ai as CollapsibleContent,
  Qr as CollapsibleRoot,
  ei as CollapsibleTrigger,
  xf as ComboboxAnchor,
  If as ComboboxArrow,
  Sf as ComboboxCancel,
  Ef as ComboboxContent,
  Bf as ComboboxEmpty,
  Df as ComboboxGroup,
  wf as ComboboxInput,
  Af as ComboboxItem,
  Tf as ComboboxItemIndicator,
  $f as ComboboxLabel,
  kf as ComboboxPortal,
  _f as ComboboxRoot,
  Of as ComboboxSeparator,
  Pf as ComboboxTrigger,
  Rf as ComboboxViewport,
  Zp as ConfigProvider,
  Nf as ContextMenuArrow,
  Wf as ContextMenuCheckboxItem,
  Lf as ContextMenuContent,
  Kf as ContextMenuGroup,
  zf as ContextMenuItem,
  jf as ContextMenuItemIndicator,
  Uf as ContextMenuLabel,
  Ff as ContextMenuPortal,
  Gf as ContextMenuRadioGroup,
  qf as ContextMenuRadioItem,
  Mf as ContextMenuRoot,
  Hf as ContextMenuSeparator,
  Yf as ContextMenuSub,
  Xf as ContextMenuSubContent,
  Zf as ContextMenuSubTrigger,
  Vf as ContextMenuTrigger,
  ld as DateFieldInput,
  qu as DateFieldRoot,
  fv as DatePickerAnchor,
  vv as DatePickerArrow,
  cv as DatePickerCalendar,
  tv as DatePickerCell,
  iv as DatePickerCellTrigger,
  mv as DatePickerClose,
  yv as DatePickerContent,
  pv as DatePickerField,
  ev as DatePickerGrid,
  sv as DatePickerGridBody,
  lv as DatePickerGridHead,
  rv as DatePickerGridRow,
  av as DatePickerHeadCell,
  Jf as DatePickerHeader,
  Qf as DatePickerHeading,
  uv as DatePickerInput,
  nv as DatePickerNext,
  ov as DatePickerPrev,
  dv as DatePickerRoot,
  hv as DatePickerTrigger,
  pd as DateRangeFieldInput,
  cd as DateRangeFieldRoot,
  Ov as DateRangePickerAnchor,
  Iv as DateRangePickerArrow,
  Av as DateRangePickerCalendar,
  _v as DateRangePickerCell,
  Ev as DateRangePickerCellTrigger,
  kv as DateRangePickerClose,
  Vv as DateRangePickerContent,
  Tv as DateRangePickerField,
  Cv as DateRangePickerGrid,
  Dv as DateRangePickerGridBody,
  Sv as DateRangePickerGridHead,
  $v as DateRangePickerGridRow,
  wv as DateRangePickerHeadCell,
  gv as DateRangePickerHeader,
  bv as DateRangePickerHeading,
  Bv as DateRangePickerInput,
  xv as DateRangePickerNext,
  Pv as DateRangePickerPrev,
  Rv as DateRangePickerRoot,
  Mv as DateRangePickerTrigger,
  dl as DialogClose,
  Ai as DialogContent,
  ki as DialogDescription,
  Oi as DialogOverlay,
  of as DialogPortal,
  ii as DialogRoot,
  Ii as DialogTitle,
  ui as DialogTrigger,
  Kv as DropdownMenuArrow,
  Uv as DropdownMenuCheckboxItem,
  zv as DropdownMenuContent,
  Wv as DropdownMenuGroup,
  Hv as DropdownMenuItem,
  Gv as DropdownMenuItemIndicator,
  qv as DropdownMenuLabel,
  Nv as DropdownMenuPortal,
  Yv as DropdownMenuRadioGroup,
  Xv as DropdownMenuRadioItem,
  Fv as DropdownMenuRoot,
  jv as DropdownMenuSeparator,
  Zv as DropdownMenuSub,
  Jv as DropdownMenuSubContent,
  Qv as DropdownMenuSubTrigger,
  Lv as DropdownMenuTrigger,
  om as HoverCardArrow,
  nm as HoverCardContent,
  am as HoverCardPortal,
  em as HoverCardRoot,
  tm as HoverCardTrigger,
  lm as Label,
  cm as MenubarArrow,
  mm as MenubarCheckboxItem,
  dm as MenubarContent,
  fm as MenubarGroup,
  pm as MenubarItem,
  hm as MenubarItemIndicator,
  ym as MenubarLabel,
  rm as MenubarMenu,
  um as MenubarPortal,
  gm as MenubarRadioGroup,
  bm as MenubarRadioItem,
  sm as MenubarRoot,
  vm as MenubarSeparator,
  Cm as MenubarSub,
  _m as MenubarSubContent,
  wm as MenubarSubTrigger,
  im as MenubarTrigger,
  Sm as NavigationMenuContent,
  Dm as NavigationMenuIndicator,
  Pm as NavigationMenuItem,
  $m as NavigationMenuLink,
  Em as NavigationMenuList,
  xm as NavigationMenuRoot,
  Bm as NavigationMenuSub,
  Rm as NavigationMenuTrigger,
  Am as NavigationMenuViewport,
  Om as PaginationEllipsis,
  Im as PaginationFirst,
  km as PaginationLast,
  Mm as PaginationList,
  Vm as PaginationListItem,
  Fm as PaginationNext,
  Lm as PaginationPrev,
  Tm as PaginationRoot,
  zm as PinInputInput,
  Nm as PinInputRoot,
  Ll as PopoverAnchor,
  Vl as PopoverArrow,
  Fl as PopoverClose,
  Ml as PopoverContent,
  Il as PopoverPortal,
  Tl as PopoverRoot,
  Ol as PopoverTrigger,
  I as Primitive,
  Hm as ProgressIndicator,
  Km as ProgressRoot,
  Um as RadioGroupIndicator,
  jm as RadioGroupItem,
  Wm as RadioGroupRoot,
  Zd as RangeCalendarCell,
  oc as RangeCalendarCellTrigger,
  Xd as RangeCalendarGrid,
  ac as RangeCalendarGridBody,
  tc as RangeCalendarGridHead,
  nc as RangeCalendarGridRow,
  Jd as RangeCalendarHeadCell,
  qd as RangeCalendarHeader,
  Yd as RangeCalendarHeading,
  Qd as RangeCalendarNext,
  ec as RangeCalendarPrev,
  Gd as RangeCalendarRoot,
  Zm as ScrollAreaCorner,
  Gm as ScrollAreaRoot,
  Ym as ScrollAreaScrollbar,
  Xm as ScrollAreaThumb,
  qm as ScrollAreaViewport,
  ah as SelectArrow,
  th as SelectContent,
  sh as SelectGroup,
  fh as SelectIcon,
  oh as SelectItem,
  lh as SelectItemIndicator,
  ih as SelectItemText,
  rh as SelectLabel,
  eh as SelectPortal,
  Jm as SelectRoot,
  ch as SelectScrollDownButton,
  dh as SelectScrollUpButton,
  nh as SelectSeparator,
  Qm as SelectTrigger,
  ph as SelectValue,
  uh as SelectViewport,
  vh as Separator,
  gh as SliderRange,
  mh as SliderRoot,
  hh as SliderThumb,
  yh as SliderTrack,
  En as Slot,
  bh as SplitterGroup,
  Ch as SplitterPanel,
  _h as SplitterResizeHandle,
  wh as SwitchRoot,
  xh as SwitchThumb,
  Dh as TabsContent,
  Eh as TabsIndicator,
  Sh as TabsList,
  Ph as TabsRoot,
  $h as TabsTrigger,
  Ih as TagsInputClear,
  Rh as TagsInputInput,
  Ah as TagsInputItem,
  Oh as TagsInputItemDelete,
  Th as TagsInputItemText,
  Bh as TagsInputRoot,
  Vh as ToastAction,
  Ap as ToastClose,
  Nh as ToastDescription,
  kh as ToastProvider,
  Mh as ToastRoot,
  Lh as ToastTitle,
  Fh as ToastViewport,
  Tp as Toggle,
  Mp as ToggleGroupItem,
  kp as ToggleGroupRoot,
  Fp as ToolbarButton,
  Kh as ToolbarLink,
  zh as ToolbarRoot,
  jh as ToolbarSeparator,
  Hh as ToolbarToggleGroup,
  Wh as ToolbarToggleItem,
  Xh as TooltipArrow,
  Yh as TooltipContent,
  Zh as TooltipPortal,
  Uh as TooltipProvider,
  Gh as TooltipRoot,
  qh as TooltipTrigger,
  Ft as VisuallyHidden,
  X as createContext,
  ta as useBodyScrollLock,
  Pn as useDateFormatter,
  $e as useEmitAsProps,
  R as useForwardExpose,
  gt as useForwardProps,
  Ce as useForwardPropsEmits,
  me as useId,
  nl as useStateMachine,
  Jp as withDefault
};
//# sourceMappingURL=radix-vue.js.map
