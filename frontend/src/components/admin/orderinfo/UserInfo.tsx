import { Stack } from '@mui/material';

function UserInfo() {
    return (
        <div className='paper'>      
            <div className='font-18-bold'>お客様情報</div>
            <hr />
            <Stack spacing={2}>
                <div>
                    <label className='font-14-bold label-color'>名前</label>
                    <div className='font-16-medium'>松浦 克彦</div>
                </div>
                <div>
                    <label className='font-14-bold label-color'>性別</label>
                    <div className='font-16-medium'>女性</div>
                </div>
                <div>
                    <label className='font-14-bold label-color'>電話番号</label>
                    <div className='font-16-medium'>000-0000-0000</div>
                </div>
                <div>
                    <label className='font-14-bold label-color'>メールアドレス</label>
                    <div className='font-16-medium'>aaa@gmail.com</div>
                </div>
                <div>
                    <label className='font-14-bold label-color'>年齢</label>
                    <div className='font-16-medium'>23</div>
                </div>
                <div>
                    <label className='font-14-bold label-color'>住所</label>
                    <div className='font-16-medium'>000-0000</div>
                    <div className='font-16-medium'>名古屋市なんとか</div>
                </div>
            </Stack>
        </div>
    )
}

export default UserInfo;