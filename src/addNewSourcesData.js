function addNewSourcesData(memory) {
  _.each(Game.rooms, room => {
    if (memory.sources[room.name]) {
      return;
    }
    const sources = room.find(FIND_SOURCES);
    _.each(sources, source => {
      memory.sources[room.name][source.id] = getSourceData(source);
    });
  });
}
