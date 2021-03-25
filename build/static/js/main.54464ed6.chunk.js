(this.webpackJsonpsolarms_web = this.webpackJsonpsolarms_web || []).push([
  [10],
  {
    12: function (e, t, n) {
      'use strict';
      n.d(t, 'd', function () {
        return s;
      }),
        n.d(t, 'f', function () {
          return o;
        }),
        n.d(t, 'e', function () {
          return u;
        }),
        n.d(t, 'h', function () {
          return d;
        }),
        n.d(t, 'j', function () {
          return p;
        }),
        n.d(t, 'i', function () {
          return l;
        }),
        n.d(t, 'b', function () {
          return v;
        }),
        n.d(t, 'g', function () {
          return f;
        }),
        n.d(t, 'c', function () {
          return b;
        });
      var a = n(10),
        r = Object(a.b)({
          name: 'main',
          initialState: {
            isLoading: !1,
            isSpinner: !1,
            listCompanyInverters: [],
            listPositions: [],
            listCompany: [],
            type: '',
            key: '',
            page: 0,
            total: 0,
            perPage: 0,
          },
          reducers: {
            getMonitoringSystemDashboard: function (e) {
              e.isLoading = !0;
            },
            getListCompanyInverters: function (e, t) {
              (e.isLoading = !0), (e.type = t.type);
            },
            getListCompanyInvertersSuccess: function (e, t) {
              var n = t.data,
                a =
                  n &&
                  (null === n || void 0 === n
                    ? void 0
                    : n.data.map(function (e) {
                        return {
                          id: e.ds_id,
                          name: e.ds_name,
                          amountElectricDay: e.prod_today,
                          amountElectricMonth: e.prod_inmonth,
                          electricRealtime: e.prod_realtime,
                          ratePower: e.performance_ratio,
                          cumulativeElectric: e.prod_sum,
                          comId: e.com_id,
                          posId: e.pos_id,
                          posName: e.pos_name,
                          comName: e.com_name,
                          event: e.event,
                        };
                      }));
              (e.listCompanyInverters = a || []),
                (e.total = null === n || void 0 === n ? void 0 : n.total),
                (e.perPage = null === n || void 0 === n ? void 0 : n.per_page),
                (e.type = t.type),
                (e.isLoading = !1);
            },
            getListCompanyInvertersFailed: function (e, t) {
              (e.isLoading = !1), (e.type = t.type);
            },
            getListPosition: function (e, t) {
              (e.isSpinner = !0), (e.type = t.type);
            },
            getListPositionSuccess: function (e, t) {
              var n = t.data;
              e.type = t.type;
              var a =
                null === n || void 0 === n
                  ? void 0
                  : n.data.map(function (e) {
                      return {
                        id: e.id,
                        value: e.id,
                        label: e.pos_name,
                        key: 'posId',
                      };
                    });
              (e.listPositions = a), (e.isSpinner = !1);
            },
            getListPositionFailed: function (e, t) {
              (e.isSpinner = !1), (e.type = t.type);
            },
            getListCompany: function (e, t) {
              (e.isSpinner = !0), (e.type = t.type);
            },
            getListCompanySuccess: function (e, t) {
              var n = t.data;
              e.type = t.type;
              var a =
                null === n || void 0 === n
                  ? void 0
                  : n.data.map(function (e) {
                      return {
                        id: e.id,
                        value: e.id,
                        label: e.com_name,
                        key: 'comId',
                      };
                    });
              (e.listCompany = a), (e.isSpinner = !1);
            },
            getListCompanyFailed: function (e, t) {
              (e.isSpinner = !1), (e.type = t.type);
            },
          },
        }),
        c = r.actions,
        i = r.reducer,
        s = (c.getMonitoringSystemDashboard, c.getListCompanyInverters),
        o = c.getListCompanyInvertersSuccess,
        u = c.getListCompanyInvertersFailed,
        d = c.getListPosition,
        p = c.getListPositionSuccess,
        l = c.getListPositionFailed,
        v = c.getListCompany,
        f = c.getListCompanySuccess,
        b = c.getListCompanyFailed;
      t.a = i;
    },
    164: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(32),
        i = n.n(c),
        s = (n(86), n(72)),
        o = (n(87), n(88), n(89), n(30)),
        u = n(31),
        d = n(23),
        p = n(24),
        l = n(10),
        v = n(78),
        f = (n(75), n(76)),
        b = n.n(f),
        m = n(42),
        y = n(77),
        O = n(14),
        g = n(9),
        S = n(12),
        T = n(20),
        E = n(55),
        _ = n(56),
        x = n(21),
        A = n(22),
        h = Object(l.b)({
          name: 'statisticsDevelopStatus',
          initialState: { isLoading: !1, total: 0 },
          reducers: {
            getListStatisticsDevelop: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
          },
        }),
        P = h.actions,
        L = h.reducer,
        D = (P.getListStatisticsDevelop, L),
        k = Object(l.b)({
          name: 'testMockupStatus',
          initialState: { isLoading: !1, total: 0 },
          reducers: {
            getDataTestMockupStatus: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            getDataTestMockupStatusSuccess: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1);
            },
            getDataTestMockupStatusFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1), (e.listCompany = []);
            },
          },
        }),
        j = k.actions,
        I = k.reducer,
        C =
          (j.getDataTestMockupStatus,
          j.getDataTestMockupStatusSuccess,
          j.getDataTestMockupStatusFailed,
          I),
        w = n(53),
        N = Object(O.c)({
          account: g.a,
          main: S.a,
          statusCompany: T.a,
          device: E.b,
          operationStatus: _.b,
          testDashboard: x.a,
          solarDashboard: A.a,
          statisticsDevelop: D,
          testMockupStatus: C,
          commons: w.a,
        }),
        R = n(2),
        M = n.n(R),
        F = n(1),
        U = n(4),
        G = M.a.mark(z),
        Y = M.a.mark(X);
      function z(e) {
        var t, n, a;
        return M.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (r.next = 3),
                    Object(F.b)(function () {
                      return U.a.post(U.b.SIGN_IN, JSON.stringify(e.payload));
                    })
                  );
                case 3:
                  if (!(t = r.sent).ok) {
                    r.next = 10;
                    break;
                  }
                  return (
                    (n = t.data),
                    (r.next = 8),
                    Object(F.c)({ type: g.r, data: n })
                  );
                case 8:
                  r.next = 13;
                  break;
                case 10:
                  return (
                    (a = t.data),
                    (r.next = 13),
                    Object(F.c)({
                      type: g.q,
                      errorMsg:
                        null === a || void 0 === a ? void 0 : a.error_msg,
                    })
                  );
                case 13:
                  r.next = 19;
                  break;
                case 15:
                  return (
                    (r.prev = 15),
                    (r.t0 = r.catch(0)),
                    (r.next = 19),
                    Object(F.c)({ type: g.q })
                  );
                case 19:
                case 'end':
                  return r.stop();
              }
          },
          G,
          null,
          [[0, 15]]
        );
      }
      function X() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(g.p, z);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Y);
      }
      var B = X,
        V = M.a.mark(K),
        H = M.a.mark(q);
      function K(e) {
        var t, n, a;
        return M.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (r.next = 3),
                    Object(F.b)(function () {
                      return U.a.post(U.b.SIGN_UP, JSON.stringify(e.payload));
                    })
                  );
                case 3:
                  if (!(t = r.sent).ok) {
                    r.next = 10;
                    break;
                  }
                  return (
                    (n = t.data),
                    (r.next = 8),
                    Object(F.c)({ type: g.u, data: n })
                  );
                case 8:
                  r.next = 13;
                  break;
                case 10:
                  return (
                    (a = t.data),
                    (r.next = 13),
                    Object(F.c)({
                      type: g.t,
                      errorMsg:
                        null === a || void 0 === a ? void 0 : a.error_msg,
                    })
                  );
                case 13:
                  r.next = 19;
                  break;
                case 15:
                  return (
                    (r.prev = 15),
                    (r.t0 = r.catch(0)),
                    (r.next = 19),
                    Object(F.c)({ type: g.t })
                  );
                case 19:
                case 'end':
                  return r.stop();
              }
          },
          V,
          null,
          [[0, 15]]
        );
      }
      function q() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(g.s, K);
              case 2:
              case 'end':
                return e.stop();
            }
        }, H);
      }
      var J = q,
        W = M.a.mark(Q),
        $ = M.a.mark(Z);
      function Q() {
        var e, t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.API_GET_LIST_COMPANY);
                    })
                  );
                case 3:
                  if (!(e = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (t = null === e || void 0 === e ? void 0 : e.data),
                    (n = t.data),
                    (a.next = 8),
                    Object(F.c)({ type: g.k, data: n })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (a.next = 12), Object(F.c)({ type: g.j });
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({ type: g.j })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          W,
          null,
          [[0, 14]]
        );
      }
      function Z() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(g.i, Q);
              case 2:
              case 'end':
                return e.stop();
            }
        }, $);
      }
      var ee = Z,
        te = M.a.mark(ae),
        ne = M.a.mark(re);
      function ae() {
        var e, t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.API_GET_LIST_POSITION);
                    })
                  );
                case 3:
                  if (!(e = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (t = null === e || void 0 === e ? void 0 : e.data),
                    (n = t.data),
                    (a.next = 8),
                    Object(F.c)({ type: g.h, data: n })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (a.next = 12), Object(F.c)({ type: g.g });
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({ type: g.g })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          te,
          null,
          [[0, 14]]
        );
      }
      function re() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(g.f, ae);
              case 2:
              case 'end':
                return e.stop();
            }
        }, ne);
      }
      var ce = re,
        ie = M.a.mark(oe),
        se = M.a.mark(ue);
      function oe(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.API_GET_LIST_DEVICE, e.payload);
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (n = t.data),
                    (a.next = 8),
                    Object(F.c)({ type: g.n, data: n })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (a.next = 12), Object(F.c)({ type: g.m });
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({ type: g.m })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          ie,
          null,
          [[0, 14]]
        );
      }
      function ue() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(g.l, oe);
              case 2:
              case 'end':
                return e.stop();
            }
        }, se);
      }
      var de = ue,
        pe = M.a.mark(ve),
        le = M.a.mark(fe);
      function ve() {
        var e, t;
        return M.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.prev = 0),
                    (n.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.API_GET_LIST_COMPANY);
                    })
                  );
                case 3:
                  if (!(e = n.sent).ok) {
                    n.next = 10;
                    break;
                  }
                  return (
                    (t = e.data.data),
                    (n.next = 8),
                    Object(F.c)({
                      type: 'device/getListCompanySuccess',
                      data: t,
                    })
                  );
                case 8:
                  n.next = 12;
                  break;
                case 10:
                  return (
                    (n.next = 12),
                    Object(F.c)({ type: 'device/getListCompanyFailed' })
                  );
                case 12:
                  n.next = 18;
                  break;
                case 14:
                  return (
                    (n.prev = 14),
                    (n.t0 = n.catch(0)),
                    (n.next = 18),
                    Object(F.c)({
                      type: 'device/getListCompanyFailed',
                      error: n.t0,
                    })
                  );
                case 18:
                case 'end':
                  return n.stop();
              }
          },
          pe,
          null,
          [[0, 14]]
        );
      }
      function fe() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)('device/getListCompany', ve);
              case 2:
              case 'end':
                return e.stop();
            }
        }, le);
      }
      var be = fe,
        me = M.a.mark(Oe),
        ye = M.a.mark(ge);
      function Oe(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.API_GET_LIST_DEVICE, e.payload);
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (n = t.data),
                    (a.next = 8),
                    Object(F.c)({
                      type: 'device/getListDeviceSuccess',
                      data: n,
                    })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (
                    (a.next = 12),
                    Object(F.c)({ type: 'device/getListDeviceFailed' })
                  );
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({
                      type: 'device/getListDeviceFailed',
                      error: a.t0,
                    })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          me,
          null,
          [[0, 14]]
        );
      }
      function ge() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)('device/getListDevice', Oe);
              case 2:
              case 'end':
                return e.stop();
            }
        }, ye);
      }
      var Se = ge,
        Te = M.a.mark(_e),
        Ee = M.a.mark(xe);
      function _e() {
        var e, t;
        return M.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.prev = 0),
                    (n.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.GET_POS);
                    })
                  );
                case 3:
                  if (!(e = n.sent).ok) {
                    n.next = 10;
                    break;
                  }
                  return (
                    (t = e.data.data),
                    (n.next = 8),
                    Object(F.c)({
                      type: 'device/getListPositionSuccess',
                      data: t,
                    })
                  );
                case 8:
                  n.next = 12;
                  break;
                case 10:
                  return (
                    (n.next = 12),
                    Object(F.c)({ type: 'device/getListPositionFailed' })
                  );
                case 12:
                  n.next = 18;
                  break;
                case 14:
                  return (
                    (n.prev = 14),
                    (n.t0 = n.catch(0)),
                    (n.next = 18),
                    Object(F.c)({
                      type: 'device/getListPositionFailed',
                      error: n.t0,
                    })
                  );
                case 18:
                case 'end':
                  return n.stop();
              }
          },
          Te,
          null,
          [[0, 14]]
        );
      }
      function xe() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)('device/getListPosition', _e);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ee);
      }
      var Ae = xe,
        he = M.a.mark(Le),
        Pe = M.a.mark(De);
      function Le(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.API_GET_LIST_DEVICE, e.payload);
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (n = t.data),
                    (a.next = 8),
                    Object(F.c)({
                      type: 'device/getDeivceDetailSuccess',
                      data: n,
                    })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (
                    (a.next = 12),
                    Object(F.c)({ type: 'device/getDeivceDetailFailed' })
                  );
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({
                      type: 'device/getDeivceDetailFailed',
                      error: a.t0,
                    })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          he,
          null,
          [[0, 14]]
        );
      }
      function De() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)('device/getDeivceDetail', Le);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Pe);
      }
      var ke = De,
        je = M.a.mark(Ce),
        Ie = M.a.mark(we);
      function Ce(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.put(
                        U.b.UPDATE_DEVICE(e.payload.id),
                        JSON.stringify(e.payload)
                      );
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (n = t.data),
                    (a.next = 8),
                    Object(F.c)({ type: 'device/updateDeviceSuccess', data: n })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (
                    (a.next = 12),
                    Object(F.c)({ type: 'device/updateDeviceFailed' })
                  );
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({
                      type: 'device/updateDeviceFailed',
                      error: a.t0,
                    })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          je,
          null,
          [[0, 14]]
        );
      }
      function we() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)('device/updateDevice', Ce);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ie);
      }
      var Ne = we,
        Re = n(37),
        Me = n.n(Re),
        Fe = M.a.mark(Ge),
        Ue = M.a.mark(Ye);
      function Ge(e) {
        var t, n, a, r, c, i, s, o, u, d, p, l, v, f, b;
        return M.a.wrap(
          function (m) {
            for (;;)
              switch ((m.prev = m.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (n = t.azimuthAngle),
                    (a = t.color),
                    (r = t.companySelected),
                    (c = t.currentType),
                    (i = t.incidenceAngle),
                    (s = t.manager),
                    (o = t.maxPower),
                    (u = t.name),
                    (d = t.phoneManager),
                    (p = t.positionSelected),
                    (l = t.startDate),
                    (m.prev = 1),
                    (m.next = 4),
                    Object(F.b)(function () {
                      return U.a.post(
                        U.b.API_GET_LIST_DEVICE,
                        JSON.stringify({
                          install_date: Me()(l).format('YYYY-MM-DD'),
                          type: c,
                          name: u,
                          manager: s,
                          manager_phone: d,
                          max_power: parseInt(o, 10),
                          pos_id: p.value,
                          com_id: r.value,
                          incidence_angle: i,
                          azimuth_angle: n,
                          color: a,
                        })
                      );
                    })
                  );
                case 4:
                  if (!(v = m.sent).ok) {
                    m.next = 11;
                    break;
                  }
                  return (
                    (f = v.data),
                    (m.next = 9),
                    Object(F.c)({ type: 'device/addDeviceSuccess', data: f })
                  );
                case 9:
                  m.next = 14;
                  break;
                case 11:
                  return (
                    (b = v.data.errors),
                    (m.next = 14),
                    Object(F.c)({ type: 'device/addDeviceFailed', errors: b })
                  );
                case 14:
                  m.next = 20;
                  break;
                case 16:
                  return (
                    (m.prev = 16),
                    (m.t0 = m.catch(1)),
                    (m.next = 20),
                    Object(F.c)({ type: 'device/addDeviceFailed', error: m.t0 })
                  );
                case 20:
                case 'end':
                  return m.stop();
              }
          },
          Fe,
          null,
          [[1, 16]]
        );
      }
      function Ye() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)('device/addDevice', Ge);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ue);
      }
      var ze = Ye,
        Xe = n(44),
        Be = M.a.mark(He),
        Ve = M.a.mark(Ke);
      function He(e) {
        var t, n, a, r, c, i;
        return M.a.wrap(
          function (s) {
            for (;;)
              switch ((s.prev = s.next)) {
                case 0:
                  if (
                    ((s.prev = 0),
                    (t = null === e || void 0 === e ? void 0 : e.payload),
                    (n = t.isDetail),
                    (a = {}),
                    n)
                  ) {
                    s.next = 9;
                    break;
                  }
                  return (
                    (s.next = 6),
                    Object(F.b)(function () {
                      return U.a.get(
                        U.b.ACCOUNTS,
                        Object(Xe.a)({}, e.payload, { relation: ['roles'] })
                      );
                    })
                  );
                case 6:
                  (a = s.sent), (s.next = 12);
                  break;
                case 9:
                  return (
                    (s.next = 11),
                    Object(F.b)(function () {
                      return U.a.get(
                        U.b.ACCOUNTS,
                        Object(Xe.a)({}, e.payload, {
                          relation: ['roles', 'devices|position,company'],
                        })
                      );
                    })
                  );
                case 11:
                  a = s.sent;
                case 12:
                  if (!a.ok) {
                    s.next = 18;
                    break;
                  }
                  return (
                    (c = null === (r = a) || void 0 === r ? void 0 : r.data),
                    (i = c.data),
                    (s.next = 16),
                    Object(F.c)({ type: g.e, data: i, isDetail: n })
                  );
                case 16:
                  s.next = 20;
                  break;
                case 18:
                  return (s.next = 20), Object(F.c)({ type: g.d });
                case 20:
                  s.next = 26;
                  break;
                case 22:
                  return (
                    (s.prev = 22),
                    (s.t0 = s.catch(0)),
                    (s.next = 26),
                    Object(F.c)({ type: g.d })
                  );
                case 26:
                case 'end':
                  return s.stop();
              }
          },
          Be,
          null,
          [[0, 22]]
        );
      }
      function Ke() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(g.c, He);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ve);
      }
      var qe = Ke,
        Je = M.a.mark($e),
        We = M.a.mark(Qe);
      function $e(e) {
        var t, n, a, r, c, i, s, o, u, d, p, l;
        return M.a.wrap(
          function (v) {
            for (;;)
              switch ((v.prev = v.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (n = t.name),
                    (a = t.phone),
                    (r = t.password),
                    (c = t.passConfirm),
                    (i = t.currentOption),
                    (s = t.idInverterList),
                    (o = t.id),
                    (v.prev = 1),
                    (v.next = 4),
                    Object(F.b)(function () {
                      return U.a.put(
                        U.b.UPDATE_ACCOUNT(o),
                        JSON.stringify({
                          role: i,
                          name: n,
                          phone: a.replace(/-/g, ''),
                          password: r,
                          password_confirmation: c,
                          inverter_ids: s,
                        })
                      );
                    })
                  );
                case 4:
                  if (!(u = v.sent).ok) {
                    v.next = 11;
                    break;
                  }
                  return (
                    (d = null === u || void 0 === u ? void 0 : u.data),
                    (p = d.data),
                    (v.next = 9),
                    Object(F.c)({
                      type: 'accounts/updateAccountSuccess',
                      data: p,
                    })
                  );
                case 9:
                  v.next = 13;
                  break;
                case 11:
                  return (
                    (v.next = 13),
                    Object(F.c)({
                      type: 'accounts/updateAccountFailed',
                      errors:
                        null === u ||
                        void 0 === u ||
                        null === (l = u.data) ||
                        void 0 === l
                          ? void 0
                          : l.errors,
                    })
                  );
                case 13:
                  v.next = 19;
                  break;
                case 15:
                  return (
                    (v.prev = 15),
                    (v.t0 = v.catch(1)),
                    (v.next = 19),
                    Object(F.c)({ type: 'accounts/updateAccountFailed' })
                  );
                case 19:
                case 'end':
                  return v.stop();
              }
          },
          Je,
          null,
          [[1, 15]]
        );
      }
      function Qe() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(g.v, $e);
              case 2:
              case 'end':
                return e.stop();
            }
        }, We);
      }
      var Ze = Qe,
        et = M.a.mark(nt),
        tt = M.a.mark(at);
      function nt() {
        var e, t;
        return M.a.wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.prev = 0),
                    (n.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.API_GET_LIST_COMPANY);
                    })
                  );
                case 3:
                  if (!(e = n.sent).ok) {
                    n.next = 10;
                    break;
                  }
                  return (
                    (t = e.data),
                    (n.next = 8),
                    Object(F.c)({ type: T.d, data: t })
                  );
                case 8:
                  n.next = 12;
                  break;
                case 10:
                  return (n.next = 12), Object(F.c)({ type: T.c });
                case 12:
                  n.next = 18;
                  break;
                case 14:
                  return (
                    (n.prev = 14),
                    (n.t0 = n.catch(0)),
                    (n.next = 18),
                    Object(F.c)({ type: T.c })
                  );
                case 18:
                case 'end':
                  return n.stop();
              }
          },
          et,
          null,
          [[0, 14]]
        );
      }
      function at() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(T.b, nt);
              case 2:
              case 'end':
                return e.stop();
            }
        }, tt);
      }
      var rt = at,
        ct = M.a.mark(st),
        it = M.a.mark(ot);
      function st(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.GET_DASHBOARD_TEST_MOCKUP, e.payload);
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 11;
                    break;
                  }
                  return (
                    (n = t.data),
                    console.log(n),
                    (a.next = 9),
                    Object(F.c)({ type: x.d, data: n })
                  );
                case 9:
                  a.next = 13;
                  break;
                case 11:
                  return (a.next = 13), Object(F.c)({ type: x.c });
                case 13:
                  a.next = 19;
                  break;
                case 15:
                  return (
                    (a.prev = 15),
                    (a.t0 = a.catch(0)),
                    (a.next = 19),
                    Object(F.c)({ type: x.c, error: a.t0 })
                  );
                case 19:
                case 'end':
                  return a.stop();
              }
          },
          ct,
          null,
          [[0, 15]]
        );
      }
      function ot() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(x.b, st);
              case 2:
              case 'end':
                return e.stop();
            }
        }, it);
      }
      var ut = ot,
        dt = M.a.mark(lt),
        pt = M.a.mark(vt);
      function lt(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.GET_DASHBOARD_TEST_SOLAR, e.payload);
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 11;
                    break;
                  }
                  return (
                    (n = t.data),
                    console.log(n),
                    (a.next = 9),
                    Object(F.c)({ type: A.d, data: n })
                  );
                case 9:
                  a.next = 13;
                  break;
                case 11:
                  return (a.next = 13), Object(F.c)({ type: A.c });
                case 13:
                  a.next = 19;
                  break;
                case 15:
                  return (
                    (a.prev = 15),
                    (a.t0 = a.catch(0)),
                    (a.next = 19),
                    Object(F.c)({ type: A.c, error: a.t0 })
                  );
                case 19:
                case 'end':
                  return a.stop();
              }
          },
          dt,
          null,
          [[0, 15]]
        );
      }
      function vt() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(A.b, lt);
              case 2:
              case 'end':
                return e.stop();
            }
        }, pt);
      }
      var ft = vt,
        bt = M.a.mark(yt),
        mt = M.a.mark(Ot);
      function yt(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.GET_DASHBOARD, e.payload);
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (n = t.data),
                    (a.next = 8),
                    Object(F.c)({ type: S.f, data: n })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (a.next = 12), Object(F.c)({ type: S.e });
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({ type: S.e, error: a.t0 })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          bt,
          null,
          [[0, 14]]
        );
      }
      function Ot() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(S.d, yt);
              case 2:
              case 'end':
                return e.stop();
            }
        }, mt);
      }
      var gt = Ot,
        St = M.a.mark(Et),
        Tt = M.a.mark(_t);
      function Et(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.API_GET_LIST_POSITION, e.payload);
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (n = t.data),
                    (a.next = 8),
                    Object(F.c)({ type: S.j, data: n })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (a.next = 12), Object(F.c)({ type: S.i });
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({ type: S.i, error: a.t0 })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          St,
          null,
          [[0, 14]]
        );
      }
      function _t() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(S.h, Et);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Tt);
      }
      var xt = _t,
        At = M.a.mark(Pt),
        ht = M.a.mark(Lt);
      function Pt(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.API_GET_LIST_COMPANY, e.payload);
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (n = t.data),
                    (a.next = 8),
                    Object(F.c)({ type: S.g, data: n })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (a.next = 12), Object(F.c)({ type: S.c });
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({ type: S.c, error: a.t0 })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          At,
          null,
          [[0, 14]]
        );
      }
      function Lt() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)(S.b, Pt);
              case 2:
              case 'end':
                return e.stop();
            }
        }, ht);
      }
      var Dt = Lt,
        kt = M.a.mark(It),
        jt = M.a.mark(Ct);
      function It(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.API_GET_LIST_DEVICE, e.payload);
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (n = t.data.data),
                    (a.next = 8),
                    Object(F.c)({
                      type: 'operationStatus/getListDeviceSuccess',
                      data: n,
                    })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (
                    (a.next = 12),
                    Object(F.c)({ type: 'operationStatus/getListDeviceFailed' })
                  );
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({
                      type: 'operationStatus/getListDeviceFailed',
                      error: a.t0,
                    })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          kt,
          null,
          [[0, 14]]
        );
      }
      function Ct() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(F.d)('operationStatus/getListDevice', It)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, jt);
      }
      var wt = Ct,
        Nt = M.a.mark(Mt),
        Rt = M.a.mark(Ft);
      function Mt(e) {
        var t, n, a, r;
        return M.a.wrap(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (
                    (c.prev = 0),
                    (c.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.GET_EVENT_LIST, e.payload);
                    })
                  );
                case 3:
                  if (!(t = c.sent).ok) {
                    c.next = 10;
                    break;
                  }
                  return (
                    (r = t.data.data),
                    (c.next = 8),
                    Object(F.c)({
                      type: 'operationStatus/getEventListSuccess',
                      data: r,
                      total:
                        null === t ||
                        void 0 === t ||
                        null === (n = t.data) ||
                        void 0 === n
                          ? void 0
                          : n.total,
                      perPage:
                        null === t ||
                        void 0 === t ||
                        null === (a = t.data) ||
                        void 0 === a
                          ? void 0
                          : a.per_page,
                    })
                  );
                case 8:
                  c.next = 12;
                  break;
                case 10:
                  return (
                    (c.next = 12),
                    Object(F.c)({ type: 'operationStatus/getEventListFailed' })
                  );
                case 12:
                  c.next = 18;
                  break;
                case 14:
                  return (
                    (c.prev = 14),
                    (c.t0 = c.catch(0)),
                    (c.next = 18),
                    Object(F.c)({
                      type: 'operationStatus/getEventListFailed',
                      error: c.t0,
                    })
                  );
                case 18:
                case 'end':
                  return c.stop();
              }
          },
          Nt,
          null,
          [[0, 14]]
        );
      }
      function Ft() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(F.d)('operationStatus/getEventList', Mt)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Rt);
      }
      var Ut = Ft,
        Gt = M.a.mark(zt),
        Yt = M.a.mark(Xt);
      function zt(e) {
        var t, n, a, r;
        return M.a.wrap(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (
                    (c.prev = 0),
                    (c.next = 3),
                    Object(F.b)(function () {
                      return U.a.delete(U.b.DELETE_EVENT(e.payload));
                    })
                  );
                case 3:
                  if (!(t = c.sent).ok) {
                    c.next = 10;
                    break;
                  }
                  return (
                    (r = t.data.data),
                    (c.next = 8),
                    Object(F.c)({
                      type: 'operationStatus/deleteEventSuccess',
                      data: r,
                      total:
                        null === t ||
                        void 0 === t ||
                        null === (n = t.data) ||
                        void 0 === n
                          ? void 0
                          : n.total,
                      perPage:
                        null === t ||
                        void 0 === t ||
                        null === (a = t.data) ||
                        void 0 === a
                          ? void 0
                          : a.per_page,
                    })
                  );
                case 8:
                  c.next = 12;
                  break;
                case 10:
                  return (
                    (c.next = 12),
                    Object(F.c)({ type: 'operationStatus/deleteEventFailed' })
                  );
                case 12:
                  c.next = 18;
                  break;
                case 14:
                  return (
                    (c.prev = 14),
                    (c.t0 = c.catch(0)),
                    (c.next = 18),
                    Object(F.c)({
                      type: 'operationStatus/deleteEventFailed',
                      error: c.t0,
                    })
                  );
                case 18:
                case 'end':
                  return c.stop();
              }
          },
          Gt,
          null,
          [[0, 14]]
        );
      }
      function Xt() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(F.d)('operationStatus/deleteEvent', zt)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Yt);
      }
      var Bt = Xt,
        Vt = M.a.mark(Kt),
        Ht = M.a.mark(qt);
      function Kt(e) {
        var t, n, a, r;
        return M.a.wrap(
          function (c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (
                    (c.prev = 0),
                    (c.next = 3),
                    Object(F.b)(function () {
                      return U.a.post(
                        U.b.GET_EVENT_LIST,
                        JSON.stringify(e.payload)
                      );
                    })
                  );
                case 3:
                  if (!(t = c.sent).ok) {
                    c.next = 10;
                    break;
                  }
                  return (
                    (r = t.data.data),
                    (c.next = 8),
                    Object(F.c)({
                      type: 'operationStatus/addNewEventSuccess',
                      data: r,
                      total:
                        null === t ||
                        void 0 === t ||
                        null === (n = t.data) ||
                        void 0 === n
                          ? void 0
                          : n.total,
                      perPage:
                        null === t ||
                        void 0 === t ||
                        null === (a = t.data) ||
                        void 0 === a
                          ? void 0
                          : a.per_page,
                    })
                  );
                case 8:
                  c.next = 12;
                  break;
                case 10:
                  return (
                    (c.next = 12),
                    Object(F.c)({ type: 'operationStatus/addNewEventFailed' })
                  );
                case 12:
                  c.next = 18;
                  break;
                case 14:
                  return (
                    (c.prev = 14),
                    (c.t0 = c.catch(0)),
                    (c.next = 18),
                    Object(F.c)({
                      type: 'operationStatus/addNewEventFailed',
                      error: c.t0,
                    })
                  );
                case 18:
                case 'end':
                  return c.stop();
              }
          },
          Vt,
          null,
          [[0, 14]]
        );
      }
      function qt() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(F.d)('operationStatus/addNewEvent', Kt)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ht);
      }
      var Jt = qt,
        Wt = M.a.mark(Qt),
        $t = M.a.mark(Zt);
      function Qt(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.put(
                        U.b.UPDATE_EVENT(e.payload.id),
                        JSON.stringify(e.payload)
                      );
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (n = t.data.data),
                    (a.next = 8),
                    Object(F.c)({
                      type: 'operationStatus/updateEventSuccess',
                      data: n,
                    })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (
                    (a.next = 12),
                    Object(F.c)({ type: 'operationStatus/updateEventFailed' })
                  );
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({
                      type: 'operationStatus/updateEventFailed',
                      error: a.t0,
                    })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          Wt,
          null,
          [[0, 14]]
        );
      }
      function Zt() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(F.d)('operationStatus/updateEvent', Qt)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, $t);
      }
      var en = Zt,
        tn = M.a.mark(an),
        nn = M.a.mark(rn);
      function an(e) {
        var t, n;
        return M.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(F.b)(function () {
                      return U.a.get(U.b.STATUS_OPERATOR_CHART, e.payload);
                    })
                  );
                case 3:
                  if (!(t = a.sent).ok) {
                    a.next = 10;
                    break;
                  }
                  return (
                    (n = t.data),
                    (a.next = 8),
                    Object(F.c)({
                      type: 'operationStatus/getDataChartSuccess',
                      data: n,
                    })
                  );
                case 8:
                  a.next = 12;
                  break;
                case 10:
                  return (
                    (a.next = 12),
                    Object(F.c)({ type: 'operationStatus/getDataChartFailed' })
                  );
                case 12:
                  a.next = 18;
                  break;
                case 14:
                  return (
                    (a.prev = 14),
                    (a.t0 = a.catch(0)),
                    (a.next = 18),
                    Object(F.c)({
                      type: 'operationStatus/getDataChartFailed',
                      error: a.t0,
                    })
                  );
                case 18:
                case 'end':
                  return a.stop();
              }
          },
          tn,
          null,
          [[0, 14]]
        );
      }
      function rn() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2), Object(F.d)('operationStatus/getDataChart', an)
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, nn);
      }
      var cn = rn,
        sn = M.a.mark(un),
        on = M.a.mark(dn);
      function un(e) {
        var t, n, a;
        return M.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (r.next = 3),
                    Object(F.b)(function () {
                      return U.a.delete(U.b.UPDATE_ACCOUNT(e.payload));
                    })
                  );
                case 3:
                  if (!(t = r.sent).ok) {
                    r.next = 10;
                    break;
                  }
                  return (
                    (n = null === t || void 0 === t ? void 0 : t.data),
                    (a = n.data),
                    (r.next = 8),
                    Object(F.c)({
                      type: 'accounts/deleteAccountSuccess',
                      data: a,
                    })
                  );
                case 8:
                  r.next = 12;
                  break;
                case 10:
                  return (
                    (r.next = 12),
                    Object(F.c)({ type: 'accounts/deleteAccountFailed' })
                  );
                case 12:
                  r.next = 18;
                  break;
                case 14:
                  return (
                    (r.prev = 14),
                    (r.t0 = r.catch(0)),
                    (r.next = 18),
                    Object(F.c)({ type: 'accounts/deleteAccountFailed' })
                  );
                case 18:
                case 'end':
                  return r.stop();
              }
          },
          sn,
          null,
          [[0, 14]]
        );
      }
      function dn() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(F.d)('accounts/deleteAccount', un);
              case 2:
              case 'end':
                return e.stop();
            }
        }, on);
      }
      var pn = dn,
        ln = M.a.mark(vn);
      function vn() {
        return M.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(F.a)([
                    B(),
                    J(),
                    ee(),
                    ce(),
                    de(),
                    rt(),
                    be(),
                    Se(),
                    Ae(),
                    ke(),
                    Ne(),
                    ze(),
                    qe(),
                    Ze(),
                    ut(),
                    ft(),
                    gt(),
                    xt(),
                    Dt(),
                    wt(),
                    Ut(),
                    Bt(),
                    Jt(),
                    en(),
                    cn(),
                    pn(),
                  ])
                );
              case 2:
              case 'end':
                return e.stop();
            }
        }, ln);
      }
      var fn = function () {
        var e = (function () {
            var e = {
                key: 'root',
                storage: b.a,
                stateReconciler: y.seamlessImmutableReconciler,
                whitelist: ['account', 'device', 'commons'],
              },
              t = Object(v.a)(),
              n = [].concat(
                Object(p.a)(Object(l.c)({ thunk: !1, serializableCheck: !1 })),
                [t]
              );
            var a = Object(m.persistReducer)(e, N),
              r = Object(l.a)({ reducer: a, devTools: !1, middleware: n }),
              c = Object(m.persistStore)(r);
            return t.run(vn), { store: r, persistor: c };
          })(),
          t = e.store,
          n = e.persistor;
        return r.a.createElement(
          'div',
          { className: 'App' },
          r.a.createElement(
            s.a,
            { loading: r.a.createElement(u.a, null), persistor: n },
            r.a.createElement(o.a, { store: t }, r.a.createElement(d.a, null))
          )
        );
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(
        r.a.createElement(
          r.a.StrictMode,
          null,
          r.a.createElement(
            a.Suspense,
            {
              fallback: r.a.createElement(
                'div',
                { className: 'd-none' },
                'Loading'
              ),
            },
            r.a.createElement(fn, null)
          )
        ),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    20: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return s;
      }),
        n.d(t, 'd', function () {
          return o;
        }),
        n.d(t, 'c', function () {
          return u;
        });
      var a = n(10),
        r = Object(a.b)({
          name: 'statusCompany',
          initialState: {
            isProcessing: !1,
            listStatusCompany: [],
            listStatusCompanySelect: [],
            total: 0,
            deviceList: [],
          },
          reducers: {
            getListStatusCompany: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            getListStatusCompanySuccess: function (e, t) {
              var n = t.data,
                a =
                  n &&
                  (null === n || void 0 === n
                    ? void 0
                    : n.data.map(function (e) {
                        return { id: e.id, value: e.id, label: e.com_name };
                      }));
              (e.listStatusCompanySelect = a || []),
                (e.type = t.type),
                (e.isProcessing = !1);
            },
            getListStatusCompanyFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1), (e.listCompany = []);
            },
          },
        }),
        c = r.actions,
        i = r.reducer,
        s = c.getListStatusCompany,
        o = c.getListStatusCompanySuccess,
        u = c.getListStatusCompanyFailed;
      t.a = i;
    },
    21: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return s;
      }),
        n.d(t, 'd', function () {
          return o;
        }),
        n.d(t, 'c', function () {
          return u;
        });
      var a = n(10),
        r = Object(a.b)({
          name: 'testDashboard',
          initialState: {
            isLoading: !1,
            type: '',
            listDevice: [],
            total: 0,
            current_page: 0,
          },
          reducers: {
            getListDeviceTestDashboard: function (e, t) {
              (e.isLoading = !0), (e.type = t.type);
            },
            getListDeviceTestDashboardSuccess: function (e, t) {
              var n = t.data,
                a =
                  n &&
                  (null === n || void 0 === n
                    ? void 0
                    : n.data.map(function (e) {
                        return {
                          id: e.ds_id,
                          name: e.com_name,
                          amountElectricDay: e.prod_today,
                          amountElectricMonth: e.prod_inmonth,
                          electricRealtime: e.prod_realtime,
                          ratePower: e.performance_ratio,
                          cumulativeElectric: e.prod_sum,
                          event: e.event,
                        };
                      }));
              (e.listDevice = a || []),
                (e.type = t.type),
                (e.total = null === n || void 0 === n ? void 0 : n.total),
                (e.current_page =
                  null === n || void 0 === n ? void 0 : n.current_page),
                (e.isLoading = !1);
            },
            getListDeviceTestDashboardFailed: function (e, t) {
              (e.isLoading = !1), (e.type = t.type);
            },
          },
        }),
        c = r.actions,
        i = r.reducer,
        s = c.getListDeviceTestDashboard,
        o = c.getListDeviceTestDashboardSuccess,
        u = c.getListDeviceTestDashboardFailed;
      t.a = i;
    },
    22: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return s;
      }),
        n.d(t, 'd', function () {
          return o;
        }),
        n.d(t, 'c', function () {
          return u;
        });
      var a = n(10),
        r = Object(a.b)({
          name: 'solarDashboard',
          initialState: {
            isLoading: !1,
            listDevice: [],
            type: '',
            total: 0,
            current_page: 0,
          },
          reducers: {
            getListDeviceTestSolarDashboard: function (e, t) {
              (e.isLoading = !0), (e.type = t.type);
            },
            getListDeviceTestSolarDashboardSuccess: function (e, t) {
              var n = t.data,
                a =
                  n &&
                  (null === n || void 0 === n
                    ? void 0
                    : n.data.map(function (e) {
                        return {
                          id: e.ds_id,
                          name: e.com_name,
                          amountElectricDay: e.prod_today,
                          amountElectricMonth: e.prod_inmonth,
                          electricRealtime: e.prod_realtime,
                          ratePower: e.performance_ratio,
                          cumulativeElectric: e.prod_sum,
                          event: e.event,
                        };
                      }));
              (e.listDevice = a || []),
                (e.type = t.type),
                (e.total = null === n || void 0 === n ? void 0 : n.total),
                (e.current_page =
                  null === n || void 0 === n ? void 0 : n.current_page),
                (e.isLoading = !1);
            },
            getListDeviceTestSolarDashboardFailed: function (e, t) {
              (e.isLoading = !1), (e.type = t.type);
            },
          },
        }),
        c = r.actions,
        i = r.reducer,
        s = c.getListDeviceTestSolarDashboard,
        o = c.getListDeviceTestSolarDashboardSuccess,
        u = c.getListDeviceTestSolarDashboardFailed;
      t.a = i;
    },
    23: function (e, t, n) {
      'use strict';
      var a = n(0),
        r = n.n(a),
        c = n(43),
        i = n(11),
        s = n(30),
        o = n(7),
        u = n(31),
        d = n(4),
        p = n(79),
        l = a.memo(function (e) {
          var t = e.component,
            n = e.isAuthenticated,
            r = e.path,
            c = Object(p.a)(e, ['component', 'isAuthenticated', 'path']);
          return a.createElement(
            i.b,
            Object.assign({}, c, {
              render: function (e) {
                return n || (!n && '/login' === r)
                  ? a.createElement(t, Object.assign({ path: r }, e))
                  : a.createElement(i.a, { to: { pathname: '/login' } });
              },
            })
          );
        }),
        v = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(6), n.e(17)]).then(
            n.bind(null, 447)
          );
        }),
        f = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(7), n.e(24)]).then(
            n.bind(null, 451)
          );
        }),
        b = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(7), n.e(20)]).then(
            n.bind(null, 452)
          );
        }),
        m = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(7), n.e(21)]).then(
            n.bind(null, 453)
          );
        }),
        y = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(3), n.e(40)]).then(
            n.bind(null, 425)
          );
        }),
        O = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(3), n.e(35)]).then(
            n.bind(null, 426)
          );
        }),
        g = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(3), n.e(34)]).then(
            n.bind(null, 427)
          );
        }),
        S = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(5), n.e(16)]).then(
            n.bind(null, 454)
          );
        }),
        T = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(5), n.e(15)]).then(
            n.bind(null, 455)
          );
        }),
        E = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(5), n.e(14)]).then(
            n.bind(null, 456)
          );
        }),
        _ = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(5), n.e(13)]).then(
            n.bind(null, 457)
          );
        }),
        x = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(5), n.e(29)]).then(
            n.bind(null, 448)
          );
        }),
        A = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(3), n.e(8), n.e(46)]).then(
            n.bind(null, 428)
          );
        }),
        h = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(33)]).then(
            n.bind(null, 429)
          );
        }),
        P = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(9), n.e(30)]).then(
            n.bind(null, 458)
          );
        }),
        L = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(4), n.e(3), n.e(38)]).then(
            n.bind(null, 449)
          );
        }),
        D = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(3), n.e(8), n.e(45)]).then(
            n.bind(null, 430)
          );
        }),
        k = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(42)]).then(
            n.bind(null, 431)
          );
        }),
        j = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(44)]).then(
            n.bind(null, 432)
          );
        }),
        I = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(43)]).then(
            n.bind(null, 433)
          );
        }),
        C = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(32)]).then(
            n.bind(null, 434)
          );
        }),
        w = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(3), n.e(39)]).then(
            n.bind(null, 459)
          );
        }),
        N = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(6), n.e(26)]).then(
            n.bind(null, 440)
          );
        }),
        R = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(6), n.e(25)]).then(
            n.bind(null, 441)
          );
        }),
        M = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(3), n.e(41)]).then(
            n.bind(null, 435)
          );
        }),
        F = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(3), n.e(37)]).then(
            n.bind(null, 436)
          );
        }),
        U = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(3), n.e(36)]).then(
            n.bind(null, 437)
          );
        }),
        G = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(5), n.e(22)]).then(
            n.bind(null, 442)
          );
        }),
        Y = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(5), n.e(23)]).then(
            n.bind(null, 443)
          );
        }),
        z = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(6), n.e(27)]).then(
            n.bind(null, 439)
          );
        }),
        X = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(31)]).then(
            n.bind(null, 444)
          );
        }),
        B = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(5), n.e(19)]).then(
            n.bind(null, 445)
          );
        }),
        V = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(5), n.e(18)]).then(
            n.bind(null, 446)
          );
        }),
        H = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(9), n.e(28)]).then(
            n.bind(null, 450)
          );
        });
      t.a = function () {
        var e = Object(s.c)(function (e) {
          var t;
          return null === e ||
            void 0 === e ||
            null === (t = e.account) ||
            void 0 === t
            ? void 0
            : t.token;
        });
        e && d.a.setHeader('Authorization', 'Bearer '.concat(e));
        var t = '' !== e;
        return r.a.createElement(
          c.a,
          null,
          r.a.createElement(
            a.Suspense,
            { fallback: r.a.createElement(u.a, null) },
            r.a.createElement(
              i.d,
              null,
              r.a.createElement(i.b, {
                exact: !0,
                path: o.a.LOGIN,
                component: L,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.ROOT,
                component: A,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.DASHBOARD_AREA,
                component: D,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.DASHBOARD_COMPANY,
                component: k,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.STATUS_COMPANY,
                component: v,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.REGISTER_DEVICE,
                component: x,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.ACCOUNT_MANAGEMENT_EDIT,
                component: H,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.DEVICE,
                component: h,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.DEVICE_DETAIL,
                component: P,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.STATUS_COMPANY_BY_AREA,
                component: f,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.OPERATION_STATUS_BY_COMPANY,
                component: b,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.OPERATION_STATUS_BY_COMPANY_REGISTER,
                component: O,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.OPERATION_STATUS_BY_COMPANY_DETAIL,
                component: y,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.OPERATION_STATUS_BY_COMPANY_EDIT,
                component: g,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.OPERATION_STATUS_BY_AREA,
                component: m,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_DASHBOARD,
                component: j,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.SOLAR_DASHBOARD,
                component: I,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.STATISTICS_DEVELOP,
                component: S,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.STATISTICS_DEVELOP_AREA,
                component: T,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.ACCOUNT_MANAGEMENT_DETAIL,
                component: w,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.ACCOUNT_MANAGEMENT,
                component: C,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.OPERATION_STATISTICS_COMPANY,
                component: E,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.OPERATION_STATISTICS_AREA,
                component: _,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_MOCKUP_STATUS,
                component: N,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_MOCKUP_OPERATION,
                component: R,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_MOCKUP_OPERATION_STATUS_REGISTER,
                component: F,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_MOCKUP_OPERATION_STATUS_DETAIL,
                component: M,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_MOCKUP_OPERATION_STATUS_EDIT,
                component: U,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_MOCKUP_STATISTICS_OPERATION,
                component: G,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_MOCKUP_STATISTICS_DEVELOP,
                component: Y,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_SOLAR_STATUS_DEVELOP,
                component: z,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_SOLAR_STATUS_OPERATION,
                component: X,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_SOLAR_STATISTICS_DEVELOP,
                component: B,
                isAuthenticated: t,
              }),
              r.a.createElement(l, {
                exact: !0,
                path: o.a.TEST_SOLAR_STATISTICS_OPERATION,
                component: V,
                isAuthenticated: t,
              })
            )
          )
        );
      };
    },
    27: function (e, t, n) {
      'use strict';
      n.d(t, 'd', function () {
        return r;
      }),
        n.d(t, 'e', function () {
          return c;
        }),
        n.d(t, 'b', function () {
          return i;
        }),
        n.d(t, 'f', function () {
          return s;
        }),
        n.d(t, 'g', function () {
          return o;
        }),
        n.d(t, 'a', function () {
          return u;
        }),
        n.d(t, 'c', function () {
          return d;
        });
      var a = n(24);
      function r(e) {
        var t = e.which ? e.which : e.keyCode;
        return !(t > 31 && (t < 48 || t > 57)) || (e.preventDefault(), !1);
      }
      function c(e) {
        var t = e.clipboardData.getData('text/plain');
        return !!/[0-9]/.test(t) || (e.preventDefault(), !1);
      }
      var i = function (e) {
          var t = '';
          switch (null === e || void 0 === e ? void 0 : e.length) {
            case 10:
              t = 'XXX-XXX-XXXX';
              break;
            case 11:
              t = 'XXX-XXXX-XXXX';
              break;
            default:
              t = 'XXX-XXXXXX-XXXXXX';
          }
          for (
            var n = ''.concat(e), a = '', r = 0, c = 0;
            r < t.length && c < n.length;
            r++
          )
            a += 'X' === t[r] ? n.charAt(c++) : t.charAt(r);
          return a;
        },
        s = function (e) {
          var t = '';
          switch (parseInt(e, 10)) {
            case 0:
              t = '\uc2e4\uc99d\ub2e8\uc9c0';
              break;
            case 1:
              t = 'RTU(\ubaa9\uc5c5)';
              break;
            case 2:
              t = '\ud14c\uc2a4\ud2b8(\uc2e4\uc99d\ub2e8\uc9c0)';
              break;
            case 3:
              t = '\ud14c\uc2a4\ud2b8(\ubaa9\uc5c5)';
          }
          return t;
        },
        o = function (e) {
          var t = 0;
          e.map(function (n, a) {
            if (4 === n.length && 2 === t) {
              var r = n.splice(3);
              e.splice(a + 1, 0, r);
            }
            if (4 === n.length && 3 === t) {
              var c = n.splice(2);
              e.splice(a + 1, 0, c);
            }
            if (4 === n.length && 4 === t) {
              var i = n.splice(1);
              e.splice(a + 1, 0, i);
            }
            if (3 === n.length && 3 === t) {
              var s = n.splice(2);
              e.splice(a + 1, 0, s);
            }
            if (3 === n.length && 4 === t) {
              var o = n.splice(1);
              e.splice(a + 1, 0, o);
            }
            if (2 === n.length && 4 === t) {
              var u = n.splice(1);
              e.splice(a + 1, 0, u);
            }
            return (t += n.length), e;
          });
        },
        u = function (e) {
          return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        },
        d = function (e, t) {
          for (var n = 0; n < e.length; n += 1) {
            for (var r, c = [e[n]], i = n + 1; i < e.length; i += 1) {
              var s;
              e[n].comId ===
                (null === (s = e[i]) || void 0 === s ? void 0 : s.comId) &&
                (c = [].concat(Object(a.a)(c), [e[i]]));
            }
            e[n].comId !==
              (null === (r = e[n - 1]) || void 0 === r ? void 0 : r.comId) &&
              t.push(c);
          }
          return t;
        };
    },
    31: function (e, t, n) {
      'use strict';
      var a = n(0),
        r = n.n(a);
      t.a = function () {
        return r.a.createElement(
          'div',
          { className: 'wrapper-loader' },
          r.a.createElement('div', { className: 'loader' }, ' ')
        );
      };
    },
    4: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return r;
      }),
        n.d(t, 'a', function () {
          return c;
        });
      var a = n(74),
        r = {
          SIGN_IN: '/auth/login',
          SIGN_UP: '/auth/register',
          API_GET_LIST_COMPANY: '/company',
          API_GET_LIST_POSITION: '/position',
          API_GET_LIST_DEVICE: '/device',
          UPDATE_DEVICE: function (e) {
            return 'device/'.concat(e);
          },
          GET_POS: '/position',
          ACCOUNTS: '/account',
          UPDATE_ACCOUNT: function (e) {
            return 'account/'.concat(e);
          },
          GET_DASHBOARD_TEST_MOCKUP: '/data/test-mockup/cards',
          GET_DASHBOARD_TEST_SOLAR: 'data/test-solar-monitoring/cards',
          GET_DASHBOARD: 'data/solar-monitoring/cards',
          GET_EVENT_LIST: '/event',
          DELETE_EVENT: function (e) {
            return '/event/'.concat(e);
          },
          UPDATE_EVENT: function (e) {
            return '/event/'.concat(e);
          },
          STATUS_OPERATOR_CHART:
            '/data/solar-monitoring/status-generator/chart-data',
        },
        c = Object(a.create)({ baseURL: 'http://52.220.208.178:8081/api/v1/' });
    },
    53: function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return u;
      }),
        n.d(t, 'c', function () {
          return d;
        });
      var a = n(10),
        r = n(23),
        c = {
          menuClicking: {
            id: 1,
            name: '\ub300\uc2dc\ubcf4\ub4dc',
            sub: [
              {
                id: 1,
                name: '\ud1b5\ud569 \ub300\uc2dc\ubcf4\ub4dc',
                to: r.a.ROOT,
              },
              {
                id: 2,
                name: '\uad6c\uc5ed \ub300\uc2dc\ubcf4\ub4dc',
                to: r.a.DASHBOARD_AREA,
              },
              {
                id: 3,
                name: '\uc5c5\uccb4 \ub300\uc2dc\ubcf4\ub4dc',
                to: r.a.DASHBOARD_COMPANY,
              },
            ],
          },
          subMenuClicking: {
            id: 1,
            name: '\ud1b5\ud569 \ub300\uc2dc\ubcf4\ub4dc',
            to: r.a.ROOT,
          },
        },
        i = Object(a.b)({
          name: 'commons',
          initialState: c,
          reducers: {
            setMenuClicking: function (e, t) {
              (e.type = t.type), (e.menuClicking = t.payload);
            },
            setNestSubClicking: function (e, t) {
              (e.type = t.type), (e.subMenuClicking = t.payload);
            },
          },
        }),
        s = i.actions,
        o = i.reducer,
        u = s.setMenuClicking,
        d = s.setNestSubClicking;
      t.a = o;
    },
    55: function (e, t, n) {
      'use strict';
      n.d(t, 'd', function () {
        return o;
      }),
        n.d(t, 'e', function () {
          return u;
        }),
        n.d(t, 'f', function () {
          return d;
        }),
        n.d(t, 'c', function () {
          return p;
        }),
        n.d(t, 'h', function () {
          return l;
        }),
        n.d(t, 'a', function () {
          return v;
        }),
        n.d(t, 'g', function () {
          return f;
        });
      var a = n(10),
        r = n(27),
        c = Object(a.b)({
          name: 'device',
          initialState: {
            isLoading: !1,
            companyOptions: [],
            deviceList: [],
            posOptionList: [],
            perPage: 0,
            totalPage: 0,
            deviceDetail: {},
            dataAddNew: [],
            errorsAddDevice: {},
          },
          reducers: {
            getListCompany: function (e, t) {
              (e.isLoading = !0), (e.type = t.type);
            },
            getListCompanySuccess: function (e, t) {
              var n,
                a =
                  null === t ||
                  void 0 === t ||
                  null === (n = t.data) ||
                  void 0 === n
                    ? void 0
                    : n.map(function (e) {
                        return { value: e.id, label: e.com_name };
                      });
              (e.isLoading = !1), (e.companyOptions = a), (e.type = t.type);
            },
            getListCompanyFailed: function (e, t) {
              (e.isLoading = !1), (e.type = t.type);
            },
            getListPosition: function (e, t) {
              (e.isLoading = !0), (e.type = t.type);
            },
            getListPositionSuccess: function (e, t) {
              var n,
                a =
                  null === t ||
                  void 0 === t ||
                  null === (n = t.data) ||
                  void 0 === n
                    ? void 0
                    : n.map(function (e) {
                        return { value: e.id, label: e.pos_name };
                      });
              (e.isLoading = !1), (e.posOptionList = a);
            },
            getListPositionFailed: function (e) {
              e.isLoading = !1;
            },
            getListDevice: function (e) {
              e.isLoading = !0;
            },
            getListDeviceSuccess: function (e, t) {
              var n,
                a,
                c,
                i,
                s =
                  null === t ||
                  void 0 === t ||
                  null === (n = t.data) ||
                  void 0 === n ||
                  null === (a = n.data) ||
                  void 0 === a
                    ? void 0
                    : a.map(function (e, n) {
                        var a, c, i, s;
                        return {
                          rowId:
                            ''.concat(
                              t.data.total -
                                ((null === t ||
                                void 0 === t ||
                                null === (a = t.data) ||
                                void 0 === a
                                  ? void 0
                                  : a.current_page) -
                                  1) *
                                  (null === t ||
                                  void 0 === t ||
                                  null === (c = t.data) ||
                                  void 0 === c
                                    ? void 0
                                    : c.total) -
                                n
                            ) || '',
                          dateSetup: e.ds_install_date,
                          companyName:
                            null === e ||
                            void 0 === e ||
                            null === (i = e.company) ||
                            void 0 === i
                              ? void 0
                              : i.com_name,
                          dsType: Object(r.f)(
                            null === e || void 0 === e ? void 0 : e.ds_type
                          ),
                          position:
                            null === e ||
                            void 0 === e ||
                            null === (s = e.position) ||
                            void 0 === s
                              ? void 0
                              : s.pos_name,
                          moduleName:
                            null === e || void 0 === e ? void 0 : e.ds_name,
                          dsManager: ''
                            .concat(
                              null === e || void 0 === e
                                ? void 0
                                : e.ds_manager,
                              ' / '
                            )
                            .concat(
                              Object(r.b)(
                                null === e || void 0 === e
                                  ? void 0
                                  : e.ds_manager_phone
                              )
                            ),
                          id: null === e || void 0 === e ? void 0 : e.id,
                        };
                      });
              (e.isLoading = !1),
                (e.deviceList = s),
                (e.perPage =
                  null === t ||
                  void 0 === t ||
                  null === (c = t.data) ||
                  void 0 === c
                    ? void 0
                    : c.per_page),
                (e.totalPage =
                  null === t ||
                  void 0 === t ||
                  null === (i = t.data) ||
                  void 0 === i
                    ? void 0
                    : i.total),
                (e.type = t.type);
            },
            getListDeviceFailed: function (e, t) {
              (e.isLoading = !1), (e.type = t.type);
            },
            getDeivceDetail: function (e, t) {
              (e.isLoading = !0), (e.type = t.type);
            },
            getDeivceDetailSuccess: function (e, t) {
              (e.isLoading = !1), (e.deviceDetail = t.data), (e.type = t.type);
            },
            getDeivceDetailFailed: function (e, t) {
              (e.isLoading = !1), (e.type = t.type);
            },
            updateDevice: function (e, t) {
              (e.isLoading = !0), (e.type = t.type);
            },
            updateDeviceSuccess: function (e, t) {
              (e.isLoading = !1), (e.type = t.type);
            },
            updateDeviceFailed: function (e, t) {
              (e.isLoading = !1), (e.type = t.type);
            },
            addDevice: function (e, t) {
              (e.isLoading = !0), (e.type = t.type);
            },
            addDeviceSuccess: function (e, t) {
              var n;
              (e.isLoading = !1),
                (e.dataAddNew =
                  null === t ||
                  void 0 === t ||
                  null === (n = t.data) ||
                  void 0 === n
                    ? void 0
                    : n.data),
                (e.type = t.type);
            },
            addDeviceFailed: function (e, t) {
              (e.isLoading = !1),
                (e.type = t.type),
                (e.errorsAddDevice = t.errors);
            },
            resetDeviceType: function (e) {
              e.type = '';
            },
          },
        }),
        i = c.actions,
        s = c.reducer,
        o = i.getListCompany,
        u = (i.getListCompanySuccess, i.getListCompanyFailed, i.getListDevice),
        d = (i.getListDeviceSuccess, i.getListDeviceFailed, i.getListPosition),
        p =
          (i.getListPositionSuccess,
          i.getListPositionFailed,
          i.getDeivceDetail),
        l = (i.getDeivceDetailSuccess, i.getDeivceDetailFailed, i.updateDevice),
        v = (i.updateDeviceSuccess, i.updateDeviceFailed, i.addDevice),
        f = (i.addDeviceSuccess, i.addDeviceFailed, i.resetDeviceType);
      t.b = s;
    },
    56: function (e, t, n) {
      'use strict';
      n.d(t, 'e', function () {
        return o;
      }),
        n.d(t, 'd', function () {
          return u;
        }),
        n.d(t, 'c', function () {
          return d;
        }),
        n.d(t, 'a', function () {
          return p;
        }),
        n.d(t, 'f', function () {
          return l;
        });
      var a = n(24),
        r = n(10),
        c = Object(r.b)({
          name: 'operationStatus',
          initialState: {
            isLoading: !1,
            total: 0,
            eventList: [],
            deviceList: [],
          },
          reducers: {
            getListOperationStatus: function (e, t) {
              e.type = t.type;
            },
            getListDevice: function (e) {
              e.isProcessing = !0;
            },
            getListDeviceSuccess: function (e, t) {
              (e.isProcessing = !1),
                (e.deviceList =
                  t.data && t.data && t.data.length > 1
                    ? [{ ds_name: '\uc804\uccb4', id: 0 }].concat(
                        Object(a.a)(t.data)
                      )
                    : t.data),
                (e.type = t.type);
            },
            getListDeviceFailed: function (e, t) {
              (e.isProcessing = !1), (e.type = t.type);
            },
            getEventList: function (e, t) {
              (e.isProcessing = !0), (e.type = t.type);
            },
            getEventListSuccess: function (e, t) {
              (e.isProcessing = !1),
                (e.type = t.type),
                (e.eventList = t.data),
                (e.totalEventPage =
                  null === t || void 0 === t ? void 0 : t.total),
                (e.perpageEvent =
                  null === t || void 0 === t ? void 0 : t.perPage);
            },
            getEventListFailed: function (e, t) {
              (e.isProcessing = !1), (e.type = t.type);
            },
            deleteEvent: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            deleteEventSuccess: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            deleteEventFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            addNewEvent: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            addNewEventSuccess: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            addNewEventFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            updateEvent: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            updateEventSuccess: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1);
            },
            updateEventFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1);
            },
          },
        }),
        i = c.actions,
        s = c.reducer,
        o = (i.getListOperationStatus, i.getListDevice),
        u = (i.getListDeviceSuccess, i.getListDeviceFailed, i.getEventList),
        d = (i.getEventListSuccess, i.getEventListFailed, i.deleteEvent),
        p = (i.deleteEventSuccess, i.deleteEventFailed, i.addNewEvent),
        l = (i.addNewEventSuccess, i.addNewEventFailed, i.updateEvent);
      i.updateEventSuccess, i.updateEventFailed;
      t.b = s;
    },
    7: function (e, t, n) {
      'use strict';
      t.a = {
        ROOT: '/',
        DASHBOARD_AREA: '/dashboard-area',
        DASHBOARD_COMPANY: '/dashboard-company',
        LOGIN: '/login',
        DEVICE: '/devices',
        STORES: '/stores',
        STORES_DETAIL: '/stores/:id',
        REGISTER_DEVICE: '/devices/register',
        DEVICE_DETAIL: '/devices/:id',
        STATUS_COMPANY: '/status/company-development',
        STATUS_COMPANY_BY_AREA: '/status/company-by-area',
        OPERATION_STATUS_BY_COMPANY: '/operation/status-by-company',
        OPERATION_STATUS_BY_AREA: '/operation/status-by-area',
        OPERATION_STATUS_BY_COMPANY_DETAIL: '/operation/status-by-company/:id',
        OPERATION_STATUS_BY_COMPANY_REGISTER:
          '/operation/status-by-company/register',
        OPERATION_STATUS_BY_COMPANY_UPDATE:
          '/operation/status-by-company/update/:id',
        TEST_DASHBOARD: '/test/dashboard',
        SOLAR_DASHBOARD: '/solar/dashboard',
        OPERATION_STATUS_BY_COMPANY_EDIT:
          '/operation/status-by-company/edit/:id',
        ACCOUNT_MANAGEMENT: '/accounts',
        ACCOUNT_MANAGEMENT_DETAIL: '/accounts/detail/:id',
        ACCOUNT_MANAGEMENT_EDIT: '/accounts/edit/:id',
        STATISTICS_DEVELOP: '/statistics/develop/develop-by-company',
        STATISTICS_DEVELOP_AREA: '/statistics/develop/develop-by-area',
        OPERATION_STATISTICS_COMPANY:
          '/statistics/operation/operation-by-company',
        OPERATION_STATISTICS_AREA: '/statistics/operation/operation-by-area',
        TEST_MOCKUP_STATUS: '/test/mockup/status-of-development',
        TEST_MOCKUP_OPERATION: '/test/mockup/operation-status',
        TEST_MOCKUP_OPERATION_STATUS_DETAIL:
          '/test/mockup/operation-status/:id',
        TEST_MOCKUP_OPERATION_STATUS_REGISTER:
          '/test/mockup/operation-status/register',
        TEST_MOCKUP_OPERATION_STATUS_EDIT:
          '/test/mockup/operation-status/edit/:id',
        TEST_MOCKUP_STATISTICS_DEVELOP:
          '/test/mockup/statistics/development-statistics',
        TEST_MOCKUP_STATISTICS_OPERATION:
          '/test/mockup/statistics/operation-statistics',
        TEST_SOLAR_STATUS_DEVELOP: '/test/solar-monitoring/status-development',
        TEST_SOLAR_STATUS_OPERATION: '/test/solar-monitoring/status-operation',
        TEST_SOLAR_STATISTICS_DEVELOP:
          '/test/solar-monitoring/statistics/development-statistics',
        TEST_SOLAR_STATISTICS_OPERATION:
          '/test/solar-monitoring/statistics/operation-statistics',
      };
    },
    81: function (e, t, n) {
      e.exports = n(164);
    },
    86: function (e, t, n) {},
    89: function (e, t, n) {},
    9: function (e, t, n) {
      'use strict';
      n.d(t, 'p', function () {
        return d;
      }),
        n.d(t, 'r', function () {
          return p;
        }),
        n.d(t, 'q', function () {
          return l;
        }),
        n.d(t, 's', function () {
          return v;
        }),
        n.d(t, 'u', function () {
          return f;
        }),
        n.d(t, 't', function () {
          return b;
        }),
        n.d(t, 'i', function () {
          return m;
        }),
        n.d(t, 'k', function () {
          return y;
        }),
        n.d(t, 'j', function () {
          return O;
        }),
        n.d(t, 'f', function () {
          return g;
        }),
        n.d(t, 'h', function () {
          return S;
        }),
        n.d(t, 'g', function () {
          return T;
        }),
        n.d(t, 'l', function () {
          return E;
        }),
        n.d(t, 'n', function () {
          return _;
        }),
        n.d(t, 'm', function () {
          return x;
        }),
        n.d(t, 'c', function () {
          return A;
        }),
        n.d(t, 'd', function () {
          return h;
        }),
        n.d(t, 'e', function () {
          return P;
        }),
        n.d(t, 'v', function () {
          return L;
        }),
        n.d(t, 'o', function () {
          return D;
        }),
        n.d(t, 'b', function () {
          return k;
        });
      var a = n(10),
        r = n(37),
        c = n.n(r),
        i = n(27),
        s = Object(a.b)({
          name: 'accounts',
          initialState: {
            userInfo: {},
            isProcessing: !1,
            type: '',
            token: '',
            statusCode: null,
            dataLogin: {},
            errorMessage: '',
            listCompany: [],
            listArea: [],
            listInverter: [],
            accountList: [],
            accountDetail: {},
            errors: {},
          },
          reducers: {
            signInRequest: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            signInRequestSuccess: function (e, t) {
              var n = t.data;
              (e.type = t.type),
                (e.isProcessing = !1),
                (e.token =
                  null === n || void 0 === n ? void 0 : n.access_token),
                (e.userInfo =
                  null === n || void 0 === n ? void 0 : n.user_data),
                (e.errorMsg = '');
            },
            signInRequestFailed: function (e, t) {
              (e.type = t.type),
                (e.isProcessing = !1),
                (e.errorMsg =
                  (null === t || void 0 === t ? void 0 : t.errorMsg) || '');
            },
            getListCompany: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            getListCompanySuccess: function (e, t) {
              var n = t.data,
                a =
                  n &&
                  n.map(function (e) {
                    return { id: e.id, value: e.id, label: e.com_name };
                  });
              (e.listCompany = a || []),
                (e.type = t.type),
                (e.isProcessing = !1);
            },
            getListCompanyFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1), (e.listCompany = []);
            },
            getListArea: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            getListAreaSuccess: function (e, t) {
              var n = t.data,
                a =
                  n &&
                  n.map(function (e) {
                    return { id: e.id, value: e.id, label: e.pos_name };
                  });
              (e.listArea = a || []), (e.type = t.type), (e.isProcessing = !1);
            },
            getListAreaFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1), (e.listArea = []);
            },
            getListInverter: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            getListInverterSuccess: function (e, t) {
              var n = t.data.data;
              (e.type = t.type), (e.isProcessing = !1);
              var a =
                n &&
                n.map(function (e) {
                  return { id: e.id, value: e.id, label: e.ds_name };
                });
              (e.listInverter = a || []),
                (e.type = t.type),
                (e.isProcessing = !1);
            },
            getListInverterFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1), (e.listInverter = []);
            },
            signUpRequest: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            signUpRequestSuccess: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1);
            },
            signUpRequestFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1);
            },
            getAccountList: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            getAccountListSuccess: function (e, t) {
              var n, a, r;
              t.isDetail
                ? (e.accountDetail =
                    null === t || void 0 === t ? void 0 : t.data)
                : (e.accountList =
                    null === t ||
                    void 0 === t ||
                    null === (r = t.data) ||
                    void 0 === r
                      ? void 0
                      : r.data.map(function (e) {
                          var t;
                          return {
                            no: e.id,
                            dateCreate: c()(
                              null === e || void 0 === e ? void 0 : e.created_at
                            ).format('YYYY-MM-DD'),
                            roleName:
                              null === e ||
                              void 0 === e ||
                              null === (t = e.roles[0]) ||
                              void 0 === t
                                ? void 0
                                : t.display_name,
                            username:
                              null === e || void 0 === e ? void 0 : e.username,
                            email:
                              null === e || void 0 === e ? void 0 : e.email,
                            name: null === e || void 0 === e ? void 0 : e.name,
                            phone:
                              (null === e || void 0 === e ? void 0 : e.phone) &&
                              Object(i.b)(
                                null === e || void 0 === e ? void 0 : e.phone
                              ),
                          };
                        }));
              (e.type = t.type),
                (e.isProcessing = !1),
                (e.perPage =
                  null === t ||
                  void 0 === t ||
                  null === (n = t.data) ||
                  void 0 === n
                    ? void 0
                    : n.per_page),
                (e.totalPage =
                  null === t ||
                  void 0 === t ||
                  null === (a = t.data) ||
                  void 0 === a
                    ? void 0
                    : a.total),
                (e.type = t.type);
            },
            getAccountListFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1);
            },
            updateAccount: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            updateAccountSuccess: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1);
            },
            updateAccountFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1), (e.errors = t.errors);
            },
            deleteAccount: function (e, t) {
              (e.type = t.type), (e.isProcessing = !0);
            },
            deleteAccountSuccess: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1);
            },
            deleteAccountFailed: function (e, t) {
              (e.type = t.type), (e.isProcessing = !1), (e.errors = t.errors);
            },
            resetAccountType: function (e) {
              e.type = '';
            },
          },
        }),
        o = s.actions,
        u = s.reducer,
        d = o.signInRequest,
        p = o.signInRequestSuccess,
        l = o.signInRequestFailed,
        v = o.signUpRequest,
        f = o.signUpRequestSuccess,
        b = o.signUpRequestFailed,
        m = o.getListCompany,
        y = o.getListCompanySuccess,
        O = o.getListCompanyFailed,
        g = o.getListArea,
        S = o.getListAreaSuccess,
        T = o.getListAreaFailed,
        E = o.getListInverter,
        _ = o.getListInverterSuccess,
        x = o.getListInverterFailed,
        A = o.getAccountList,
        h = o.getAccountListFailed,
        P = o.getAccountListSuccess,
        L = o.updateAccount,
        D = (o.updateAccountFailed, o.updateAccountSuccess, o.resetAccountType),
        k = o.deleteAccount;
      o.deleteAccountFailed, o.deleteAccountSuccess;
      t.a = u;
    },
  },
  [[81, 11, 12]],
]);
//# sourceMappingURL=main.54464ed6.chunk.js.map
