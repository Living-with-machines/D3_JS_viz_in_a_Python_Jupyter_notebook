define('viz', ['d3'], function (d3) {
    function draw(container) {
        d3.select(container).append("svg").append('rect').attr('id', 'viz_rect').attr('width', 50).attr('height', 50);
    }
    return draw;
});
element.append('Loaded 😄 ');