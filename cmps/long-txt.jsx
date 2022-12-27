
export function LongTxt({ txt, length = 100, isReadMore }) {

    function returnDescNum() {
        if (txt.length > length && isReadMore) {
            return txt.slice(0, length)
        } else {
            return txt
        }
    }

    return <h4 className="preview-description">
        {returnDescNum() + ' '}
    </h4>
}