import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user: defineTable({
    userId: v.string(),
    email: v.string(),
    firstName: v.string(),
    lastName: v.string(),

    favMovies: v.array(v.number()),
    favSeries: v.array(v.number()),
    favActors: v.array(v.number()),

    imageId: v.optional(v.string()),
    username: v.optional(v.string()),

    sentFriendRequests: v.optional(v.array(v.id("user"))),
    receivedFriendRequests: v.optional(v.array(v.id("user"))),
    friends: v.optional(v.array(v.id("user"))),

    mySearchField: v.optional(v.string()),
  }).searchIndex("search_people", {
    searchField: "mySearchField",
  }),
});
