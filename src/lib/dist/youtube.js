"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.fetchYouTubePlaylistVideos = void 0;
var API_BASE = "https://www.googleapis.com/youtube/v3";
function formatDuration(isoDuration) {
    var match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) {
        return "00:00";
    }
    var _a = match[1], hours = _a === void 0 ? "0" : _a, _b = match[2], minutes = _b === void 0 ? "0" : _b, _c = match[3], seconds = _c === void 0 ? "0" : _c;
    var h = Number(hours);
    var m = Number(minutes);
    var s = Number(seconds);
    var parts = [];
    if (h > 0) {
        parts.push(String(h));
        parts.push(String(m).padStart(2, "0"));
    }
    else {
        parts.push(String(m));
    }
    parts.push(String(s).padStart(2, "0"));
    return parts.join(":");
}
function pickThumbnail(thumbnails) {
    var _a, _b, _c, _d, _e;
    return (((_a = thumbnails === null || thumbnails === void 0 ? void 0 : thumbnails.maxres) === null || _a === void 0 ? void 0 : _a.url) || ((_b = thumbnails === null || thumbnails === void 0 ? void 0 : thumbnails.standard) === null || _b === void 0 ? void 0 : _b.url) || ((_c = thumbnails === null || thumbnails === void 0 ? void 0 : thumbnails.high) === null || _c === void 0 ? void 0 : _c.url) || ((_d = thumbnails === null || thumbnails === void 0 ? void 0 : thumbnails.medium) === null || _d === void 0 ? void 0 : _d.url) || ((_e = thumbnails === null || thumbnails === void 0 ? void 0 : thumbnails["default"]) === null || _e === void 0 ? void 0 : _e.url) ||
        "");
}
function getUploadsPlaylistId(apiKey, channelId) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var channelUrl, channelResponse, body, channelData, uploadsPlaylistId;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    channelUrl = new URL(API_BASE + "/channels");
                    channelUrl.searchParams.set("part", "contentDetails");
                    channelUrl.searchParams.set("id", channelId);
                    channelUrl.searchParams.set("key", apiKey);
                    return [4 /*yield*/, fetch(channelUrl.toString())];
                case 1:
                    channelResponse = _e.sent();
                    if (!!channelResponse.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, channelResponse.text()];
                case 2:
                    body = _e.sent();
                    throw new Error("YouTube channel lookup failed: " + channelResponse.status + " " + channelResponse.statusText + " " + body);
                case 3: return [4 /*yield*/, channelResponse.json()];
                case 4:
                    channelData = _e.sent();
                    uploadsPlaylistId = (_d = (_c = (_b = (_a = channelData.items) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.contentDetails) === null || _c === void 0 ? void 0 : _c.relatedPlaylists) === null || _d === void 0 ? void 0 : _d.uploads;
                    if (!uploadsPlaylistId) {
                        throw new Error("The provided channel does not expose an uploads playlist.");
                    }
                    return [2 /*return*/, uploadsPlaylistId];
            }
        });
    });
}
function fetchYouTubePlaylistVideos(apiKey, sourceId, maxResults, sourceType) {
    var _a;
    if (maxResults === void 0) { maxResults = 12; }
    if (sourceType === void 0) { sourceType = "playlist"; }
    return __awaiter(this, void 0, Promise, function () {
        var playlistId, _b, playlistUrl, playlistResponse, body, playlistData, videoIds, videosUrl, videoResponse, body, videoData;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(sourceType === "channel")) return [3 /*break*/, 2];
                    return [4 /*yield*/, getUploadsPlaylistId(apiKey, sourceId)];
                case 1:
                    _b = _c.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _b = sourceId;
                    _c.label = 3;
                case 3:
                    playlistId = _b;
                    playlistUrl = new URL(API_BASE + "/playlistItems");
                    playlistUrl.searchParams.set("part", "snippet");
                    playlistUrl.searchParams.set("playlistId", playlistId);
                    playlistUrl.searchParams.set("maxResults", String(maxResults));
                    playlistUrl.searchParams.set("key", apiKey);
                    return [4 /*yield*/, fetch(playlistUrl.toString())];
                case 4:
                    playlistResponse = _c.sent();
                    if (!!playlistResponse.ok) return [3 /*break*/, 6];
                    return [4 /*yield*/, playlistResponse.text()];
                case 5:
                    body = _c.sent();
                    throw new Error("YouTube playlist fetch failed: " + playlistResponse.status + " " + playlistResponse.statusText + " " + body);
                case 6: return [4 /*yield*/, playlistResponse.json()];
                case 7:
                    playlistData = _c.sent();
                    videoIds = (_a = playlistData.items) === null || _a === void 0 ? void 0 : _a.map(function (item) { var _a, _b; return (_b = (_a = item.snippet) === null || _a === void 0 ? void 0 : _a.resourceId) === null || _b === void 0 ? void 0 : _b.videoId; }).filter(Boolean);
                    if (!(videoIds === null || videoIds === void 0 ? void 0 : videoIds.length)) {
                        return [2 /*return*/, []];
                    }
                    videosUrl = new URL(API_BASE + "/videos");
                    videosUrl.searchParams.set("part", "snippet,contentDetails,statistics");
                    videosUrl.searchParams.set("id", videoIds.join(","));
                    videosUrl.searchParams.set("key", apiKey);
                    return [4 /*yield*/, fetch(videosUrl.toString())];
                case 8:
                    videoResponse = _c.sent();
                    if (!!videoResponse.ok) return [3 /*break*/, 10];
                    return [4 /*yield*/, videoResponse.text()];
                case 9:
                    body = _c.sent();
                    throw new Error("YouTube video details fetch failed: " + videoResponse.status + " " + videoResponse.statusText + " " + body);
                case 10: return [4 /*yield*/, videoResponse.json()];
                case 11:
                    videoData = _c.sent();
                    return [2 /*return*/, videoData.items.map(function (item) {
                            var _a;
                            return ({
                                id: item.id,
                                title: item.snippet.title,
                                description: item.snippet.description,
                                publishedAt: item.snippet.publishedAt,
                                channelTitle: item.snippet.channelTitle,
                                thumb: pickThumbnail(item.snippet.thumbnails),
                                duration: formatDuration(item.contentDetails.duration),
                                viewCount: (_a = item.statistics) === null || _a === void 0 ? void 0 : _a.viewCount,
                                videoUrl: "https://youtu.be/" + item.id
                            });
                        })];
            }
        });
    });
}
exports.fetchYouTubePlaylistVideos = fetchYouTubePlaylistVideos;
