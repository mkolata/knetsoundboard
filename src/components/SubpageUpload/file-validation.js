

class FileValidation {

    validate(file) {

        var reader = new FileReader();

        reader.onload = function (event) {

            var audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.decodeAudioData(event.target.result, function (buffer) {

                if (buffer.duration > 0 && buffer.duration < 90) {
                    return '0';
                } else {
                    return '2';
                }
            });
        };

        reader.onerror = function (event) {
            return '1';
        };

        reader.readAsArrayBuffer(file);
    }
}
export default new FileValidation();